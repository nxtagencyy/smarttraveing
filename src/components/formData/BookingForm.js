"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const BookingForm = ({ title }) => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const updatesOptin = formData.get("updates_optin") ? "Yes" : "No";

    const data = {
      journey_title: title,
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      email: formData.get("email"),
      city: formData.get("city"),
      phone: formData.get("phone"),
      updates_optin: updatesOptin,
    };

    try {
      // EmailJS
      await emailjs.sendForm(
        "service_0nwwkgk",
        "template_flt75bf",
        form.current,
        "FogiT6XVQp58xxl2h"
      );

      // Google Sheets
      await fetch(
        "https://script.google.com/macros/s/AKfycbxU_4qP-V0kCNQfkv52_rqW__pjEjBNRj5RG8M7Xobq6u6PDhgJ90QAoso3srpj5ra60Q/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      setSubmitted(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-white shadow-md rounded p-6 mt-10">
      <h2 className="text-2xl font-bold mb-4 text-[#002248]">
        Fill in the following details and we will get back to you shortly.
      </h2>
      {submitted ? (
        <p className="text-green-600 text-lg font-semibold">
          Thank you! We&apos;ll contact you soon.
        </p>
      ) : (
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          Place:
          <input type="text" name="journey_title" value={title} readOnly />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="first_name"
              placeholder="First Name*"
              required
              className="border rounded px-4 py-2"
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name*"
              required
              className="border rounded px-4 py-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              required
              className="border rounded px-4 py-2"
            />
            <input
              type="text"
              name="city"
              placeholder="City*"
              required
              className="border rounded px-4 py-2"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number*"
              required
              className="border rounded px-4 py-2"
            />
          </div>
          <div className="flex items-center">
            <input type="checkbox" name="updates_optin" className="mr-2" />
            <label>Yes, I would like to receive updates & travel smart</label>
          </div>
          <button
            type="submit"
            className="bg-[#ff5e00] text-white px-6 py-2 rounded hover:bg-orange-600 transition"
          >
            Book Now
          </button>
        </form>
      )}
    </div>
  );
};

export default BookingForm;
