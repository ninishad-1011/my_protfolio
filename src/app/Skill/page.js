'use client';

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // import AOS styles

// icons import
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb } from "react-icons/si";

const skills = [
  { name: "HTML", level: "90%", icon: <FaHtml5 /> },
  { name: "CSS", level: "85%", icon: <FaCss3Alt /> },
  { name: "JavaScript", level: "80%", icon: <FaJs /> },
  { name: "React.js", level: "75%", icon: <FaReact /> },
  { name: "Next.js", level: "70%", icon: <SiNextdotjs /> },
  { name: "Tailwind CSS", level: "85%", icon: <SiTailwindcss /> },
  { name: "Node.js", level: "60%", icon: <FaNodeJs /> },
  { name: "MongoDB", level: "55%", icon: <SiMongodb /> },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true }); // animation duration
  }, []);

  return (
    <div className="min-h-screen bg-[#202632] text-white py-16 px-6">
      <div className="container mx-auto max-w-5xl">

        {/* Heading */}
        <h1
          className="text-4xl font-bold text-center mb-16"
          data-aos="fade-down"
        >
          My Skills
        </h1>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#1A202C] p-5 rounded-xl shadow-md text-center space-y-3"
              data-aos="fade-up"
              data-aos-delay={index * 100} // stagger animation
            >
              {/* Icon */}
              <div className="text-4xl mx-auto text-[#00ADB5] flex justify-center">
                {skill.icon}
              </div>

              {/* Skill Name */}
              <h3 className="text-lg font-semibold">{skill.name}</h3>

              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-[#00ADB5] h-1.5 rounded-full transition-all duration-700"
                  style={{ width: skill.level }}
                ></div>
              </div>

              {/* Percentage */}
              <p className="text-sm text-gray-400">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
