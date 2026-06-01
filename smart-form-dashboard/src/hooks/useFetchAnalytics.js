import { useState, useEffect } from 'react';

// Custom Hook function jo analytics data simulate karega
const useFetchAnalytics = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      const heavyData = [];
  
      for (let i = 0; i < 500; i++) {
        heavyData.push({
          id: i,
          fieldName: i % 3 === 0 ? 'Email Input' : i % 3 === 1 ? 'Name Input' : 'Phone Input',
          clicks: Math.floor(Math.random() * 100),
          views: Math.floor(Math.random() * 200) + 100,
        });
      }
      setData(heavyData);
      setLoading(false);
    }, 1000); // 1 second ka delay

    return () => clearTimeout(timer);
  }, []);

  // Data aur loading state ko return kar rahe hain
  return { data, loading };
};

// Awais bhai, aapki requirement ke mutabiq single export aakhri line par
export default useFetchAnalytics;