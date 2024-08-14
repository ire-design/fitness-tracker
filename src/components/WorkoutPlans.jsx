import React, { useState } from 'react';

function WorkoutPlans() {
  const [plans, setPlans] = useState([
    { id: 1, name: 'Weight Loss Plan', description: 'A plan focused on burning calories and losing weight.' },
    { id: 2, name: 'Muscle Gain Plan', description: 'A plan designed to build muscle mass and strength.' },
  ]);

  return (
    <div>
      <h2>Workout Plans</h2>
      {plans.map((plan) => (
        <div key={plan.id}>
          <h3>{plan.name}</h3>
          <p>{plan.description}</p>
        </div>
      ))}
    </div>
  );
}

export default WorkoutPlans;