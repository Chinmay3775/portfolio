import React from "react";

export default function Skills({ isDarkMode }) {
  const cardClasses = isDarkMode
    ? "bg-gray-800/70 border-gray-700/50"
    : "bg-white/70 border-white/20";

  const skillGroups = {
    "Programming Languages": ["C", "C++", "Java", "Python", "JavaScript", "SQL"],
    "AI/ML Technologies": ["Machine Learning", "NLP", "Data Preprocessing", "Model Training", "Scikit-learn", "TensorFlow"],
    "Web Technologies": ["HTML/CSS", "JavaScript", "React", "PHP", "Bootstrap", "Node.js"],
    "Tools & Frameworks": ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Streamlit", "Google Colab"],
    "Cloud & Databases": ["AWS", "MySQL"],
    "Soft Skills": ["Leadership", "Teamwork", "Communication", "Problem Solving", "Adaptability", "Critical Thinking"]
  };

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            Technical Skills
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillGroups).map(([title, skills], idx) => (
            <div key={idx} className={`${cardClasses} backdrop-blur-sm p-6 rounded-2xl shadow-xl border`}>
              <h3 className={`text-lg font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                {title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((s, i) => (
                  <span
                    key={i}
                    className={`px-3 py-2 text-sm rounded-lg font-medium cursor-default transition-all ${
                      isDarkMode
                        ? "bg-gray-700 hover:bg-gray-600 text-gray-200"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
