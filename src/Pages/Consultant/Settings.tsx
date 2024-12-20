// src/pages/Settings.tsx
import React from "react";

const Settings: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-teal-600">Settings</h1>
      <p className="text-gray-600 mt-2">Update your profile and preferences.</p>
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-xl text-gray-800">Profile Information</h3>
            <div className="mt-4">
              <label className="block text-gray-600">Name</label>
              <input
                type="text"
                value="John Doe"
                className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-600">Email</label>
              <input
                type="email"
                value="john.doe@example.com"
                className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
              />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-xl text-gray-800">Change Password</h3>
            <div className="mt-4">
              <label className="block text-gray-600">New Password</label>
              <input
                type="password"
                className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
