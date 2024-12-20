// src/pages/Clients.tsx
import React from "react";

const Clients: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-teal-600">Clients</h1>
      <p className="text-gray-600 mt-2">Manage and view details of your clients.</p>
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-teal-600 text-white">
                <th className="px-6 py-3 text-left">Client Name</th>
                <th className="px-6 py-3 text-left">Last Appointment</th>
                <th className="px-6 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-6 py-4">John Doe</td>
                <td className="px-6 py-4">12/12/2024 - 10:00 AM</td>
                <td className="px-6 py-4 text-teal-600">Active</td>
              </tr>
              <tr className="border-t">
                <td className="px-6 py-4">Jane Smith</td>
                <td className="px-6 py-4">11/30/2024 - 2:00 PM</td>
                <td className="px-6 py-4 text-gray-500">Inactive</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Clients;
