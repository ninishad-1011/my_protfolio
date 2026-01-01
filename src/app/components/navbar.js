'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/themeprovider";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme(); // <-- use isDarkMode

  const menus = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skill" },
    { name: "Services", href: "/service" },
    { name: "Projects", href: "/project" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-4xl font-bold text-[#00ADB5]">
          Nafiul<span className="text-[#011f35] dark:text-white"> Islam</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {menus.map((menu) => (
            <li key={menu.name}>
              <Link
                href={menu.href}
                className={`font-semibold text-[20px] transition ${
                  pathname === menu.href
                    ? "text-[#00ADB5]"
                    : "text-gray-700 dark:text-gray-300 hover:text-[#00ADB5]"
                }`}
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {isDarkMode ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-[#0B1120] px-6 pb-6">
          <ul className="flex flex-col gap-4">
            {menus.map((menu) => (
              <li key={menu.name}>
                <Link
                  href={menu.href}
                  onClick={() => setOpen(false)}
                  className={`block text-lg ${
                    pathname === menu.href
                      ? "text-[#0EA5E9]"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
