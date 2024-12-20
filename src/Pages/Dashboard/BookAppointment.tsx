import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
  const [consultants, setConsultants] = useState<Consultant[]>([]); // Store all consultants
  const [selectedConsultant, setSelectedConsultant] = useState<Consultant | null>(null); // Store selected consultant
  const [selectedDate, setSelectedDate] = useState<string>(''); // Store selected date
  const [selectedTime, setSelectedTime] = useState<string>(''); // Store selected time
  const [isLoading, setIsLoading] = useState(false); // To show loading state
  const [userId] = useState('user1'); // Assuming 'user1' is the user making the booking

  // State to hold the booking status for each consultant
  const [bookingStatus, setBookingStatus] = useState<{ [key: string]: string }>({});

  // Fetch all consultant data from backend
  useEffect(() => {
    axios
      .get('http://localhost:8080/consultants/all')
      .then((response) => {
        setConsultants(response.data); // Store the fetched consultant data
      })
      .catch((error) => {
        console.error('There was an error fetching the consultant data:', error);
      });

    // Load the booking status from localStorage if it exists
    const savedBookingStatus = localStorage.getItem('bookingStatus');
    if (savedBookingStatus) {
      setBookingStatus(JSON.parse(savedBookingStatus));
    }
  }, []);

  const handleConsultantClick = (consultant: Consultant) => {
    setSelectedConsultant(consultant); // Set the selected consultant
  };

  const convertTo24HourFormat = (time: string): string => {
    const timeParts = time.split(':'); // Split by colon
    if (timeParts.length !== 2) return ''; // Ensure the time is in the correct format

    let hour = parseInt(timeParts[0], 10);
    const minute = timeParts[1].slice(0, 2); // Only consider the first two digits for minutes
    const period = timeParts[1].slice(2).toUpperCase(); // AM/PM part

    if (period === 'PM' && hour < 12) {
      hour += 12; // Convert PM hour to 24-hour format
    }
    if (period === 'AM' && hour === 12) {
      hour = 0; // Convert 12 AM to 00:xx
    }

    // Format the time as HH:mm:ss
    return `${hour.toString().padStart(2, '0')}:${minute}:00`;
  };

  const handleBooking = () => {
    if (selectedConsultant && selectedDate && selectedTime) {
      // If the status for the selected consultant is already "PENDING", do not allow booking again
      if (bookingStatus[selectedConsultant.consultantId] === 'PENDING') {
        alert('Your appointment with this consultant is already pending.');
        return;
      }

      // Set loading to true when the booking starts
      setIsLoading(true);

      // Convert the time to 24-hour format
      const timeIn24HourFormat = convertTo24HourFormat(selectedTime);

      // Log the booking data being sent to the backend
      const bookingData = {
        userId: 'user1', // Replace this with the actual user ID if available
        consultantEmail: selectedConsultant.email, // Make sure this is coming from the selected consultant
        date: selectedDate,
        time: timeIn24HourFormat,
        status: 'PENDING', // Initial status is pending
      };

      console.log('Booking request data:', bookingData); // This will log the data to ensure it's correct

      // Send booking request to backend
      axios
        .post('http://localhost:8080/appointments', bookingData)
        .then((response) => {
          console.log('Appointment request sent:', response.data);
          // Set the booking status to 'PENDING' for the selected consultant
          setBookingStatus((prevState) => {
            const updatedStatus = { ...prevState, [selectedConsultant.consultantId]: 'PENDING' };
            // Save the updated status to localStorage
            localStorage.setItem('bookingStatus', JSON.stringify(updatedStatus));
            return updatedStatus;
          });
        })
        .catch((error) => {
          console.error('Error booking appointment:', error);
          alert('Error booking appointment!');
        })
        .finally(() => {
          setIsLoading(false); // Set loading to false after the request is completed
        });
    } else {
      alert('Please select all fields to book an appointment.');
    }
  };

  return (
    <div className="p-8 font-sans bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-green-500 mb-8">Book an Appointment</h1>

      {!selectedConsultant ? (
        <div>
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
            Select a Consultant
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {consultants.length > 0 ? (
              consultants.map((consultant) => (
                <div
                  key={consultant.consultantId} // Use consultantId as the key
                  className="bg-white p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl"
                  onClick={() => handleConsultantClick(consultant)}
                >
                  <h3 className="text-lg font-semibold text-gray-700">
                    {consultant.firstname} {consultant.lastname} {/* Display firstname and lastname */}
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
      ) : (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
            Book with {selectedConsultant.firstname} {selectedConsultant.lastname} {/* Use firstname and lastname */}
          </h2>
          <p className="text-center text-gray-600">Specialization: {selectedConsultant.specialization}</p>
          <p className="text-center text-gray-600">License Number: {selectedConsultant.licenseNumber}</p>

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
            className={`w-full mt-6 py-2 rounded-md transition-colors ${
              bookingStatus[selectedConsultant.consultantId] === 'PENDING' ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'
            } text-white`}
            disabled={bookingStatus[selectedConsultant.consultantId] === 'PENDING'}
          >
            {bookingStatus[selectedConsultant.consultantId] === 'PENDING' ? 'Pending' : isLoading ? 'Booking...' : 'Confirm Appointment'}
          </button>

          {isLoading && (
            <div className="mt-4 text-center text-gray-600">Please wait while we process your booking...</div>
          )}
        </div>
      )}
    </div>
  );
};

export default BookAppointment;
