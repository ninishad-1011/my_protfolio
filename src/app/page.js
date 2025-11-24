'use client';
import React from 'react';
import Navbar from './components/navbar';
import Home from './Home/page';
import About from './about/page';
import Skills from './Skill/page';
import Projects from './project/page';
import Contact from './contact/page';
import Footer from './components/footer';

// Slick CSS imports
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Page = () => {
  return (
    <div className="bg-[#202632] min-h-screen">
      <Navbar />
      <main className="overflow-x-hidden">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Page;
