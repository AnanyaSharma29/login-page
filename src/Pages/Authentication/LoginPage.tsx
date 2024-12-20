import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const UserLoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>(''); // Error message
  const [isLoading, setIsLoading] = useState<boolean>(false); // Loading state
  const [showPassword, setShowPassword] = useState<boolean>(false); // Password visibility

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    const endpoint = 'http://localhost:8080/auth/login/user';

    try {
      const response = await axios.post(endpoint, { email, password });

      // Store email in localStorage after successful login
      localStorage.setItem('userEmail', email);

      alert(response.data.message); // Success message
      navigate('/user-dashboard'); // Navigate to User dashboard
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        const { message } = error.response.data;
        setError(message || 'An error occurred. Please try again later.');
      } else {
        setError('An error occurred. Please try again later.');
      }
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500">
      <div className="flex w-full max-w-lg overflow-hidden rounded-xl shadow-xl bg-white p-8">
        <div className="w-full">
          <h2 className="text-4xl font-semibold text-center text-indigo-800 mb-6">User Login</h2>
          <p className="text-lg text-center text-gray-600 mb-8">Login to access your account</p>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-lg border-2 border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 w-full rounded-lg border-2 border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-indigo-500"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-red-600 bg-red-100 border border-red-400 rounded-lg p-2 text-sm text-center">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full rounded-lg py-3 text-white font-semibold transition-all transform ${
                isLoading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-indigo-400 to-blue-500 hover:scale-105 hover:shadow-lg'
              }`}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-indigo-500 font-semibold hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserLoginPage;
