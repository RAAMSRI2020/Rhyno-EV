import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const OrderDetails = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    licensePhoto: null
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'licensePhoto') {
      setFormData({
        ...formData,
        [name]: files[0]
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to OrderConfirmation page with state
    navigate('/order-confirmation', { state: { ...formData } });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="py-8 px-4">
          <h1 className="text-3xl font-bold text-center mb-8">Order Details</h1>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Upload License Photo</label>
              <input
                type="file"
                name="licensePhoto"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                accept="image/*"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-yellow-500 text-black rounded hover:bg-yellow-400"
            >
              Submit
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OrderDetails;
