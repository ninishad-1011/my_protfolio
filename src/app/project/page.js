"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { useTheme } from "@/context/themeprovider";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: "News Portal",
    description:
      "Bangladesh 420 is a responsive Bangla news portal with latest updates, category navigation, and a user-friendly interface.",
    image: "/Image/NewsPortsl.png",
    tech: ["TypeScript", "Next.js", "Tailwind CSS","Shadcn UI","Context API"],
    link: "https://newsportal-dun-five.vercel.app/",
  },
  {
    title: "Portfolio",
    description:
      "My personal portfolio showcasing projects, skills, and contact form.",
    image: "/Image/top11.png",
    tech: ["Next.js", "React", "Tailwind CSS", "Shadcn UI","Framer Motion"],
    link: "",
  },
  {
    title: "CUCSEAA Website",
    description:
      "CUCSEAA — an alumni community site for City University CSE graduates to connect, share events, and support each other.",
    image: "/Image/cucseaa.png",
    tech: ["Next.js", "JavaScript", "Tailwind CSS"],
    link: "https://cucseaa.org/",
  },
  {
    title: "Nafi Store(E-commerce)",
    description:
      "E‑Commerce Web App — a responsive online store with product listings and cart functionality.",
    image: "/Image/e-commerce.png",
    tech: ["React", "JavaScript", "Tailwind CSS","Clerk"],
    link: "https://e-commerce-x3b2.vercel.app/",
  },
  ,
  {
    title: "Real-Estate Agency",
    description:
      "NafiAgency is a responsive real estate web app showcasing property listings, featured agents, and contact details, built to help users explore homes and real estate options easily.",
    image: "/Image/Screenshot 2025-12-20 152644.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS","React Slick"],
    link: "https://realstate1-woad.vercel.app/",
  },
  
  {
    title: "TODO App",
    description:
      "To‑Do List App — add, complete, and delete tasks with a clean, responsive UI.",
    image: "/Image/todo.png",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://ninishad-1011.github.io/TodoList/",
  },
  ,
  {
    title: "Landing Page",
    description:
      "Landing page with hero section, features, and call-to-action.",
    image: "/Image/lamdingpage.png",
    tech: ["HTML", "CSS"],
    link: "https://ninishad-1011.github.io/2nd-web-page/",
  },
  ,
  {
    title: "CUCSEAA Admin Panel",
    description:
      "Admin panel for managing alumni community site.",
    image: "/Image/admin.png",
    tech: ["Next.js", "JavaScript", "Tailwind CSS"],
    link: "https://github.com/ninishad-1011/alumni_admin_dashboard",
  },
  ,
  {
    title: "Hotel Management System",
    description:
      "Hotel Management System is a web application that allows hotels to manage room bookings, customer details, and services efficiently, streamlining operations and improving guest experience.",
    image: "/Image/hotel management.png",
    tech: ["JAVA", "SWING", "NYSQL"],
    link: "https://github.com/ninishad-1011/HotelmanagemenntSystem",
  },
  {
    title: "HRMS Management System",
    description:
      "HRMS Management System is a comprehensive Human Resource Management System that streamlines employee data management, attendance tracking, and payroll processing, enhancing organizational efficiency and workforce management.",
    image: "/Image/hrms.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/ninishad-1011/hrms-system-frontend",
  },
    {
    title: "Student Management System",
    description:
      "Student Management System is a web application designed to efficiently manage student records Role based AcessControl",
    image: "/Image/download.png",
    tech: ["HTML", "BOOTSTRAP ", "PHP", "MY SQL","CSS"],
    link: "https://github.com/ninishad-1011/Final_Project_1011",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  arrows: true,
  centerMode: true,
  centerPadding: "0px",
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3, centerPadding: "0px" } },
    { breakpoint: 768, settings: { slidesToShow: 1, centerPadding: "0px" } },
    { breakpoint: 480, settings: { slidesToShow: 1, centerPadding: "0px" } },
  ],
};

const ProjectsSlider = () => {
  const { isDarkMode } = useTheme(); // Get current theme

  return (
    <section
      className={`relative  py-16 px-6 min-h-screen overflow-hidden ${
        isDarkMode ? "bg-[#0B1120]" : "bg-white"
      }`}
    >
      {/* Background Gradient */}
      <div
        className={`  absolute inset-0 -z-10 ${
          isDarkMode
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
            : "bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100"
        }`}
      ></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <span
          className={`absolute w-2 h-2 rounded-full animate-float ${
            isDarkMode ? "bg-[#1c1e22]" : "bg-gray-400"
          }`}
          style={{ top: "25%", left: "15%" }}
        ></span>
        <span
          className={`absolute w-1.5 h-1.5 rounded-full animate-float-slow ${
            isDarkMode ? "bg-[#2a2c30]" : "bg-gray-300"
          }`}
          style={{ top: "70%", left: "75%" }}
        ></span>
        <span
          className={`absolute w-3 h-3 rounded-full animate-float-medium ${
            isDarkMode ? "bg-[#00ADB5]" : "bg-[#99a7a8]"
          }`}
          style={{ top: "50%", left: "50%" }}
        ></span>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <h1
          className={`text-4xl pt-10 md:text-5xl font-bold text-center mb-1 ${
            isDarkMode ? "text-[#00ADB5]" : "text-[#0077b6]"
          }`}
        >
          ALL Projects
        </h1>
        <h1   className={`text-[14px] md:text-2xl font-semibold text-center mb-16 ${
            isDarkMode ? "text-[#00ADB5]" : "text-[#0077b6]"
          }`}> A collection of projects showcasing my skills in Front-End Development. </h1>

        <Slider {...sliderSettings}>
          {projects.map((project, idx) => (
            <div key={idx} className="px-2">
              <div
                className={`relative w-full h-80 py-5 rounded-xl overflow-hidden group shadow-lg transition-transform duration-500 hover:shadow-2xl hover:scale-105 ${
                  isDarkMode ? "" : "bg-gray-100"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain rounded-xl"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 to-transparent rounded-xl translate-y-full group-hover:translate-y-0 transition-all duration-500 backdrop-blur-sm">
                  <h2
                    className={`text-2xl font-bold mb-2 ${
                      isDarkMode ? "text-[#08ddb9]" : "text-[#12aefc]"
                    }`}
                  >
                    {project.title}
                  </h2>
                  <p
                    className={`mb-4 ${
                      isDarkMode ? "text-white font-semibold" : "text-white font-semibold"
                    }`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className={`px-2 py-1 rounded text-sm ${
                          isDarkMode
                            ? "bg-[#00ADB5] text-black"
                            : "bg-[#00c1d0] text-black"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block px-4 py-2 rounded font-medium shadow-md hover:shadow-lg transition-colors ${
                      isDarkMode
                        ? "bg-[#00ADB5] text-black hover:bg-[#00c1d0]"
                        : "bg-[#00c1d0] text-black hover:bg-[#00e0ff]"
                    }`}
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Global styles for slider */}
      <style jsx global>{`
        .slick-center .group {
          transform: scale(1.05) !important;
          z-index: 10;
          border: 2px solid #00adb5;
          box-shadow: 0 5px 10px rgba(0, 173, 181, 0.5);
        }
        .slick-slide .group {
          transform: scale(0.85) rotateY(-5deg);
          z-index: 1;
        }
        .slick-slide.slick-center ~ .slick-slide {
          transform: scale(0.85) rotateY(5deg);
        }
        .slick-dots li button:before {
          color: #00adb5 ;
        
        }
        .slick-dots li.slick-active button:before {
          color: #00c1d0;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-15px) translateX(-10px);
          }
        }
        @keyframes float-medium {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-25px) translateX(15px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSlider;
