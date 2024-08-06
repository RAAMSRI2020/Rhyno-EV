import React from 'react';
// import { FaBatteryFull, FaTachometerAlt, FaShieldAlt, FaClock } from 'react-icons/fa';
import vehicle from '../images/vehicle.png';

import './CompareAll.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CompareAll = () => {
  return (
    <div className="compare-page">
      <Navbar/>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Compare All Models</h1>
        <div className="model-comparison">
          <div className="model-card">
            <img src={vehicle} alt="SE03 Lite" className="model-image" />
            <div className="p-4">
              <h2 className="text-2xl font-bold">SE03 Lite</h2>
              <p className="text-gray-700 mt-2">Perfect harmony of power and range with robust features.</p>
            </div>
          </div>
          <div className="model-card">
            <img src={vehicle} alt="SE03" className="model-image" />
            <div className="p-4">
              <h2 className="text-2xl font-bold">SE03</h2>
              <p className="text-gray-700 mt-2">Experience a thrilling ride with safety and longevity.</p>
            </div>
          </div>
          <div className="model-card">
            <img src={vehicle} alt="SE03 Max" className="model-image" />
            <div className="p-4">
              <h2 className="text-2xl font-bold">SE03 Max</h2>
              <p className="text-gray-700 mt-2">Powerful motor and extensive range for an electrifying journey.</p>
            </div>
          </div>
        </div>
        <div className="comparison-table mt-8">
          <div className="comparison-header grid grid-cols-4 font-bold text-gray-800 p-4 bg-gray-100 rounded-t">
            <span>Specification</span>
            <span>SE03 Lite</span>
            <span>SE03</span>
            <span>SE03 Max</span>
          </div>
          <div className="comparison-content">
            <div className="comparison-item grid grid-cols-4 p-4">
              <span>Battery</span>
              <span>1.8 kWh</span>
              <span>2.7 kWh</span>
              <span>2.7 kWh</span>
            </div>
            <div className="comparison-item grid grid-cols-4 p-4">
              <span>Battery Features</span>
              <span>LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</span>
              <span>LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</span>
              <span>LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</span>
            </div>
            <div className="comparison-item grid grid-cols-4 p-4">
              <span>Battery Warranty</span>
              <span>3 years</span>
              <span>3 years</span>
              <span>3 years</span>
            </div>
            <div className="comparison-item grid grid-cols-4 p-4">
              <span>Charging Time</span>
              <span>3 hours (12A)</span>
              <span>4 hours (12A)</span>
              <span>4 hours (12A)</span>
            </div>
            <div className="comparison-item grid grid-cols-4 p-4">
              <span>Motor</span>
              <span>1500W</span>
              <span>1500W</span>
              <span>2000W</span>
            </div>
            <div className="comparison-item grid grid-cols-4 p-4">
              <span>Max Speed</span>
              <span>55 km/h</span>
              <span>55 km/h</span>
              <span>65 km/h</span>
            </div>
            <div className="comparison-item grid grid-cols-4 p-4">
              <span>Warranty on Electronics</span>
              <span>1 year</span>
              <span>1 year</span>
              <span>1 year</span>
            </div>
            <div className="comparison-item grid grid-cols-4 p-4">
              <span>Max Range (@30km/h)</span>
              <span>100 km</span>
              <span>150 km</span>
              <span>120 km</span>
            </div>
            <div className="comparison-item grid grid-cols-4 p-4">
              <span>Max Range (@45km/h)</span>
              <span>90 km</span>
              <span>110 km</span>
              <span>100 km</span>
            </div>
            <div className="comparison-item grid grid-cols-4 p-4">
              <span>Max Range (@full speed)</span>
              <span>60 km</span>
              <span>90 km</span>
              <span>80 km</span>
            </div>
            <div className="comparison-item grid grid-cols-4 p-4">
              <span>Other Key Benefits</span>
              <span>Fire-safe Battery, Range Prediction, Comfortable Ride</span>
              <span>Fire-safe Battery, Range Prediction, Comfortable Ride</span>
              <span>Fire-safe Battery, Range Prediction, Comfortable Ride</span>
            </div>
          </div>
        </div>
        <a href="/order-details" className="block mt-8 py-2 px-4 bg-yellow-500 text-black text-center rounded hover:bg-yellow-400">
          Buy Now
        </a>
      </div>
      <Footer/>
    </div>
  );
};

export default CompareAll;
