// src/pages/Review.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Review = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = location.state || {};

  const handleEdit = () => {
    navigate('/prebook');
  };

  const handlePayNow = () => {
    // Navigate to payment page
    navigate('/payment');
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-grow py-12 bg-gray-100 text-black">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center">Review Your Details</h1>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-4">
              <p><strong>Model Name:</strong> {formData?.modelName}</p>
              <p><strong>Color:</strong> {formData?.color}</p>
              <p><strong>Customer Name:</strong> {formData?.customerName}</p>
              <p><strong>Date of Birth:</strong> {formData?.dob}</p>
              <p><strong>Address:</strong> {formData?.address}</p>
              <p><strong>Contact Number:</strong> {formData?.contactNumber}</p>
              <p><strong>WhatsApp Number:</strong> {formData?.whatsappNumber}</p>
              <p><strong>State:</strong> {formData?.state}</p>
              <p><strong>City:</strong> {formData?.city}</p>
              <p><strong>Pincode:</strong> {formData?.pincode}</p>
            </div>
            <button
              onClick={handleEdit}
              className="mr-4 py-3 px-6 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            >
              Edit
            </button>
            <button
              onClick={handlePayNow}
              className="py-3 px-6 bg-yellow-500 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
            >
              Pay Now
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Review;
