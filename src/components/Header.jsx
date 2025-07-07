import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-gray-900 text-white shadow-md w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 w-full">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-cyan-400 hover:text-white transition"
          onClick={closeMenu}
        >
          Luma Technologies
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 font-medium">
          <Link
            to="/"
            className="hover:text-cyan-400 transition"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/services"
            className="hover:text-cyan-400 transition"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="hover:text-cyan-400 transition"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <FiX className="text-3xl" />
          ) : (
            <FiMenu className="text-3xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-gray-800 w-full overflow-x-hidden">
          <ul className="flex flex-col space-y-4 px-6 py-6">
            <li>
              <Link
                to="/"
                className="block text-white hover:text-cyan-400"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block text-white hover:text-cyan-400"
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block text-white hover:text-cyan-400"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
