import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserConsultantPage: React.FC = () => {
    const navigate = useNavigate();

    const handleUserClick = () => {
        navigate('/login'); // Navigate to user login/register page
    };

    const handleConsultantClick = () => {
        navigate('/consultant-login'); // Navigate to consultant login/register page
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 via-indigo-800 to-purple-900 text-white">
            <div className="text-center p-6">
                <h1 className="text-5xl font-extrabold mb-6 text-yellow-400 drop-shadow-lg">
                    Welcome to MindCare
                </h1>
                <p className="text-xl mb-10 max-w-xl mx-auto text-gray-300 drop-shadow-sm">
                    Your well-being matters. Select your role to access tailored mental health and emergency support services.
                </p>
            </div>
            <div className="flex space-x-8">
                <button
                    className="px-10 py-5 bg-blue-600 text-white rounded-3xl font-semibold shadow-2xl transform hover:bg-blue-700 hover:scale-105 transition-all"
                    onClick={handleUserClick}
                >
                    I am a User
                </button>
                <button
                    className="px-10 py-5 bg-green-600 text-white rounded-3xl font-semibold shadow-2xl transform hover:bg-green-700 hover:scale-105 transition-all"
                    onClick={handleConsultantClick}
                >
                    I am a Consultant
                </button>
            </div>
            <footer className="mt-16 text-sm text-gray-400">
                <p>&copy; 2024 MindCare. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default UserConsultantPage;
