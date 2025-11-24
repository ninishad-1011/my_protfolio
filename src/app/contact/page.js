'use client';
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
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

    emailjs.sendForm(
      'service_aw8frv1',
      'template_t0wvz7c',
      form.current,
      '9PXgQmNrARA8aN6P4'
    )
    .then(
      (result) => {
        alert("Message sent successfully!");
      },
      (error) => {
        alert("Failed to send message. Try again later.");
      }
    );

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-6 transition-colors duration-500 bg-gray-100 dark:bg-[#202632]"
    >
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-black dark:text-white mb-12">
          Contact Me
        </h1>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white dark:bg-[#1A202C] p-8 rounded-xl shadow-lg space-y-6 transition-colors duration-500"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-100 dark:bg-[#202632] text-black dark:text-white border border-gray-400 focus:border-[#00ADB5] transition-colors"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded bg-gray-100 dark:bg-[#202632] text-black dark:text-white border border-gray-400 focus:border-[#00ADB5] transition-colors"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full p-3 rounded bg-gray-100 dark:bg-[#202632] text-black dark:text-white border border-gray-400 focus:border-[#00ADB5] transition-colors"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#00ADB5] text-black py-3 rounded hover:bg-[#00c1d0] transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
