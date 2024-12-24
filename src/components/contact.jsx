'use client';

import React, { useState } from 'react';

export function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Email sent successfully!");
      setData({ name: "", email: "", phone: "", companyName: "", message: "" });
    } else {
      alert("Failed to send email.");
    }
  };

  return (
    <div className="py-20" id="contact-section">
      <div className="container mx-auto px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-medium mb-4">
            Get in <span className="text-blue-400 font-semibold">Touch</span> With Us
          </h2>
          <p className="text-gray-600">
            Reach out to us and let us know what's on your mind, we're always happy to chat!
          </p>
        </div>

        {/* Form */}
        <div className="max-w-lg mx-auto">
          <form onSubmit={sendEmail}>
            {/* Name */}
            <div className="mb-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={data.name}
                onChange={handleChange}
                className="w-full bg-textInputCustom py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={data.email}
                onChange={handleChange}
                className="w-full bg-textInputCustom py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            {/* Phone */}
            <div className="mb-6">
              <input
                type="text"
                name="phone"
                placeholder="Phone number"
                value={data.phone}
                onChange={handleChange}
                className="w-full bg-textInputCustom py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            {/* Company Name */}
            <div className="mb-6">
              <input
                type="text"
                name="companyName"
                placeholder="Company name"
                value={data.companyName}
                onChange={handleChange}
                className="w-full bg-textInputCustom py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                value={data.message}
                onChange={handleChange}
                className="w-full bg-textInputCustom py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 rounded-lg text-white font-medium py-2.5 px-6 hover:bg-blue-500 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
