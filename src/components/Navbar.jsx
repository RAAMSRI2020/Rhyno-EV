import React, { useState } from 'react';
import logo from '../images/logo-removebg-preview.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <nav className="bg-black-300 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo */}
            <a href="/" className="flex items-center py-4 px-2">
              <img src={logo} alt="Logo" className="h-16 w-40 mr-2 hidden md:block" />
              <span className="font-semibold text-white-100 text-lg md:hidden">RHYNOEV</span>
            </a>
          </div>
          {/* Primary Navbar items */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="py-4 px-2 text-grey-100 border-b-4 border-transparent hover:text-white-100 hover:border-yellow-100 transition duration-300">Home</a>
            <a href="/about" className="py-4 px-2 text-grey-100 border-b-4 border-transparent hover:text-white-100 hover:border-yellow-100 transition duration-300">About Us</a>
            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="py-4 px-2 text-grey-100 border-b-4 border-transparent hover:text-yellow-100 hover:border-white-100 transition duration-300">
                Products
              </button>
              {isProductsOpen && (
                <div className="absolute left-0 bg-black-300 shadow-lg mt-1 rounded w-40 text-center z-10">
                  <a href="/product1" className="block px-4 py-2 text-white-400 hover:bg-grey-200">S3EO Lite</a>
                  <a href="/product2" className="block px-4 py-2 text-white-400 hover:bg-grey-200">S3EO</a>
                  <a href="/product3" className="block px-4 py-2 text-white-400 hover:bg-grey-200">S3EO Max</a>
                  <a href="/product4" className="block px-4 py-2 text-white-100 hover:bg-grey-200">Compare All</a>
                </div>
              )}
            </div>
            <a href="/contact" className="py-4 px-2 text-grey-100 border-b-4 border-transparent hover:text-yellow-100 hover:border-yellow-100 transition duration-300">Contact Us</a>
            <a href="/prebook" className="py-2 px-4 bg-yellow-100 text-black-200 rounded hover:bg-yellow-200 transition duration-300">Pre-book Now</a>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="outline-none mobile-menu-button">
              <svg className="w-6 h-6 text-grey-100 hover:text-yellow-100"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <a href="/" className="block py-2 px-4 text-sm text-grey-100 hover:bg-grey-300">Home</a>
          <a href="/about" className="block py-2 px-4 text-sm text-grey-100 hover:bg-grey-300">About Us</a>
          <button onClick={() => setIsProductsOpen(!isProductsOpen)} className="block w-full text-left py-2 px-4 text-sm text-grey-100 hover:bg-grey-300">
            Products
          </button>
          {isProductsOpen && (
            <div>
              <a href="/product1" className="block py-2 px-4 text-sm text-grey-100 hover:bg-grey-300">S3EO Lite</a>
              <a href="/product2" className="block py-2 px-4 text-sm text-grey-100 hover:bg-grey-300">S3EO</a>
              <a href="/product3" className="block py-2 px-4 text-sm text-grey-100 hover:bg-grey-300">S3EO Max</a>
              <a href="/product4" className="block py-2 px-4 text-sm text-grey-100 hover:bg-grey-300">Compare All</a>
            </div>
          )}
          <a href="/contact" className="block py-2 px-4 text-sm text-grey-100 hover:bg-grey-300">Contact Us</a>
          <a href="/prebook" className="block py-2 px-4 text-sm text-grey-100 hover:bg-grey-300">Pre-book Now</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
