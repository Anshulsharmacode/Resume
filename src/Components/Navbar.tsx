import React, { useState } from 'react';
import { FaBars, FaTimes, FaAdjust, FaMoon, FaSun } from 'react-icons/fa';

const navItems = [
  { name: 'Home', path: 'home' },
  { name: 'Experience', path: 'experience' },
  // { name: 'Skills', path: 'skills' },
  { name: 'Projects', path: 'projects' },
  { name: 'Education', path: 'education' },
  { name: 'Blog', path: 'blog' },
  { name: 'About', path: 'about' },
  { name: 'Contact', path: 'contact' }
];

interface NavbarProps {
  setCurrentPage: (page: string) => void;
  isInverted: boolean;
  toggleInversion: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ setCurrentPage, isInverted, toggleInversion, theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const NavLink: React.FC<{ item: { name: string; path: string } }> = ({ item }) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (['blog', 'about', 'contact','projects'].includes(item.path)) {
        setCurrentPage(item.path);
      } else {
        setCurrentPage('main');
        setTimeout(() => {
          const element = document.getElementById(item.path);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 0);
      }
      if (isOpen) setIsOpen(false);
    };

    return (
      <a
        href={`#${item.path}`}
        onClick={handleClick}
        className="text-gray-800 hover:text-blue-600 transition duration-300 font-medium text-lg"
      >
        {item.name}
      </a>
    );
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 shadow-md ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <a href="#home">
            <img className="h-10 md:h-14" src="./signature.png" alt="logo" />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <NavLink key={item.name} item={item} />
            ))}
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full focus:outline-none"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
            {/* Inversion Toggle */}
            <button
              onClick={toggleInversion}
              className="p-2 rounded-full focus:outline-none"
              aria-label="Toggle inversion"
            >
              <FaAdjust className={isInverted ? 'text-blue-600' : ''} />
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              className="focus:outline-none"
              onClick={handleToggle}
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden w-full transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
      >
        <nav className="flex flex-col items-center space-y-4 py-6">
          {navItems.map((item) => (
            <NavLink key={item.name} item={item} />
          ))}
          {/* Theme Toggle for Mobile */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full focus:outline-none"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          {/* Inversion Toggle for Mobile */}
          <button
            onClick={toggleInversion}
            className="p-2 rounded-full focus:outline-none"
            aria-label="Toggle inversion"
          >
            <FaAdjust className={isInverted ? 'text-blue-600' : ''} />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
