import React from "react";
import { GraduationCap } from "lucide-react";

export default function Education({ isDarkMode }) {
  const cardClasses = isDarkMode
    ? "bg-gray-800/70 border-gray-700/50"
    : "bg-white/70 border-white/20";

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            Education
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        </div>

        <div className="space-y-6">
          {/* B.Tech */}
          <div className={`${cardClasses} p-6 rounded-2xl shadow-xl border`}>
            <div className="flex items-start space-x-4">
              <GraduationCap className="text-blue-500" size={24} />
              <div>
                <h3 className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  B.Tech in Computer Science (AI-ML)
                </h3>
                <p className="text-blue-600 font-medium">DKTE, Ichalkaranji</p>
                <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                  Nov 2022 – May 2026 (Expected)
                </p>
              </div>
            </div>
          </div>

          {/* HSC & SSC */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`${cardClasses} p-6 rounded-2xl shadow-xl border`}>
              <div className="flex items-start space-x-4">
                <GraduationCap className="text-green-500" size={20} />
                <div>
                  <h3 className={`text-lg font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    HSC Board
                  </h3>
                  <p className="text-green-600 font-medium">JKV and ANN Jr. College</p>
                  <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                    2020 – 2022
                  </p>
                </div>
              </div>
            </div>

            <div className={`${cardClasses} p-6 rounded-2xl shadow-xl border`}>
              <div className="flex items-start space-x-4">
                <GraduationCap className="text-purple-500" size={20} />
                <div>
                  <h3 className={`text-lg font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    SSC Board
                  </h3>
                  <p className="text-purple-600 font-medium">Alphonsa School</p>
                  <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                    2019 – 2020
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
