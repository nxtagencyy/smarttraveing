"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_0nwwkgk",
        "template_flt75bf",
        formRef.current,
        "FogiT6XVQp58xxl2h"
      );

      setSubmitted(true);
    } catch (error) {
      console.error("EmailJS Error:", error);
    }
  };

  return (
    <div className="flex max-md:flex-col lg:pt-20 pb-16 lg:pb-32">
      <div className="md:flex-1 hidden lg:block">
        <Image
          width={1000}
          height={1000}
          src="/contact.jpg"
          alt="contact"
          className="w-full h-screen object-cover"
        />
      </div>

      <div className="py-12 md:flex-1 lg:flex lg:justify-center lg:h-screen">
        <div className="max-w-lg flex-1 mx-auto px-4 text-gray-600">
          <div>
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Get in touch
            </h3>
            <p className="mt-3">
              We&#8217;d love to hear from you! Please fill out the form below.
            </p>
          </div>

          {submitted ? (
            <p className="text-green-600 font-semibold mt-12">
              Thank you for contacting us! We will get back to you soon.
            </p>
          ) : (
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-5 mt-12 lg:pb-12"
            >
              <div>
                <label className="font-medium">Full name *</label>
                <input
                  type="text"
                  name="first_name"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Phone number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full pl-3 pr-3 py-2 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Message *</label>
                <textarea
                  name="city"
                  required
                  className="w-full mt-2 h-36 px-3 py-2 resize-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
