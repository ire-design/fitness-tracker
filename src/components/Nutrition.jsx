import React, { useState } from 'react';

function Nutrition() {
  const [foods, setFoods] = useState([
    { id: 1, name: 'Apple', calories: 95, protein: 0.5, carbs: 25, fat: 0.3 },
    { id: 2, name: 'Chicken Breast', calories: 165, protein: 31, carbs: 0, fat: 3.6 },
  ]);

  return (
    <div>
      <h2>Nutrition Information</h2>
      {foods.map((food) => (
        <div key={food.id}>
          <h3>{food.name}</h3>
          <p>Calories: {food.calories}</p>
          <p>Protein: {food.protein}g</p>
          <p>Carbs: {food.carbs}g</p>
          <p>Fat: {food.fat}g</p>
        </div>
      ))}
    </div>
  );
}

export default Nutrition;