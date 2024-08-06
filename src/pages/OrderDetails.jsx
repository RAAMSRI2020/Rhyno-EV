import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const OrderDetails = () => {
  const { name } = useParams(); // Capture vehicle name from URL
  const [formData, setFormData] = useState({
    vehicleName: name || '',
    customerName: '',
    whatsappNumber: '',
    email: '',
    age: '',
    gender: '',
    licensePhoto: null,
  });

  const navigate = useNavigate();

  useEffect(() => {
    console.log('Vehicle Name:', name); // Log the vehicle name
    console.log('Form Data:', formData); // Log the form data
    setFormData(prevData => ({ ...prevData, vehicleName: name }));
  }, [name, formData]); // Include formData in the dependency array

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'licensePhoto') {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
              <label className="block text-gray-700">Model</label>
              <input
                type="text"
                name="vehicleName"
                value={formData.vehicleName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Customer Name</label>
              <input
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">WhatsApp Number</label>
              <input
                type="tel"
                name="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
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
              className="w-full py-2 px-4 bg-yellow-100 text-black-100 rounded hover:bg-yellow-200"
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
