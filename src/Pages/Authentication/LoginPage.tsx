import React from 'react';
import { Link } from 'react-router-dom';


const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl overflow-hidden rounded-xl bg-white shadow-lg">
        {/* Left Section */}
        <div className="w-1/2 p-8">
          <h2 className="text-3xl font-bold text-gray-800">Login</h2>
          <p className="mt-2 text-sm text-gray-600">Login to access your travelwise account</p>

          <form className="mt-8 space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 w-full rounded-lg border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 w-full rounded-lg border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2 h-4 w-4" /> Remember me
              </label>
              <a href="#" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
            </div>

            <div>
              <label className="block text-sm font-medium">Role:</label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input type="radio" name="role" value="user" className="mr-2" /> User
                </label>
                <label className="flex items-center">
                  <input type="radio" name="role" value="consultant" className="mr-2" /> Consultant
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>

            <p className="mt-4 text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/dashboard" className="text-blue-500 hover:underline">
                Go to Dashboard
              </Link>
            </p>

          <div className="mt-6 flex justify-center space-x-4">
            <button className="flex items-center justify-center w-10 h-10 rounded-full border">
              <img src="/facebook-icon.svg" alt="Facebook" className="w-5" />
            </button>
            <button className="flex items-center justify-center w-10 h-10 rounded-full border">
              <img src="/google-icon.svg" alt="Google" className="w-5" />
            </button>
            <button className="flex items-center justify-center w-10 h-10 rounded-full border">
              <img src="/apple-icon.svg" alt="Apple" className="w-5" />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex w-1/2 bg-gray-110 items-center justify-center">
          <img
            src="/secure-login-illustration.jpg"
            alt="Secure login"
            className="h-auto max-w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
