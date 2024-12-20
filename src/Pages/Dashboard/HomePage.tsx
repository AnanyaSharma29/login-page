import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-white shadow-md">
        <div className="text-2xl font-bold">Mental Health</div>
        <nav className="space-x-4">
          <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="/services" className="text-gray-600 hover:text-gray-900">Services</a>
          <a href="/page" className="text-gray-600 hover:text-gray-900">Page</a>
        </nav>
        <button className="bg-orange-500 text-white px-4 py-2 rounded">Contact Us</button>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-50">
        <h1 className="text-4xl font-bold mb-4">Healthy Minds, Happy Lives Mental Health Consultancy</h1>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
        <button className="bg-orange-500 text-white px-6 py-3 rounded">Get Started</button>
        <div className="mt-8 space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-900">Facebook</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Twitter</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">LinkedIn</a>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-green-500 text-white py-12">
        <div className="container mx-auto flex justify-around">
          <div className="text-center">
            <div className="text-3xl font-bold">8+</div>
            <div>Experts</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">122+</div>
            <div>Teams</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">563+</div>
            <div>Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">232+</div>
            <div>Professionals</div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <h2 className="text-center text-3xl font-bold mb-12">Why Our Mental Health Consultants are the Best Choice</h2>
        <div className="container mx-auto flex justify-around">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">Holistic approach</div>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="text-center bg-green-500 text-white p-6 rounded">
            <div className="text-2xl font-bold mb-4">Expertise Team</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">Accessibility</div>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-center text-3xl font-bold mb-8">Discover the Faces Behind Our Mental Health Consultancy</h2>
        <div className="text-center">
          <button className="bg-blue-500 text-white px-6 py-3 rounded">Read More</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <h2 className="text-center text-3xl font-bold mb-8">Our Services</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="service1.jpg" alt="Service 1" className="w-full h-40 object-cover mb-4 rounded" />
            <h3 className="text-2xl font-bold mb-2">Service 1</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          {/* Service 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="service2.jpg" alt="Service 2" className="w-full h-40 object-cover mb-4 rounded" />
            <h3 className="text-2xl font-bold mb-2">Service 2</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          {/* Service 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="service3.jpg" alt="Service 3" className="w-full h-40 object-cover mb-4 rounded" />
            <h3 className="text-2xl font-bold mb-2">Service 3</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
