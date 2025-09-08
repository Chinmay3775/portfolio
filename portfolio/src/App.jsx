import React, { useState, useEffect } from "react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Theme toggle
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero", "about", "experience", "projects",
        "skills", "education", "achievements", "contact"
      ];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const themeClasses = isDarkMode
    ? "bg-gray-900 text-white"
    : "bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-900";

  return (
    <div className={`min-h-screen transition-all duration-500 ${themeClasses}`}>
      <Navbar
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
      />
      <Hero isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Experience isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <Education isDarkMode={isDarkMode} />
      <Achievements isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <ScrollToTop isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
