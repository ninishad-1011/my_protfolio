'use client';

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // import AOS styles
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb } from "react-icons/si";

const skills = [
  { name: "HTML", level: "95%", icon: <FaHtml5 /> },
  { name: "CSS", level: "85%", icon: <FaCss3Alt /> },
  { name: "JavaScript", level: "80%", icon: <FaJs /> },
  { name: "React.js", level: "80%", icon: <FaReact /> },
  { name: "Next.js", level: "70%", icon: <SiNextdotjs /> },
  {name:"TypeScript", level: "50%", icon: <SiNextdotjs />},
  { name: "Tailwind CSS", level: "85%", icon: <SiTailwindcss /> },
  { name: "Node.js", level: "50%", icon: <FaNodeJs /> },
  { name: "MongoDB", level: "50%", icon: <SiMongodb /> },
  {name:"Mysql" , level: "85%", icon: <SiMongodb />}

];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // longer animation
  }, []);

  return (
    <div className="min-h-screen bg-[#202632] text-white py-16 px-6">
      <div className="container mx-auto max-w-6xl">

        {/* Heading */}
        <h1
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#00ADB5] to-[#00C1D0]"
          data-aos="fade-down"
        >
          My Skills
        </h1>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#1A202C] p-6 rounded-2xl shadow-lg text-center space-y-4 transform transition duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 150} // stagger animation
            >
              {/* Icon with hover effect */}
              <div className="text-5xl mx-auto text-[#00ADB5] flex justify-center items-center transition-transform duration-500 hover:scale-125">
                {skill.icon}
              </div>

              {/* Skill Name */}
              <h3 className="text-xl font-semibold text-white">{skill.name}</h3>

              {/* Gradient Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <div
                  className="h-3 rounded-full transition-all duration-1000 bg-gradient-to-r from-[#00ADB5] via-[#00C1D0] to-[#00FFDD]"
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
