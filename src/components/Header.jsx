import React from 'react';
import profileImage from '../assets/images/image.jpg'

const Header = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Copy of RESUME_ASWIN_E.docx'; 
    link.download = 'ASWIN_ELAIYARAJA_Resume.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="profile-info">
            <h1>ASWIN ELAIYARAJA</h1>
            <h2>Full Stack Developer</h2>
            <button className="btn" onClick={handleDownloadResume}>
              Download Resume <i className="fas fa-download"></i>
            </button>
          </div>
          <div className="profile-image">
            <img src={profileImage} alt="Aswin Elaiyaraja" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
