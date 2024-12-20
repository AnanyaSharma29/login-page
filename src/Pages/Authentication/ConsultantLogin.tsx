import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const ConsultantLogin: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState<string | null>(null); // To handle error messages
  const navigate = useNavigate(); // Hook to enable navigation

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError('Email and Password are required.');
      return;
    }

    try {
      // Send login request to Spring Boot backend
      const response = await axios.post('http://localhost:8080/auth/login/consultant', {
        email: formData.email,
        password: formData.password,
      });

      // Handle successful response (e.g., save email to localStorage)
      localStorage.setItem("consultantEmail", formData.email); // Save email to localStorage

      // Navigate to the Consultant Dashboard after login
      navigate('/consultant-dashboard'); // Replace with your actual dashboard route

    } catch (error: any) {
      // Handle error from API (wrong credentials or server error)
      console.error(error);
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Consultant Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Email input */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {/* Password input */}
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {/* Error message display */}
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full p-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Login
            </button>
            <div className="flex justify-between mt-4 text-sm text-gray-600">
              <a href="#" className="hover:text-indigo-500">Forgot Password?</a>
              <a href="/consultant-signup" className="hover:text-indigo-500">Sign Up</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConsultantLogin;
