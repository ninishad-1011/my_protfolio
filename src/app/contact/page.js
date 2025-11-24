'use client';
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // এখানে API call বা মেইল সেন্টার করতে পারেন
    console.log("Form submitted:", formData);
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-[#202632] text-white py-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Me</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-[#1A202C] p-8 rounded-xl shadow-lg space-y-6"
        >
          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="p-3 rounded bg-[#202632] border border-gray-600 focus:outline-none focus:border-[#00ADB5]"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="p-3 rounded bg-[#202632] border border-gray-600 focus:outline-none focus:border-[#00ADB5]"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label htmlFor="message" className="mb-2 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={5}
              className="p-3 rounded bg-[#202632] border border-gray-600 focus:outline-none focus:border-[#00ADB5]"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#00ADB5] text-black font-semibold py-3 rounded hover:bg-[#00c1d0] transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
