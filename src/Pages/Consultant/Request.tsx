import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface AppointmentRequest {
  userId: string;
  name: string;
  email: string;
  date: string;
  time: string;
  status: "PENDING" | "ACCEPTED" | "REJECTED";
}

const Request: React.FC = () => {
  const [requests, setRequests] = useState<AppointmentRequest[]>([]);
  const email = localStorage.getItem("consultantEmail");
  const navigate = useNavigate();

  useEffect(() => {
    if (email) {
      axios
        .get(`http://localhost:8080/appointments/pending/${email}`)
        .then((response) => setRequests(response.data || []))
        .catch((error) => console.error("Error fetching appointment requests:", error));
    } else {
      navigate("/login-page"); // Redirect to login if email is missing
    }
  }, [email, navigate]);

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

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">All Appointment Requests</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        {requests.length > 0 ? (
          <ul className="space-y-4">
            {requests.map((request: AppointmentRequest) => (
              <li key={request.userId} className="border-b pb-4">
                <p className="font-semibold text-gray-800">{request.name}</p>
                <p className="font-semibold text-gray-800">
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
  );
};

export default Request;
