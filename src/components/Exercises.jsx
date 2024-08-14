import React, { useState } from 'react';

function Exercises() {
  const [exercises, setExercises] = useState([
    { id: 1, name: 'Push-ups', description: 'A classic upper body exercise.', videoUrl: 'https://example.com/pushup-video' },
    { id: 2, name: 'Squats', description: 'A lower body exercise targeting legs and glutes.', videoUrl: 'https://example.com/squat-video' },
  ]);

  return (
    <div>
      <h2>Exercise Library</h2>
      {exercises.map((exercise) => (
        <div key={exercise.id}>
          <h3>{exercise.name}</h3>
          <p>{exercise.description}</p>
          <video src={exercise.videoUrl} controls>Your browser does not support the video tag.</video>
        </div>
      ))}
    </div>
  );
}

export default Exercises;