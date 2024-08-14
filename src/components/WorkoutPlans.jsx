import { useState } from 'react';

function WorkoutPlans() {
    const [plans, setPlans] = useState([
        { name: 'Weight Loss Plan' },
        { name: 'Muscle Gain Plan' },
        { name: 'Endurance Plan' }
    ]);
    const [customPlan, setCustomPlan] = useState('');

    const addCustomPlan = () => {
        if (customPlan) {
            setPlans([...plans, { name: customPlan }]);
            setCustomPlan('');
        }
    };

    return (
        <div>
            <h2>Workout Plans</h2>
            <ul>
                {plans.map((plan, index) => (
                    <li key={index}>{plan.name}</li>
                ))}
            </ul>
            <input
                type="text"
                placeholder="Add Custom Plan"
                value={customPlan}
                onChange={(e) => setCustomPlan(e.target.value)}
            />
            <button onClick={addCustomPlan}>Add Plan</button>
        </div>
    );
}

export default WorkoutPlans;
