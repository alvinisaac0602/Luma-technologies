import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            Luma Technologies
          </h2>
          <p className="text-gray-400">
            &copy; {year} Luma. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <nav>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="/" className="hover:text-cyan-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-cyan-400 transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-cyan-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow us</h3>
          <div className="flex space-x-6 text-gray-400">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
              aria-label="Facebook"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
