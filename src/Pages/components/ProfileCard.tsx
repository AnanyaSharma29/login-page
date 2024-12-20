// src/components/ProfileCard.tsx
import React from "react";

interface Consultant {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  specialization: string;
  licenseNumber: string;
}

interface ProfileCardProps {
  consultant: Consultant;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ consultant }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800">
        {consultant.firstname} {consultant.lastname}
      </h2>
      <p className="text-gray-600">Specialization: {consultant.specialization}</p>
      <p className="text-gray-600">License Number: {consultant.licenseNumber}</p>
      <p className="text-gray-600">Email: {consultant.email}</p>
      <p className="text-gray-600">Phone Number: {consultant.phonenumber}</p>
    </div>
  );
};

export default ProfileCard;
