import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface Consultant {
  consultantId: string;
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  specialization: string;
  licenseNumber: string;
}

const BookAppointment: React.FC = () => {
  const [consultants, setConsultants] = useState<Consultant[]>([]);
  const navigate = useNavigate(); // Hook for navigation

  // Fetch consultants on mount
  useEffect(() => {
    axios
      .get('http://localhost:8080/consultants/all')
      .then((response) => setConsultants(response.data))
      .catch((error) => console.error('Error fetching consultants:', error));
  }, []);

  // Handle consultant selection and navigate to booking page
  const handleConsultantClick = (consultant: Consultant) => {
    navigate(`/booking/${consultant.consultantId}`, { state: { consultant } }); // Passing consultant data
  };

  return (
    <div className="p-8 font-sans bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-green-500 mb-8">Select a Consultant</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {consultants.length > 0 ? (
          consultants.map((consultant) => (
            <div
              key={consultant.consultantId}
              className="bg-white p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl"
              onClick={() => handleConsultantClick(consultant)}
            >
              <h3 className="text-lg font-semibold text-gray-700">
                {consultant.firstname} {consultant.lastname}
              </h3>
              <p className="text-gray-600">Specialization: {consultant.specialization}</p>
              <p className="text-gray-600">License Number: {consultant.licenseNumber}</p>
            </div>
          ))
        ) : (
          <p>No consultants available</p>
        )}
      </div>
    </div>
  );
};

export default BookAppointment;
