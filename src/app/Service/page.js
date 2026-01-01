"use client";
import { motion } from "framer-motion";
import { useTheme } from "@/context/themeprovider";
import { Code2, Layout, Database, Rocket } from "lucide-react";

const Services = () => {
  const { isDarkMode } = useTheme(); // get current theme

  const services = [
    {
      icon: <Layout size={40} />,
      title: "Frontend Development",
      desc: "Modern, responsive and user-friendly interfaces using React, Next.js, Tailwind CSS and clean UI principles.",
    },
    {
      icon: <Code2 size={40} />,
      title: "Web Application Development",
      desc: "Building dynamic web applications with proper routing, state management and optimized performance.",
    },
    {
      icon: <Database size={40} />,
      title: "Backend Integration",
      desc: "API integration, authentication handling and backend communication using Node.js & REST APIs.",
    },
    {
      icon: <Rocket size={40} />,
      title: "Website Optimization",
      desc: "Improving website speed, responsiveness, SEO structure and overall performance.",
    },
  ];

  return (
    <section
      className={`py-20 ${
        isDarkMode ? "bg-[#0B1120]": "bg-[#F8FAFC]"
      } transition-colors duration-500`}
    >
      <div className="container mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className={`${isDarkMode ? "text-white" : "text-gray-800"} text-4xl font-bold`}>
            My <span className="text-[#00ADB5]">Services</span>
          </h2>
          <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} mt-3 max-w-xl mx-auto`}>
            Here are the services I provide to help build modern and scalable web applications.
          </p>
        </motion.div>

        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`rounded-xl p-8 text-center hover:scale-105 transition duration-300 shadow-lg ${
                isDarkMode ? "bg-[#1e293b] text-white" : "bg-white text-gray-800"
              }`}
            >
              <div className={`${isDarkMode ? "text-[#00ADB5]" : "text-[#0077b6]"} mb-5 flex justify-center`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#contact"
            className={`inline-block px-8 py-3 font-semibold rounded-lg hover:scale-105 transition shadow-md ${
              isDarkMode
                ? "bg-[#00ADB5] text-white hover:bg-[#00c1d0]"
                : "bg-[#00c1d0] text-white hover:bg-[#00e0ff]"
            }`}
          >
            Let’s Work Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
