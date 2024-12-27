import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'user', // Default role is user
  });

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      role: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError('Email and Password are required.');
      return;
    }

    setIsLoading(true);

    try {
      const endpoint =
        formData.role === 'user'
          ? 'http://localhost:8080/auth/login/user'
          : 'http://localhost:8080/auth/login/consultant';

      const response = await axios.post(endpoint, {
        email: formData.email,
        password: formData.password,
      });

      // Store email and role in localStorage
      localStorage.setItem(`${formData.role}Email`, formData.email); // Store email with the role as the key
      localStorage.setItem('role', formData.role); // Store role

      // Navigate based on the role
      if (formData.role === 'user') {
        navigate('/user-dashboard');
      } else {
        navigate('/consultant-dashboard');
      }
    } catch (error) {
      console.error(error);
      setError('Invalid email or password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
          Login
        </h2>
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
            {/* Role selection */}
            <select
              name="role"
              value={formData.role}
              onChange={handleRoleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="user">User</option>
              <option value="consultant">Consultant</option>
            </select>

            {/* Error message display */}
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full p-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
            <div className="flex justify-between mt-4 text-sm text-gray-600">
              <a href="#" className="hover:text-indigo-500">Forgot Password?</a>
              <a
                href={formData.role === 'consultant' ? '/consultant-signup' : '/signup'}
                className="hover:text-indigo-500"
              >
                Sign Up
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
