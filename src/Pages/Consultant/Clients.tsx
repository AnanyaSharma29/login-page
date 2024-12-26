import React, { useState, useEffect } from "react";
import axios from "axios";

interface AppointmentRequest {
  userId: string;
  name: string;
  consultantName: string;
  date: string;
  time: string;
  status: string;
}

const Clients: React.FC = () => {
  const [requests, setRequests] = useState<AppointmentRequest[]>([]);

  // Fetch email of the logged-in consultant from localStorage
  const email = localStorage.getItem('consultantEmail');

  useEffect(() => {
    if (email) {
      // Fetch appointment requests based on the logged-in consultant's email
      axios
        .get(`http://localhost:8080/appointments/accepted/${email}`) // Adjust the URL for your backend
        .then((response) => setRequests(response.data))
        .catch((error) => console.error("Error fetching appointment requests:", error));
    } else {
      console.error("Consultant email not found in localStorage.");
    }
  }, [email]); // The email is part of the dependencies, so the effect will run when it changes

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-teal-600">Appointment Requests</h1>
      <p className="text-gray-600 mt-2">
        View all accepted appointment requests for {email || "the consultant"}.
      </p>
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-teal-600 text-white">
                <th className="px-6 py-3 text-left">User Name</th>
                <th className="px-6 py-3 text-left">Date</th>
                <th className="px-6 py-3 text-left">Time</th>
                <th className="px-6 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {requests.length > 0 ? (
                requests.map((request, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-6 py-4">{request.name}</td>
                    <td className="px-6 py-4">{request.date}</td>
                    <td className="px-6 py-4">{request.time}</td>
                    <td
                      className={`px-6 py-4 ${
                        request.status === "Pending"
                          ? "text-yellow-600"
                          : request.status === "Confirmed"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {request.status}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center py-4">
                    No appointment requests found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Clients;
