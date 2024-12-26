import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

interface Consultant {
  consultantId: string;
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  specialization: string;
  licenseNumber: string;
}

interface Appointment {
  
  date: string;
  time: string;
  status: string;
}

const BookingPage: React.FC = () => {
  const { consultantId } = useParams();
  const location = useLocation();
  const { consultant } = location.state as { consultant: Consultant }; // Get consultant from state

  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [bookingStatus, setBookingStatus] = useState<Appointment | null>(null);

  const [userName, setUserName] = useState<string>(""); // User name input field
  const [userEmail, setUserEmail] = useState<string>(""); // Email fetched from localStorage

  // Fetch email from localStorage
  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      setUserEmail(storedEmail);
    } else {
      console.error("User email not found in localStorage.");
    }
  }, []);

  // Fetch user's booking status on mount
  useEffect(() => {
    if (userEmail) {
      axios
        .get(`http://localhost:8080/appointments/status?email=${userEmail}`)
        .then((response) => {
          setBookingStatus(response.data); // Set status from the backend
        })
        .catch((error) => {
          console.error("Error fetching booking status:", error);
        });
    }
  }, [userEmail]);

  // Convert time to 24-hour format
  const convertTo24HourFormat = (time: string): string => {
    const timeParts = time.split(":");
    let hour = parseInt(timeParts[0], 10);
    const minute = timeParts[1].slice(0, 2);
    const period = timeParts[1].slice(2).toUpperCase();

    if (period === "PM" && hour < 12) {
      hour += 12;
    }
    if (period === "AM" && hour === 12) {
      hour = 0;
    }

    return `${hour.toString().padStart(2, "0")}:${minute}:00`;
  };

  // Handle booking logic
  const handleBooking = () => {
    if (consultant && selectedDate && selectedTime && userName) {
      setIsLoading(true);
      const timeIn24HourFormat = convertTo24HourFormat(selectedTime);

      const bookingData = {
        name: userName,
        consultantEmail: consultant.email,
        userEmail: userEmail, // Send user email from localStorage
        date: selectedDate,
        time: timeIn24HourFormat,
        status: "PENDING",
      };

      axios
        .post("http://localhost:8080/appointments/book", bookingData)
        .then((response) => {
          alert("Appointment Confirmed!");
          setBookingStatus({ date: selectedDate, time: selectedTime, status: "PENDING" });
        })
        .catch((error) => {
          console.error("Error booking appointment:", error);
          alert("Error booking appointment!");
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      alert("Please fill out all fields to book an appointment.");
    }
  };

  return (
    <div className="p-8 font-sans bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-green-500 mb-8">
        Book an Appointment with {consultant.firstname} {consultant.lastname}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Appointment Status Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-500">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Appointment Status</h2>
          {bookingStatus ? (
            <div className="text-center text-gray-600">
              <div className="flex flex-col items-center space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-800">Date:</span>
                  <p>{bookingStatus.date}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-800">Time:</span>
                  <p>{bookingStatus.time}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-800">Status:</span>
                  <span
                    className={`${
                      bookingStatus.status === "PENDING"
                        ? "text-yellow-500"
                        : bookingStatus.status === "CONFIRMED"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {bookingStatus.status}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-600">No booking found</p>
          )}
        </div>

        {/* Appointment Booking Form Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <label htmlFor="name" className="block text-gray-600 mt-4">Name:</label>
          <input
            type="text"
            id="name"
            value={userName} // User can input their name
            onChange={(e) => setUserName(e.target.value)} // Dynamically update user name
            className="w-full p-2 mt-2 border border-gray-300 rounded-md bg-gray-100"
            placeholder="Enter your name"
          />

          <label htmlFor="email" className="block text-gray-600 mt-4">Email:</label>
          <input
            type="email"
            id="email"
            value={userEmail} // Email fetched from localStorage
            disabled // Make email field non-editable
            className="w-full p-2 mt-2 border border-gray-300 rounded-md bg-gray-100"
          />

          <label htmlFor="date" className="block text-gray-600 mt-4">Select a Date:</label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
          />

          <label htmlFor="time" className="block text-gray-600 mt-4">Select a Time:</label>
          <select
            id="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
          >
            <option value="">--Select Time--</option>
            <option value="09:00 AM">09:00 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="02:00 PM">02:00 PM</option>
            <option value="03:00 PM">03:00 PM</option>
          </select>

          <button
            onClick={handleBooking}
            className={`w-full mt-6 py-2 rounded-md transition-colors ${isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"} text-white`}
            disabled={isLoading}
          >
            {isLoading ? "Booking..." : "Confirm Appointment"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
