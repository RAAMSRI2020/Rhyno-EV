import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs'; 
import ContactUs from './pages/ContactUs';
import Rentals from './pages/Rentals';
import CollectionDetails from './pages/OrderDetails';
import OrderDetails from './pages/OrderDetails'; // Ensure this import is correct
import OrderConfirmation from './pages/OrderConfirmation';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/collection-details/:name" element={<CollectionDetails />} />
          <Route path="/order-details/:name" element={<OrderDetails />} /> {/* Ensure this path matches */}
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
