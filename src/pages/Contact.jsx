import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Carousel from '../components/common/Carousel';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col px-5 bg-gray-100">
      {/* Main Content */}

        {/* Header with Scrolling Images */}
        <Carousel />

      <main className="flex-grow container mx-auto py-12">
        <section id="contact" className="text-center mb-12">
          <Typography variant="h2" className="text-4xl font-bold mb-4 text-gray-800">
            Contact Us
          </Typography>
          <Typography variant="body1" className="text-lg mb-6 text-gray-600">
            We’d love to hear from you. Here’s how you can get in touch with us:
          </Typography>
        </section>

        <section className="flex flex-col items-center gap-8">
          <Container maxWidth="sm" className="bg-white p-8 rounded-lg shadow-lg">
            <Box mb={4}>
              <Typography variant="h6" className="text-gray-800">
              You can also contact us at the following address:
              </Typography>
              <Typography variant="body1" className="text-gray-600 mt-2">
                <strong>Email:</strong> bsp[dot]cg[at]gov[dot]in
              </Typography>
              <Typography variant="body1" className="text-gray-600 mt-1">
                <strong>Phone:</strong> 07752-223344
              </Typography>
              <Typography variant="body1" className="text-gray-600 mt-1">
                <strong>Address:</strong> Web Information Manager, Additional Collector, O/o Collector campus,Bilaspur (C.G.) 495001 
              </Typography>
            </Box>
          </Container>
          

          {/* Map Section */}
          <section className="mt-12">
            <Typography variant="h6" className="text-gray-800 mb-4 text-center">
              Our Location
            </Typography>
            <div className="w-full max-w-lg mx-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.0033311581456!2d82.13769567474334!3d22.08768975056931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280b719b51ea75%3A0x85c1485979e9b3bb!2sCollector%20Office%20Bilaspur%20(Chhattisgarh)!5e0!3m2!1sen!2sin!4v1722838161800!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Our Location"
              ></iframe>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
};

export default Contact;
