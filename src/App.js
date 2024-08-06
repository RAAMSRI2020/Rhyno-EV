import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Rentals from './pages/Rentals';
import OrderDetails from './pages/OrderDetails';
import OrderConfirmation from './pages/OrderConfirmation';
import ProductPage from './pages/ProductPage';
import CompareAll from './pages/CompareAll';
import SEO3 from './pages/SEO3';
import SEO3Lite from './pages/SEO3Lite';
import SEO3Max from './pages/SEO3Max';
import Prebook from './pages/Prebook';
import Payment from './pages/Payment';
import Review from './pages/Review';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/order-details" element={<OrderDetails />} />
          <Route path="/order-details/:name" element={<OrderDetails />} />
          <Route path="/product-page" element={<ProductPage />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/compare-all" element={<CompareAll />} />
          <Route path="/seo3" element={<SEO3 />} />
          <Route path="/seo3lite" element={<SEO3Lite />} />
          <Route path="/seo3max" element={<SEO3Max />} />
          <Route path="/prebook" element={<Prebook />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/review" element={<Review />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
