import React from "react";
import { Briefcase, Github, Calendar, ExternalLink } from "lucide-react";

export default function Experience({ isDarkMode }) {
  const cardClasses = isDarkMode
    ? "bg-gray-800/70 border-gray-700/50"
    : "bg-white/70 border-white/20";

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            Experience
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Internship Example */}
          <div className={`${cardClasses} backdrop-blur-sm p-6 rounded-2xl shadow-xl border`}>
            <div className="flex items-start space-x-4">
              <Briefcase className="text-blue-500 mt-1" size={24} />
              <div className="flex-1">
                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  Google AI-ML Virtual Internship
                </h3>
                <p className="text-blue-600 font-medium mb-1">AICTE</p>
                <p className={`text-sm mb-3 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>2024</p>
                <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} mb-4`}>
                  Built ML models for preprocessing and training, improving classification accuracy by 12%.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Python", "Scikit-learn", "Flask", "ML"].map((tech, i) => (
                    <span key={i} className={`px-2.5 py-1 rounded-lg text-xs font-medium ${
                      isDarkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-700"
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href="https://github.com/Chinmay3775/Book-Recommendation-System"
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
                    Machine Learning
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Example Project */}
          <div className={`${cardClasses} backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border hover:shadow-2xl transition-all`}>
            <div className="relative h-48 bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
              <div className="text-6xl">🎓</div>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-green-100/80 text-green-700">
                  Completed
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <div className="flex items-center space-x-1 bg-black/50 text-white px-3 py-1.5 rounded-full text-xs font-semibold">
                  <Calendar size={12} />
                  <span>2025</span>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                TECH SYMPOSIUM 2K25
              </h3>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} text-sm mb-4`}>
                Official website for a college tech symposium event featuring registration, schedules, and galleries.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML5", "CSS3", "JavaScript", "Bootstrap"].map((tech, i) => (
                  <span key={i} className={`px-2.5 py-1 rounded-lg text-xs font-medium ${
                    isDarkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-700"
                  }`}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <a
                    href="https://github.com/Chinmay3775/DKTE.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    <Github size={14} />
                    <span>Code</span>
                  </a>
                  <a
                    href="https://tech-symposium-2025.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-green-600 hover:text-green-700 text-sm font-medium"
                  >
                    <ExternalLink size={14} />
                    <span>Live</span>
                  </a>
                </div>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                  isDarkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-700"
                }`}>
                  Web Development
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
