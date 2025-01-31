import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faFileCode, faServer, faDatabase, faLeaf } from '@fortawesome/free-solid-svg-icons';
import { faJava, faHtml5, faCss3Alt, faJsSquare, faReact, faNode } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  const skills = [
    { name: 'C', icon: faCode },
    { name: 'C++', icon: faFileCode },
    { name: 'Java', icon: faJava },
    { name: 'HTML', icon: faHtml5 },
    { name: 'CSS', icon: faCss3Alt },
    { name: 'JavaScript', icon: faJsSquare },
    { name: 'React', icon: faReact },
    { name: 'Node.js', icon: faNode },
    { name: 'Express', icon: faServer },
    { name: 'MongoDB', icon: faDatabase },
    { name: 'Mongoose', icon: faLeaf }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-icon-wrapper">
                <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
              </div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
