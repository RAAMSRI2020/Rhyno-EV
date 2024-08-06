import React, { useState } from 'react';
import logo from '../images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <nav className="bg-black-100 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo */}
            <a href="/" className="flex items-center py-4 px-2">
              <img src={logo} alt="Logo" className="h-16 w-40 mr-2 hidden md:block" />
              <span className="font-semibold text-white text-lg md:hidden">RHYNOEV</span>
            </a>
          </div>
          {/* Primary Navbar items */}
          <div className="hidden md:flex items-center space-x-8 text-white-200">
            <a href="/" className="py-4 px-2 text-gray-100 border-b-4 border-transparent hover:text-white hover:border-yellow-100 transition duration-300">Home</a>
            <a href="/about-us" className="py-4 px-2 text-gray-100 border-b-4 border-transparent hover:text-yellow-500 hover:border-yellow-100 transition duration-300">About Us</a>

            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="py-4 px-2 text-gray-100 border-b-4 border-transparent hover:text-yellow-500 hover:border-yellow-100 transition duration-300">
                Products
              </button>
              {isProductsOpen && (
                <div className="absolute left-0 bg-black text-black-300 shadow-lg mt-1 rounded w-40 text-center z-50"> {/* Increased z-index */}
                  <a href="/seo3lite" className="block px-4 py-2 text-white hover:bg-gray-700">S3EO Lite</a> {/* Updated text color */}
                  <a href="//seo3" className="block px-4 py-2 text-white hover:bg-gray-700">S3EO</a>
                  <a href="/SE03Max" className="block px-4 py-2 text-white hover:bg-gray-700">S3EO Max</a>
                  <a href="/seo3max" className="block px-4 py-2 text-white hover:bg-gray-700">Compare All</a>
                </div>
              )}
            </div>
            <a href="/contact-us" className="py-4 px-2 text-gray-100 border-b-4 border-transparent hover:text-yellow-500 hover:border-yellow-100 transition duration-300">Contact Us</a>
            <a href="/prebook" className="py-2 px-4 bg-yellow-500 text-black rounded hover:bg-yellow-100 transition duration-300">Pre-book Now</a>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="outline-none mobile-menu-button">
              <svg className="w-6 h-6 text-gray-100 hover:text-yellow-500"
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
        <div className="md:hidden bg-black text-white-200">
          <a href="/" className="block py-2 px-4 text-sm text-gray-100 hover:bg-gray-700">Home</a>
          <a href="/about" className="block py-2 px-4 text-sm text-gray-100 hover:bg-gray-700">About Us</a>
          <button onClick={() => setIsProductsOpen(!isProductsOpen)} className="block w-full text-left py-2 px-4 text-sm text-gray-100 hover:bg-gray-700">
            Products
          </button>
          {isProductsOpen && (
            <div>
              <a href="/seo3lite" className="block py-2 px-4 text-sm text-gray-100 hover:bg-gray-700">S3EO Lite</a>
              <a href="/seo3" className="block py-2 px-4 text-sm text-gray-100 hover:bg-gray-700">S3EO</a>
              <a href="/seo3max" className="block py-2 px-4 text-sm text-gray-100 hover:bg-gray-700">S3EO Max</a>
              <a href="/compare" className="block py-2 px-4 text-sm text-gray-100 hover:bg-gray-700">Compare All</a>
            </div>
          )}
          <a href="/contact" className="block py-2 px-4 text-sm text-gray-100 hover:bg-gray-700">Contact Us</a>
          <a href="/prebook" className="block py-2 px-4 text-sm text-gray-100 hover:bg-gray-700">Pre-book Now</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
