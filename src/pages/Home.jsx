import React from 'react';

import Carousel from '../components/common/Carousel';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col px-5">

      {/* Header with Scrolling Images */}
      <Carousel />

      {/* Main Content */}
      <main className="flex-grow container mx-auto py-12">
        <section id="home" className="text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to the Network Management System</h2>
          <p className="text-lg mb-6">Our system helps departments and administrators resolve network issues efficiently.</p>
          <a href="#features" className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-all">
            Learn More
          </a>
        </section>

        <section id="features" className="mt-12">
          <h3 className="text-3xl font-bold mb-4 text-center">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl font-bold mb-2">Real-time Monitoring</h4>
              <p>Track network performance and identify issues as they happen.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl font-bold mb-2">Error Resolution</h4>
              <p>Quickly resolve network errors with our streamlined process.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl font-bold mb-2">Department Collaboration</h4>
              <p>Allow departments to work together to fix issues efficiently.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl font-bold mb-2">Admin Oversight</h4>
              <p>Admins can oversee the network and manage larger issues.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl font-bold mb-2">Detailed Reporting</h4>
              <p>Generate detailed reports on network performance and issues.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl font-bold mb-2">User-Friendly Interface</h4>
              <p>Navigate the system with ease using our intuitive design.</p>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default HomePage;
