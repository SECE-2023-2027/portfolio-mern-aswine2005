import React from 'react';

const Education = () => {
  const education = [
    {
      id: 1,
      institution: "Sri Eshwar College of Engineering",
      degree: "Bachelor of Engineering",
      field: "Computer Science and Engineering",
      year: "2023-2027"
    },
    {
      id: 2,
      institution: "Holy Angels Matric Hr Sec School",
      degree: "Higher Secondary Education",
      field: "Computer Science",
      year: "2023"
    }
  ];

  return (
    <section className="education" id="education">
      <div className="container">
        <h2>Education</h2>
        <div className="education-list">
          {education.map((edu) => (
            <div key={edu.id} className="education-card">
              <h3>{edu.institution}</h3>
              <p>{edu.degree}</p>
              <p>{edu.field}</p>
              <p>{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
