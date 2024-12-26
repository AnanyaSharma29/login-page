// ServicesPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  return (
    <div className="font-sans bg-gray-50">
      {/* Header
      <header className="flex justify-between items-center p-6 bg-white shadow-md">
        <div className="text-2xl font-bold text-blue-700">Our Services</div>
        <nav className="space-x-4">
          <Link to="/about" className="text-gray-700 hover:text-blue-700">About</Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-700">Services</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-700">Contact Us</Link>
        </nav>
      </header> */}

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
            <Link to="/services/daily-task">
              <button className="mt-4 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
                Learn More
              </button>
            </Link>
          </div>
          {/* Service 2 */}
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
            <Link to="/service/motivational-thoughts">
              <button className="mt-4 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
                Learn More
              </button>
            </Link>
          </div>
          {/* Service 3 */}
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
            <Link to="/service/exercise-tasks">
              <button className="mt-4 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
                Learn More
              </button>
            </Link>
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
            <Link to="/service/music">
              <button className="mt-4 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
                Learn More
              </button>
            </Link>
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
            <Link to="/service/mood-tracking">
              <button className="mt-4 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
