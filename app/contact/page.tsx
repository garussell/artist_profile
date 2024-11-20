import React from 'react'
import ContactForm from '@/components/contactForm'

export default function Contact() {
  return (
    <div>
      <section className="relative flex w-full mt-20 overflow-hidden">
        <div className="flex w-full animate-marquee whitespace-nowrap gap-40">
          <p className="text-8xl font-bold text-white mx-4">GET IN TOUCH!</p>
          <p className="text-8xl font-bold text-white mx-4">GET IN TOUCH!</p>
        </div>
        <div className="flex w-full animate-marquee whitespace-nowrap ml-40 gap-40">
          <p className="text-8xl font-bold text-white mx-4">GET IN TOUCH!</p>
          <p className="text-8xl font-bold text-white mx-4">GET IN TOUCH!</p>
        </div>
      </section>
      <section className="flex flex-col md:flex-row justify-between items-center w-full h-screen bg-background p-8">
        <div className="flex flex-col space-y-6 w-full px-40">
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
        <div className="flex flex-col w-full p-8 rounded-md shadow-lg">
          <ContactForm />
        </div>
      </section>
    </div>
  )
}