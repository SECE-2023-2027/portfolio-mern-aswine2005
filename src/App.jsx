import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Header from './components/Header';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Education />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <footer className="footer">
        <div className="container">
          <div className="contact-info">
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> Email: aswinelaiya@gmail.com
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> Phone: +91 9842795095
            </p>
          </div>
          <div className="social-links">
            <a
              href="https://www.instagram.com/a.s.w.i.n.x?igsh=bTNnOGI1amh3ZXo4"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              href="https://github.com/aswine2005"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/aswin-elaiyaraja-252686286/"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;