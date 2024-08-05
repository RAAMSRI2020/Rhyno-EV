// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import vehicle from '../images/vehicle.png';
import '../index.css'; // Custom CSS for Home page styles

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const words = ["Style", "Elegance", "Minimalism", "Comfort"];

const Home = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000); // Change word every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Front Line */}
      <section className="relative text-center py-20 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={vehicle} alt="Vehicle" className="w-full h-full object-cover opacity-30 transform scale-110 transition-transform duration-1000 ease-in-out" />
        </div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 transition-transform transform-gpu hover:scale-105 animate-fadeIn">
            Let's Elevate Your Ride Experience With Rhyno – Where Superiority Meets <span id="dynamic-text" className="typing-animation-container">{words[wordIndex]}</span>
          </h1>
        </div>
      </section>

      {/* Our USP */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center transition-opacity opacity-90 hover:opacity-100 animate-fadeIn">
            Our Unique Selling Points
          </h2>
          <div className="border border-transparent rounded-lg shadow-lg p-4 backdrop-blur-md">
            <Slider {...carouselSettings}>
              <div className="transition-transform transform-gpu hover:scale-105 animate-fadeIn p-4">
                <h3 className="text-xl font-semibold mb-2">LFP Battery</h3>
                <p>Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries, renowned for their safety features—eliminating the risk of fire associated with other Lithium batteries...</p>
              </div>
              <div className="transition-transform transform-gpu hover:scale-105 animate-fadeIn p-4">
                <h3 className="text-xl font-semibold mb-2">Wider Tyres</h3>
                <p>Now, say goodbye to skidding and embrace the leaning turns! Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous beast...</p>
              </div>
              <div className="transition-transform transform-gpu hover:scale-105 animate-fadeIn p-4">
                <h3 className="text-xl font-semibold mb-2">Range Prediction</h3>
                <p>Many budget-friendly electric scooters overlook this crucial feature, causing riders to experience range anxiety. With Rhyno, you can ride with peace of mind...</p>
              </div>
              <div className="transition-transform transform-gpu hover:scale-105 animate-fadeIn p-4">
                <h3 className="text-xl font-semibold mb-2">Extraordinary Experience</h3>
                <p>Rhyno is more than just a mode of transportation. It is an experience of sheer comfort and style! A seamless fusion of minimalism, sophistication, and a touch of masculinity...</p>
              </div>
              <div className="transition-transform transform-gpu hover:scale-105 animate-fadeIn p-4">
                <h3 className="text-xl font-semibold mb-2">Rugged and Simple Design</h3>
                <p>We’ve had enough of the EVs looking and feeling like fragile plastic toys. Often fading out and shamelessly breaking in minor accidents...</p>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* Floating Pre-book Now Button */}
      <a href="/prebook" className="fixed bottom-4 right-4 bg-yellow-500 text-black py-3 px-6 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300 transform-gpu hover:scale-105 animate-fadeIn">
        Pre-book Now
      </a>
    </div>
  );
};

export default Home;
