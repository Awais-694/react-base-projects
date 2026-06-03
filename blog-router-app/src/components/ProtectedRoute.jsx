import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isUserLoggedIn, children }) => {
  // Agar user login nahi hai, toh use direct login page par bhej do
  if (!isUserLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // Agar logged in hai, toh dashboard ka content dikhao
  return children;
};

export default ProtectedRoute;