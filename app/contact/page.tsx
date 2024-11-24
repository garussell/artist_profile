import React from 'react'
import ContactForm from '@/components/contactForm'

export default function Contact() {
  return (
    <div>
      {/* Marquee Section */}
      <section className="relative flex w-full mt-20 overflow-hidden">
        <div className="flex w-full animate-marquee whitespace-nowrap gap-40 sm:animate-marquee-mobile">
          <p className="text-8xl font-bold text-black dark:text-white mx-4">GET IN TOUCH!</p>
          <p className="text-8xl font-bold text-black dark:text-white mx-4">GET IN TOUCH!</p>
        </div>
        <div className="flex w-full animate-marquee whitespace-nowrap ml-40 gap-40 sm:hidden">
          <p className="text-8xl font-bold text-black dark:text-white mx-4">GET IN TOUCH!</p>
          <p className="text-8xl font-bold text-black dark:text-white mx-4">GET IN TOUCH!</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="flex flex-col lg:flex-row justify-between items-center w-full h-screen bg-background p-8">
        {/* Left Column - Call to Action */}
        <div className="flex flex-col space-y-6 w-full md:w-1/3 px-4 ml-20 sm:ml-0 sm:px-0">
          <h6 className="text-lg leading-relaxed">
            If you are ready to start your next project or have any other professional interest in my services, let&apos;s connect!
          </h6>
          <h6 className="text-lg leading-relaxed">
            For website development, please{" "}
            <a
              href="https://www.fiverr.com/allenrusselldev/build-your-website-to-be-intuitive-and-cost-effective"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              book a gig on Fiverr
            </a>
            . For any other questions or inquiries, feel free to send me a message here.
          </h6>
          <h6 className="text-lg leading-relaxed">
            I am open for new contract work and/or to discuss future employment opportunities.
          </h6>
        </div>

        {/* Right Column - Contact Form */}
        <div className="flex flex-col w-full md:w-1/2 p-8 rounded-md shadow-lg">
          <ContactForm />
        </div>
      </section>
    </div>
  )
}
