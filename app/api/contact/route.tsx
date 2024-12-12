import nodemailer from "nodemailer";

function validateEmail(email: string) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export async function POST(req: Request) {
  try {
    // Parse the incoming request body sent from contactForm.tsx
    const { name, email, reason, message, recaptchaToken } = await req.json();

    if (!name || !email || !reason || !message || !recaptchaToken) {
      return new Response(JSON.stringify({ message: "Please fill out all fields" }), { status: 400 });
    }

    if (!validateEmail(email)) {
      return new Response(JSON.stringify({ message: "Please enter a valid email address" }), { status: 400 });
    }

    // Verify the reCAPTCHA token
    const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecretKey}&response=${recaptchaToken}`;

    const recaptchaResponse = await fetch(verificationUrl, { method: "POST" });
    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      return new Response(JSON.stringify({ message: "Failed reCAPTCHA verification" }), { status: 400 });
    }

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      service: "Gmail", 
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    // Email message configuration
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL, 
      subject: `Contact Form Submission: ${reason}`,
      text: `
        Name: ${name}
        Email: ${email}
        Reason: ${reason}
        Message: ${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return a success response
    return new Response(JSON.stringify({ message: "Form submitted successfully" }), { status: 200 });
  } catch (error) {
    console.error("Error sending email", error);
    return new Response(JSON.stringify({ message: "Error submitting form" }), { status: 500 });
  }
}
