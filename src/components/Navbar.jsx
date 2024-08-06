import React, { useState, useEffect, useRef } from 'react';
import logo from '../images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsProductsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside the dropdown
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-black-100 text-white-100 shadow-lg ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo */}
            <a href="/" className="flex items-center py-4 px-2">
              <img src={logo} alt="Logo" className="h-16 w-40 mr-2 hidden md:block" />
              <span className="font-semibold text-yellow-500 text-lg md:hidden">RHYNOEV</span>
            </a>
          </div>
          {/* Primary Navbar items */}
          <div className="hidden md:flex items-center space-x-8 text-yellow-500">
            <a href="/" className="py-4 px-2 border-b-4 border-transparent hover:text-yellow-300 hover:border-yellow-200 transition duration-300">Home</a>
            <a href="/about-us" className="py-4 px-2 border-b-4 border-transparent hover:text-yellow hover:border-yellow-200 transition duration-300">About Us</a>

            <div
              className="relative"
              ref={dropdownRef}
            >
              <button
                className="py-4 px-2 border-b-4 border-transparent hover:text-yellow-300 hover:border-yellow-200 transition duration-300"
                onClick={() => setIsProductsOpen(prev => !prev)}
              >
                Products
              </button>
              {isProductsOpen && (
                <div className="absolute left-0 mt-2 bg-black-100 text-yellow-500 shadow-lg rounded w-40 z-50">
                  <a href="/seo3lite" className="block px-4 py-2 hover:bg-gray-700">S3EO Lite</a>
                  <a href="/seo3" className="block px-4 py-2 hover:bg-gray-700">S3EO</a>
                  <a href="/seo3Max" className="block px-4 py-2 hover:bg-gray-700">S3EO Max</a>
                  <a href="/compare-all" className="block px-4 py-2 hover:bg-gray-700">Compare All</a>
                </div>
              )}
            </div>
            <a href="/contact-us" className="py-4 px-2 border-b-4 border-transparent hover:text-yellow-300 hover:border-yellow-200 transition duration-300">Contact Us</a>
            <a href="/prebook" className="py-2 px-4 bg-yellow-500 text-black rounded hover:bg-yellow-200 transition duration-300">Pre-book Now</a>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="outline-none mobile-menu-button">
              <svg className="w-6 h-6 text-yellow-500 hover:text-yellow-300"
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
        <div className="md:hidden bg-black text-yellow-500">
          <a href="/" className="block py-2 px-4 text-sm hover:bg-gray-700">Home</a>
          <a href="/about" className="block py-2 px-4 text-sm hover:bg-gray-700">About Us</a>
          <button onClick={() => setIsProductsOpen(!isProductsOpen)} className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-700">
            Products
          </button>
          {isProductsOpen && (
            <div>
              <a href="/seo3lite" className="block py-2 px-4 text-sm hover:bg-gray-700">S3EO Lite</a>
              <a href="/seo3" className="block py-2 px-4 text-sm hover:bg-gray-700">S3EO</a>
              <a href="/seo3max" className="block py-2 px-4 text-sm hover:bg-gray-700">S3EO Max</a>
              <a href="/compare" className="block py-2 px-4 text-sm hover:bg-gray-700">Compare All</a>
            </div>
          )}
          <a href="/contact" className="block py-2 px-4 text-sm hover:bg-gray-700">Contact Us</a>
          <a href="/prebook" className="block py-2 px-4 text-sm hover:bg-gray-700">Pre-book Now</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
