import React from 'react';

const ACHIEVEMENTS_DATA = [
  {
    icon: '🏆',
    title: 'Ideathon 2022 Winner',
    org: 'DKTE',
    desc: 'Won first place in college-level Ideathon for innovative project concept and execution.'
  },
  {
    icon: '🥈',
    title: 'Runner-up — Internal Hackathon',
    org: 'Smart India Hackathon 2024',
    desc: 'Secured runner-up position in the internal hackathon round of SIH 2024.'
  },
  {
    icon: '📜',
    title: 'NPTEL Programming in Java',
    org: 'NPTEL Certification',
    desc: 'Completed NPTEL certification course in Java programming with distinction.'
  },
  {
    icon: '🎖️',
    title: 'Google AI-ML & AWS Cloud Certifications',
    org: 'AICTE Virtual Internships',
    desc: 'Completed both Google AI-ML and AWS Cloud virtual internship programs through AICTE.'
  },
  {
    icon: '👥',
    title: 'Vice-President, AISA',
    org: 'DKTE — Aug 2024 to Aug 2025',
    desc: 'Elected as Vice-President of AISA student association, leading technical events and initiatives.'
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="container">
      <h2 className="section-title reveal">Achievements & Certifications</h2>
      <div className="achievements-grid">
        {ACHIEVEMENTS_DATA.map((item, idx) => (
          <div key={idx} className="achievement-card reveal" style={{ transitionDelay: `${idx * 80}ms` }}>
            <div className="achievement-icon">{item.icon}</div>
            <div className="achievement-body">
              <h3 className="achievement-title">{item.title}</h3>
              <span className="achievement-org">{item.org}</span>
              <p className="achievement-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
