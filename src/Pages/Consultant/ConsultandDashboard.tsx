import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import ProfileCard from "../components/ProfileCard";
import DashboardWidgets from "../components/DashboardWidgets";

// Define Consultant type
interface Consultant {
  consultantId: string;
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  specialization: string;
  licenseNumber: string;
}

// Define Appointment Request type
interface AppointmentRequest {
  userId: string;
  userName: string;
  date: string;
  time: string;
  status: "pending" | "accepted" | "rejected";
}

const ConsultantDashboard: React.FC = () => {
  const [consultant, setConsultant] = useState<Consultant | null>(null);
  const [requests, setRequests] = useState<AppointmentRequest[]>([]);
  const email = localStorage.getItem("consultantEmail"); // Get email from localStorage

  useEffect(() => {
    if (email) {
      console.log("Attempting to fetch data for email:", email); // Log email for debugging

      axios
        .get(`http://localhost:8080/consultants/email/${email}`) // Fetching consultant data by email
        .then((response) => {
          console.log("Received consultant data:", response.data); // Log received data for debugging
          setConsultant(response.data);
        })
        .catch((error) => {
          console.error("Error fetching consultant data:", error);
          alert("Error fetching consultant data. Please try again.");
        });

      // Fetch appointment requests for the consultant
      axios
        .get(`http://localhost:8080/appointments/requests/${email}`)
        .then((response) => {
          console.log("Received appointment requests:", response.data);
          setRequests(response.data);
        })
        .catch((error) => {
          console.error("Error fetching appointment requests:", error);
        });
    } else {
      console.log("No consultant email found in localStorage");
      // Optionally, redirect to login page if email is not found
      window.location.href = "/login-page"; // or use react-router if you prefer
    }
  }, [email]);

  const handleLogout = () => {
    localStorage.removeItem("consultantEmail");
    console.log("Consultant logged out");
    // Redirect to login page
    window.location.href = "/login-page"; // Or use react-router for navigation
  };

  const handleRequestAction = (userId: string, action: "accepted" | "rejected") => {
    axios
      .post(`http://localhost:8080/appointments/${action}`, {
        userId,
        consultantEmail: email,
      })
      .then(() => {
        setRequests((prevRequests) =>
          prevRequests.map((request) =>
            request.userId === userId ? { ...request, status: action } : request
          )
        );
        console.log(`Request ${action} for user ${userId}`);
      })
      .catch((error) => {
        console.error(`Error updating request status:`, error);
      });
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      <Sidebar onLogout={handleLogout} />
      <main className="flex-1 p-8">
        {consultant ? (
          <>
            <h2 className="text-3xl font-bold text-gray-800">
              Welcome, {consultant.firstname} {consultant.lastname}
            </h2>
            <p className="text-gray-600">Here’s what’s happening today:</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {/* Today's Appointments */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Today's Appointments</h3>
                <ul className="space-y-4">
                  <li className="border-b pb-2">
                    <p className="font-semibold text-gray-800">John Doe</p>
                    <p className="text-sm text-gray-600">10:00 AM - Consultation</p>
                  </li>
                  <li className="border-b pb-2">
                    <p className="font-semibold text-gray-800">Jane Smith</p>
                    <p className="text-sm text-gray-600">2:00 PM - Follow-Up</p>
                  </li>
                </ul>
                <button className="mt-4 w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600">
                  View All Appointments
                </button>
              </div>

              {/* Calendar with Profile Card */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Appointment Calendar</h3>
                <ProfileCard consultant={consultant} />
              </div>

              {/* Quick Actions */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Quick Actions</h3>
                <ul className="space-y-2">
                  <li>
                    <button className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600">
                      Set Availability
                    </button>
                  </li>
                  <li>
                    <button className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300">
                      View Clients
                    </button>
                  </li>
                  <li>
                    <button className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300">
                      Add Notes
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Notifications and Requests Section */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Notifications */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Notifications</h3>
                <ul className="space-y-4">
                  <li className="border-b pb-2">
                    <p className="font-semibold text-gray-800">Reminder: Update your availability for next week.</p>
                    <p className="text-sm text-gray-600">Dec 19, 2024</p>
                  </li>
                  <li className="border-b pb-2">
                    <p className="font-semibold text-gray-800">John Doe canceled his appointment.</p>
                    <p className="text-sm text-gray-600">Dec 18, 2024</p>
                  </li>
                  <li>
                    <p className="font-semibold text-gray-800">New client feedback available.</p>
                    <p className="text-sm text-gray-600">Dec 17, 2024</p>
                  </li>
                </ul>
              </div>

              {/* Requests */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Requests</h3>
                {requests.length > 0 ? (
                  <ul className="space-y-4">
                    {requests.map((request) => (
                      <li key={request.userId} className="border-b pb-2">
                        <p className="font-semibold text-gray-800">{request.userName}</p>
                        <p className="text-sm text-gray-600">
                          Date: {request.date}, Time: {request.time}
                        </p>
                        <div className="flex space-x-4 mt-2">
                          {request.status === "pending" && (
                            <>
                              <button
                                className="bg-teal-500 text-white py-1 px-3 rounded-lg hover:bg-teal-600"
                                onClick={() => handleRequestAction(request.userId, "accepted")}
                              >
                                Accept
                              </button>
                              <button
                                className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600"
                                onClick={() => handleRequestAction(request.userId, "rejected")}
                              >
                                Reject
                              </button>
                            </>
                          )}
                          {request.status === "accepted" && (
                            <span className="text-green-500 font-semibold">Accepted</span>
                          )}
                          {request.status === "rejected" && (
                            <span className="text-red-500 font-semibold">Rejected</span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600">No requests at the moment.</p>
                )}
              </div>
            </div>
          </>
        ) : (
          <p>Loading consultant details...</p> // Loading state
        )}
      </main>
    </div>
  );
};

export default ConsultantDashboard;
