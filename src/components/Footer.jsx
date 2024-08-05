// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black-300 text-white-100 py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Policies Section */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Policies</h3>
            <ul>
              <li>
                <Link to="/privacy" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/refund" className="hover:text-yellow-400 transition-colors">Refund Policy</Link>
              </li>
              <li>
                <Link to="/website" className="hover:text-yellow-400 transition-colors">Website Policy</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-400 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Products Section */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Products</h3>
            <ul>
              <li>
                <Link to="/product1" className="hover:text-yellow-400 transition-colors">S3EO Lite</Link>
              </li>
              <li>
                <Link to="/product2" className="hover:text-yellow-400 transition-colors">S3EO</Link>
              </li>
              <li>
                <Link to="/product3" className="hover:text-yellow-400 transition-colors">S3EO Max</Link>
              </li>
              <li>
                <Link to="/compare" className="hover:text-yellow-400 transition-colors">Compare All</Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Company</h3>
            <ul>
              <li>
                <Link to="/career" className="hover:text-yellow-400 transition-colors">Career</Link>
              </li>
              <li>
                <Link to="/rentals" className="hover:text-yellow-400 transition-colors">Rentals</Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-white-100 hover:text-yellow-400 text-2xl transition-colors" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-white-100 hover:text-yellow-400 text-2xl transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black-200 text-center py-4 mt-6">
        <p className="text-sm">&copy; {new Date().getFullYear()} RHYNOEV. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
