"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/themeprovider";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
  SiMysql,
  SiPostman,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

const skillsData = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React.js", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "TypeScript", icon: <SiTypescript /> },
    ],
  },
  {
    title: "Tools & Deployment",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Netlify", icon: <SiNetlify /> },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const Skills = () => {
  const { isDarkMode } = useTheme(); // get current theme

  return (
    <section
      className={`py-20 ${
        isDarkMode ? "bg-[#0f172a]" : "bg-gray-100"
      } transition-colors duration-500`}
    >
      <div className="container mx-auto px-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            My <span className="text-[#00ADB5]">Skills</span>
          </h2>
          <p className={`${isDarkMode ? "text-gray-400" : "text-gray-700"} mt-3`}>
            Technologies & tools I use to build modern web applications
          </p>
        </motion.div>

        {/* Columns */}
        <motion.div
          className="flex flex-col md:flex-row gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skillsData.map((category, idx) => (
            <motion.div key={idx} className="flex-1 flex flex-col gap-6">
              <h3
                className={`text-2xl font-semibold mb-4 ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {category.title}
              </h3>

              {/* Skills cards */}
              <motion.div className="flex flex-col gap-4" variants={container}>
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    variants={item}
                    whileHover={{ scale: 1.05 }}
                    className={`p-4 rounded-xl shadow-md hover:shadow-xl transition flex items-center gap-4 ${
                      isDarkMode ? "bg-[#1e293b] text-white" : "bg-white text-gray-800"
                    }`}
                  >
                    <div className={`${isDarkMode ? "text-[#00ADB5]" : "text-[#0077b6]"} text-3xl`}>
                      {skill.icon}
                    </div>
                    <h4 className="text-lg font-semibold">{skill.name}</h4>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
