import React from 'react';

const DashBoard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Emergency and Mental Wellbeing Dashboard</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/HomePage" className="text-gray-700 hover:text-blue-500">Home</a>
              </li>
              <li>
                <a href="/services" className="text-gray-700 hover:text-blue-500">Services</a>
              </li>
              <li>
                <a href="/about" className="text-gray-700 hover:text-blue-500">About</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-700 hover:text-blue-500">Contact</a>
              </li>
              <li>
                <a href="/LoginPage" className="text-gray-700 hover:text-blue-500">Login</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
              <p className="text-center text-gray-500">Welcome to the Emergency and Mental Wellbeing Dashboard</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DashBoard;
