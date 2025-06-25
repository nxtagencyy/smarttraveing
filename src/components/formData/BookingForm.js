"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const BookingForm = ({ title }) => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

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
      // ✅ EmailJS
      await emailjs.sendForm(
        "service_0nwwkgk", // Your service ID
        "template_flt75bf", // Your template ID
        form.current,
        "FogiT6XVQp58xxl2h" // Your public key
      );

      // ✅ Send to MongoDB via deployed backend
      await fetch("https://trvelbackendtest.vercel.app/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      // ✅ (Optional) Send to Google Sheet API (you can remove this if not needed)
      await fetch("/api/submit-to-sheet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Submission Error:", error);
    } finally {
      setLoading(false);
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
          <div>
            <label className="font-medium">Place:</label>
            <input
              type="text"
              name="journey_title"
              value={title}
              readOnly
              className="border rounded px-4 py-2 w-full mt-1 bg-gray-100"
            />
          </div>

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
            <input
              type="checkbox"
              name="updates_optin"
              className="mr-2"
              id="updates_optin"
            />
            <label htmlFor="updates_optin">
              Yes, I would like to receive updates & travel smart
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`${
              loading ? "bg-gray-400" : "bg-[#ff5e00] hover:bg-orange-600"
            } text-white px-6 py-2 rounded transition`}
          >
            {loading ? "Submitting..." : "Book Now"}
          </button>
        </form>
      )}
    </div>
  );
};

export default BookingForm;
