import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleFakeLogin = () => {
    onLogin(); // App.jsx ki state true karega
    navigate('/dashboard'); // Login hotay hi redirect to dashboard
  };

  return (
    <div style={{ padding: '5px', maxWidth: '300px', margin: '50px auto', textAlign: 'center', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h3>🔑 Access Portal</h3>
      <p>Secure pages dekhne ke liye button click karein.</p>
      <button onClick={handleFakeLogin} style={{ padding: '10px 20px', background: 'green', color: 'white', border: 'none', cursor: 'pointer' }}>
        Bypass & Login Securely
      </button>
    </div>
  );
};

export default Login;