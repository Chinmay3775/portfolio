import React, { useState } from 'react';

const ServicesPanel = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    { 
      name: "AI Development", 
      desc: "Building intelligent systems with machine learning",
      icon: "🤖",
      details: "Specialized in creating ML models for classification, prediction, and automation. Experience with Python, TensorFlow, and data preprocessing techniques.",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      name: "Web Development", 
      desc: "Full-stack web applications with modern tech",
      icon: "💻",
      details: "Expert in creating responsive web applications using HTML, CSS, JavaScript, React, and backend technologies like PHP and MySQL.",
      color: "from-purple-500 to-pink-500"
    },
    { 
      name: "Data Science", 
      desc: "Data analysis and intelligent insights",
      icon: "📊",
      details: "Proficient in data preprocessing, analysis, and visualization. Experience with NLP, OCR, and automated data processing pipelines.",
      color: "from-green-500 to-emerald-500"
    },
    { 
      name: "Cloud Solutions", 
      desc: "AWS deployment and scalable architecture",
      icon: "☁️",
      details: "Skilled in deploying applications on AWS with security best practices, reducing deployment time and ensuring scalability.",
      color: "from-orange-500 to-red-500"
    },
  ];

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
          Services
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
      </div>
      
      <div className="space-y-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative"
            onMouseEnter={() => setHoveredService(index)}
            onMouseLeave={() => setHoveredService(null)}
          >
            <div className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 transform ${
              hoveredService === index
                ? `bg-gradient-to-r ${service.color} text-white shadow-lg scale-105 -translate-y-1`
                : 'bg-gray-50/80 hover:bg-gray-100/80 text-gray-700'
            }`}>
              <div className="flex items-center space-x-3">
                <div className={`text-2xl p-2 rounded-xl ${
                  hoveredService === index 
                    ? 'bg-white/20' 
                    : 'bg-white shadow-sm'
                }`}>
                  {service.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm truncate">{service.name}</h3>
                  <p className={`text-xs mt-1 ${
                    hoveredService === index ? 'text-white/90' : 'text-gray-500'
                  }`}>
                    {service.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Tooltip for larger screens */}
            {hoveredService === index && (
              <div className="hidden lg:block absolute left-full top-0 ml-4 z-20 w-72 p-5 bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 animate-fade-in">
                <div className="absolute left-0 top-6 w-0 h-0 border-t-4 border-b-4 border-r-8 border-transparent border-r-white transform -translate-x-2"></div>
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`text-2xl p-2 rounded-xl bg-gradient-to-r ${service.color} text-white`}>
                    {service.icon}
                  </div>
                  <h4 className="font-bold text-gray-900">{service.name}</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{service.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Service Stats */}
      <div className="mt-6 pt-6 border-t border-gray-200/50">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              12+
            </div>
            <div className="text-xs text-blue-600 font-medium">Projects</div>
          </div>
          <div className="text-center p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
            <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
              99%
            </div>
            <div className="text-xs text-green-600 font-medium">Success Rate</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ServicesPanel;