import React from "react";
import { Award, Code, GraduationCap, Star } from "lucide-react";

export default function Achievements({ isDarkMode }) {
  const cardClasses = isDarkMode
    ? "bg-gray-800/70 border-gray-700/50"
    : "bg-white/70 border-white/20";

  const achievements = [
    { icon: <Award className="text-yellow-500" size={24} />, title: "Winner - Ideathon 2022", org: "DKTE" },
    { icon: <Award className="text-gray-500" size={24} />, title: "Runner-up - Internal Hackathon", org: "SIH 2024" },
    { icon: <GraduationCap className="text-green-500" size={24} />, title: "NPTEL Programming in Java", org: "NPTEL" },
    { icon: <Code className="text-blue-500" size={24} />, title: "Google AI-ML Virtual Internship", org: "AICTE" },
    { icon: <Code className="text-orange-500" size={24} />, title: "AWS Cloud Virtual Internship", org: "AICTE" },
  ];

  return (
    <section id="achievements" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            Achievements & Certifications
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <div key={i} className={`${cardClasses} p-6 rounded-xl shadow-xl border`}>
              <div className="flex items-start space-x-4">
                {a.icon}
                <div>
                  <h3 className={`font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>{a.title}</h3>
                  <p className="text-sm text-gray-500">{a.org}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
