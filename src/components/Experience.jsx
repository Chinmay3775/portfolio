import React from "react";
import { Briefcase, Github } from "lucide-react";

export default function Experience({ isDarkMode }) {
  const cardClasses = isDarkMode
    ? "bg-gray-800/70 border-gray-700/50"
    : "bg-white/70 border-white/20";

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className={`text-3xl lg:text-4xl font-bold mb-4 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Experience
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Google AI-ML Internship */}
          <div
            className={`${cardClasses} backdrop-blur-sm p-6 rounded-2xl shadow-xl border`}
          >
            <div className="flex items-start space-x-4">
              <Briefcase className="text-blue-500 mt-1" size={24} />
              <div className="flex-1">
                <h3
                  className={`text-xl font-bold mb-2 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Google AI-ML Virtual Internship
                </h3>
                <p className="text-blue-600 font-medium mb-1">AICTE</p>
                <p
                  className={`text-sm mb-3 ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  2024
                </p>
                <p
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  } mb-4`}
                >
                  Built ML models for preprocessing and training, improving
                  classification accuracy by 12%.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Python", "Scikit-learn", "Flask", "ML"].map((tech, i) => (
                    <span
                      key={i}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium ${
                        isDarkMode
                          ? "bg-gray-700 text-gray-300"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
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
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      isDarkMode
                        ? "bg-gray-700 text-gray-300"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    Machine Learning
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* AWS Cloud Internship */}
          <div
            className={`${cardClasses} backdrop-blur-sm p-6 rounded-2xl shadow-xl border`}
          >
            <div className="flex items-start space-x-4">
              <Briefcase className="text-yellow-500 mt-1" size={24} />
              <div className="flex-1">
                <h3
                  className={`text-xl font-bold mb-2 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  AWS Cloud Virtual Internship
                </h3>
                <p className="text-blue-600 font-medium mb-1">AICTE</p>
                <p
                  className={`text-sm mb-3 ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  2024
                </p>
                <p
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  } mb-4`}
                >
                  Deployed applications on AWS with security and scalability best
                  practices, reducing deployment time by 30%.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["AWS", "EC2", "S3", "Cloud Deployment"].map((tech, i) => (
                    <span
                      key={i}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium ${
                        isDarkMode
                          ? "bg-gray-700 text-gray-300"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      isDarkMode
                        ? "bg-gray-700 text-gray-300"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    Cloud Computing
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
