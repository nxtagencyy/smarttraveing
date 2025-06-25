"use client";

import { useState } from "react";
import axios from "axios";

export default function AdminPage() {
  const [admin, setAdmin] = useState({ email: "", password: "" });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    about: "",
    days: 0,
    nights: 0,
    activities: "",
    activities_slug: "",
    destinations: "",
    destinations_slug: "",
    offers: false,
    thumbnail_url: "",
    image_url: "",
    slug: "",
    tour_details: [{ tour_title: "", tour_details: "" }],
    included: [{ text: "" }],
    excluded: [{ text: "" }],
  });

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "https://trvelbackendtest.vercel.app/api/admin/login",
        admin
      );
      if (res.data.success) {
        setIsAuthenticated(true);
      } else {
        alert("Invalid credentials");
      }
    } catch (err) {
      alert("Login failed");
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleArrayChange = (field, index, key, value) => {
    const updated = [...formData[field]];
    updated[index][key] = value;
    setFormData({ ...formData, [field]: updated });
  };

  const addItem = (field, itemTemplate) => {
    setFormData({ ...formData, [field]: [...formData[field], itemTemplate] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://trvelbackendtest.vercel.app/api/tours",
        formData
      );
      alert("Package added successfully");
    } catch (err) {
      console.error(err);
      alert("Failed to add package");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto mt-20">
        <h2 className="text-xl font-bold mb-4">Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-2"
          onChange={(e) => setAdmin({ ...admin, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-2"
          onChange={(e) => setAdmin({ ...admin, password: e.target.value })}
        />
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white px-4 py-2"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Add Tour Package</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        {[
          "title",
          "about",
          "days",
          "nights",
          "activities",
          "activities_slug",
          "destinations",
          "destinations_slug",
          "thumbnail_url",
          "image_url",
          "slug",
        ].map((key) => (
          <input
            key={key}
            name={key}
            placeholder={key}
            value={formData[key]}
            onChange={handleChange}
            className="border p-2"
          />
        ))}

        <label className="flex items-center">
          <input
            type="checkbox"
            name="offers"
            checked={formData.offers}
            onChange={handleChange}
            className="mr-2"
          />
          Offers?
        </label>

        {/* Tour Details Inputs */}
        <div>
          <h3 className="font-semibold">Tour Details</h3>
          {formData.tour_details.map((item, index) => (
            <div key={index} className="grid grid-cols-2 gap-2 mb-2">
              <input
                placeholder="Title"
                value={item.tour_title}
                onChange={(e) =>
                  handleArrayChange(
                    "tour_details",
                    index,
                    "tour_title",
                    e.target.value
                  )
                }
                className="border p-2"
              />
              <input
                placeholder="Details"
                value={item.tour_details}
                onChange={(e) =>
                  handleArrayChange(
                    "tour_details",
                    index,
                    "tour_details",
                    e.target.value
                  )
                }
                className="border p-2"
              />
            </div>
          ))}
          <button
            type="button"
            className="text-blue-600"
            onClick={() =>
              addItem("tour_details", { tour_title: "", tour_details: "" })
            }
          >
            + Add More Tour Day
          </button>
        </div>

        {/* Included Items */}
        <div>
          <h3 className="font-semibold">Included</h3>
          {formData.included.map((item, index) => (
            <input
              key={index}
              placeholder="Included item"
              value={item.text}
              onChange={(e) =>
                handleArrayChange("included", index, "text", e.target.value)
              }
              className="border p-2 w-full mb-2"
            />
          ))}
          <button
            type="button"
            className="text-blue-600"
            onClick={() => addItem("included", { text: "" })}
          >
            + Add Included Item
          </button>
        </div>

        {/* Excluded Items */}
        <div>
          <h3 className="font-semibold">Excluded</h3>
          {formData.excluded.map((item, index) => (
            <input
              key={index}
              placeholder="Excluded item"
              value={item.text}
              onChange={(e) =>
                handleArrayChange("excluded", index, "text", e.target.value)
              }
              className="border p-2 w-full mb-2"
            />
          ))}
          <button
            type="button"
            className="text-blue-600"
            onClick={() => addItem("excluded", { text: "" })}
          >
            + Add Excluded Item
          </button>
        </div>

        <button type="submit" className="bg-green-600 text-white px-4 py-2">
          Submit Package
        </button>
      </form>
    </div>
  );
}
