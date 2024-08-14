import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import WorkoutPlans from './components/WorkoutPlans';
import Exercises from './components/Exercises';
import Nutrition from './components/Nutrition';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            {!user && (
              <>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
              </>
            )}
            {user && (
              <>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/workout-plans">Workout Plans</Link></li>
                <li><Link to="/exercises">Exercises</Link></li>
                <li><Link to="/nutrition">Nutrition</Link></li>
                <li><button onClick={() => setUser(null)}>Logout</button></li>
              </>
            )}
          </ul>
        </nav>

        <Routes>
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          <Route path="/workout-plans" element={<WorkoutPlans />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/" element={<h1>Welcome to Fitness and Nutrition Tracker</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
