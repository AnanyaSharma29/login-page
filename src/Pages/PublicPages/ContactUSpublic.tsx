import React, { useState } from 'react';


const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Process form data or send it to the server
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out. We will get back to you shortly.');
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
             
      <header className="bg-blue-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold">Contact Us</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <section className="bg-white p-8 rounded-lg shadow-lg transition-all hover:shadow-xl duration-300 ease-in-out">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6">We would love to hear from you. Please fill out the form below to get in touch with us.</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full mt-4 hover:bg-blue-700 transition duration-300"
              >
                Submit
              </button>
            </form>
          </section>

          <section className="mt-8 bg-white p-8 rounded-lg shadow-lg transition-all hover:shadow-xl duration-300 ease-in-out">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-4">Feel free to reach out to us through any of the following contact details:</p>
            <ul className="space-y-3">
              <li>
                <span className="font-bold text-gray-700">Email:</span> support@mentalwellbeing.com
              </li>
              <li>
                <span className="font-bold text-gray-700">Phone:</span> +123 456 7890
              </li>
              <li>
                <span className="font-bold text-gray-700">Address:</span> 123 Main Street, Mumbai, Maharashtra, India
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="bg-blue-600 text-white shadow-md mt-8">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="text-gray-200">&copy; 2024 Emergency and Mental Wellbeing. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default ContactUs;
