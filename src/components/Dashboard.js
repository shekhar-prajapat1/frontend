// frontend/src/components/Dashboard.js
import React from 'react';

const Dashboard = ({ user }) => {
    return (
        <div>
            <h2>Welcome, {user.name}!</h2>
            <p>Email: {user.email}</p>
            {/* Add more user details as needed */}
        </div>
    );
};

export default Dashboard;
