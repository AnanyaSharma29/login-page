import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation(); // Get the current route

  useEffect(() => {
    // Check if the user is logged in from localStorage
    const loginStatus = localStorage.getItem('isLoggedIn');
    if (loginStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true'); // Save login status to localStorage
  };

  const handleSignUp = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true'); // Save signup status to localStorage
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn'); // Remove login status from localStorage
  };

  return (
    <header className="bg-blue-600 text-white p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-3xl font-bold">
          <Link to="/" className="hover:text-yellow-400 drop-shadow-lg">
            MindCare
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-8">
          <Link to="/" className="text-lg font-medium px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-blue-500 hover:text-white">Home</Link>
          <Link to="/services" className="text-lg font-medium px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-blue-500 hover:text-white">Services</Link>
          <Link to="/about" className="text-lg font-medium px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-blue-500 hover:text-white">About</Link>
          <Link to="/contact" className="text-lg font-medium px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-blue-500 hover:text-white">Contact</Link>
        </nav>

        {/* Conditional rendering based on login state */}
        {location.pathname !== '/login' && !isLoggedIn ? (
          <div className="space-x-4">
            {/* Login and Sign Up buttons */}
            <Link to="/login">
              <button
                className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
                onClick={handleLogin} // Simulate login on click
              >
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={handleSignUp} // Simulate signup on click
              >
                Sign Up
              </button>
            </Link>
          </div>
        ) : (
          location.pathname !== '/login' && (
            <div className="flex items-center space-x-4">
              {/* Profile Icon after login */}
              <div className="relative">
                <img
                  src="/user.png" // Replace with actual profile icon image URL
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
              </div>
              {/* Logout Button */}
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )
        )}
      </div>
    </header>
  );
};

export default Header;
