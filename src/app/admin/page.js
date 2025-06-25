// app/admin/page.tsx (Admin Panel with Login + Tour Package Form)
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
    tour_details: [],
    included: [],
    excluded: [],
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

  const handleJSONFieldChange = (fieldName, value) => {
    try {
      const parsed = JSON.parse(value);
      setFormData({ ...formData, [fieldName]: parsed });
    } catch (error) {
      alert("Invalid JSON format in " + fieldName);
    }
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

        {[
          { key: "tour_details", label: "Tour Details (JSON)" },
          { key: "included", label: "Included Items (JSON)" },
          { key: "excluded", label: "Excluded Items (JSON)" },
        ].map(({ key, label }) => (
          <textarea
            key={key}
            name={key}
            placeholder={label}
            onChange={(e) => handleJSONFieldChange(key, e.target.value)}
            className="border p-2 h-32"
          />
        ))}

        <button type="submit" className="bg-green-600 text-white px-4 py-2">
          Submit Package
        </button>
      </form>
    </div>
  );
}
