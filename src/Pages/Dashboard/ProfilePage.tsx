import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface UserProfile {
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    phonenumber: string;
    assessmentScores: {
        totalScore: number;
        feedback: string;
        timestamp: string;
    }[];
}

const ProfilePage: React.FC = () => {
    const [userData, setUserData] = useState<UserProfile | null>(null);
    const [formData, setFormData] = useState<UserProfile>({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        phonenumber: '',
        assessmentScores: [],
    });
    const [isEditing, setIsEditing] = useState(false);
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const [message, setMessage] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);
    const userEmail = localStorage.getItem('userEmail');

    useEffect(() => {
        if (userEmail) {
            const fetchUserProfile = async () => {
                try {
                    const response = await axios.get(`http://localhost:8080/auth/profile/user/${userEmail}`);
                    setUserData(response.data.data);
                    setFormData(response.data.data);
                } catch (error) {
                    console.error('Error fetching profile:', error);
                    setMessage('Error loading profile data');
                }
            };
            fetchUserProfile();
        } else {
            setMessage('No email found in localStorage');
        }
    }, [userEmail]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = async () => {
        if (userEmail) {
            try {
                setMessage('Updating profile...');
                setIsLoading(true);

                const response = await axios.put(`http://localhost:8080/auth/update/user/${userEmail}`, formData);

                if (formData.email !== userEmail) {
                    localStorage.setItem('userEmail', formData.email);
                }

                setUserData(formData);
                setIsEditing(false);

                setMessage(response.data.message || 'Profile updated successfully!');

                setTimeout(() => {
                    setIsLoading(false);
                    setMessage('Profile updated successfully!');
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                }, 2000);
            } catch (error) {
                console.error('Error saving profile:', error);
                setIsLoading(false);
                setMessage('Error saving profile');
            }
        } else {
            setMessage('No email found in localStorage');
        }
    };

    const handleCancel = () => {
        setFormData(userData as UserProfile);
        setIsEditing(false);
        setMessage('');
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const toggleOverlay = () => {
        setIsOverlayVisible(!isOverlayVisible);
    };

    // Close the overlay if clicked outside of it
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const overlay = document.getElementById('assessment-overlay-container');
            if (overlay && !overlay.contains(e.target as Node)) {
                setIsOverlayVisible(false);
            }
        };

        if (isOverlayVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOverlayVisible]);

    return (
        <div className="max-w-3xl mx-auto p-8 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-4">User Profile</h2>

            {message && <div className="text-center text-red-500 mt-4">{message}</div>}

            {userData ? (
                <div>
                    {['firstname', 'lastname', 'username', 'email', 'phonenumber'].map((field) => (
                        <div key={field} className="mb-6">
                            <label className="block text-gray-700 font-semibold mb-2">
                                {field.charAt(0).toUpperCase() + field.slice(1).replace('name', ' Name')}:
                            </label>
                            {isEditing ? (
                                <input
                                    type={field === 'email' ? 'email' : 'text'}
                                    name={field}
                                    value={(formData as any)[field]}
                                    onChange={handleChange}
                                    className="w-full p-3 text-lg border border-gray-300 rounded-lg"
                                />
                            ) : (
                                <p className="text-lg">{(userData as any)[field]}</p>
                            )}
                        </div>
                    ))}

                    <div className="flex justify-between mt-6">
                        {isEditing ? (
                            <>
                                <button
                                    onClick={handleSave}
                                    className="bg-green-500 text-white px-6 py-2 rounded-md font-semibold"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={handleCancel}
                                    className="bg-red-500 text-white px-6 py-2 rounded-md font-semibold"
                                >
                                    Cancel
                                </button>
                            </>
                        ) : (
                            <button
                                onClick={handleEdit}
                                className="bg-blue-500 text-white px-6 py-2 rounded-md font-semibold"
                            >
                                Edit
                            </button>
                        )}
                    </div>

                    <div className="mt-6 text-center">
                        <button
                            onClick={toggleOverlay}
                            className="bg-blue-500 text-white px-6 py-2 rounded-md font-semibold"
                        >
                            See Assessment Scores
                        </button>
                    </div>
                </div>
            ) : (
                <p>Loading profile...</p>
            )}

            {/* Loading spinner */}
            {isLoading && (
                <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="animate-spin border-4 border-t-4 border-blue-500 rounded-full w-12 h-12"></div>
                    <p className="text-white ml-4">Saving data...</p>
                </div>
            )}

            {/* Overlay for Assessment Scores */}
            {isOverlayVisible && userData && (
                <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
                    <div
                        id="assessment-overlay-container"
                        className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full"
                        style={{ maxHeight: '400px', overflowY: 'auto' }} // Make it scrollable
                    >
                        <h3 className="text-2xl font-semibold mb-4">Assessment Scores</h3>
                        {userData.assessmentScores?.map((score, index) => (
                            <div key={index} className="mb-4">
                                <p><strong>Total Score:</strong> {score.totalScore}</p>
                                <p><strong>Feedback:</strong> {score.feedback}</p>
                                <p><strong>Timestamp:</strong> {new Date(score.timestamp).toLocaleString()}</p>
                            </div>
                        ))}
                        <button
                            onClick={toggleOverlay}
                            className="bg-red-500 text-white px-6 py-2 rounded-md font-semibold mt-4"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;
