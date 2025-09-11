import React from "react";
import { Mail, Phone, MapPin, Users, Briefcase } from "lucide-react";

export default function Contact({ isDarkMode }) {
  const cardClasses = isDarkMode
    ? "bg-gray-800/70 border-gray-700/50"
    : "bg-white/70 border-white/20";

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className={`text-3xl lg:text-4xl font-bold mb-4 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Let&apos;s Work Together
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4"></div>
          <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            Ready to bring your ideas to life? Let’s connect.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-600 rounded-lg">
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>keripalechinmay@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-green-600 rounded-lg">
                <Phone size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p>+91 9130091352</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-red-600 rounded-lg">
                <MapPin size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold">Location</h3>
                <p>Jaysingpur, Maharashtra, India</p>
              </div>
            </div>
          </div>

          {/* Extra Cards (Leadership / Experience) */}
          <div className="space-y-6">
            <div className={`${cardClasses} p-6 rounded-2xl shadow-xl border`}>
              <Briefcase className="text-orange-500 mb-2" size={24} />
              <h3 className="font-bold mb-1">AWS Cloud Virtual Internship</h3>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                Deployed apps on AWS, reduced deployment time by 30%.
              </p>
            </div>
            <div className={`${cardClasses} p-6 rounded-2xl shadow-xl border`}>
              <Users className="text-purple-500 mb-2" size={24} />
              <h3 className="font-bold mb-1">Vice-President</h3>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                AISA, DKTE | Aug 2024 – Aug 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
