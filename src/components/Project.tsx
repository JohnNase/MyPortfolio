import React from "react";
import mock01 from '../assets/images/mock1.png'
import mock02 from '../assets/images/mock2.png'
import mock03 from '../assets/images/mock3.png'
import mock04 from '../assets/images/mock4.png'
import mock05 from '../assets/images/mock5.png'
import mock06 from '../assets/images/mock6.png'

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><h2>Water Filter System with React</h2></a>
                <p> The Water Filter Management System enhances sales, scheduling, and management for a water filter company with role-specific dashboards. Sales agents manage schedules and log meetings, while phone agents track calls and schedule appointments. Marketing managers oversee agents and reference details, and the Chief of Operations handles sales approvals, commission management, and inventory oversight, ensuring smooth organizational operations. </p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>Facial Emotion Recognition System </h2></a>
                <p>The Facial Emotion Recognition System is a project designed to accurately predict human emotions from facial images. Utilizing deep neural network algorithms, the system classifies facial emotions into categories: Anger, Fear, Happiness, Neutral, Sadness, and Surprise.</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>Java Bookstore App</h2></a>
                <p>The JavaFX Bookstore App is a desktop application for managing a bookstore's inventory through a user-friendly interface. Users can add, edit, delete, and view books, with search and sort options for easy navigation. Built with Java and JavaFX , it connects to a MySQL database via JDBC to ensure data is stored and retrieved seamlessly. The app provides an efficient way to manage books, offering features like sorting by title, author, or price and searching by keywords.</p>
            </div>
            <div className="project">
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>Flight Booking Website</h2></a>
                <p>The Flight Booking System is a web app designed to simplify airline ticket booking with a user-friendly interface. It provides a seamless experience for both clients and administrators, offering personalized functionalities that make booking and managing flights easy. The app ensures a hassle-free process, enabling users to book tickets in just a few clicks. Technologies used include JavaScript , CSS , HTML , PHP , REST API , AJAX , MySQL database , Admin panel , and XAMPP server .</p>
            </div>
            <div className="project">
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><h2>React E-Commerce Retail Website</h2></a>
                <p>An ongoing e-commerce website project built with React. Features include product listings, a shopping cart, and user authentication. Enjoy a seamless online shopping experience with responsive design and easy navigation.</p>
            </div>
            <div className="project">
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><h2>Movie Recommendation System Using Flask</h2></a>
                <p>A Flask app that suggests movies based on a given title using TF-IDF and cosine similarity. It provides personalized recommendations and detailed movie info from a CSV dataset. Easily run the server and interact with endpoints to get movie details and recommendations.</p>
            </div>
           
        </div>
    </div>
    );
}

export default Project;