import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OrderConfirmation from './pages/OrderConfirmation';
import OrderDetails from './pages/OrderDetails';
import ProductPage from './pages/ProductPage';
import Rentals from './pages/Rentals';
import CompareAll from './pages/CompareAll';
import SEO3 from './pages/SEO3';
import SEO3Lite from './pages/SEO3Lite';
import SEO3Max from './pages/SEO3Max';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/order-details" element={<OrderDetails />} />
        <Route path="/product-page" element={<ProductPage />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/compare-all" element={<CompareAll />} />
        <Route path="/seo3" element={<SEO3 />} />
        <Route path="/seo3lite" element={<SEO3Lite />} />
        <Route path="/seo3max" element={<SEO3Max />} />
      </Routes>
      
    </Router>
  );
}

export default App;
