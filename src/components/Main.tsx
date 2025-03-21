import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import avatar from '../assets/images/avatar.jpeg'

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
        <img src={avatar} alt="Avatar" style={{ width: '300px', height: '300px' }} />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/JohnNase" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/john-nase-872788257/?originalSubdomain=al" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>John Nase</h1>
          <p>Junior Software Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/JohnNase" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/john-nase-872788257/?originalSubdomain=al" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;