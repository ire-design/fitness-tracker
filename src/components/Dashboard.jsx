import React from 'react';

function Dashboard({ user }) {
  return (
    <div>
      <h2>Welcome, {user.name || user.email}!</h2>
      <p>This is your fitness dashboard. Here you can see your progress and goals.</p>
    </div>
  );
}

export default Dashboard;