import React, { useState } from 'react';

const ServicesPage: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleLearnMoreClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="font-sans bg-gray-50">
      {/* Services Section */}
      <section className="py-20">
        <h2 className="text-center text-3xl font-bold mb-8 text-blue-800">Our Services</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="service1.jpg"
              alt="Service 1"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-bold mb-2 text-blue-800">Daily Task for Users</h3>
            <p className="text-gray-600">
              Meditation tasks sent to your mobile or email for daily mindfulness.
            </p>
            <button
              onClick={handleLearnMoreClick}
              className="mt-4 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
            >
              Learn More
            </button>
          </div>

          {/* Repeat for other services */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="service2.jpg"
              alt="Service 2"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-bold mb-2 text-blue-800">Motivational Thoughts</h3>
            <p className="text-gray-600">
              Receive uplifting and motivational thoughts directly to your inbox.
            </p>
            <button
              onClick={handleLearnMoreClick}
              className="mt-4 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
            >
              Learn More
            </button>
          </div>


          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="service3.jpg"
              alt="Service 3"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-bold mb-2 text-blue-800">Exercise Tasks</h3>
            <p className="text-gray-600">
              Regular exercise tasks delivered through email to keep you active and healthy.
            </p>
            <button
              onClick={handleLearnMoreClick}
              className="mt-4 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
            >
              Learn More
            </button>
          </div>


         {/* Service 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="service4.jpg"
              alt="Service 4"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-bold mb-2 text-blue-800">Relax And Meditate</h3>
            <p className="text-gray-600">
              Relaxing music added to the background of the website to enhance mental well-being.
            </p>
                          <button onClick={handleLearnMoreClick}
              className="mt-4 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
            >
              Learn More
            </button>
          </div>

                   {/* Service 5 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <img
                        src="service5.jpg"
                        alt="Service 5"
                        className="w-full h-40 object-cover mb-4 rounded-lg"
                      />
                      <h3 className="text-2xl font-bold mb-2 text-blue-800">Mood Tracking</h3>
                      <p className="text-gray-600">
                        Track your mood using a simple form and receive insights into your emotional well-being.
                      </p>
                        <button  onClick={handleLearnMoreClick}
              className="mt-4 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
            >
              Learn More
            </button>
          </div>





        </div>
      </section>

{/* Popup */}
{showPopup && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="max-w-lg border rounded-lg bg-white shadow-lg w-full mx-4">
      <div className="flex flex-col p-8 rounded-lg">
        <div className="flex">
          <div>
            <svg
              className="w-8 h-8 fill-current text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
          </div>

          <div className="ml-4">
            <h2 className="font-semibold text-xl text-gray-800">Login Required</h2>
            <p className="mt-4 text-base text-gray-600 leading-relaxed">
              Please log in to access more details about our services. Logging in will allow
              you to unlock exclusive features and personalized recommendations.
            </p>
          </div>
        </div>

        <div className="flex justify-end items-center mt-6">
          <button
            onClick={closePopup}
            className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md"
          >
            Cancel
          </button>

          <button
            onClick={() => window.location.href = '/login'}
            className="px-6 py-3 ml-4 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-md"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
)}


    </div>
  );
};

export default ServicesPage;
