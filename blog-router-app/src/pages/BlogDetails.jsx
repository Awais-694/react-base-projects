import { useParams, useNavigate } from 'react-router-dom';

const BlogDetails = () => {
  // useParams hook URL se ':id' variable ko nikalta hai
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Article View Mode</h2>
      <div style={{ borderLeft: '4px solid orange', paddingLeft: '15px', background: '#f9f9f9', padding: '20px' }}>
        <h3>Dynamic URL Parameter Loaded!</h3>
        <p>Aap is waqt Blog ID: <strong style={{ color: 'orange' }}>{id}</strong> ka dynamic page parh rahe hain.</p>
      </div>
      
      <br />
      {/* Programmatic navigation back to home */}
      <button onClick={() => navigate('/')} style={{ padding: '8px 12px', cursor: 'pointer' }}>
        &larr; Back to Dashboard Home
      </button>
    </div>
  );
};

export default BlogDetails;