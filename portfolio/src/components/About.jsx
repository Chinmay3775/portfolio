import React from "react";

export default function About({ isDarkMode }) {
  const cardClasses = isDarkMode
    ? "bg-gray-800/70 border-gray-700/50"
    : "bg-white/70 border-white/20";

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            About Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        </div>

        <div className={`${cardClasses} backdrop-blur-sm rounded-3xl p-8 shadow-xl border`}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <p className={`text-lg leading-relaxed mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                I'm a final-year Computer Science (AI-ML) student at DKTE, passionate about leveraging AI & ML
                to solve real-world problems. I’ve built ML models, web apps, and data analysis tools
                that make real impact.
              </p>
              <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                My journey includes reducing manual work by 40%, improving classification accuracy by 12%,
                and cutting study time by 30%. I thrive in collaborative environments and
                love solving challenging problems.
              </p>
            </div>
            <div className="text-center">
              <div className="text-8xl mb-4">🎯</div>
              <div className={`text-2xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                Problem Solver
              </div>
              <div className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                Turning ideas into reality
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
