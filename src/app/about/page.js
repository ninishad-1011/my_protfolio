"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
  // Animation variants
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.2, delay: 0.3 } },
  };

  return (
    <div
      className="w-full h-[75vh] bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
      style={{ backgroundImage: "url('/Image/Group 324.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-0">
        
        {/* Image Section */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-start"
          initial="hidden"
          animate="visible"
          variants={imageVariant}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src="/Image/WhatsApp Image 2025-11-13 at 19.05.52_1f28799b.jpg"
            alt="developer"
            width={300}
            height={300}
            className="rounded-full border-white border-2 shadow-2xl"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={textVariant}
        >
          <h1 className="text-white text-[14px] md:text-2xl font-semibold leading-snug p-4 rounded">
            I am <span className="text-[#00ADB5] font-bold">Nafiul Islam</span>, a passionate Frontend Developer with an interest
            in exploring Backend development. I am from Bangladesh and currently
            working at Nexcent Tech Company, Dhaka as a Junior Software
            Engineer. I am also in my final semester at City University,
            Department of CSE. I specialize in using modern web technologies to
            build responsive and interactive web applications, ensuring clean,
            efficient, and maintainable code.
          </h1>
        </motion.div>

      </div>

      {/* Floating particles for animation */}
      <motion.div
        className="absolute w-3 h-3 bg-[#00ADB5] rounded-full"
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        style={{ top: "20%", left: "15%" }}
      />
      <motion.div
        className="absolute w-2 h-2 bg-white rounded-full"
        animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        style={{ top: "70%", left: "80%" }}
      />
    </div>
  );
};

export default page;
