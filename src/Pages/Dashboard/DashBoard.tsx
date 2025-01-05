import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUserCircle, FaPhone, FaHeart, FaBook, FaHandHoldingHeart, FaComments, FaTools, FaHandsHelping, FaFileAlt } from 'react-icons/fa';


const Dashboard: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
<<<<<<< HEAD
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
=======
  const [message, setMessage] = useState<string | null>(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false); // For handling the profile dropdown
>>>>>>> origin/master
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(3); // Time left for the progress bar

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    const userRole = localStorage.getItem('role');

    if (!userEmail || !userRole) {
      setIsLoggedIn(false);
      navigate('/');
    } else {
      setIsLoggedIn(true);
    }
<<<<<<< HEAD

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
=======
  },[navigate]);

>>>>>>> origin/master

  const handleLoginClick = () => {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('role');
    setIsLoggedIn(false);
    navigate('/');
  };
<<<<<<< HEAD

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
=======

  interface Location {
    latitude: number;
    longitude: number;
}
>>>>>>> origin/master

// Function to get the user's location
function getUserLocation(): Promise<Location> {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position: GeolocationPosition) => {
                    const { latitude, longitude } = position.coords;
                    resolve({ latitude, longitude });
                },
                (error: GeolocationPositionError) => {
                    reject('Error fetching location: ' + error.message);
                }
            );
        } else {
            reject('Geolocation is not supported by this browser.');
        }
    });
}
// Function to send SOS alert
  // Function to send SOS alert
  const sendSos = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevent default behavior of the event

    const emergencyContactsString = localStorage.getItem("emergencyContacts");

    if (emergencyContactsString) {
      const emergencyContacts = JSON.parse(emergencyContactsString); // Parse the JSON string

      if (emergencyContacts && emergencyContacts.length > 0) {
        try {
          const location = await getUserLocation();
          const { latitude, longitude } = location;

          // Reverse geocoding to get the address from latitude and longitude
          const reverseGeocodingUrl = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
          const geocodeResponse = await axios.get(reverseGeocodingUrl);
          const address = geocodeResponse.data.display_name || 'Unknown location';

          let successCount = 0; // To track the number of successful SMS sent
          let failureCount = 0; // To track failures

          // Iterate over all emergency contacts and send SOS
          for (const contact of emergencyContacts) {
            if (contact.contactNumber) {
              try {
                const response = await axios.get(
                  `http://localhost:8080/send-sos?phoneNumber=${encodeURIComponent(contact.contactNumber)}&latitude=${latitude}&longitude=${longitude}&address=${encodeURIComponent(address)}`
                );
                console.log(`SOS alert sent to ${contact.contactNumber}`);
                if (response.status === 200) {
                  successCount++;
                } else {
                  failureCount++;
                }
              } catch (err) {
                console.error(`Failed to send SOS to ${contact.contactNumber}`, err);
                failureCount++;
              }
            }
          }

          // If all messages were sent successfully
          if (successCount > 0 && failureCount === 0) {
            setMessage("SOS alert sent successfully!");
          } else if (failureCount > 0) {
            setMessage("Some SOS alerts failed to send.");
          } else {
            setMessage("No SOS alerts were sent.");
          }
        } catch (error) {
          console.error("Failed to send SOS alert:", error);
          setMessage("Failed to send SOS alert. Please try again.");
        }
      } else {
        console.log("No emergency contacts found.");
        setMessage("No emergency contacts found.");
      }
    } else {
      console.log("Emergency contacts not found in local storage.");
      setMessage("Emergency contacts not found.");
    }
  };

  useEffect(() => {
    if (message) {
      setIsVisible(true);

      // Start a countdown for the progress bar
      const interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev === 1) {
            clearInterval(interval); // Stop when the timer reaches 0
            setMessage(null); // Hide the message
          }
          return prev - 1;
        });
      }, 1000); // Decrease every second

      // Hide the popup after 3 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    }
  }, [message]);

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
<<<<<<< HEAD
=======
          
          {/* Profile Button and Log Out Button */}
>>>>>>> origin/master
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
             {/* Display the message after sending SOS */}
       {isVisible && message && (
        <div
          className={`absolute top-4 right-4 bg-opacity-90 ${
            message.includes("successfully") ? "bg-green-500" : "bg-red-500"
          } text-white p-4 rounded-lg shadow-lg transition-opacity duration-500`}
        >
          <div className="flex items-center space-x-2">
            <span className="text-lg font-semibold">🔔</span>
            <span>{message}</span>
          </div>

          {/* Timestamp line that decreases over time */}
          <div className="mt-2 h-1 bg-gray-300 w-full rounded-full">
            <div
              className="h-full bg-blue-500 transition-all duration-1000 ease-in-out"
              style={{
                width: `${(timeLeft / 3) * 100}%`, // Update the width based on time left
              }}
            ></div>
          </div>
        </div>
      )}

<<<<<<< HEAD
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

=======
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Welcome Section */}
          <section className="px-4 py-6 sm:px-0">
            <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 relative">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Welcome to the Emergency and Mental Wellbeing Dashboard</h2>
              <p className="text-gray-700 mb-6">Your one-stop solution for mental health and emergency resources. Explore our services and get the support you need!</p>
              
              {/* SOS Button positioned near services */}
              <div className="flex flex-wrap gap-6">
                <Link to="/emergency-contacts" className="bg-red-500 text-white px-6 py-3 rounded-lg transition hover:bg-red-600 w-full sm:w-auto text-center">
                  Emergency Contacts
                </Link>
                <Link to="/book-appointment" className="bg-blue-500 text-white px-6 py-3 rounded-lg transition hover:bg-blue-600 w-full sm:w-auto text-center">Book Appointment</Link>
                <Link to="/self-assessment-tools" className="bg-green-500 text-white px-6 py-3 rounded-lg transition hover:bg-green-600 w-full sm:w-auto text-center">Self-Assessment Tools</Link>
                <Link to="/help" className="bg-purple-500 text-white px-6 py-3 rounded-lg transition hover:bg-purple-600 w-full sm:w-auto text-center">Helpline Numbers</Link>
                <div>
    {/* SOS Button */}
    <button
      onClick={sendSos}
      className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-red-500 text-white px-14 py-14 rounded-full transition hover:bg-red-600 focus:outline-none"
    >
      SOS
    </button>


  </div>
  </div>
  </div>
        
          </section>
          {/* Featured Articles/Resources Section */}
          <section className="mt-8">
            <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Featured Articles & Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl text-blue-500 mr-3">🧠</span>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Empower Your Mind: Managing Stress and Anxiety</h3>
                  </div>
                  <p className="text-gray-600">Explore practical methods to reduce stress and manage anxiety, and take control of your mental well-being.</p>
                  <Link to="/article-1" className="text-blue-500 hover:underline mt-4 block">Start Your Journey</Link>
                </div>
                <div className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl text-green-500 mr-3">💚</span>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Strengthen Your Resilience: Coping with Emotional Distress</h3>
                  </div>
                  <p className="text-gray-600">Discover actionable strategies for coping with emotional pain and how to bounce back stronger.</p>
                  <Link to="/article-2" className="text-green-500 hover:underline mt-4 block">Take the First Step</Link>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl text-yellow-500 mr-3">🌟</span>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Unlock Your Potential: Mental Health Support Services</h3>
                  </div>
                  <p className="text-gray-600">Find local mental health resources to empower you in your wellness journey and start seeking support today.</p>
                  <Link to="/article-3" className="text-yellow-500 hover:underline mt-4 block">Explore Resources</Link>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Tools Section */}
          <section className="mt-8">
  <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
    <h2 className="text-2xl font-bold mb-4 text-gray-900">Interactive Tools</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition">   
           <h3 className="text-xl font-bold mb-2">Mood Tracker</h3>
        <p className="text-gray-300">Track your daily mood and gain insights into your mental wellbeing.</p>
        <Link to="/service/mood-tracking" className="bg-blue-500 text-white px-4 py-2 rounded mt-4 block text-center">Try It Out</Link>
      </div>
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
        <h3 className="text-xl font-bold mb-2">Stress Level Checker</h3>
        <p className="text-gray-300">Check your current stress level and receive personalized tips.</p>
        <Link to="/stress-level-checker" className="bg-blue-500 text-white px-4 py-2 rounded mt-4 block text-center">Try It Out</Link>
      </div>
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
        <h3 className="text-xl font-bold mb-2">Appointment Scheduler</h3>
        <p className="text-gray-300">Schedule your mental health counseling sessions easily.</p>
        <Link to="/appointment-scheduler" className="bg-blue-500 text-white px-4 py-2 rounded mt-4 block text-center">Book an Appointment</Link>
      </div>
    </div>
  </div>
</section>


        </div>
      </main>
>>>>>>> origin/master
    </div>
  );
};

export default Dashboard;
