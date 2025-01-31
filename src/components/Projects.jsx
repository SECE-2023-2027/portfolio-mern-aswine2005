import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Wall-E",
      description: "An Automated Human Waste Cleaner Developed With IOT. This innovative project combines robotics and IoT technology to create an autonomous system for efficient waste management, improving sanitation and reducing human intervention in hazardous cleaning tasks.",
      technologies: ["IoT", "Robotics", "Automation"]
    },
    {
      id: 2,
      title: "SLOT-IN",
      description: "A Mobile Application Which Reminds You To Take Care Your Works. This smart task management app helps users stay organized by providing timely reminders and notifications for their daily tasks and responsibilities.",
      technologies: ["Mobile Development", "Task Management", "Notifications"]
    },
    {
      id: 3,
      title: "AGRONOMY",
      description: "A Website Which Provides Information About Agriculture And It Is A Product Selling Platform. This comprehensive platform serves as both an educational resource for agricultural information and an e-commerce solution for agricultural products.",
      technologies: ["Web Development", "E-commerce", "Agriculture"]
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
