
import { useContext } from 'react';
import { FitnessContext } from '../context/FitnessContext';

const WorkoutList = () => {
    const { workouts, dispatch } = useContext(FitnessContext); // Workouts data aur dispatch dono liye

    return (
        <div>
            <h3>Today's Routine</h3>
            {workouts.length === 0 ? <p>today No Exercise !</p> : (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {workouts.map(item => (
                        <li key={item.id} style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '10px',
                            borderBottom: '1px solid #ccc',
                            backgroundColor: item.completed ? '#e2f0d9' : '#fff'
                        }}>
                            {/* Click karne se complete/incomplete toggle hoga */}
                            <span
                                onClick={() => dispatch({ type: 'TOGGLE_WORKOUT', payload: item.id })}
                                style={{
                                    cursor: 'pointer',
                                    textDecoration: item.completed ? 'line-through' : 'none',
                                    fontWeight: 'bold'
                                }}
                            >
                                {item.exercise} ({item.calories} kcal)
                            </span>

                            <button
                                onClick={() => dispatch({ type: 'DELETE_WORKOUT', payload: item.id })}
                                style={{ color: 'red', cursor: 'pointer' }}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default WorkoutList;