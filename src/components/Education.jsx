import React from 'react';

const TIMELINE_EDU = [
  {
    year: 'Nov 2022 – May 2026',
    title: 'B.Tech in Computer Science (AI-ML)',
    org: 'DKTE, Ichalkaranji',
    desc: 'Specializing in Artificial Intelligence and Machine Learning. Building expertise in ML models, deep learning, and data science applications.'
  },
  {
    year: '2020 – 2022',
    title: 'HSC Board',
    org: 'JKV and ANN Jr. College',
    desc: 'Completed Higher Secondary Certificate education with focus on Science stream.'
  },
  {
    year: '2019 – 2020',
    title: 'SSC Board',
    org: 'Alphonsa School',
    desc: 'Completed Secondary School Certificate with strong academic performance.'
  }
];

const Education = () => {
  return (
    <section id="education" className="container">
      <h2 className="section-title reveal">Education</h2>
      <div className="timeline">
        {TIMELINE_EDU.map((item, idx) => (
          <div key={idx} className="timeline-item reveal" style={{ transitionDelay: `${idx * 120}ms` }}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <span className="tl-year">{item.year}</span>
              <h3 className="tl-title">{item.title}</h3>
              <div className="tl-org">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 6 3 6 3s3 0 6-3v-5"/></svg>
                {item.org}
              </div>
              <p className="tl-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
