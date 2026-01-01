"use client";

import React, { useRef, useState } from "react";
import { useTheme } from "@/context/themeprovider";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import Swal from "sweetalert2";


const ContactForm = () => {
  const { isDarkMode } = useTheme();
  const form = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

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
  () => {
    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Thank you for reaching out. I will respond as soon as possible.",
      confirmButtonColor: "#00ADB5",
    });
  },
  () => {
    Swal.fire({
      icon: "error",
      title: "Oops!",
      text: "Failed to send message. Try again later.",
      confirmButtonColor: "#00ADB5",
    });
  }
);

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className={`min-h-screen py-20 px-6 flex flex-col items-center justify-center transition-colors duration-500 ${
        isDarkMode ? "bg-[#0f172a] text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="container mx-auto max-w-3xl">
        {/* Title */}
        <h2
          className={`text-4xl md:text-5xl font-extrabold text-center mb-4 ${
            isDarkMode ? "text-[#00ADB5]" : "text-[#00ADB5]"
          }`}
        >
          Contact Me
        </h2>

        {/* Subtitle */}
        <p className="text-center text-gray-400 mb-10">
          Reach out to me via the form below or through my email, phone, GitHub, or LinkedIn.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12 text-lg">
          <a
            href="mailto:nafiul@example.com"
            className="flex items-center gap-2 hover:text-[#00ADB5] transition-colors"
          >
            <FaEnvelope /> nafiul1011@example.com
          </a>
          <a
            href="tel:+880123456789"
            className="flex items-center gap-2 hover:text-[#00ADB5] transition-colors"
          >
            <FaPhone /> +881571117435
          </a>
          <a
            href="https://github.com/ninishad-1011"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#00ADB5] transition-colors"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/nafiul1011"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#00ADB5] transition-colors"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>

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
                ? "bg-white/10 placeholder:text-gray-300 focus:ring-[#00ADB5] text-white"
                : "bg-gray-100 placeholder:text-gray-500 focus:ring-[#00ADB5] text-gray-800"
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
                ? "bg-white/10 placeholder:text-gray-300 focus:ring-[#00ADB5] text-white"
                : "bg-gray-100 placeholder:text-gray-500 focus:ring-[#00ADB5] text-gray-800"
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
                ? "bg-white/10 placeholder:text-gray-300 focus:ring-[#00ADB5] text-white"
                : "bg-gray-100 placeholder:text-gray-500 focus:ring-[#00ADB5] text-gray-800"
            }`}
          ></textarea>

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-[#00ADB5] to-[#00ADB5] text-black font-bold rounded-2xl hover:scale-105 transition-transform shadow-lg"
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
