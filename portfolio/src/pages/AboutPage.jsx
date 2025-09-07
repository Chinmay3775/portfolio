import React from 'react';
import { Award, Briefcase, GraduationCap, Users } from 'lucide-react';

const AboutPage = () => {
  const experiences = [
    {
      type: "internship",
      title: "Google AI-ML Virtual Internship",
      organization: "AICTE",
      period: "2024",
      description: "Built ML models for preprocessing and training, improving classification accuracy by 12%.",
      icon: <Briefcase className="text-blue-500" size={24} />,
      skills: ["Machine Learning", "Python", "Data Preprocessing", "Model Training"]
    },
    {
      type: "internship", 
      title: "AWS Cloud Virtual Internship",
      organization: "AICTE",
      period: "2024",
      description: "Deployed applications on AWS with security and scalability best practices, reducing deployment time by 30%.",
      icon: <Briefcase className="text-orange-500" size={24} />,
      skills: ["AWS", "Cloud Computing", "DevOps", "Security"]
    }
  ];

  const achievements = [
    {
      title: "Winner - Ideathon 2022",
      organization: "DKTE",
      description: "First place in college-level innovation competition",
      icon: <Award className="text-yellow-500" size={24} />
    },
    {
      title: "Runner-up - Internal Hackathon",
      organization: "Smart India Hackathon 2024",
      description: "Second place in internal hackathon for SIH 2024",
      icon: <Award className="text-silver-500" size={24} />
    },
    {
      title: "NPTEL Programming in Java",
      organization: "NPTEL",
      description: "Successfully certified in Java programming",
      icon: <GraduationCap className="text-green-500" size={24} />
    }
  ];

  const leadership = [
    {
      title: "Vice-President",
      organization: "AISA, DKTE",
      period: "Aug 2024 – Aug 2025",
      description: "Leading the AI student association and organizing technical events",
      icon: <Users className="text-purple-500" size={24} />
    },
    {
      title: "Team Leader",
      organization: "Mini-Projects & Ideathon 2022",
      period: "2022",
      description: "Led project teams in college competitions and innovation challenges",
      icon: <Users className="text-indigo-500" size={24} />
    }
  ];

  const skills = {
    "Programming Languages": ["C", "C++", "Java", "Python", "HTML/CSS", "JavaScript", "SQL"],
    "AI/ML Technologies": ["Machine Learning", "NLP", "Data Preprocessing", "Model Training"],
    "Tools & Frameworks": ["Git", "GitHub", "VS Code", "Google Colab", "Jupyter Notebook", "Streamlit"],
    "Cloud & Databases": ["AWS", "MySQL", "Linux"],
    "Soft Skills": ["Leadership", "Teamwork", "Communication", "Problem Solving", "Adaptability"]
  };

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Experience Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Experience</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional internships and hands-on experience in AI/ML and cloud technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    <p className="text-blue-600 font-medium mb-1">{exp.organization}</p>
                    <p className="text-gray-500 text-sm mb-3">{exp.period}</p>
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements & Leadership */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Achievements */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">Achievements</h2>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      {achievement.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{achievement.title}</h3>
                      <p className="text-blue-600 font-medium mb-2">{achievement.organization}</p>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">Leadership</h2>
            <div className="space-y-6">
              {leadership.map((role, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      {role.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{role.title}</h3>
                      <p className="text-purple-600 font-medium mb-1">{role.organization}</p>
                      <p className="text-gray-500 text-sm mb-2">{role.period}</p>
                      <p className="text-gray-600">{role.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-blue-100 mb-8 text-lg leading-relaxed">
              I'm always excited to take on new challenges and collaborate on innovative projects. 
              Let's discuss how we can bring your ideas to life!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                Get In Touch
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                View My Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;