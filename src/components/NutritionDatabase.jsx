import { useState } from 'react';

function NutritionDatabase() {
    const [food, setFood] = useState('');
    const [nutrition, setNutrition] = useState(null);

    const handleSearch = () => {
        fetch(`https://api.edamam.com/api/food-database/v2/parser?ingr=${food}&app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY`)
        .then(response => response.json())
        .then(data => setNutrition(data.parsed[0].food.nutrients))
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
                    <h3>Nutrition Information</h3>
                    <p>Calories: {nutrition.ENERC_KCAL} kcal</p>
                    <p>Protein: {nutrition.PROCNT} g</p>
                    <p>Carbs: {nutrition.CHOCDF} g</p>
                    <p>Fat: {nutrition.FAT} g</p>
                </div>
            )}
        </div>
    );
}

export default NutritionDatabase;
