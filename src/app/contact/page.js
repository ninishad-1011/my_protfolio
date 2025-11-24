'use client';
import React, { useState } from "react";

const Contact = () => {
  const [formData,setFormData]=useState({name:"",email:"",message:""});
  const handleChange=(e)=>setFormData({...formData,[e.target.name]:e.target.value});
  const handleSubmit=(e)=>{
    e.preventDefault();
    alert("Message sent! Thank you.");
    setFormData({name:"",email:"",message:""});
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-6 transition-colors duration-500 bg-gray-100 dark:bg-[#202632]">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-black dark:text-white mb-12">Contact Me</h1>
        <form onSubmit={handleSubmit} className="bg-white dark:bg-[#1A202C] p-8 rounded-xl shadow-lg space-y-6 transition-colors duration-500">
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full p-3 rounded bg-gray-100 dark:bg-[#202632] text-black dark:text-white border border-gray-400 focus:border-[#00ADB5] transition-colors"/>
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="w-full p-3 rounded bg-gray-100 dark:bg-[#202632] text-black dark:text-white border border-gray-400 focus:border-[#00ADB5] transition-colors"/>
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required rows={5} className="w-full p-3 rounded bg-gray-100 dark:bg-[#202632] text-black dark:text-white border border-gray-400 focus:border-[#00ADB5] transition-colors"></textarea>
          <button type="submit" className="w-full bg-[#00ADB5] text-black py-3 rounded hover:bg-[#00c1d0] transition-colors">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
