"use client";

import React, { useState } from "react";
import ReCaptcha from "./reCaptcha";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [resetRecaptcha, setResetRecaptcha] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!recaptchaToken) {
      alert("Please verify that you are not a robot");
      return;
    }

    const formData = {
      name,
      email,
      reason,
      message,
      recaptchaToken,
    };

    // Send form data to API route
    const response = await fetch("../api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Form submitted successfully");
      setName("");
      setEmail("");
      setReason("");
      setMessage("");
      setRecaptchaToken(null);
      setResetRecaptcha(true);

      setTimeout(() => setResetRecaptcha(false), 500);
    } else {
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="p-3 rounded border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="p-3 rounded border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        required
        className="p-3 rounded border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="" disabled>Select Reason for Contact</option>
        <option value="Recording">Recording</option>
        <option value="Subbing">Subbing</option>
        <option value="Lessons">Lessons</option>
        <option value="Feedback">Feedback</option>
        <option value="Other">Other</option>
      </select>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        className="p-3 rounded border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
      <ReCaptcha onTokenChange={setRecaptchaToken} reset={resetRecaptcha} />
      <button 
        type="submit" 
        className="p-2 border rounded bg-white w-20 text-black font-semibold hover:bg-black hover:text-white transition duration-300"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
