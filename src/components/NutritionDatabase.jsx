import { useState } from 'react';

function NutritionDatabase() {
    const [food, setFood] = useState('');
    const [nutrition, setNutrition] = useState(null);

    const handleSearch = () => {
        fetch(`https://trackapi.nutritionix.com/v2/natural/nutrients`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-app-id': 'YOUR_APP_ID',         // Replace with your Nutritionix app ID
                'x-app-key': 'YOUR_APP_KEY',       // Replace with your Nutritionix app key
            },
            body: JSON.stringify({
                query: food,
            }),
        })
        .then(response => response.json())
        .then(data => setNutrition(data.foods[0]))
        .catch(err => console.error(err));
    };

    return (
        <div>
            <h2>Nutrition Database</h2>
            <input
                type="text"
                placeholder="Search food"
                value={food}
                onChange={(e) => setFood(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            {nutrition && (
                <div>
                    <h3>{nutrition.food_name}</h3>
                    <p>Calories: {nutrition.nf_calories} kcal</p>
                    <p>Protein: {nutrition.nf_protein} g</p>
                    <p>Carbs: {nutrition.nf_total_carbohydrate} g</p>
                    <p>Fat: {nutrition.nf_total_fat} g</p>
                </div>
            )}
        </div>
    );
}

export default NutritionDatabase;
