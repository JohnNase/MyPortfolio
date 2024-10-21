import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/JohnNase" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/john-nase-872788257/?originalSubdomain=al" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>John Nase's Portfolio Website</p>
    </footer>
  );
}

export default Footer;