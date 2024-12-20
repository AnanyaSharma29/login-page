import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Use useNavigate in React Router v6

const ConsultantSignup: React.FC = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    phonenumber: '',
    password: '',
    confirmPassword: '',
    specialization: '',
    licenseNumber: ''
  });

  const [error, setError] = useState<string | null>(null); // To handle error messages
  const [loading, setLoading] = useState(false); // To manage loading state
  const navigate = useNavigate(); // Using useNavigate for navigation

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate passwords match before submitting
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      setLoading(true); // Set loading state to true

      // Send signup request to Spring Boot backend
      const response = await axios.post('http://localhost:8080/auth/register/consultant', formData);

      // Handle successful signup response
      console.log(response.data); // You can use the response to redirect the user or show a success message
      alert('Signup successful!');

      // Redirect to Consultant Dashboard after successful signup
      navigate('/consultant-dashboard'); // Using navigate instead of history.push

      // Reset form data after successful signup (optional)
      setFormData({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        phonenumber: '',
        password: '',
        confirmPassword: '',
        specialization: '',
        licenseNumber: ''
      });

      setError(null); // Reset any previous error

    } catch (error: any) {
      // Handle error from API (e.g., email already exists, server error)
      console.error(error);
      setError('There was an error with your signup. Please try again.');
    } finally {
      setLoading(false); // Set loading state to false once the request is completed
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Consultant Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Form fields for consultant details */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="First Name"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Last Name"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="tel"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
              placeholder="Specialization"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              name="licenseNumber"
              value={formData.licenseNumber}
              onChange={handleChange}
              placeholder="License Number"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            {/* Display error message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              disabled={loading} // Disable the button when loading
            >
              {loading ? 'Signing Up...' : 'Signup'}
            </button>
          </div>
        </form>

        {/* Login Link */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account? 
            <a href="/consultant-login" className="text-indigo-600 hover:text-indigo-700 font-semibold">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConsultantSignup;
