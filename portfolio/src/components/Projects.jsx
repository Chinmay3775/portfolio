import React from "react";
import { Github, Calendar, ExternalLink } from "lucide-react";

export default function Projects({ isDarkMode }) {
  const cardClasses = isDarkMode
    ? "bg-gray-800/70 border-gray-700/50"
    : "bg-white/70 border-white/20";

  // 🎨 Color mapping for tech tags
  const techColors = {
    HTML: "bg-orange-100 text-orange-700",
    HTML5: "bg-orange-100 text-orange-700",
    CSS: "bg-blue-100 text-blue-700",
    CSS3: "bg-blue-100 text-blue-700",
    JavaScript: "bg-yellow-100 text-yellow-700",
    PHP: "bg-indigo-100 text-indigo-700",
    Python: "bg-green-100 text-green-700",
    "Scikit-learn": "bg-purple-100 text-purple-700",
    Flask: "bg-gray-200 text-gray-800",
    Streamlit: "bg-red-100 text-red-700",
    NLP: "bg-pink-100 text-pink-700",
    OCR: "bg-teal-100 text-teal-700",
    Bootstrap: "bg-violet-100 text-violet-700",
  };

  const projects = [
    {
      title: "Online Dairy Management System",
      desc: "A platform to streamline farmer registration, milk tracking, and payments.",
      year: "2023",
      emoji: "🥛",
      link: "https://github.com/Chinmay3775/MP-1-Dairy-Management-System--Project",
      tech: ["HTML", "CSS", "JavaScript", "PHP"],
      tag: "Web Development",
      image: "/images/prg1.jpg",
    },
    {
      title: "AI Flashcard Generator",
      desc: "Generates study flashcards from documents using OCR + NLP.",
      year: "2024",
      emoji: "🧠",
      link: "https://github.com/Chinmay3775/Mini-Project-II.git",
      tech: ["Python", "Streamlit", "NLP", "OCR"],
      tag: "AI/ML",
      image: "/images/prg2.jpeg",
    },
    {
      title: "Book Recommendation System",
      desc: "A ML-powered engine suggesting books using collaborative filtering.",
      year: "2023",
      emoji: "📚",
      link: "https://github.com/Chinmay3775/Book-Recommendation-System",
      tech: ["Python", "Scikit-learn", "Flask"],
      tag: "Machine Learning",
      image: "/images/prg3.webp",
    },
    {
      title: "TECH SYMPOSIUM 2K25",
      desc: "Official website for a college tech symposium event featuring registration, schedules, and galleries.",
      year: "2025",
      emoji: "🎓",
      link: "https://github.com/Chinmay3775/DKTE.git",
      live: "https://tech-symposium-2025.web.app/",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      tag: "Web Development",
      image: "/images/prg4.png",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className={`text-3xl lg:text-4xl font-bold mb-4 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`${cardClasses} backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border hover:shadow-2xl hover:-translate-y-2 transition-all`}
            >
              {/* Project Image */}
              {p.image && (
                <div
                  className={`relative h-40 lg:h-48 overflow-hidden ${
                    p.title === "AI Flashcard Generator"
                      ? "h-56 lg:h-64" // Slightly taller for clarity
                      : p.title === "TECH SYMPOSIUM 2K25"
                      ? "h-36 lg:h-44" // Slightly shorter
                      : "h-40 lg:h-48"
                  }`}
                >
                  <img
                    src={p.image}
                    alt={`${p.title} illustration`}
                    className={`w-full h-full ${
                      p.title === "AI Flashcard Generator" || p.title === "TECH SYMPOSIUM 2K25"
                        ? "object-contain bg-white" // scale nicely inside box
                        : "object-cover" // keep default for others
                    }`}
                  />
                  <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/50 text-white px-3 py-1.5 rounded-full text-xs font-semibold">
                    <Calendar size={12} />
                    <span>{p.year}</span>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                <h3
                  className={`text-xl font-bold mb-3 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {p.title}
                </h3>
                <p
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  } text-sm mb-4`}
                >
                  {p.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t, j) => (
                    <span
                      key={j}
                      className={`inline-flex items-center justify-center px-3 py-1 rounded-lg text-xs font-medium ${
                        techColors[t] ||
                        (isDarkMode
                          ? "bg-gray-700 text-gray-300"
                          : "bg-gray-100 text-gray-700")
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links + Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </a>
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-green-600 hover:text-green-700 text-sm font-medium"
                      >
                        <ExternalLink size={14} />
                        <span>Live</span>
                      </a>
                    )}
                  </div>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      isDarkMode
                        ? "bg-gray-700 text-gray-300"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {p.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
