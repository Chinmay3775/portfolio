import React from 'react';

const About = () => {
  return (
    <section id="about" className="container">
      <h2 className="section-title reveal">About Me</h2>

      <div className="about-grid reveal">
        <div className="about-text">
          <p>
            I'm a final-year <strong>Computer Science (AI-ML)</strong> student at <strong>DKTE, Ichalkaranji</strong>, passionate about leveraging AI & ML to solve real-world problems. I've built ML models, web apps, and data analysis tools that make real impact.
          </p>
          <p>
            My journey includes reducing manual work by <strong>40%</strong>, improving classification accuracy by <strong>12%</strong>, and cutting study time by <strong>30%</strong>. I thrive in collaborative environments and love solving challenging problems.
          </p>
          <p>
            I maintain consistent practice on LeetCode and HackerRank to approach problems with optimized solutions. When I'm not coding, I explore the latest in AI research and open-source contributions.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat-card">
            <span className="stat-number">40%</span>
            <span className="stat-label">Manual Work Reduced</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">12%</span>
            <span className="stat-label">Accuracy Improved</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">30%</span>
            <span className="stat-label">Study Time Cut</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
