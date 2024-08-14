import { useState, useEffect } from 'react';

function ExerciseLibrary() {
    const [exercises, setExercises] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://exercisedb.p.rapidapi.com/exercises', {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY', // Replace with your RapidAPI key
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        })
        .then(response => response.json())
        .then(data => {
            setExercises(data.slice(0, 10)); // Limiting to 10 exercises for simplicity
            setLoading(false);
        })
        .catch(err => console.error(err));
    }, []);

    if (loading) return <p>Loading exercises...</p>;

    return (
        <div>
            <h2>Exercise Library</h2>
            <ul>
                {exercises.map((exercise) => (
                    <li key={exercise.id}>
                        <strong>{exercise.name}:</strong> {exercise.target}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ExerciseLibrary;
