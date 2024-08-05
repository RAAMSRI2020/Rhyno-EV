import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <main className="py-12 bg-gray-100 min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          <section className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-lg md:text-xl text-gray-700">
              Established in 2019 by an automotive engineer with a vision for sustainable and robust mobility solutions, Rhyno EV is not just a company; it's a collective effort of a dynamic team of young individuals passionately driving innovation in the electric vehicle industry. We believe in engineering solutions that solve problems.
            </p>
            <p className="text-lg md:text-xl text-gray-700 mt-4">
              With our first product, we've taken a bold step to create something more than just a vehicle; it's a unique experience of elegance, comfort, and style, addressing the pitfalls of conventional electric scooters. Our design prioritizes safety, eliminating concerns of fires and ensuring a longer battery lifespan with our battery technology. Perfectly suited for fleet operators, especially in tourist-centric locations like Goa, our rugged yet aesthetically appealing scooters are engineered for longevity and reliability. Join us as we pioneer a new era in sustainable and dependable electric transportation.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
