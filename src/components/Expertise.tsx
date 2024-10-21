import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "C and C++",
    "Java",
    "JavaScript",
    "PHP",
    "Python",
    "SQL",
    "Rest API",
    "AJAX", 
    "HTML",
    "CSS",
];

const labelsSecond = [
    "GitHub",
    "Figma",
    "Jira",
    "Slack",
    "Trello",
];

const labelsThird = [
    "OpenCV",
    "Deep Learning",
    "Python",
    "Data Mining",
    "Tensorflow",
    "Keras",
    "matplotlib",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Development</h3>
                    <p>I have built web applications from scratch using various technologies, including React, Java, PHP, HTML, CSS, and JavaScript, while enhancing my collaboration skills as a Developer.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Project Management, UI/UX, Testing & QA</h3>
                    <p>I have a solid understanding of Scrum and Agile methodologies, which have equipped me with the skills to effectively manage projects, facilitate team collaboration, and adapt to changing requirements throughout the development process. Additionally, I have experience as a Business Analyst, further enhancing my ability to align project goals with client needs.</p>                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Computer Vision and Machine Learning</h3>
                    <p>I have experience in computer vision and AI, showcased through my development of a Facial Emotion Recognition System for my Graduation Project that utilizes deep neural networks for classifying emotions from images. </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;