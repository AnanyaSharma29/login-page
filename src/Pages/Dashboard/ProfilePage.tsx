import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPen } from 'react-icons/fa';

const ProfilePage: React.FC = () => {
  const [name, setName] = useState<string>('Ananya Sharma');
  const [email, setEmail] = useState<string>('sharmananya02@gmail.com');
  const [phone, setPhone] = useState<string>('9660770845');
  const [appointments, setAppointments] = useState<string[]>([]);
  const [assessmentScores, setAssessmentScores] = useState<{ test: string; score: number }[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching data from the database
    const fetchData = async () => {
      // Replace this with actual API calls
      setAppointments(['Consultation with Dr. Smith', 'Follow-up Session']);
      setAssessmentScores([
        { test: 'Stress Test', score: 85 },
        { test: 'Anxiety Test', score: 78 },
      ]);
    };
    fetchData();
  }, []);

  const handleSaveChanges = () => {
    alert('Changes saved successfully!');
    // Add API call to save changes to the database
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Edit Profile</h2>
        <div className="space-y-4">
          <div className="relative">
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded"
            />
            <FaPen className="absolute right-3 top-8 text-gray-400 cursor-pointer" />
          </div>
          <div className="relative">
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded"
            />
            <FaPen className="absolute right-3 top-8 text-gray-400 cursor-pointer" />
          </div>
          <div className="relative">
            <label className="block text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              className="w-full px-3 py-2 border rounded"
            />
            <FaPen className="absolute right-3 top-8 text-gray-400 cursor-pointer" />
          </div>
        </div>

        <button
          onClick={handleSaveChanges}
          className="w-full mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Save Changes
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mb-8">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Appointments</h3>
        <ul className="list-disc pl-6 space-y-2">
          {appointments.map((appointment, index) => (
            <li key={index} className="text-gray-700">
              {appointment}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Assessment Scores</h3>
        <ul className="space-y-2">
          {assessmentScores.map((assessment, index) => (
            <li key={index} className="text-gray-700">
              {assessment.test}: <span className="font-semibold">{assessment.score}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;
