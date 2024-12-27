import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import ProfileCard from "../components/ProfileCard";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

// Define the types for Consultant and AppointmentRequest with status as enum-like
interface Consultant {
  consultantId: string;
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  specialization: string;
  licenseNumber: string;
}

interface AppointmentRequest {
  userId: string;
  userName: string;
  email: string;
  date: string;
  time: string;
  status: "PENDING" | "ACCEPTED" | "REJECTED"; // Changed status to use enum-like type
}

const ConsultantDashboard: React.FC = () => {
  const [consultant, setConsultant] = useState<Consultant | null>(null);
  const [requests, setRequests] = useState<AppointmentRequest[]>([]);
  const email = localStorage.getItem("consultantEmail");
  const navigate = useNavigate(); // Use useNavigate for redirection

  useEffect(() => {
    if (email) {
      axios
        .get(`http://localhost:8080/consultants/email/${email}`)
        .then((response) => setConsultant(response.data))
        .catch((error) => console.error("Error fetching consultant data:", error));

      axios
        .get(`http://localhost:8080/appointments/pending/${email}`)
        .then((response) => {
          setRequests(Array.isArray(response.data) ? response.data : []);
        })
        .catch((error) => console.error("Error fetching appointment requests:", error));
    } else {
      window.location.href = "/login-page";
    }
  }, [email]);

  const handleLogout = () => {
    localStorage.removeItem("consultantEmail");
    window.location.href = "/login-page";
  };

  const handleRequestAction = (userId: string, action: "ACCEPTED" | "REJECTED") => {
    axios
      .post(`http://localhost:8080/appointments/status/${email}?status=${action}`, { userId })
      .then(() => {
        setRequests((prevRequests) =>
          prevRequests.map((request) =>
            request.userId === userId ? { ...request, status: action } : request
          )
        );
      })
      .catch((error) => console.error(`Error updating request status:`, error));
  };

  // Show only the first 2 to 3 requests
  const limitedRequests = requests.slice(0, 3);

  const handleShowAllRequests = () => {
    navigate("/all-requests"); // Redirect to the new page with all requests
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-teal-100 to-blue-50 font-sans">
      <Sidebar onLogout={handleLogout} />
      <main className="flex-1 p-8">
        {consultant ? (
          <>
            <div className="text-center mb-8">
              <h2 className="text-4xl font-extrabold text-teal-600">
                Welcome, {consultant.firstname} {consultant.lastname}
              </h2>
              <p className="text-lg text-gray-600 mt-2">Here’s what’s happening today:</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {/* Consultant Profile Card */}
              <div className="bg-white p-6 rounded-xl shadow-xl border-t-4 border-teal-500">
                <h3 className="text-2xl font-semibold text-teal-600 mb-4">Consultant Details</h3>
                <ProfileCard consultant={consultant} />
              </div>

              {/* View All Appointments */}
              <div className="bg-white p-6 rounded-xl shadow-xl border-t-4 border-teal-500">
                <h3 className="text-2xl font-semibold text-teal-600 mb-4">Appointments</h3>
                {requests.length > 0 ? (
                  <ul className="space-y-4">
                    {limitedRequests.map((appointment) => (
                      <li key={appointment.userId} className="border-b pb-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-semibold text-lg text-gray-800">{appointment.userName}</p>
                            <p className="text-sm text-gray-600">
                              Date: {appointment.date}, Time: {appointment.time}
                            </p>
                          </div>
                          <div className="flex items-center space-x-4">
                            {appointment.status === "PENDING" && (
                              <>
                                <button
                                  className="bg-teal-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-teal-600 transition"
                                  onClick={() => handleRequestAction(appointment.userId, "ACCEPTED")}
                                >
                                  Accept
                                </button>
                                <button
                                  className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition"
                                  onClick={() => handleRequestAction(appointment.userId, "REJECTED")}
                                >
                                  Reject
                                </button>
                              </>
                            )}
                            {appointment.status === "ACCEPTED" && (
                              <span className="text-green-500 font-semibold">Accepted</span>
                            )}
                            {appointment.status === "REJECTED" && (
                              <span className="text-red-500 font-semibold">Rejected</span>
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600">No appointments at the moment.</p>
                )}
                {requests.length > 3 && (
                  <button
                    className="text-teal-600 mt-4 hover:underline"
                    onClick={handleShowAllRequests}
                  >
                    Show All
                  </button>
                )}
              </div>
            </div>

            {/* Requests Section */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-xl border-t-4 border-teal-500">
                <h3 className="text-2xl font-semibold text-teal-600 mb-4">Pending Requests</h3>
                {limitedRequests.length > 0 ? (
                  <ul className="space-y-4">
                    {limitedRequests.map((request) => (
                      <li key={request.userId} className="border-b pb-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-semibold text-lg text-gray-800">{request.userName}</p>
                            <p className="text-sm text-gray-600">
                              Date: {request.date}, Time: {request.time}
                            </p>
                          </div>
                          <div className="flex items-center space-x-4">
                            {request.status === "PENDING" && (
                              <>
                                <button
                                  className="bg-teal-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-teal-600 transition"
                                  onClick={() => handleRequestAction(request.userId, "ACCEPTED")}
                                >
                                  Accept
                                </button>
                                <button
                                  className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition"
                                  onClick={() => handleRequestAction(request.userId, "REJECTED")}
                                >
                                  Reject
                                </button>
                              </>
                            )}
                            {request.status === "ACCEPTED" && (
                              <span className="text-green-500 font-semibold">Accepted</span>
                            )}
                            {request.status === "REJECTED" && (
                              <span className="text-red-500 font-semibold">Rejected</span>
                            )}
                          </div>
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
          <p>Loading consultant details...</p>
        )}
      </main>
    </div>
  );
};

export default ConsultantDashboard;
