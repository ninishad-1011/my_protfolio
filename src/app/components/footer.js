// components/footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="dark:bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 md:px-0 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

        {/* Logo / Name */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFD5] to-[#00ADB5]">
            Nafiul Islam
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            Frontend Developer & CSE Student
          </p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 text-gray-400">
          <a
            href="https://github.com/ninishad-1011"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00ADB5] hover:scale-110 transition-all duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00ADB5] hover:scale-110 transition-all duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00ADB5] hover:scale-110 transition-all duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="mailto:nafiul@example.com"
            className="hover:text-[#00ADB5] hover:scale-110 transition-all duration-300"
          >
            <FaEnvelope size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} Nafiul Islam. All rights reserved.
        </div>

      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-800 mt-8"></div>
    </footer>
  );
};

export default Footer;
