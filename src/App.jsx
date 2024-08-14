import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import WorkoutPlans from './components/WorkoutPlans';
import ExerciseLibrary from './components/ExerciseLibrary';
import NutritionDatabase from './components/NutritionDatabase';

function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/workouts">Workouts</Link>
                <Link to="/exercises">Exercises</Link>
                <Link to="/nutrition">Nutrition</Link>
            </nav>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/profile" component={UserProfile} />
                <Route path="/workouts" component={WorkoutPlans} />
                <Route path="/exercises" component={ExerciseLibrary} />
                <Route path="/nutrition" component={NutritionDatabase} />
            </Switch>
        </Router>
    );
}

export default App;
