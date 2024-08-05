import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs'; 
import ContactUs from './pages/ContactUs';
// Import the AboutUs component

function App() {
  return (
    <Router>
      
      <div className="min-h-screen ">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs/>}></Route> {/* About Us route */}
          {/* Add other routes as needed */}
          {/* <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product1" element={<ProductDetails />} />
          <Route path="/product2" element={<ProductDetails />} />
          <Route path="/product3" element={<ProductDetails />} />
          <Route path="/compare" element={<Products />} />
          <Route path="/career" element={<Career />} />
          <Route path="/rentals" element={<Rentals />} /> */}
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
