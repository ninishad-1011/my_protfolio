"use client";
import { motion } from "framer-motion";
import { useTheme } from "@/context/themeprovider";

const AboutSection = () => {
  const { isDarkMode } = useTheme(); // get current theme

  return (
    <section
      className={`w-full py-20 transition-colors duration-500 ${
        isDarkMode ? "bg-[#0f172a] text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="container mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className={`text-4xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}>
            About <span className="text-[#00ADB5]">Me</span>
          </h2>
          <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} mt-3 max-w-2xl mx-auto`}>
            Get to know more about me and my journey as a Front-End Developer.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className={`text-2xl font-semibold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
              Who Am I?
            </h3>

            <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} leading-relaxed mb-5`}>
              I'm <span className="text-[#00ADB5] font-semibold">Nafiul Islam</span>, a passionate Front-End Developer from Bangladesh.  
              I love building modern, responsive, and user-friendly web applications using modern technologies.
            </p>

            <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} leading-relaxed mb-6`}>
              Currently, I’m focusing on improving my frontend expertise while gradually exploring backend development.  
              I always try to write clean, scalable, and maintainable code.
            </p>

            <div className="flex gap-8 mt-6">
              <div>
                <h4 className="text-3xl font-bold text-[#00ADB5]">1+</h4>
                <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} text-sm`}>Years Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-[#00ADB5]">10+</h4>
                <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} text-sm`}>Projects Completed</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-[#00ADB5]">100%</h4>
                <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} text-sm`}>Dedication</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side Design Box */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`rounded-2xl p-10 shadow-lg transition-colors duration-500 ${
              isDarkMode ? "bg-[#1e293b] text-white" : "bg-white text-gray-800"
            }`}
          >
            <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
              My Goal
            </h3>
            <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} leading-relaxed`}>
              My goal is to become a skilled Full-Stack Developer and work on impactful projects that solve real-world problems. I believe in continuous learning and improving myself every day.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
