// src/Components/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const navItems = ['Home', 'Experience', 'Projects', 'Blog', 'About', 'Contact'];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
         
          <img className="h-10 md:h-14" src="./signature.png" alt="logo" />

         
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item}
                className="text-gray-800 hover:text-blue-600 transition duration-300 font-medium text-lg"
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              >
                {item}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={handleToggle}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-white w-full transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <nav className="flex flex-col items-center space-y-4 py-6">
          {navItems.map((item) => (
            <Link
              key={item}
              className="text-gray-800 hover:text-blue-600 transition duration-300 font-medium text-lg"
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
