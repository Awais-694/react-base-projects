import { FitnessProvider } from './context/FitnessContext';
import WorkoutForm from './components/WorkoutForm';
import WorkoutList from './components/WorkoutList';
import FitnessStats from './components/FitnessStats';

function App() {
  return (
    // Poori app ko wrap kiya taake signals wireless chalein
    <FitnessProvider>
      <div style={{ padding: '20px', maxWidth: '500px', margin: '50px auto', fontFamily: 'Arial' }}>
        <h1 style={{ textAlign: 'center', color: '#2c3e50' }}> Fitness & Workout Tracker</h1>
        <hr />
        <WorkoutForm />
        <WorkoutList />
        <FitnessStats />
      </div>
    </FitnessProvider>
  );
}

export default App;