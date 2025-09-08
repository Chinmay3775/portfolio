import React, { useState } from "react";
import { Menu, X, Sun, Moon, Star } from "lucide-react";

const sections = [
  "hero", "about", "experience", "projects",
  "skills", "education", "achievements", "contact"
];

export default function Navbar({ isDarkMode, toggleTheme, activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isDarkMode ? "bg-gray-900/90" : "bg-white/90"
    } backdrop-blur-md shadow-sm`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        
        {/* Logo */}
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Chinmay Keripale
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => scrollToSection(sec)}
              className={`px-3 py-2 text-sm font-medium capitalize transition-colors ${
                activeSection === sec
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : isDarkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {sec === "hero" ? "Home" : sec}
            </button>
          ))}
        </div>

        {/* Right Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg ${
              isDarkMode ? "text-yellow-400 hover:bg-gray-800" : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg">
            <Star size={16} className="fill-current" />
            <span className="text-sm font-medium">Available for Work</span>
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex md:hidden">
          <button onClick={toggleTheme} className="p-2">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 border-t border-gray-200/20">
          <div className="flex flex-col space-y-2">
            {sections.map((sec) => (
              <button
                key={sec}
                onClick={() => scrollToSection(sec)}
                className={`px-3 py-2 text-left text-sm font-medium capitalize ${
                  activeSection === sec
                    ? "text-blue-600 bg-blue-50"
                    : isDarkMode
                    ? "text-gray-300 hover:text-white hover:bg-gray-800"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {sec === "hero" ? "Home" : sec}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
