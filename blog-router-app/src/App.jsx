import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import BlogDetails from './pages/BlogDetails';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const App = () => {
  // Global login authentication state
  const [userAuth, setUserAuth] = useState(false);

  return (
    <BrowserRouter>
      {/* Navbar top par rahega aur state monitor karega */}
      <Navbar isUserLoggedIn={userAuth} onLogout={() => setUserAuth(false)} />
      
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/login" element={<Login onLogin={() => setUserAuth(true)} />} />

        {/* Protected Private Route Wrapper */}
        <Route path="/dashboard" element={
          <ProtectedRoute isUserLoggedIn={userAuth}>
            <Dashboard />
          </ProtectedRoute>
        } />

        {/* 404 Wildcard Fallback */}
        <Route path="*" element={<div style={{ padding: '20px', color: 'red' }}><h2>⚠️ Error 404: Page Found Missing!</h2></div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;