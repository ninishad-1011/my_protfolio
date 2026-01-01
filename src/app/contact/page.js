"use client";

import React, { useRef, useState } from "react";
import { useTheme } from "@/context/themeprovider";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const { isDarkMode } = useTheme(); // get current theme
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aw8frv1",
        "template_t0wvz7c",
        form.current,
        "9PXgQmNrARA8aN6P4"
      )
      .then(
        () => alert("Message sent successfully!"),
        () => alert("Failed to send message. Try again later.")
      );

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className={`min-h-screen py-20 px-6 flex items-center justify-center transition-colors duration-500 ${
        isDarkMode
          ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white"
          : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="container mx-auto max-w-3xl">
        {/* Title */}
        <h2
          className={`text-4xl md:text-5xl font-extrabold text-center mb-12 ${
            isDarkMode ? "text-[#00FFD5]" : "text-[#0077b6]"
          }`}
        >
          Contact Me
        </h2>

        {/* Glassmorphic Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className={`backdrop-blur-lg border rounded-3xl p-10 shadow-xl flex flex-col space-y-6 transition-colors duration-500 ${
            isDarkMode
              ? "bg-white/5 border-white/10 text-white"
              : "bg-white border-gray-200 text-gray-800"
          } animate-fadeIn`}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`w-full p-4 rounded-xl focus:outline-none focus:ring-2 transition-all ${
              isDarkMode
                ? "bg-white/10 placeholder:text-gray-300 focus:ring-[#00FFD5] text-white"
                : "bg-gray-100 placeholder:text-gray-500 focus:ring-[#0077b6] text-gray-800"
            }`}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full p-4 rounded-xl focus:outline-none focus:ring-2 transition-all ${
              isDarkMode
                ? "bg-white/10 placeholder:text-gray-300 focus:ring-[#00FFD5] text-white"
                : "bg-gray-100 placeholder:text-gray-500 focus:ring-[#0077b6] text-gray-800"
            }`}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className={`w-full p-4 rounded-xl focus:outline-none focus:ring-2 resize-none transition-all ${
              isDarkMode
                ? "bg-white/10 placeholder:text-gray-300 focus:ring-[#00FFD5] text-white"
                : "bg-gray-100 placeholder:text-gray-500 focus:ring-[#0077b6] text-gray-800"
            }`}
          ></textarea>

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-[#00FFD5] to-[#00ADB5] text-black font-bold rounded-2xl hover:scale-105 transition-transform shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ContactForm;
