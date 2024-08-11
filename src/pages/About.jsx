import React from 'react';
import Carousel from '../components/common/Carousel';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col px-5">

     {/* Header with Scrolling Images */}
     <Carousel />

      {/* Main Content */}
      <main className="flex-grow container mx-auto py-12 px-4 md:px-0">
        <section id="about" className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg mb-6">Learn more about our mission, vision, and the team behind the Network Management System.</p>
        </section>

        <section className="mb-12">
          <h3 className="text-3xl font-semibold mb-4">Our Mission</h3>
          <p className="text-lg leading-relaxed">
            Our mission is to provide a comprehensive solution for managing and resolving network issues efficiently. 
            We aim to ensure seamless network operations and quick resolution of any disruptions.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-3xl font-semibold mb-4">Our Vision</h3>
          <p className="text-lg leading-relaxed">
            We envision a world where network management is simplified and automated, 
            allowing businesses to focus on their core activities without worrying about network issues. 
            Our goal is to be the leading provider of network management solutions.
          </p>
        </section>
      </main>

    </div>
  );
};

export default About;
