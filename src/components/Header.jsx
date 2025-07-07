import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo - Links to Home */}
        <Link
          to="/"
          className="text-2xl font-bold text-cyan-400 hover:text-white transition"
        >
          Luma Technologies
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6 text-sm font-medium">
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
      </div>
    </header>
  );
};

export default Header;
