// src/pages/Availability.tsx
import React from "react";

const Availability: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-teal-600">Availability</h1>
      <p className="text-gray-600 mt-2">Manage your available slots for consultations.</p>
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-50 rounded-lg shadow">
            <h3 className="font-semibold text-xl text-gray-800">Monday</h3>
            <ul className="mt-4">
              <li className="flex justify-between py-2">
                <span>9:00 AM - 12:00 PM</span>
                <button className="text-teal-600">Remove</button>
              </li>
            </ul>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg shadow">
            <h3 className="font-semibold text-xl text-gray-800">Tuesday</h3>
            <ul className="mt-4">
              <li className="flex justify-between py-2">
                <span>10:00 AM - 2:00 PM</span>
                <button className="text-teal-600">Remove</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Availability;
