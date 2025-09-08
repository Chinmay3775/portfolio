import React from "react";
import { Github, Calendar, ExternalLink } from "lucide-react";

export default function Projects({ isDarkMode }) {
  const cardClasses = isDarkMode
    ? "bg-gray-800/70 border-gray-700/50"
    : "bg-white/70 border-white/20";

  const projects = [
    {
      title: "Online Dairy Management System",
      desc: "A platform to streamline farmer registration, milk tracking, and payments.",
      year: "2023",
      emoji: "🥛",
      link: "https://github.com/Chinmay3775/MP-1-Dairy-Management-System--Project",
      tech: ["HTML", "CSS", "JavaScript", "PHP"],
      tag: "Web Development",
    },
    {
      title: "AI Flashcard Generator",
      desc: "Generates study flashcards from documents using OCR + NLP.",
      year: "2024",
      emoji: "🧠",
      link: "https://github.com/Chinmay3775/Mini-Project-II.git",
      tech: ["Python", "Streamlit", "NLP", "OCR"],
      tag: "AI/ML",
    },
    {
      title: "Book Recommendation System",
      desc: "A ML-powered engine suggesting books using collaborative filtering.",
      year: "2023",
      emoji: "📚",
      link: "https://github.com/Chinmay3775/Book-Recommendation-System",
      tech: ["Python", "Scikit-learn", "Flask"],
      tag: "Machine Learning",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`${cardClasses} backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border hover:shadow-2xl hover:-translate-y-2 transition-all`}
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <div className="text-6xl">{p.emoji}</div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-green-100/80 text-green-700">
                    Completed
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 bg-black/50 text-white px-3 py-1.5 rounded-full text-xs font-semibold">
                    <Calendar size={12} />
                    <span>{p.year}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>{p.title}</h3>
                <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} text-sm mb-4`}>
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t, j) => (
                    <span key={j} className={`px-2.5 py-1 rounded-lg text-xs font-medium ${
                      isDarkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-700"
                    }`}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    <Github size={14} />
                    <span>View Code</span>
                  </a>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    isDarkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-700"
                  }`}>
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
