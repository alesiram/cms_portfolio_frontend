import { useState } from "react";
import { NavLink } from "react-router";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const base = "text-gray-300 transition hover:text-teal-400";
  const active = "text-pink-400 font-semibold";

  return (
    <nav className="bg-gray-800 border-b border-gray-700 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-bold text-pink-300"
        >
          <img
            src="/womenDev.png"
            alt="Woman developer icon"
            className="w-10 h-10 object-contain"
          />
          <span>Marisela | Developer</span>
        </NavLink>

        {/* desktop view */}
        <div className="hidden md:flex items-center gap-6">
          <div className="space-x-4 text-sm text-gray-300">
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/projects"
            >
              Projects
            </NavLink>
            
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-pink-400 text-2xl"
            title="Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {menuOpen && (
        <div className="md:hidden  bg-gray-800 border-t border-gray-700 px-6 py-4 space-y-2 space-x-4 text-center">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? active : base)}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? active : base)}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </NavLink>
      
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? active : base)}
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? active : base)}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
