import React from "react";
import { Sun, Moon, Menu } from "lucide-react";

const Header = ({ toggleDarkMode, darkMode }) => (
  <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 px-4 py-4">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">Portfolio</h1>
      <ul className="hidden md:flex gap-8">
        <li>
          <a href="#about" className="hover:text-blue-600">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-blue-600">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-blue-600">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </li>
      </ul>
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  </nav>
);
export default Header;
