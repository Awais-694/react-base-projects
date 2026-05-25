
import { useContext } from 'react';
import { FitnessContext } from '../context/FitnessContext';

const FitnessStats = () => {
  const { workouts } = useContext(FitnessContext);

  // Total exercises count
  const totalExercises = workouts.length;
  
  // Jo exercises complete ho gayin unki ginti
  const completedExercises = workouts.filter(w => w.completed).length;

  // Total burned calories ki calculation (.reduce array formula)
  const totalCaloriesBurned = workouts
    .filter(w => w.completed)
    .reduce((sum, item) => sum + item.calories, 0);

  return (
    <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f0f4f8', borderRadius: '5px' }}>
      <h3>📊 Your Progress Stats</h3>
      <p>Total Activities Planned: <strong>{totalExercises}</strong></p>
      <p>Completed Activities: <strong>{completedExercises}</strong></p>
      <p>Total Calories Burned: <strong style={{ color: 'green' }}>{totalCaloriesBurned} kcal</strong></p>
    </div>
  );
};

export default FitnessStats;