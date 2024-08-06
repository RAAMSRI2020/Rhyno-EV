import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const OrderConfirmation = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    // Simulate a delay to show the loading animation
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide the loading animation
    }, 2000); // Adjust this delay as needed

    if (location.state) {
      setOrderData(location.state); // Set order data from location state
    }

    return () => clearTimeout(timer);
  }, [location.state]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="py-8 px-4">
          <h1 className="text-3xl font-bold text-center mb-8">Order Confirmation</h1>

          {isLoading ? (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
              <div className="flex flex-col items-center">
                <div className="animate-spin h-16 w-16 border-t-4 border-yellow-500 border-solid rounded-full mb-4"></div>
                <p className="text-white text-lg">Processing...</p>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Thank you for your order!</h2>
              <p className="text-lg mb-4">Your order has been confirmed and is being processed.</p>
              <div className="mb-4">
                <h3 className="text-xl font-semibold">Order Details:</h3>
                <ul className="list-disc pl-5">
                  <li>Vehicle Name: {orderData?.vehicleName || 'N/A'}</li>
                  <li>Number: {orderData?.number || 'N/A'}</li>
                  <li>Age: {orderData?.age || 'N/A'}</li>
                  <li>Gender: {orderData?.gender || 'N/A'}</li>
                  {/* Add more details as needed */}
                </ul>
              </div>
              <button
                className="w-full py-2 px-4 bg-yellow-100 text-black-100 rounded hover:bg-yellow-200"
                onClick={() => {
                  // Handle payment gateway redirection or functionality here
                }}
              >
                Pay Now
              </button>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OrderConfirmation;
