import React from 'react';

const PROJECTS = [
  {
    title: "Neuropulse: AI Screen Addiction Detector",
    desc: "Mega project combining AI/ML with Android app to detect screen addiction patterns and prevent dopamine-driven doom scrolling using behavioral analysis.",
    year: "2025",
    github: "https://github.com/Chinmay3775/Neuropulse-MegaProject.git",
    tech: ["Python", "AI/ML", "Java", "Android"],
    img: "https://chinmay3775.github.io/portfolio/images/prg6.png",
  },
  {
    title: "Weapon Detection using YOLOv8",
    desc: "Real-time weapon detection system using YOLOv8 object detection model with computer vision for security applications.",
    year: "2025",
    github: "https://github.com/Chinmay3775/SIH_Prototype.git",
    tech: ["Python", "YOLOv8", "OpenCV"],
    img: "https://chinmay3775.github.io/portfolio/images/prg7.jpg",
  },
  {
    title: "AI Flashcard Generator",
    desc: "Intelligent study tool that generates flashcards from documents using OCR and NLP, reducing study time by 30%.",
    year: "2024",
    github: "https://github.com/Chinmay3775/Mini-Project-II.git",
    tech: ["Python", "Streamlit", "NLP", "OCR"],
    img: "https://chinmay3775.github.io/portfolio/images/prg2.jpeg"
  },
  {
    title: "TECH SYMPOSIUM 2K25",
    desc: "Official interactive website for college tech symposium featuring event registration, schedules, speaker profiles, and dynamic galleries.",
    year: "2024",
    github: "https://github.com/Chinmay3775/DKTE.git",
    live: "https://tech-symposium-2025.web.app/",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    img: "https://chinmay3775.github.io/portfolio/images/prg4.png"
  },
  {
    title: "Book Recommendation System",
    desc: "ML-powered recommendation engine using collaborative filtering to suggest personalized book recommendations.",
    year: "2023",
    github: "https://github.com/Chinmay3775/Book-Recommendation-System",
    tech: ["Python", "Scikit-learn", "Flask"],
    img: "https://chinmay3775.github.io/portfolio/images/prg3.webp"
  },
  {
    title: "Monkey Meme Gesture Tracker",
    desc: "Interactive computer vision application using MediaPipe that tracks hand gestures to dynamically control and trigger meme animations.",
    year: "2024",
    github: "https://github.com/Chinmay3775/Monkey-Meme-Gesture-Tracker.git",
    tech: ["Python", "OpenCV", "MediaPipe"],
    img: "./images/prg9.png"
  },
  {
    title: "Electricity XGB Prediction Model",
    desc: "Advanced machine learning model utilizing XGBoost regression to accurately forecast short-term electricity demand and consumption patterns.",
    year: "2024",
    github: "https://github.com/Chinmay3775/Electricity-XGB-Prediction-Model.git",
    tech: ["Python", "XGBoost", "Pandas", "Scikit-learn"],
    img: "./images/prg8.jpg"
  },
  {
    title: "Online Dairy Management System",
    desc: "Comprehensive platform to streamline farmer registration, milk tracking, quality monitoring, and automated payment processing.",
    year: "2023",
    github: "https://github.com/Chinmay3775/MP-1-Dairy-Management-System--Project",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    img: "https://chinmay3775.github.io/portfolio/images/prg1.jpg"
  },
  {
    title: "Hotel ADI Website",
    desc: "Professional responsive website for Hotel ADI showcasing services, menus, amenities, and online booking system.",
    year: "2024",
    github: "https://github.com/Chinmay3775/WEB-TECH.git",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    img: "https://chinmay3775.github.io/portfolio/images/prg5.jpg"
  }
];

const Projects = () => {
  return (
    <section id="work" className="container">
      <h2 className="section-title reveal">Featured Projects</h2>
      <div className="projects-grid">
        {PROJECTS.map((project, idx) => (
          <div key={idx} className="project-card reveal" style={{ transitionDelay: `${idx * 100}ms` }}>
            <div className="project-img-wrapper">
              <img src={project.img} alt={project.title} className="project-img" loading="lazy" />
              <div className="project-overlay">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="project-link-btn">Live Demo ↗</a>
                )}
                <a href={project.github} target="_blank" rel="noreferrer" className="project-link-btn">Code ↗</a>
              </div>
            </div>
            <div className="project-body">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tech">
                {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
