import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="w-screen bg-slate-800 p-4 flex items-center justify-between">
      <Link to="/" className="font-bold text-3xl text-white tracking-tighter">
        MyProject
      </Link>

      {/* Mobile Menu Toggle Button */}
      <div
        onClick={toggleMenu}
        className="md:hidden cursor-pointer text-white z-50"
      >
        {menu ? (
          <span className="text-3xl">X</span>
        ) : (
          <svg
            className="fill-current h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
          </svg>
        )}
      </div>

      {/* Mobile & Desktop Menu */}
      <div
        className={`${
          menu ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } md:max-h-full md:opacity-100 md:flex md:items-center md:justify-between w-full md:w-auto absolute top-16 left-0 bg-slate-800 md:bg-transparent md:relative md:top-0 transition-all duration-500 ease-in-out z-40`}
      >
        <ul className="text-lg font-semibold font-serif text-center md:flex md:gap-8 items-center">
          <li className="py-3 md:py-0 hover:text-green-400 transition duration-300">
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li className="py-3 md:py-0 hover:text-green-400 transition duration-300">
            <Link to="/about" onClick={toggleMenu}>About</Link>
          </li>
          <li className="py-3 md:py-0 hover:text-green-400 transition duration-300">
            <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
          </li>
          <li className="py-3 md:py-0 hover:text-green-400 transition duration-300">
            <Link to="/services" onClick={toggleMenu}>Our Services</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
