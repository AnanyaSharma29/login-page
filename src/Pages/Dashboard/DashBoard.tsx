import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUserCircle, FaPhone, FaHeart, FaBook, FaHandHoldingHeart, FaComments, FaTools, FaHandsHelping, FaFileAlt } from 'react-icons/fa';

const Dashboard: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    const userRole = localStorage.getItem('role');

    if (!userEmail || !userRole) {
      setIsLoggedIn(false);
      navigate('/');
    } else {
      setIsLoggedIn(true);
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        error => console.error(error),
        { timeout: 5000 }
      );
    }
  }, [navigate]);

  const handleLoginClick = () => {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('role');
    setIsLoggedIn(false);
    navigate('/');
  };

  const handleSosAlert = async () => {
    if (!location) {
      alert('Unable to get your location. Please try again later.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/sos-alert', {
        lat: location.lat,
        lon: location.lon,
      });

      if (response.status === 200) {
        alert('SOS Alert Sent! Emergency contacts notified.');
      }
    } catch (error) {
      console.error('Error sending SOS alert:', error);
      alert('Failed to send SOS alert. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white font-sans">
      {/* Header */}
      <header className="bg-white shadow-lg dark:bg-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center relative">
          <h1 className="text-3xl font-bold text-white-900 hover:text-yellow-400">MindCare Dashboard</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><Link to="/dashboard-home" className="text-gray-900 hover:text-blue-500 dark:text-white dark:hover:text-blue-300">Home</Link></li>
              <li><Link to="/services" className="text-gray-900 hover:text-blue-500 dark:text-white dark:hover:text-blue-300">Services</Link></li>
              <li><Link to="/blog" className="text-gray-900 hover:text-blue-500 dark:text-white dark:hover:text-blue-300">Blog</Link></li>
              <li><Link to="/about" className="text-gray-900 hover:text-blue-500 dark:text-white dark:hover:text-blue-300">About</Link></li>
              <li><Link to="/contact" className="text-gray-900 hover:text-blue-500 dark:text-white dark:hover:text-blue-300">Contact</Link></li>
            </ul>
          </nav>
          <div className="relative flex items-center">
            <button
              className="flex items-center bg-orange-500 text-white px-6 py-2 rounded-full transition hover:bg-orange-600 mr-4"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <FaUserCircle className="mr-2" /> Profile
            </button>
            {isLoggedIn && (
              <button
                onClick={handleLoginClick}
                className="bg-red-500 text-white px-6 py-2 rounded-full transition hover:bg-red-600"
              >
                Log Out
              </button>
            )}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white text-gray-900 rounded-lg shadow-lg w-40">
                <ul className="py-2">
                  <li>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                    >
                      Profile
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Welcome Section */}
      <section className="py-10 text-center bg-gradient-to-r from-blue-400 to-purple-600">
        <h2 className="text-4xl font-bold mb-4">Your Partner in Emergency & Mental Well-being</h2>
        <p className="text-lg">We are here to support you with resources, tools, and a community that cares.</p>
      </section>
{/* Emergency Assistance Section */}
<section className="py-16 bg-gradient-to-r from-red-400 to-red-600 text-white rounded-lg shadow-lg">
  <div className="max-w-7xl mx-auto px-6 relative">
    <h3 className="text-3xl font-bold mb-6 flex items-center">
      <FaPhone className="mr-2 text-white" /> Emergency Assistance
    </h3>
    <p className="text-lg mb-6">
      In case of an emergency, you can quickly add trusted contacts and send them an SOS alert. Simply click the button below to manage your contacts or to notify them when you're in need of help.
    </p>
    <p className="text-lg mb-8">
      Click to add your closed ones to your emergency contact list.
    </p>
    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-12">
      <Link
        to="/emergency-contacts"
        className="bg-white text-red-600 px-8 py-4 rounded-lg transition hover:bg-red-600 hover:text-white w-full sm:w-auto text-center text-xl font-semibold"
      >
        Emergency Contacts
      </Link>
    </div>

    {/* SOS Button (Circle) */}
    <button
      onClick={handleSosAlert}
      className="bg-white text-red-600 px-12 py-12 rounded-full text-xl font-semibold transition hover:bg-red-600 hover:text-white focus:outline-none absolute right-10 bottom-8"
      style={{
        left:'99%',
        width: '200px', // Adjust the size to make the button a perfect circle
        height: '200px', // Adjust height to make it a circle
      }}
    >
      SOS
    </button>
  </div>
</section>



      {/* Book Appointment Section */}
  {/* Book Appointment Section */}
<section className="py-16 bg-gradient-to-r from-teal-400 to-indigo-500 text-white rounded-lg shadow-lg">
  <div className="max-w-7xl mx-auto px-6">
    <h3 className="text-3xl font-bold mb-6 flex items-center">
      <FaHeart className="mr-2 text-white" /> Book an Appointment
    </h3>
    <p className="text-lg mb-6">
      Book an appointment with our trained consultants who specialize in mental well-being. Whether you need help managing stress, anxiety, or simply want someone to talk to, we are here to support you every step of the way.
    </p>
    <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
      <Link
        to="/book-appointment"
        className="bg-teal-600 text-white px-8 py-4 rounded-lg transition hover:bg-teal-700 w-full sm:w-auto text-center text-xl font-semibold"
      >
        Schedule Your Appointment
      </Link>
    </div>
  </div>
</section>

   {/* Self-Assessment Tools Section */}
<section className="py-16 bg-gradient-to-r from-green-400 to-teal-500 text-white rounded-lg shadow-lg">
  <div className="max-w-7xl mx-auto px-6">
    <h3 className="text-3xl font-bold mb-6 flex items-center">
      <FaTools className="mr-2 text-white" /> Self-Assessment Tools
    </h3>
    <p className="text-lg mb-6">
      Use our self-assessment tools to better understand your mental health. These tools can help you track your mood, assess your stress levels, and provide you with personalized insights to enhance your mental well-being.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
        <h4 className="text-xl font-bold mb-2 flex items-center">
          <FaComments className="mr-2 text-purple-500" /> Stress Level Checker
        </h4>
        <p className="text-gray-700">
          Assess your current stress levels by filling out a simple form. Get personalized tips based on your results.
        </p>
        <Link to="/self-assessment-tools" className="bg-teal-600 text-white px-6 py-3 rounded-lg mt-4 block text-center text-lg font-semibold hover:bg-teal-700">
          Start Assessment
        </Link>
      </div>
    </div>
    
  </div>
</section>

<section className="py-10 bg-white text-gray-900">
  <div className="max-w-7xl mx-auto px-6">
    <h3 className="text-3xl font-bold mb-6 flex items-center">
      <FaFileAlt className="mr-2 text-blue-500" /> Featured Articles & Resources
    </h3>
    <p className="text-lg mb-6">
      Dive into our curated collection of articles and resources designed to empower you on your mental wellness journey. Learn practical tips, discover coping strategies, and find support to help you manage stress, anxiety, and emotional well-being.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
        <h4 className="text-xl font-bold mb-2">Empower Your Mind: Managing Stress and Anxiety</h4>
        <p className="text-gray-600">
          In this article, we explore practical methods and techniques to help you reduce stress and manage anxiety in your daily life. With simple steps, you can regain control over your emotions and promote a balanced mental state.
        </p>
        <Link to="/article-1" className="text-blue-500 hover:underline mt-4 block">Start Your Journey</Link>
      </div>
      <div className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
        <h4 className="text-xl font-bold mb-2">Strengthen Your Resilience</h4>
        <p className="text-gray-600">
          Learn actionable strategies for building emotional resilience. This article provides guidance on developing healthy coping mechanisms and embracing challenges as opportunities for growth and emotional strength.
        </p>
        <Link to="/article-2" className="text-green-500 hover:underline mt-4 block">Take the First Step</Link>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Dashboard;
