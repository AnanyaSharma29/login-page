import React, { useState } from 'react';
import axios from 'axios';

const MotivationalThoughts: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    try {
      // Make an API request to subscribe the user to receive motivational thoughts
      const response = await axios.post('http://localhost:8080/api/subscribe', { email });
      if (response.status === 200) {
        setMessage('You have successfully subscribed to receive motivational thoughts!');
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white font-sans">
      <header className="bg-white shadow-lg dark:bg-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">Motivational Thoughts</h1>
          <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
            Receive uplifting and motivational thoughts directly to your inbox.
          </p>
        </div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <section className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Stay Inspired!</h2>
              <p className="mt-4 text-gray-600">Enter your email below to receive daily motivational thoughts straight to your inbox.</p>
            </div>

            {/* Subscription Form */}
            <form onSubmit={handleSubmit} className="mt-6 max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="p-4 w-full sm:w-2/3 text-gray-900 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-1/3 bg-indigo-600 text-white p-4 rounded-lg transition hover:bg-indigo-700 focus:outline-none"
                >
                  {loading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
            </form>

            {/* Message Display */}
            {message && (
              <div className={`mt-4 text-center p-4 rounded-lg ${message.includes('success') ? 'bg-green-100 text-green-900' : 'bg-red-100 text-red-900'}`}>
                {message}
              </div>
            )}
          </section>

          {/* Inspiration Section */}
          <section className="mt-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900">Today's Motivational Thought</h3>
            <p className="mt-4 text-lg text-gray-700">
              "The future belongs to those who believe in the beauty of their dreams."
            </p>
            <p className="mt-2 text-gray-600">- Eleanor Roosevelt</p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-6 mt-12">
        <div className="max-w-7xl mx-auto text-center text-white">
          <p>&copy; 2024 Motivational Thoughts. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MotivationalThoughts;
