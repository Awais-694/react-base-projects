
import { useState, useContext } from 'react';
import { FitnessContext } from '../context/FitnessContext';

const WorkoutForm = () => {
    const [exercise, setExercise] = useState('');
    const [calories, setCalories] = useState('');
    const { dispatch } = useContext(FitnessContext); // Context se dispatch function nikala

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!exercise.trim() || !calories) return;

        // Dispatcher ko order de rahe hain naya workout add karne ka
        dispatch({
            type: 'ADD_WORKOUT',
            payload: { exercise, calories }
        });

        // Inputs ko khali karna
        setExercise('');
        setCalories('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <h3>Add New Exercise</h3>
            <input
                type="text"
                placeholder="e.g. Pushups, Running"
                value={exercise}
                onChange={(e) => setExercise(e.target.value)}
                style={{ padding: '8px', marginRight: '10px' }}
            />
            <input
                type="number"
                placeholder="Calories"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                style={{ padding: '8px', marginRight: '10px', width: '100px' }}
            />
            <button type="submit" style={{ padding: '8px 15px', cursor: 'pointer' }}>Add</button>
        </form>
    );
};

export default WorkoutForm;