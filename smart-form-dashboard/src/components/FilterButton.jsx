
import React from 'react';

// Normal Component banaya
const FilterButton = ({ label, onFilterChange }) => {
  // Console log check karne ke liye ke button kab load ho raha hai
  console.log(`🎨 FilterButton Rendered: [${label}]`);
  
  return (
    <button 
      onClick={onFilterChange} 
      style={{ padding: '8px 12px', marginRight: '8px', cursor: 'pointer' }}
    >
      {label}
    </button>
  );
};

// React.memo use kiya taake ye component sirf tabhi reload ho jab props badlein
const MemoizedFilterButton = React.memo(FilterButton);

// Aakhri line par single export
export default MemoizedFilterButton;