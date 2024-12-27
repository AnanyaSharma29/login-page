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
          // Ensure response data is an array, even if empty
          setRequests(Array.isArray(response.data) ? response.data : []);
        })
        .catch((error) => console.error("Error fetching appointment requests:", error));
    } else {
      window.location.href = "/login-page";
    }
  }, [email]);

  const handleLogout = () => {
    localStorage.removeItem("consultantEmail");
    window.location.href = "/login";
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
              {/* Appointment Calendar */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Details</h3>
                <ProfileCard consultant={consultant} />
              </div>

              {/* View All Appointments */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">View All Appointments</h3>
                {requests.length > 0 ? (
                  <ul className="space-y-4">
                    {limitedRequests.map((appointment: AppointmentRequest) => (
                      <li key={appointment.userId} className="border-b pb-2">
                        <p className="font-semibold text-gray-800">{appointment.userName}</p>
                        <p className="text-sm text-gray-600">
                          Date: {appointment.date}, Time: {appointment.time}
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600">No appointments at the moment.</p>
                )}
                {requests.length > 3 && (
                  <button
                    className="text-teal-500 mt-4"
                    onClick={handleShowAllRequests}
                  >
                    Show All
                  </button>
                )}
              </div>
            </div>

            {/* Requests Section */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Requests</h3>
                {limitedRequests.length > 0 ? (
                  <ul className="space-y-4">
                    {limitedRequests.map((request: AppointmentRequest) => (
                      <li key={request.userId} className="border-b pb-2">
                        <p className="font-semibold text-gray-800">{request.userName}</p>
                        <p className="text-sm text-gray-600">
                          Date: {request.date}, Time: {request.time}
                        </p>
                        <div className="flex space-x-4 mt-2">
                          {request.status === "PENDING" && (
                            <>
                              <button
                                className="bg-teal-500 text-white py-1 px-3 rounded-lg hover:bg-teal-600"
                                onClick={() => handleRequestAction(request.userId, "ACCEPTED")}
                              >
                                Accept
                              </button>
                              <button
                                className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600"
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
