import React, { useState } from 'react';
import { MapPin, Mail, Download, Github, Linkedin, Play, Star } from 'lucide-react';

const ProfileCenter = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const downloadResume = () => {
    // Note: Replace with your actual resume file path
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Make sure to add your resume to the public folder
    link.download = 'Chinmay_Keripale_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="text-center max-w-2xl mx-auto">
      
      {/* Profile Image Section */}
      <div className="relative mb-8 group">
        <div className="w-80 h-80 mx-auto relative">
          
          {/* Main Image */}
          <div className="w-full h-full relative overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="/profile.jpg" // Replace with your profile image path
              alt="Chinmay Keripale"
              className={`w-full h-full object-cover transition-all duration-700 ${
                isImageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
              }`}
              onLoad={() => setIsImageLoaded(true)}
            />
            
            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          {/* Available Status Badge */}
          <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-400 to-green-500 text-white px-4 py-2 rounded-full shadow-lg animate-bounce">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">Available</span>
            </div>
          </div>
          
          {/* Online Status */}
          <div className="absolute -bottom-3 -left-3 bg-white/95 backdrop-blur-sm p-3 rounded-full shadow-lg border border-white/20">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-semibold text-gray-700">Online</span>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-6 -right-6 w-8 h-8 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-30 animate-pulse delay-500"></div>
        </div>
      </div>

      {/* Name and Title */}
      <div className="mb-6">
        <h1 className="text-5xl lg:text-6xl font-bold mb-3">
          <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent">
            Chinmay
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Keripale
          </span>
        </h1>
        
        <div className="flex items-center justify-center space-x-2 mb-3">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <p className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI & ML Engineer
          </p>
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-300"></div>
        </div>
        
        {/* Location */}
        <div className="flex items-center justify-center space-x-2 text-gray-600">
          <MapPin size={16} className="text-red-500" />
          <span className="text-sm font-medium">Ichalkaranji, Maharashtra, India</span>
        </div>
      </div>

      {/* Description */}
      <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
        <p className="text-gray-700 leading-relaxed font-medium">
          Innovative AI & ML Engineer passionate about creating 
          <span className="text-blue-600 font-semibold"> intelligent solutions</span> that drive 
          <span className="text-purple-600 font-semibold"> measurable business impact</span> through 
          cutting-edge technology and creative problem-solving.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button className="group flex items-center space-x-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
          <Play size={20} className="group-hover:animate-bounce" />
          <span className="font-semibold">Let's Collaborate</span>
        </button>
        
        <button 
          onClick={downloadResume}
          className="group flex items-center space-x-2 bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-2xl hover:border-gray-300 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <Download size={20} className="group-hover:animate-bounce" />
          <span className="font-semibold">Download Resume</span>
        </button>
      </div>

      {/* Social Links */}
      <div className="flex justify-center space-x-4 mb-8">
        <a
          href="mailto:keripalechinmay@gmail.com"
          className="group p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 text-gray-600 hover:text-red-500 border border-white/20"
        >
          <Mail size={24} className="group-hover:animate-pulse" />
        </a>
        
        <a
          href="https://github.com/Chinmay3775"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 text-gray-600 hover:text-gray-900 border border-white/20"
        >
          <Github size={24} className="group-hover:animate-pulse" />
        </a>
        
        <a
          href="https://linkedin.com/in/chinmaykeripale"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 text-gray-600 hover:text-blue-600 border border-white/20"
        >
          <Linkedin size={24} className="group-hover:animate-pulse" />
        </a>
      </div>

      {/* Achievement Highlight */}
      <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 rounded-2xl p-6 border-2 border-gradient-to-r from-yellow-200 to-orange-200 shadow-lg">
        <div className="flex items-center justify-center space-x-3 mb-2">
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <Star key={i} size={16} className="text-yellow-500 fill-current animate-pulse" style={{animationDelay: `${i * 200}ms`}} />
            ))}
          </div>
          <span className="text-yellow-800 font-bold">Recent Achievement</span>
        </div>
        <div className="text-yellow-700 font-semibold">Winner - College Ideathon 2022</div>
        <div className="text-yellow-600 text-sm mt-1">First place in innovation competition</div>
      </div>
    </div>
  );
};

export default ProfileCenter;