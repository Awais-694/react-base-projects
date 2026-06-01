
import { useMemo } from 'react';

const PerformanceChart = ({ analyticsData, filterType }) => {
  
  // useMemo ka istemal: Data filtering sirf tab hogi jab data ya filterType badlega
  const filteredMetrics = useMemo(() => {
    console.log("⚡ useMemo Magic: Heavy Data Filtering Running...");
    
    // Farzi complex calculation/filtering
    if (filterType === 'HIGH_CLICKS') {
      return analyticsData.filter(item => item.clicks > 50);
    }
    if (filterType === 'HIGH_VIEWS') {
      return analyticsData.filter(item => item.views > 200);
    }
    return analyticsData; // Default: All Data
  }, [analyticsData, filterType]); // Dependencies

  return (
    <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '6px' }}>
      <h4>📊 Analytics Overview (useMemo Protected)</h4>
      <p>Active Filter: <strong>{filterType}</strong></p>
      <p>Filtered Records Count: <strong>{filteredMetrics.length} items</strong></p>
      <p style={{ fontSize: '0.85rem', color: 'gray' }}>
        Notice: Form mein type karne par ye heavy logic dobara execute nahi hoti!
      </p>
    </div>
  );
};

export default PerformanceChart;