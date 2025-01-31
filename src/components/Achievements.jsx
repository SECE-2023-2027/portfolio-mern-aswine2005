import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Tech Fusion Finalist",
      description: "Reached the finals of the Tech Fusion competition, demonstrating exceptional technical skills and innovation."
    },
    {
      id: 2,
      title: "CODE FIESTA'24 - RUNNER UP",
      description: "Secured second place in CODE FIESTA'24, showcasing strong programming and problem-solving abilities."
    },
    {
      id: 3,
      title: "SIH College Level Participation",
      description: "Participated in Smart India Hackathon at the college level, contributing to innovative solutions for real-world problems."
    },
    {
      id: 4,
      title: "NPTEL Java Certification",
      description: "Achieved 67% with elite certificate in NPTEL Java course, demonstrating proficiency in Java programming."
    }
  ];

  return (
    <section className="achievements" id="achievements">
      <div className="container">
        <h2>Achievements</h2>
        <div className="achievements-grid">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="achievement-card">
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
