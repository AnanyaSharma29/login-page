import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phonenumber: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (!formData.agreeToTerms) {
      alert('You must agree to the terms and conditions.');
      return;
    }

    try {
      // Make sure to send to the correct endpoint for user registration
      const response = await axios.post('http://localhost:8080/auth/register/user', formData, {
        headers: {
          'Content-Type': 'application/json', // ensure this header is set
        },
      });
      alert('Registration successful!');
      navigate('/dashboard');
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        // Handle error from server
        setError(error.response.data.message || 'Registration failed.');
      } else {
        setError('An error occurred while registering.');
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 via-teal-100 to-purple-200">
      <div className="bg-white p-10 rounded-lg shadow-xl max-w-lg w-full">
        <h2 className="text-3xl font-bold text-center text-teal-600 mb-6 font-poppins">
          User Signup
        </h2>
        <form onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">First Name</label>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              placeholder="Enter your first name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-400 focus:outline-none"
              required
            />
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Last Name</label>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              placeholder="Enter your last name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-400 focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-400 focus:outline-none"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-400 focus:outline-none"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-400 focus:outline-none"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-400 focus:outline-none"
              required
            />
          </div>

          {/* Agree to Terms */}
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-gray-700">I agree to the terms and conditions</label>
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-600 bg-red-100 border border-red-400 rounded-lg p-2 text-sm text-center">
              {error}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-400 to-blue-500 text-white py-3 rounded-lg shadow-md hover:shadow-lg focus:ring-4 focus:ring-teal-300 transition-transform transform hover:scale-105"
          >
            Create Account
          </button>

          {/* Redirect to Login */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-teal-500 font-semibold hover:underline">
              Log in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
