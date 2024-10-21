import React from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email'; // Importing Email Icon

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>

          {/* Email with icon */}
          <Box display="flex" alignItems="center">
            <EmailIcon style={{ marginRight: 8, color: '#D44638' }} /> {/* Gmail red color */}
            <p>johnnase6@gmail.com</p>
          </Box>

          
        </div>
      </div>
    </div>
  );
}

export default Contact;
