import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
            
      <header className="bg-blue-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold">About Us</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Our Mission Section */}
          <section className="bg-white p-8 rounded-lg shadow-lg transition-all hover:shadow-xl duration-300 ease-in-out">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              At Emergency and Mental Wellbeing, our mission is to provide accessible, high-quality mental health support for everyone. Our team of dedicated professionals is committed to helping individuals navigate their mental health journeys with empathy and expertise.
            </p>
            <p className="text-gray-700 mb-6">
              We believe in a holistic approach to mental wellbeing, addressing both the emotional and practical aspects of mental health. Our services range from counseling and therapy to emergency mental health resources and support groups. We strive to create a safe and supportive environment for all our clients, empowering them to achieve their best mental health.
            </p>
            <p className="text-gray-700">
              Join us on our mission to make mental health support accessible to all. Together, we can create a community where everyone feels heard, understood, and supported.
            </p>
          </section>

          {/* Our Team Section */}
          <section className="mt-8 bg-white p-8 rounded-lg shadow-lg transition-all hover:shadow-xl duration-300 ease-in-out">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Team</h2>
            <p className="text-gray-700 mb-6">
              Our team is composed of licensed therapists, counselors, and mental health professionals with years of experience in the field. We are passionate about providing personalized care and support to each individual we serve. Meet our team members who are dedicated to your mental wellbeing:
            </p>
            <ul className="space-y-4">
              <li className="bg-gray-50 p-4 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300">
                <h3 className="text-xl font-bold text-blue-600 mb-2">Dr. Jane Doe</h3>
                <p className="text-gray-700">Lead Psychologist with over 15 years of experience in mental health care.</p>
              </li>
              <li className="bg-gray-50 p-4 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300">
                <h3 className="text-xl font-bold text-blue-600 mb-2">John Smith</h3>
                <p className="text-gray-700">Licensed Therapist specializing in anxiety and depression treatment.</p>
              </li>
              <li className="bg-gray-50 p-4 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300">
                <h3 className="text-xl font-bold text-blue-600 mb-2">Emily Johnson</h3>
                <p className="text-gray-700">Counselor with a focus on adolescent mental health and family therapy.</p>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="bg-blue-600 text-white shadow-md mt-8">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="text-gray-200">&copy; 2024 Emergency and Mental Wellbeing. All rights reserved.</div>
          <div className="flex space-x-4">
            <a href="/privacy-policy" className="text-gray-200 hover:text-blue-300">Privacy Policy</a>
            <a href="/terms-of-service" className="text-gray-200 hover:text-blue-300">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AboutUs;
