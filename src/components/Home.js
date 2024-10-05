// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Ensure the correct path to your CSS file

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to Web DailiGo</h1>
            <p>Your gateway to success in JEE and NEET.</p>
            <div className="buttons">
                <Link to="/register" className="button getStartedButton">Get Started</Link>
                <Link to="/login" className="button">Login</Link>
            </div>
        </div>
    );
};

export default Home;
