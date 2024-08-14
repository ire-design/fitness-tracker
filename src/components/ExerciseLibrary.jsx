function ExerciseLibrary() {
    const exercises = [
        { name: 'Push-Up', description: 'Push-ups work your chest, shoulders, and triceps.' },
        { name: 'Squat', description: 'Squats target your thighs, hips, and buttocks.' },
        { name: 'Plank', description: 'Planks engage your core, shoulders, and back.' },
    ];

    return (
        <div>
            <h2>Exercise Library</h2>
            <ul>
                {exercises.map((exercise, index) => (
                    <li key={index}>
                        <strong>{exercise.name}:</strong> {exercise.description}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ExerciseLibrary;
