'use client';
import React from 'react';

import Home from './Home/page';
import About from './about/page';
import Skills from './Skill/page';
import Projects from './project/page';
import Contact from './contact/page';
import Service from './Service/page';


// Slick CSS imports
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Page = () => {
  return (
    <div className=" min-h-screen">
    
      <main className="overflow-x-hidden">
        <Home />
        <About />
        <Service/>
        <Skills />
        <Projects />
        <Contact />
      </main>
    
    </div>
  );
};

export default Page;
