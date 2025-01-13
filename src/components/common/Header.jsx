import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/SCRIPTIFY.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false); 
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 left-0 right-0 z-50">
      <nav className="relative container mx-auto px-6 xl:px-36 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </NavLink>

        {/* Navigation Links (Desktop) */}
        <div className="hidden lg:flex space-x-8 text-sm font-semibold text-[#0d2144]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm text-[#0d2144] ${
                isActive ? "text-blue-700" : "hover:text-red-700"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `text-sm text-[#0d2144] ${
                isActive ? "text-blue-700" : "hover:text-red-700"
              }`
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `text-sm text-[#0d2144] ${
                isActive ? "text-blue-700" : "hover:text-red-700"
              }`
            }
          >
            Portfolio
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-sm text-[#0d2144] ${
                isActive ? "text-blue-700" : "hover:text-red-700"
              }`
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/career"
            className={({ isActive }) =>
              `text-sm text-[#0d2144] ${
                isActive ? "text-blue-700" : "hover:text-red-700"
              }`
            }
          >
            Careers
          </NavLink>
        </div>

        {/* Contact Info and Button (Hidden on Mobile/Tablet) */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="tel:+923038974920"
            className="text-sm font-medium text-blue-700"
          >
            +92 (303) 8974920
          </a>
          <NavLink
            to="/contact"
            className="bg-[#1AA54A] text-white text-sm font-bold py-2 px-4 rounded hover:bg-orange-600"
          >
            CONTACT US
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex">
          <a
            href="tel:+923038974920"
            className="h-8 w-8 flex items-center justify-center text-white rounded-full bg-orange-600 text-sm font-medium mr-4 text-md"
          >
            <i className="fa-solid fa-phone"></i>
          </a>

          <button
            onClick={handleToggle}
            className="text-blue-700 focus:outline-none text-lg w-10"
          >
            <i className="fa-solid fa-bars-staggered"></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-20 bg-black bg-opacity-80 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleToggle}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-52 bg-white shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
          <button
            onClick={handleToggle}
            className="text-gray-600 hover:text-gray-900 text-xl"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <nav className="px-4 py-6 space-y-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block text-sm font-semibold text-[#0d2144] ${
                isActive ? "text-blue-700" : "hover:text-red-700"
              }`
            }
            onClick={handleToggle}
          >
            Home
          </NavLink>

          <div className="flex items-center justify-between">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `block text-sm font-semibold text-[#0d2144] ${
                  isActive ? "text-blue-700" : "hover:text-red-700"
                }`
              }
              onClick={handleToggle}
            >
              Services
            </NavLink>
          </div>

          <div className="flex items-center justify-between">
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `block text-sm font-semibold text-[#0d2144] ${
                  isActive ? "text-blue-700" : "hover:text-red-700"
                }`
              }
              onClick={handleToggle}
            >
              Portfolio
            </NavLink>
          </div>

          <div className="flex items-center justify-between">
            <NavLink
              to="/career"
              className={({ isActive }) =>
                `block text-sm font-semibold text-[#0d2144] ${
                  isActive ? "text-blue-700" : "hover:text-red-700"
                }`
              }
              onClick={handleToggle}
            >
              career
            </NavLink>
          </div>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block text-sm font-semibold text-[#0d2144] ${
                isActive ? "text-blue-700" : "hover:text-red-700"
              }`
            }
            onClick={handleToggle}
          >
            About Us
          </NavLink>

          <NavLink
            to="/contact"
            className="block bg-orange-500 text-white text-center text-sm font-bold py-2 px-4 rounded mt-4 hover:bg-orange-600"
            onClick={handleToggle}
          >
            CONTACT US
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
