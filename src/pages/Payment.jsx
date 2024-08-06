// src/pages/Payment.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

 // Default import

// const stripePromise = loadStripe('YOUR_PUBLIC_STRIPE_KEY_HERE');

const Payment = () => {
  return (
    <div className="relative">
      <Navbar />

      <section className="py-12 bg-gray-100 text-black h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-6">Payment Page</h1>
          <p className="mb-6">Complete your payment below:</p>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Payment;
