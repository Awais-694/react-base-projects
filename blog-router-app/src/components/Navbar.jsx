import { NavLink } from 'react-router-dom';

const Navbar = ({ isUserLoggedIn, onLogout }) => {
  // Active link ka style functions ke zariye control karna
  const linkStyle = ({ isActive }) => ({
    marginRight: '15px',
    color: isActive ? 'orange' : 'white',
    textDecoration: 'none',
    fontWeight: isActive ? 'bold' : 'normal'
  });

  return (
    <nav style={{ background: '#333', padding: '15px', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <NavLink to="/" style={linkStyle}>🏠 Home</NavLink>
        <NavLink to="/dashboard" style={linkStyle}>🔒 Dashboard</NavLink>
      </div>
      <div>
        {isUserLoggedIn ? (
          <button onClick={onLogout} style={{ background: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>
            Logout
          </button>
        ) : (
          <NavLink to="/login" style={linkStyle}>🔑 Login</NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;