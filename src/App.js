// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'; // Import the Home component

// Import your other page components if needed
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Products from './pages/Products';
// import ProductDetails from './pages/ProductDetails';
// import Career from './pages/Career';
// import Rentals from './pages/Rentals';

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Home/> */}
      <div className="min-h-screen p-4">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Add the Home route */}
          {/* Add other routes as needed */}
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product1" element={<ProductDetails />} />
          <Route path="/product2" element={<ProductDetails />} />
          <Route path="/product3" element={<ProductDetails />} />
          <Route path="/compare" element={<Products />} />
          <Route path="/career" element={<Career />} />
          <Route path="/rentals" element={<Rentals />} /> */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
