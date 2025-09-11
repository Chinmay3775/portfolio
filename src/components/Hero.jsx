import React from "react";
import { Mail, Download, MapPin, Github, Linkedin, CodeXml } from "lucide-react";

export default function Hero({ isDarkMode }) {
  const cardClasses = isDarkMode
    ? "bg-gray-800/70 border-gray-700/50"
    : "bg-white/70 border-white/20";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-32 overflow-hidden"
    >
      {/* 🔹 Gradient Blobs */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-20 right-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-200"></div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Profile Image */}
        <div className="w-80 h-80 mx-auto mb-8 relative">
          <img
            src="profile.jpg" // 👉 make sure image is inside public/
            alt="Chinmay Keripale"
            className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-blue-500"
          />
          {/* Availability Badge */}
          <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-400 to-green-500 text-white px-4 py-2 rounded-full shadow-lg animate-bounce">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">Available</span>
            </div>
          </div>
        </div>

        {/* Name & Title */}
        <h1 className="text-5xl lg:text-6xl font-bold mb-4">
          <span className={isDarkMode ? "text-white" : "text-gray-800"}>Chinmay</span>
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Keripale
          </span>
        </h1>
        <p className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Final Year AI & ML Engineering Student
        </p>

        {/* Location */}
        <div className="flex items-center justify-center space-x-2 mb-6">
          <MapPin size={16} className="text-red-500" />
          <span className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            Jaysingpur, Maharashtra, India
          </span>
        </div>

        {/* Intro Card */}
        <div className={`${cardClasses} backdrop-blur-sm rounded-2xl p-6 mb-8 border shadow-xl`}>
          <p className={`leading-relaxed font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
            Innovative AI & ML Engineer passionate about creating
            <span className="text-blue-600 font-semibold"> intelligent solutions</span> that drive
            <span className="text-purple-600 font-semibold"> measurable business impact</span> through
            cutting-edge technology and creative problem-solving.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="#contact"
            className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            <Mail size={20} />
            <span className="font-semibold">Let's Collaborate</span>
          </a>

          <a
            href={`${import.meta.env.BASE_URL}Chinmay_Keripale_Resume.pdf`}
            download="Chinmay_Keripale_Resume.pdf"
            className={`flex items-center space-x-2 ${cardClasses} backdrop-blur-sm border-2 px-8 py-4 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
          >
            <Download size={20} />
            <span className="font-semibold">Download Resume</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4">
          <a
            href="mailto:keripalechinmay@gmail.com"
            className={`w-24 h-24 ${cardClasses} rounded-2xl shadow-lg border flex flex-col items-center justify-center
             transform transition-all duration-300 ease-in-out
             hover:scale-110 hover:-translate-y-1 hover:shadow-xl`}
          >
            <Mail size={24} className="text-red-500" />
            <span className="mt-1 text-sm font-medium">Mail</span>

          </a>
          <a
            href="https://github.com/Chinmay3775"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-24 h-24 ${cardClasses} rounded-2xl shadow-lg border flex flex-col items-center justify-center
             transform transition-all duration-300 ease-in-out
             hover:scale-110 hover:-translate-y-1 hover:shadow-xl`}
          >
            <Github size={24} className={isDarkMode ? "text-gray-300" : "text-gray-700"} />
            <span className="mt-1 text-sm font-medium">GitHub</span>

          </a>
          <a
            href="https://linkedin.com/in/chinmaykeripale"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-24 h-24 ${cardClasses} rounded-2xl shadow-lg border flex flex-col items-center justify-center
             transform transition-all duration-300 ease-in-out
             hover:scale-110 hover:-translate-y-1 hover:shadow-xl`}
          >
            <Linkedin size={24} className="text-blue-600" />
            <span className="mt-1 text-sm font-medium">LinkedIn</span>
          </a>
          <a
            href="https://leetcode.com/u/chinmay3775/"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-24 h-24 ${cardClasses} rounded-2xl shadow-lg border flex flex-col items-center justify-center
             transform transition-all duration-300 ease-in-out
             hover:scale-110 hover:-translate-y-1 hover:shadow-xl`}
          >
            <CodeXml size={24} className={isDarkMode ? "text-gray-300" : "text-gray-700"} />
            <span className="mt-1 text-sm font-medium">LeetCode</span>

          </a>
        </div>
      </div>
    </section>
  );
}
