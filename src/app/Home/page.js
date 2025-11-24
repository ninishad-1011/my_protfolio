"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
  // Text animation variants
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 1 },
    }),
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center"
      style={{ backgroundImage: "url('/Image/Group 323[1].png')" }}
    >
      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/60"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-0 py-16">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <motion.h1
            className="text-white text-3xl md:text-5xl font-bold leading-snug"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Hi, I'm <span className="text-[#00ADB5]">a Web Developer</span>
          </motion.h1>

          <motion.p
            className="text-gray-200 text-lg md:text-xl"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            I design and build{" "}
            <span className="text-[#00ADB5] font-semibold">responsive</span> and{" "}
            <span className="text-[#00ADB5] font-semibold">interactive</span>{" "}
            web interfaces using modern technologies, with a focus on clean user
            experience and performance.
          </motion.p>

          <motion.div
            className="flex justify-center md:justify-start gap-4 flex-wrap"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <motion.a
              href="/project" // Update with your project page link
              whileHover={{ scale: 1.1, boxShadow: "0 0 15px #00ADB5" }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-[#00ADB5] text-black font-semibold rounded-lg shadow-lg transition duration-300 inline-block"
            >
              View My Projects
            </motion.a>

            <motion.a
              href="/cv/ACP-DL_ A Deep Learning Long Short-Term_Memory Model to Predict Anticancer Peptides_Using High.pdf" // Place CV in public/CV folder
              download
              whileHover={{ scale: 1.1, boxShadow: "0 0 15px #00ADB5" }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-transparent border-2 border-[#00ADB5] text-white font-semibold rounded-lg shadow-lg hover:bg-[#00ADB5] hover:text-black transition duration-300"
            >
              Download My CV
            </motion.a>
          </motion.div>
        </div>

        {/* Image Section */}
        <motion.div
          className="md:w-1/2 flex justify-center mt-10 md:mt-0"
          initial={{ opacity: 0, y: 50, rotate: -5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          whileHover={{ scale: 1.05, rotate: 3 }}
        >
          <motion.div
            className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-[#00ADB5]"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <Image
              src="/Image/top11.png"
              alt="developer"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className={`w-${(i % 3) + 1} h-${
            (i % 3) + 1
          } bg-[#00ADB5] rounded-full absolute`}
          animate={{
            y: [0, -30 + i * 5, 0],
            x: [0, 20 - i * 2, 0],
          }}
          transition={{ repeat: Infinity, duration: 6 + i, ease: "easeInOut" }}
          style={{
            top: `${i * 8 + 5}%`,
            left: `${i * 10 + 5}%`,
          }}
        />
      ))}
    </div>
  );
};

export default page;
