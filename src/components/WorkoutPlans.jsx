import { useState, useEffect } from 'react';

function WorkoutPlans() {
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://wger.de/api/v2/workout/', {
            method: 'GET'
        })
        .then(response => response.json())
        .then(data => {
            setPlans(data.results.slice(0, 10)); 
            setLoading(false);
        })
        .catch(err => console.error(err));
    }, []);

    if (loading) return <p>Loading workout plans...</p>;

    return (
        <div>
            <h2>Workout Plans</h2>
            <ul>
                {plans.map((plan, index) => (
                    <li key={index}>
                        <strong>{plan.name}</strong>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default WorkoutPlans;
