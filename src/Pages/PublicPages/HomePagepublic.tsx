import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const HomePage: React.FC = () => {
  return (
    <div className="font-sans bg-gray-50">
      

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-100 to-blue-50">
        <h1 className="text-5xl font-bold mb-4 text-blue-800">
          Healthy Minds, Happy Lives Mental Health Consultancy
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          Empowering Your Mind, Elevating Your Life - Where Wellbeing Begins!
        </p>
        <button className="bg-orange-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-700">
          Get Started
        </button>
        <div className="mt-8 space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-700">Facebook</a>
          <a href="#" className="text-gray-600 hover:text-blue-700">Twitter</a>
          <a href="#" className="text-gray-600 hover:text-blue-700">LinkedIn</a>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gradient-to-r from-green-500 to-teal-400 text-white py-12">
        <div className="container mx-auto flex justify-around">
          <div className="text-center">
            <div className="text-4xl font-bold">82+</div>
            <div>Experts</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">122+</div>
            <div>Teams</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">563+</div>
            <div>Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">232+</div>
            <div>Professionals</div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <h2 className="text-center text-3xl font-bold mb-12 text-blue-800">
          Why Our Mental Health Consultants are the Best Choice
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-white shadow-lg p-6 rounded-lg">
            <div className="text-2xl font-bold mb-4 text-blue-800">Holistic Approach</div>
            <p className="text-gray-600">
              We address mental wellbeing from multiple perspectives for balanced outcomes.
            </p>
          </div>
          <div className="text-center bg-green-500 text-white p-6 rounded-lg">
            <div className="text-2xl font-bold mb-4">Expertise Team</div>
            <p>
              Our team includes leading professionals in the field of mental health.
            </p>
          </div>
          <div className="text-center bg-white shadow-lg p-6 rounded-lg">
            <div className="text-2xl font-bold mb-4 text-blue-800">Accessibility</div>
            <p className="text-gray-600">
              Our services are designed to be accessible to everyone, everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gray-100">
        <h2 className="text-center text-3xl font-bold mb-8 text-blue-800">
          Discover the Faces Behind Our Mental Health Consultancy
        </h2>
        <div className="text-center">
          <button className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-800">
            Read More
          </button>
        </div>
      </section>

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
            <h3 className="text-2xl font-bold mb-2 text-blue-800">Counseling Services</h3>
            <p className="text-gray-600">
              We provide personalized counseling to meet your unique needs.
            </p>
          </div>
          {/* Service 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="service2.jpg"
              alt="Service 2"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-bold mb-2 text-blue-800">Workshops</h3>
            <p className="text-gray-600">
              Interactive workshops on stress management and mental resilience.
            </p>
          </div>
          {/* Service 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="service3.jpg"
              alt="Service 3"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-bold mb-2 text-blue-800">Crisis Support</h3>
            <p className="text-gray-600">
              Immediate support for individuals facing a mental health crisis.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
