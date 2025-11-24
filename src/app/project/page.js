"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: "E-commerce Website",
    description:
      "A full-stack e-commerce platform with shopping cart, payment gateway, and admin panel.",
    image: "/Image/top11.png",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio showcasing projects, skills, and contact form.",
    image: "/Image/top11.png",
    tech: ["Next.js", "React", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "ToDo App",
    description:
      "A modern todo app with CRUD operations and local storage support.",
    image: "/Image/top11.png",
    tech: ["React", "JavaScript", "CSS"],
    link: "#",
  },
  {
    title: "Blog Platform",
    description:
      "A blogging platform where users can write, edit, and delete posts.",
    image: "/Image/top11.png",
    tech: ["Next.js", "MongoDB", "Node.js", "Tailwind CSS"],
    link: "#",
  },
];

const ProjectsSlider = () => {
  const settings = {
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

  return (
    <div className="relative min-h-screen py-16 px-6 overflow-hidden">
      {/* Fixed Deep Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b0c0f] via-[#121217] to-[#0b0c0f]"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="w-2 h-2 bg-[#1c1e22] rounded-full absolute animate-float"
          style={{ top: "25%", left: "15%" }}
        ></div>
        <div
          className="w-1.5 h-1.5 bg-[#2a2c30] rounded-full absolute animate-float-slow"
          style={{ top: "70%", left: "75%" }}
        ></div>
        <div
          className="w-3 h-3 bg-[#00ADB5] rounded-full absolute animate-float-medium"
          style={{ top: "50%", left: "50%" }}
        ></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <h1 className="text-4xl font-bold text-center text-white mb-16">
          My Projects
        </h1>

        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="px-2">
              <div className="relative w-full h-80 rounded-xl overflow-hidden group transition-transform duration-500 shadow-lg hover:shadow-2xl hover:scale-105">
                {/* Project Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-xl"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 rounded-xl translate-y-full group-hover:translate-y-0 transition-all duration-500 backdrop-blur-sm">
                  <h2 className="text-2xl font-bold mb-2 text-[#00ADB5]">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-[#00ADB5] text-black px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#00ADB5] text-black px-4 py-2 rounded font-medium hover:bg-[#00c1d0] transition-colors shadow-md hover:shadow-lg"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx global>{`
        /* Center card bigger with border + glow */
        .slick-center .group {
          transform: scale(1.05) !important;
          z-index: 10;
          border: 2px solid #00adb5;
          box-shadow: 0 10px 25px rgba(0, 173, 181, 0.5);
        }

        /* Side cards smaller + rotate */
        .slick-slide .group {
          transform: scale(0.85) rotateY(-5deg);
          z-index: 1;
        }
        .slick-slide.slick-center ~ .slick-slide {
          transform: scale(0.85) rotateY(5deg);
        }

        /* Slider dots */
        .slick-dots li button:before {
          color: #00adb5;
        }
        .slick-dots li.slick-active button:before {
          color: #00c1d0;
        }

        /* Floating particles animation */
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
    </div>
  );
};

export default ProjectsSlider;
