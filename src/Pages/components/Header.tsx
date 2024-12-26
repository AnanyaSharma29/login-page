import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  const handleLogin = () => {
    setIsLoggedIn(true); // Simulate login
  };

  const handleSignUp = () => {
    setIsLoggedIn(true); // Simulate signup
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
        {!isLoggedIn ? (
          <div className="space-x-4">
            {/* Login and Sign Up buttons */}
            <Link to="/login-page">
              <button
                className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
                onClick={handleLogin} // Simulate login on click
              >
                Login
              </button>
            </Link>
            <Link to="/signup-page">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={handleSignUp} // Simulate signup on click
              >
                Sign Up
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            {/* Profile Icon after login */}
            <div className="relative">
              <img
                src="profile-icon.png" // Replace with actual profile icon image URL
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
