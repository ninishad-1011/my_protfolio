"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useTheme } from "@/context/themeprovider";

import "swiper/css";
import "swiper/css/pagination";

const projects = [
  {
    title: "News Portal",
    description:
      "Bangladesh 420 is a responsive Bangla news portal with latest updates, category navigation, and a user-friendly interface.",
    image: "/Image/NewsPortsl.png",
    tech: ["TypeScript", "Next.js", "Tailwind", "Shadcn UI", "Context API"],
    link: "https://newsportal-dun-five.vercel.app/",
  },
  {
    title: "Portfolio",
    description:
      "Personal portfolio showcasing projects, skills, and contact information.",
    image: "/Image/portfolio.png",
    tech: ["Next.js", "React", "Tailwind", "Framer Motion"],
    link: "https://my-protfolio-eoa5.vercel.app/",
  },
  {
    title: "Nafi Store (E-Commerce)",
    description:
      "Responsive e-commerce platform with product listings and cart system.",
    image: "/Image/e-commerce.png",
    tech: ["React", "JavaScript", "Tailwind", "Clerk"],
    link: "https://e-commerce-x3b2.vercel.app/",
  },
  {
    title: "Real-Estate Agency",
    description:
      "Modern real-estate website with property listings and agent details.",
    image: "/Image/Screenshot 2025-12-20 152644.png",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://realstate1-woad.vercel.app/",
  },
  {
    title: "TODO App",
    description: "Simple and clean task management app with CRUD operations.",
    image: "/Image/todo.png",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://ninishad-1011.github.io/TodoList/",
  },
  {
    title: "Landing Page",
    description: "Marketing landing page with hero section and CTA.",
    image: "/Image/lamdingpage.png",
    tech: ["HTML", "CSS"],
    link: "https://ninishad-1011.github.io/2nd-web-page/",
  },
  {
    title: "CUCSEAA Admin Panel",
    description: "Admin dashboard for alumni community management.",
    image: "/Image/admin.png",
    tech: ["Next.js", "JavaScript", "Tailwind"],
    link: "https://github.com/ninishad-1011/alumni_admin_dashboard",
  },
  {
    title: "Hotel Management System",
    description:
      "Desktop-based hotel management system for bookings and services.",
    image: "/Image/hotel management.png",
    tech: ["Java", "Swing", "MySQL"],
    link: "https://github.com/ninishad-1011/HotelmanagemenntSystem",
  },
  {
    title: "HRMS System",
    description:
      "Human Resource Management System for employee and payroll handling.",
    image: "/Image/hrms.png",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://github.com/ninishad-1011/hrms-system-frontend",
  },
  {
    title: "Student Management System",
    description: "Role-based student record management system.",
    image: "/Image/download.png",
    tech: ["HTML", "Bootstrap", "PHP", "MySQL"],
    link: "https://github.com/ninishad-1011/Final_Project_1011",
  },
];

const ProjectsSlider = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      className={`relative py-20 px-4 ${
        isDarkMode ? "bg-[#0B1120]" : "bg-white"
      }`}
    >
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 -z-10 ${
          isDarkMode
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
            : "bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100"
        }`}
      />

      <div className="max-w-6xl mx-auto">
        <h1
          className={`text-4xl md:text-5xl font-bold text-center ${
            isDarkMode ? "text-[#00ADB5]" : "text-[#0077b6]"
          }`}
        >
          All Projects
        </h1>

        <p
          className={`text-center mt-4 mb-12 ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          A collection of projects showcasing my front-end development skills
        </p>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, idx) => (
            <SwiperSlide key={idx}>
              <div
                className={`group h-[420px] rounded-2xl overflow-hidden 
                transition-all duration-300 shadow-md hover:shadow-xl
                ${isDarkMode ? "bg-[#0f172a]" : "bg-white"}`}
              >
                {/* Project Image */}
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Project Content */}
                <div className="p-5 flex flex-col h-[calc(100%-192px)]">
                  <h2
                    className={`text-lg font-bold ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {project.title}
                  </h2>

                  <p
                    className={`text-sm mt-2 flex-grow ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className={`text-xs px-3 py-1 rounded-full border ${
                          isDarkMode
                            ? "border-gray-600 text-gray-300"
                            : "border-gray-300 text-gray-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    className="mt-5 text-center rounded-lg py-2 font-semibold bg-[#00ADB5] text-black hover:bg-[#00c1d0] transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Container */}
        <div className="custom-pagination mt-6 flex justify-center"></div>
      </div>

      {/* Pagination Dot Colors */}
      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          background: ${isDarkMode ? "#00ADB5" : "#0077b6"};
          opacity: 0.4;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: ${isDarkMode ? "#00ADB5" : "#0077b6"};
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSlider;
