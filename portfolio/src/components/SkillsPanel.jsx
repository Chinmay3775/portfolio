import React, { useState, useEffect } from 'react';

const SkillsPanel = () => {
  const [activeCategory, setActiveCategory] = useState('technical');
  const [animatedBars, setAnimatedBars] = useState(new Set());

  const categories = [
    { id: 'technical', label: 'Technical', icon: '⚡' },
    { id: 'tools', label: 'Tools', icon: '🛠️' },
    { id: 'soft', label: 'Soft Skills', icon: '🎯' }
  ];

  const skills = {
    technical: [
      { name: "Python", level: 95, color: "from-blue-500 to-blue-600" },
      { name: "Machine Learning", level: 90, color: "from-green-500 to-green-600" },
      { name: "JavaScript", level: 85, color: "from-yellow-500 to-yellow-600" },
      { name: "Data Science", level: 88, color: "from-purple-500 to-purple-600" },
      { name: "Web Development", level: 82, color: "from-pink-500 to-pink-600" },
      { name: "SQL", level: 78, color: "from-indigo-500 to-indigo-600" }
    ],
    tools: [
      { name: "Git & GitHub", level: 92, color: "from-gray-700 to-gray-800" },
      { name: "AWS", level: 75, color: "from-orange-500 to-orange-600" },
      { name: "Docker", level: 70, color: "from-blue-400 to-blue-500" },
      { name: "Jupyter", level: 90, color: "from-orange-400 to-orange-500" },
      { name: "VS Code", level: 95, color: "from-blue-600 to-blue-700" },
      { name: "Streamlit", level: 85, color: "from-red-500 to-red-600" }
    ],
    soft: [
      { name: "Problem Solving", level: 95, color: "from-emerald-500 to-emerald-600" },
      { name: "Communication", level: 88, color: "from-teal-500 to-teal-600" },
      { name: "Team Work", level: 92, color: "from-cyan-500 to-cyan-600" },
      { name: "Learning Agility", level: 98, color: "from-violet-500 to-violet-600" },
      { name: "Leadership", level: 80, color: "from-rose-500 to-rose-600" },
      { name: "Critical Thinking", level: 90, color: "from-amber-500 to-amber-600" }
    ]
  };

  // Animate bars when category changes
  useEffect(() => {
    setAnimatedBars(new Set());
    const timer = setTimeout(() => {
      setAnimatedBars(new Set(skills[activeCategory].map((_, index) => index)));
    }, 100);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
      
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
          Skills
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"></div>
      </div>
      
      {/* Category Tabs */}
      <div className="flex space-x-1 mb-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl p-1.5 shadow-inner">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`flex-1 flex items-center justify-center space-x-2 py-3 px-2 rounded-xl text-xs font-semibold transition-all duration-300 transform ${
              activeCategory === category.id
                ? 'bg-white text-blue-600 shadow-lg scale-105'
                : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
            }`}
          >
            <span className="text-sm">{category.icon}</span>
            <span className="hidden sm:inline">{category.label}</span>
          </button>
        ))}
      </div>

      {/* Skills List */}
      <div className="space-y-4 mb-6">
        {skills[activeCategory]?.map((skill, index) => (
          <div key={`${activeCategory}-${index}`} className="group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                {skill.name}
              </span>
              <span className="text-xs font-bold bg-gradient-to-r from-gray-500 to-gray-700 bg-clip-text text-transparent">
                {skill.level}%
              </span>
            </div>
            
            <div className="relative w-full bg-gray-200 rounded-full h-2.5 shadow-inner overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left shadow-sm relative ${
                  animatedBars.has(index) ? 'scale-x-100' : 'scale-x-0'
                }`}
                style={{
                  width: animatedBars.has(index) ? `${skill.level}%` : '0%',
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 shimmer-animation"></div>
              </div>
              
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications Section */}
      <div className="pt-6 border-t border-gray-200/50">
        <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center space-x-2">
          <span>🏅</span>
          <span>Recent Certifications</span>
        </h3>
        
        <div className="space-y-3">
          <div className="group p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-md transition-all duration-300 cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-pulse"></div>
              <div className="flex-1">
                <div className="text-xs font-bold text-blue-900">Google AI-ML Virtual Internship</div>
                <div className="text-xs text-blue-700 font-medium">AICTE • 2024</div>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-blue-600 text-xs">✓</span>
              </div>
            </div>
          </div>
          
          <div className="group p-3 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border border-orange-200 hover:shadow-md transition-all duration-300 cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full animate-pulse delay-200"></div>
              <div className="flex-1">
                <div className="text-xs font-bold text-orange-900">AWS Cloud Virtual Internship</div>
                <div className="text-xs text-orange-700 font-medium">AICTE • 2024</div>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-orange-600 text-xs">✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .shimmer-animation {
          animation: shimmer 2s infinite;
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }
        
        /* Custom scrollbar for overflow content */
        ::-webkit-scrollbar {
          width: 4px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
        }
      `}</style>
    </div>
  );
};

export default SkillsPanel;