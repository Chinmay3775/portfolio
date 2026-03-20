import React from 'react';

const EXPERIENCES = [
  {
    year: '2025 - Present',
    title: 'Software Engineer Trainee',
    org: 'Thinqloud Solutions',
    desc: 'Working on enterprise-level applications focusing on Salesforce and backend development. Implementing scalable business logic, debugging production issues, and contributing to real-time systems used in industry environments.',
    tech: ['Salesforce', 'Apex', 'SOQL', '.NET', 'C#']
  },
  {
    year: '2024',
    title: 'Google AI-ML Virtual Internship',
    org: 'AICTE',
    desc: 'Built ML models for preprocessing and training, improving classification accuracy by 12%. Gained hands-on experience with real-world datasets and model optimization.',
    tech: ['Python', 'Scikit-learn', 'Flask', 'Machine Learning']
  },
  {
    year: '2024',
    title: 'AWS Cloud Virtual Internship',
    org: 'AICTE',
    desc: 'Deployed applications on AWS with security and scalability best practices, reducing deployment time by 30%. Worked with core AWS services for cloud infrastructure.',
    tech: ['AWS', 'EC2', 'S3', 'Cloud Deployment']
  }
];

const Experience = () => {
  return (
    <section id="experience" className="container">
      <h2 className="section-title reveal">Experience</h2>
      <div className="timeline">
        {EXPERIENCES.map((item, idx) => (
          <div key={idx} className="timeline-item reveal" style={{ transitionDelay: `${idx * 120}ms` }}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <span className="tl-year">{item.year}</span>
              <h3 className="tl-title">{item.title}</h3>
              <div className="tl-org">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
                {item.org}
              </div>
              <p className="tl-desc">{item.desc}</p>
              <div className="tl-tech">
                {item.tech.map(t => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;