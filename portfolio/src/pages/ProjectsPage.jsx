import React, { useState } from 'react';
import { Search, Filter, ExternalLink, Github, Calendar, Tag, Code, TrendingUp, Star, ArrowRight } from 'lucide-react';

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTech, setSelectedTech] = useState('all');

  const allProjects = [
    {
      title: "Online Dairy Management System",
      description: "A comprehensive web-based platform designed to streamline dairy farmer registration, milk collection tracking, and payment management. Features include farmer profiles, daily milk records, automated billing, and administrative dashboards.",
      image: "https://images.unsplash.com/photo-1559666126-84f389727b9a?w=400&h=250&fit=crop",
      category: "web development",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
      status: "completed",
      year: "2023",
      achievement: "Reduced manual work by 40%",
      githubLink: "https://github.com/Chinmay3775/MP-1-Dairy-Management-System--Project",
      liveLink: null
    },
    {
      title: "AI Flashcard Generator",
      description: "An intelligent study tool that automatically generates flashcards from uploaded documents using OCR and NLP technologies. The system extracts key concepts, definitions, and creates question-answer pairs.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
      category: "artificial intelligence",
      technologies: ["Python", "Streamlit", "OpenCV", "NLTK", "Tesseract OCR", "Pandas"],
      status: "completed",
      year: "2024",
      achievement: "Cut study time by 30%",
      githubLink: "https://github.com/Chinmay3775/Mini-Project-II.git",
      liveLink: null
    },
    {
      title: "Book Recommendation System",
      description: "A machine learning-powered recommendation engine that suggests books based on user preferences, reading history, and collaborative filtering. Implements multiple algorithms for personalized recommendations.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop",
      category: "machine learning",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Flask"],
      status: "completed",
      year: "2023",
      achievement: "Boosted relevance by 25%",
      githubLink: "https://github.com/Chinmay3775/Book-Recommendation-System",
      liveLink: null
    },{
      
      title: "TECH SYMPOSIUM 2K25",
      description: "Official website for college tech symposium event featuring event registration, schedule management, speaker profiles, and interactive galleries. Built with modern web technologies to provide seamless user experience for participants.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
      category: "web development",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Design"],
      status: "completed",
      year: "2025",
      achievement: "College Event Website",
      githubLink: "https://github.com/Chinmay3775/DKTE.git",
      liveLink: "https://tech-symposium-2025.web.app/"
    
    },
    {
      title: "Restaurant/Cafe Website",
      description: "A modern, responsive website for a restaurant/cafe featuring online menu browsing, reservation system, and contact information. Includes an admin panel for menu management.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop",
      category: "web development",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP", "MySQL"],
      status: "ongoing",
      year: "2024",
      achievement: "In Development",
      githubLink: null,
      liveLink: null
    },
    {
      title: "Weather Data Analysis Dashboard",
      description: "An interactive dashboard for weather data visualization and analysis using historical climate data. Features trend analysis, seasonal patterns, and predictive modeling.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
      category: "data science",
      technologies: ["Python", "Streamlit", "Plotly", "Pandas", "APIs"],
      status: "completed",
      year: "2024",
      achievement: "Real-time processing",
      githubLink: "https://github.com/Chinmay3775/Weather-Dashboard",
      liveLink: "https://weather-dashboard.streamlit.app"
    },
    {
      title: "Personal Finance Tracker",
      description: "A web application for tracking personal expenses, income, and financial goals. Features budget planning, expense categorization, and automated report generation.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
      category: "web development",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
      status: "ongoing",
      year: "2024",
      achievement: "Budget optimization",
      githubLink: "https://github.com/Chinmay3775/Finance-Tracker",
      liveLink: null
    }
  ];

  const categories = ['all', ...new Set(allProjects.map(p => p.category))];
  const technologies = ['all', ...new Set(allProjects.flatMap(p => p.technologies))];

  const filteredProjects = allProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesTech = selectedTech === 'all' || project.technologies.includes(selectedTech);
    
    return matchesSearch && matchesCategory && matchesTech;
  });

  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedTech('all');
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full mb-6">
            <Code className="text-blue-600" size={20} />
            <span className="text-blue-800 font-semibold">My Work</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Featured</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Projects</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my work and experiments in AI, web development, and data science
          </p>
          
          <div className="mt-6 flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <TrendingUp size={16} />
              <span>{filteredProjects.length} Projects</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star size={16} />
              <span>Always Learning</span>
            </div>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/20 mb-12">
          <div className="flex flex-col lg:flex-row gap-4">
            
            <div className="flex-1 relative group">
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full pl-12 pr-4 py-3 bg-white/80 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="relative group">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-white/80 border border-gray-200 rounded-2xl px-4 py-3 pr-10 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-700 cursor-pointer"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
              <Filter size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none group-focus-within:text-blue-500 transition-colors" />
            </div>

            <div className="relative group">
              <select
                value={selectedTech}
                onChange={(e) => setSelectedTech(e.target.value)}
                className="appearance-none bg-white/80 border border-gray-200 rounded-2xl px-4 py-3 pr-10 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-700 cursor-pointer"
              >
                {technologies.map(tech => (
                  <option key={tech} value={tech}>
                    {tech === 'all' ? 'All Technologies' : tech}
                  </option>
                ))}
              </select>
              <Tag size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none group-focus-within:text-blue-500 transition-colors" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <div key={index} className="group bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-sm ${
                    project.status === 'completed' 
                      ? 'bg-green-100/80 text-green-700 border border-green-200' 
                      : project.status === 'ongoing'
                      ? 'bg-blue-100/80 text-blue-700 border border-blue-200'
                      : 'bg-yellow-100/80 text-yellow-700 border border-yellow-200'
                  }`}>
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </span>
                </div>
                
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-semibold">
                    <Calendar size={12} />
                    <span>{project.year}</span>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex space-x-2">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm text-white py-2 px-3 rounded-xl hover:bg-white/30 transition-colors text-sm font-medium"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={16} />
                          <span>Code</span>
                        </a>
                      )}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center space-x-2 bg-blue-600/80 backdrop-blur-sm text-white py-2 px-3 rounded-xl hover:bg-blue-600 transition-colors text-sm font-medium"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={16} />
                          <span>Live</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description.length > 120 ? `${project.description.substring(0, 120)}...` : project.description}
                </p>

                {project.achievement && (
                  <div className="mb-4">
                    <span className={`inline-flex items-center px-3 py-1.5 rounded-xl text-sm font-semibold ${
                      project.status === 'ongoing' 
                        ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                        : 'bg-green-50 text-green-700 border border-green-200'
                    }`}>
                      {project.achievement}
                    </span>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs rounded-lg font-medium transition-colors">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2.5 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs rounded-lg font-medium">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-xs rounded-full font-medium">
                    <Tag size={12} className="mr-1" />
                    {project.category}
                  </span>
                  
                  <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm font-medium group-hover:translate-x-1 transition-all duration-200">
                    <span>View Details</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-6">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No projects found</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button 
              onClick={clearAllFilters}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl hover:shadow-lg transition-all duration-300 font-semibold"
            >
              Clear All Filters
            </button>
          </div>
        )}

        <div className="text-center mt-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Interested in Working Together?
            </h2>
            <p className="text-blue-100 mb-8 text-lg leading-relaxed">
              I'm always excited to take on new challenges and collaborate on innovative projects. 
              Let's discuss how we can bring your ideas to life!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                Start a Project
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                View My Resume
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectsPage;