// components/footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1A202C] text-white py-10">
      <div className="container mx-auto px-6 md:px-0 flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo / Name */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-[#00ADB5]">Nafiul Islam</h2>
          <p className="text-gray-400 text-sm mt-1">Frontend Developer & CSE Student</p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 mb-6 md:mb-0">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ADB5] transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ADB5] transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ADB5] transition-colors">
            <FaTwitter size={24} />
          </a>
          <a href="mailto:nafiul@example.com" className="hover:text-[#00ADB5] transition-colors">
            <FaEnvelope size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Nafiul Islam. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
