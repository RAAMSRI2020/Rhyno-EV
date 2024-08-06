import React from 'react';
import { FaCar, FaBatteryFull, FaClock, FaShieldAlt, FaTachometerAlt, FaStar } from 'react-icons/fa';
import vehicle from '../images/vehicle.png'; // Ensure the image path is correct
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './SEO3Lite.css'; // Ensure this file contains the styles

const SE03Max= () => {
  return (
    <div className="product-page">
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row">
          <img src={vehicle} alt="SE03 MAX" className="w-full lg:w-1/2 h-auto object-cover rounded-lg shadow-lg" />
          <div className="lg:ml-8 mt-6 lg:mt-0 lg:w-1/2">
            <h1 className="text-3xl font-bold text-gray-800">Rhyno SE03 MAX</h1>
            <div className="flex space-x-4 mt-2">
              <button className="color-circle red"></button>
              <button className="color-circle blue"></button>
              <button className="color-circle black"></button>
            </div>
            <div className="mt-4">
              <p className="text-gray-700">
                <FaCar className="inline mr-2 text-yellow-500" /> 2000W Motor
              </p>
              <p className="text-gray-700">
                <FaBatteryFull className="inline mr-2 text-green-500" /> 80-100 km Range
              </p>
              <p className="text-gray-700 mt-2">
                <FaStar className="inline mr-2 text-yellow-400" /> Rated 5 stars by users
              </p>
            </div>
            <p className="mt-4 text-gray-600">
              Indulge in the perfect harmony of power and range with this Rhyno SE03 MAX. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100 km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhyno. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!
            </p>
            
            <div className="mt-6 border-t pt-4">
              <h2 className="text-2xl font-bold text-gray-800">Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="flex items-center text-gray-700">
                  <FaBatteryFull className="text-green-500 mr-3" />
                  <span>Battery: 2.7 kWh</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FaTachometerAlt className="text-yellow-500 mr-3" />
                  <span>Max Range (@30km/h): 150 km</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FaCar className="text-red-500 mr-3" />
                  <span>Motor: 1500W</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FaClock className="text-blue-500 mr-3" />
                  <span>Charging Time: 4 hours (12A)</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FaShieldAlt className="text-gray-600 mr-3" />
                  <span>Battery Warranty: 3 Years</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FaTachometerAlt className="text-yellow-500 mr-3" />
                  <span>Max Speed: 55 km/h</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FaTachometerAlt className="text-yellow-500 mr-3" />
                  <span>Max Range (@full speed): 90 km</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FaTachometerAlt className="text-yellow-500 mr-3" />
                  <span>Max Range (@45km/h): 110 km</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FaShieldAlt className="text-gray-600 mr-3" />
                  <span>Other Key Benefits: Fire-safe battery, Range prediction, Comfortable ride, Stable and safe</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FaBatteryFull className="text-green-500 mr-3" />
                  <span>Battery Features: LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</span>
                </div>
              </div>
            </div>

            <a href="/order-details" className="block mt-6 py-3 px-6 bg-yellow-600 text-white text-center rounded-lg hover:bg-yellow-500 transition">
              Buy Now
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SE03Max;
