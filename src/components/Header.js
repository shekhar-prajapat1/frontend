// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';  // Ensure this file is linked correctly

const Header = () => {
    return (
        <header className="header">
            <div className="logo">DailiGo</div>
            <nav className="nav">
                <ul className="navList">
                    <li className="navItem"><Link to="/all-courses">All Courses</Link></li>
                    <li className="navItem"><Link to="/quizzes">Quizzes</Link></li>
                    <li className="navItem"><Link to="/wd-store">WD (Book Store)</Link></li>
                    <li className="navItem">
                        <Link to="/login">
                            <button className="button">Login</button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
