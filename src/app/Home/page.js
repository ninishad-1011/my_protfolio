"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8 },
    }),
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B1120] transition-colors duration-500 flex items-center relative overflow-hidden">

      {/* Floating particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#0EA5E9]/40 dark:bg-[#38BDF8]/40 rounded-full"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 6 + i,
            ease: "easeInOut",
          }}
          style={{
            top: `${i * 10 + 10}%`,
            left: `${i * 8 + 5}%`,
          }}
        />
      ))}

      <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between relative z-10">

        {/* TEXT SECTION */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-[#0F172A] dark:text-white"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Hi, I’m{" "}
            <span className="text-[#0EA5E9]">a Frontend Developer</span>
          </motion.h1>

          <motion.p
            className="text-[#334155] dark:text-gray-300 text-lg"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            I design and build{" "}
            <span className="text-[#0EA5E9] font-semibold">
              responsive & interactive
            </span>{" "}
            web applications using modern technologies like React & Next.js.
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center md:justify-start"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <a
              href="/project"
              className="px-6 py-3 bg-[#0EA5E9] text-white font-semibold rounded-lg shadow-md hover:bg-[#0284C7] transition"
            >
              View Projects
            </a>

            <a
              href="/cv/mycv.pdf"
              download
              className="px-6 py-3 border-2 border-[#0EA5E9] text-[#0EA5E9] dark:text-white rounded-lg hover:bg-[#0EA5E9] hover:text-white transition"
            >
              Download CV
            </a>
          </motion.div>
        </div>

        {/* IMAGE SECTION */}
        <motion.div
          className="md:w-1/2 flex justify-center mt-12 md:mt-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[#0EA5E9] shadow-xl"
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            <Image
              src="/Image/hand-drawn-web-developers_23-2148819604.avif"
              alt="Developer"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
