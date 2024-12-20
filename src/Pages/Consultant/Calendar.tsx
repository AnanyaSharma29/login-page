// src/pages/Calendar.tsx
import React from "react";

const Calendar: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-teal-600">Calendar</h1>
      <p className="text-gray-600 mt-2">View and manage your scheduled appointments.</p>
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 bg-blue-50 rounded-lg shadow">
            <h3 className="font-semibold text-xl text-gray-800">Upcoming Appointments</h3>
            <ul className="mt-4">
              <li className="flex justify-between py-2">
                <span>Patient: John Doe</span>
                <span className="text-gray-500">9:00 AM</span>
              </li>
              <li className="flex justify-between py-2">
                <span>Patient: Jane Smith</span>
                <span className="text-gray-500">11:00 AM</span>
              </li>
            </ul>
          </div>
          <div className="p-4 bg-green-50 rounded-lg shadow">
            <h3 className="font-semibold text-xl text-gray-800">Available Slots</h3>
            <ul className="mt-4">
              <li className="flex justify-between py-2">
                <span>10:00 AM</span>
                <button className="text-teal-600">Book Now</button>
              </li>
              <li className="flex justify-between py-2">
                <span>1:00 PM</span>
                <button className="text-teal-600">Book Now</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
