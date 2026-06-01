import { useState, useCallback } from 'react';
import useFetchAnalytics from './hooks/useFetchAnalytics';
import FormBuilder from './components/FormBuilder';
import PerformanceChart from './components/PerformanceChart';
import MemoizedFilterButton from './components/FilterButton';

const App = () => {
  // Custom hook se simulated data uthaya
  const { data, loading } = useFetchAnalytics();
  const [filter, setFilter] = useState('ALL');

  // useCallback ka istemal: Ye functions freeze ho jayenge aur re-render par naye nahi banenge
  const setAllFilter = useCallback(() => setFilter('ALL'), []);
  const setClicksFilter = useCallback(() => setFilter('HIGH_CLICKS'), []);
  const setViewsFilter = useCallback(() => setFilter('HIGH_VIEWS'), []);

  return (
    <div style={{ maxWidth: '900px', margin: '30px auto', padding: '20px', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}> Module 2: Optimization Dashboard</h1>
      <p style={{ textAlign: 'center', color: 'green' }}>Concepts: useRef + useMemo + useCallback + Custom Hooks</p>
      <hr />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
        {/* Left Side: Form Builder Logic (useRef) */}
        <FormBuilder />

        {/* Right Side: Analytics & Caching Control */}
        <div>
          <h3>📈 Control & Analytics Center</h3>
          
          <div style={{ marginBottom: '15px' }}>
            {/* Humne custom components ko cached functions pass kiye */}
            <MemoizedFilterButton label="Show All" onFilterChange={setAllFilter} />
            <MemoizedFilterButton label="High Clicks (>50)" onFilterChange={setClicksFilter} />
            <MemoizedFilterButton label="High Views (>200)" onFilterChange={setViewsFilter} />
          </div>

          {loading ? (
            <p>Simulating API Connection... Loading 5000 Records... ⏳</p>
          ) : (
            <PerformanceChart analyticsData={data} filterType={filter} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;