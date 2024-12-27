import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PublicHeader: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      navigate('/dashboard-home'); // Redirect to dashboard if logged in
    }
  }, [navigate]);

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
          <Link to="/" className="text-lg font-medium px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-blue-500 hover:text-white">
            Home
          </Link>
          <Link to="/services-public" className="text-lg font-medium px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-blue-500 hover:text-white">
            Services
          </Link>
          <Link to="/about-public" className="text-lg font-medium px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-blue-500 hover:text-white">
            About
          </Link>
          <Link to="/contact-public" className="text-lg font-medium px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-blue-500 hover:text-white">
            Contact
          </Link>
        </nav>

        {/* Login and Sign Up Buttons */}
        <div className="space-x-4">
          <Link to="/login">
            <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">Login</button>
          </Link>
          <Link to="/signup">
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Sign Up</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default PublicHeader;
