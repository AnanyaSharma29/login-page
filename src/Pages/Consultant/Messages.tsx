// src/pages/Messages.tsx
import React from "react";

const Messages: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-teal-600">Messages</h1>
      <p className="text-gray-600 mt-2">Manage your messages from clients.</p>
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg shadow">
            <h3 className="font-semibold text-xl text-gray-800">From: John Doe</h3>
            <p className="mt-2 text-gray-600">Hi, I need advice about my treatment.</p>
            <button className="mt-4 bg-teal-600 text-white p-2 rounded-md">Reply</button>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg shadow">
            <h3 className="font-semibold text-xl text-gray-800">From: Jane Smith</h3>
            <p className="mt-2 text-gray-600">Can we schedule an appointment next week?</p>
            <button className="mt-4 bg-teal-600 text-white p-2 rounded-md">Reply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
