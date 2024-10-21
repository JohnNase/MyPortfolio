import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience</h1>
        <VerticalTimeline>
         
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Member in Google Developer Club</h3>
            <h4 className="vertical-timeline-element-subtitle">Epoka University</h4>
            <p>
            I was a member of the Google Developers Club at Epoka University for two years, where I gained valuable insights into the cloud tech stack used by Google.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2021 - 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Programming Club member </h3>
            <h4 className="vertical-timeline-element-subtitle">Epoka University </h4>
            <p>
            I was a member of the Programming Club at Epoka University, where I participated in weekly contests similar to LeetCode. These competitions significantly enhanced my coding skills and problem-solving abilities, allowing me to code more efficiently and effectively.            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Software Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">Epoka University</h4>
            <p>
            Completed an English-taught program with a cGPA of 3.74/4.0. The program offered strong focus on subjects such as Object-Oriented Programming, 
Operating Systems, Artificial Intelligence, Software Project and Management, Testing and QA, 
etc.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--school"
            date="2018 - 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Sami Frasheri High School</h3>
            <h4 className="vertical-timeline-element-subtitle">Tirana, Albania</h4>
            <p>
              GPA: 9.8/10
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;