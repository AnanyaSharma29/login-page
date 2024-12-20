import React from 'react';

const SignupPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign up</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">First Name</label>
            <input type="text" className="w-full px-3 py-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Last Name</label>
            <input type="text" className="w-full px-3 py-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full px-3 py-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input type="tel" className="w-full px-3 py-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" className="w-full px-3 py-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Confirm Password</label>
            <input type="password" className="w-full px-3 py-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <input type="checkbox" className="mr-2" />
            <label className="text-gray-700">I agree to the terms and privacy policies</label>
          </div>
          <div className="mb-4">
            <input type="checkbox" className="mr-2" />
            <label className="text-gray-700">User</label>
            <input type="checkbox" className="mr-2" />
            <label className="text-gray-700">Consultant</label>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full">Create account</button>
          <div className="mt-4 text-center">
            <a href="#" className="text-blue-500">Log in</a>
          </div>
          <div className="flex justify-center mt-4">
            <button className="mr-2 bg-blue-500 text-white px-4 py-2 rounded-lg">Sign up with Facebook</button>
            <button className="mr-2 bg-red-500 text-white px-4 py-2 rounded-lg">Sign up with Google</button>
            <button className="bg-black text-white px-4 py-2 rounded-lg">Sign up with Apple</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
