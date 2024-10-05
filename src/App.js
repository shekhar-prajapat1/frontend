// src/App.js

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Courses from './components/Courses';
import Quizzes from './components/Quizzes';
import WDStore from './components/WDStore';
import Header from './components/Header';

function App() {
    return (
        <Router>
            <Header /> {/* Render Header only once here */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/quizzes" element={<Quizzes />} />
                <Route path="/wd-store" element={<WDStore />} />
            </Routes>
        </Router>
    );
}

export default App;
