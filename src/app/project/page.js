'use client';
import React from "react";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: "E-commerce Website",
    description: "A full-stack e-commerce platform with shopping cart, payment gateway, and admin panel.",
    image: "/Image/image-removebg-preview.png",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio showcasing projects, skills, and contact form.",
    image: "/Image/image-removebg-preview.png",
    tech: ["Next.js", "React", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "ToDo App",
    description: "A modern todo app with CRUD operations and local storage support.",
    image: "/Image/image-removebg-preview.png",
    tech: ["React", "JavaScript", "CSS"],
    link: "#",
  },
  {
    title: "Blog Platform",
    description: "A blogging platform where users can write, edit, and delete posts.",
    image: "/Image/image-removebg-preview.png",
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
    <div className="min-h-screen bg-[#202632] text-white py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-center mb-16">My Projects</h1>

        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="px-2">
              <div className="relative w-full h-80 rounded-xl overflow-hidden group">
                {/* Fixed Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-xl"
                />

                {/* Overlay Text - Hidden initially */}
                <div className="absolute inset-0 bg-black/70 flex flex-col justify-end p-6 rounded-xl translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="bg-[#00ADB5] text-black px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#00ADB5] text-black px-4 py-2 rounded font-medium hover:bg-[#00c1d0] transition-colors"
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
        /* Center card bigger */
        .slick-center .group {
          transform: scale(1.05) !important;
          z-index: 10;
        }

        /* Side cards smaller */
        .slick-slide .group {
          transform: scale(0.85);
          z-index: 1;
        }
      `}</style>
    </div>
  );
};

export default ProjectsSlider;
