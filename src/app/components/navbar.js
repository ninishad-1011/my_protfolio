import React from "react";

const navbar = () => {
  const menus = ["Home", "About", "Services", "Contact"];
  return (
<div className="w-full h-16 bg-gray-900 text-white shadow-md ">
  <nav className="h-full flex items-center container mx-auto justify-between  ">
    
    <div className="text-xl font-bold ">
      🚀 MyLogo
    </div>
    <ul className="flex gap-6 items-center">
      {menus.map((menu, index) => (
        <li
          key={index}
          className="cursor-pointer hover:text-blue-400 transition duration-300"
        >
          {menu}
        </li>
      ))}
    </ul>

  </nav>
</div>

  );
};

export default navbar;
