import React from 'react';

const SKILLS = [
  { 
    name: 'Programming', 
    items: ['Python', 'Java', 'C++', 'JavaScript', 'C#', 'Apex', 'SQL', 'PHP'] 
  },
  { 
    name: 'AI, ML & Vision', 
    items: ['Machine Learning', 'XGBoost', 'TensorFlow', 'Scikit-learn', 'YOLOv8', 'OpenCV', 'MediaPipe', 'NLP', 'Data Processing'] 
  },
  { 
    name: 'Web & App Dev', 
    items: ['React', 'Node.js', 'Bootstrap', 'HTML5/CSS3', 'Flask', 'Streamlit', 'Android', 'Salesforce'] 
  },
  { 
    name: 'Cloud & Databases', 
    items: ['AWS (EC2, S3)', 'MySQL', 'SOQL', 'Cloud Deployment'] 
  },
  { 
    name: 'Tools & Ecosystem', 
    items: ['Git/GitHub', 'VS Code', 'Jupyter Notebook', 'Pandas', 'Google Colab'] 
  },
  { 
    name: 'Soft Skills', 
    items: ['Leadership', 'Problem Solving', 'Adaptability', 'Critical Thinking', 'Teamwork', 'Communication'] 
  }
];

const Skills = () => {
  return (
    <section id="skills" className="container">
      <h2 className="section-title reveal">Technical Skills</h2>
      <div className="skills-grid reveal">
        {SKILLS.map((category, idx) => (
          <div key={idx} className="skills-wrapper" style={{ transitionDelay: `${idx * 80}ms` }}>
            <h3 className="skill-category-title">{category.name}</h3>
            <div className="skills-list">
              {category.items.map(skill => (
                <span key={skill} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
