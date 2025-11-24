'use client';
import React from "react";
import Link from "next/link";

const Navbar = () => {
  const menus = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skils", href: "/Skill" },
    { name: "Projects", href: "/project" },
    { name: "Contact", href: "/contact" },
    
  ];

  return (
    <div className="w-full h-16 bg-gray-900 text-white shadow-md fixed top-0 z-50">
      <nav className="h-full flex items-center container mx-auto justify-between px-4">
        
        {/* Logo */}
        <div className="text-xl font-bold cursor-pointer">
         MyLogo
        </div>

        {/* Menu Items */}
        <ul className="flex gap-6 items-center">
          {menus.map((menu, index) => (
            <li key={index} className="cursor-pointer">
              <Link href={menu.href} className="hover:text-blue-400 transition duration-300">
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>

      </nav>
    </div>
  );
};

export default Navbar;
