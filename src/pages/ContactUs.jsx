// src/pages/ContactUs.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <main className="py-12 bg-gray-100 min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          <section className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <div className="text-lg md:text-xl text-gray-700">
              <p>
                <strong>Mail:</strong> <a href="mailto:info@rhyno.in" className="text-blue-600 hover:underline">info@rhyno.in</a>
              </p>
              <p className="mt-4">
                <strong>Mobile no.:</strong> <a href="tel:+919023987528" className="text-blue-600 hover:underline">+91-9023987528</a>
              </p>
              <p className="mt-4">
                <strong>Location:</strong> Rhyno Wheels Private Limited, Near UG hostel gate #2, Behind PDEU, Raisan, Gandhinagar, Gujarat, India.
              </p>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Location</h2>
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.012678136275!2d72.62720471496035!3d23.20408828484967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2a7c764c02db%3A0x68d2455407fdf29b!2sRhyno%20Wheels%20Private%20Limited!5e0!3m2!1sen!2sin!4v1633350200012!5m2!1sen!2sin"
                width="100%"
                height="450"
                allowFullScreen=""
                loading="lazy"
                title="Rhyno Wheels Private Limited Location"
              ></iframe>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
