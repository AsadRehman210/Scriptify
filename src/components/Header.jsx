import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/SCRIPTIFY.png";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // State to handle mobile menu

  const handleMouseEnter = (dropdown) => {
    setIsDropdownOpen(dropdown);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(null);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const dropdownData = {
    services: [
      { title: "Hire Team", description: "Hire Dedicated Team" },
      { title: "Blockchain", description: "DApps & NFT Marketplace" },
      { title: "Web Apps", description: "Building Resilient Web Apps" },
      { title: "Mobile Apps", description: "iOS, Android and Wearable Apps" },
      { title: "UI/UX Design", description: "Aesthetically Pleasing Interfaces" },
      { title: "WordPress", description: "Empowering Websites with WordPress" },
      { title: "Shopify", description: "eCommerce Store Development" },
      { title: "MVP", description: "MVP for Startups" },
    ],
    work: [
      { title: "Blockchain", description: "Collection of Blockchain Apps" },
      { title: "Mobile Apps", description: "iOS, Android & Wearable Apps" },
      { title: "Web Apps", description: "Showcasing our Web App Expertise" },
      { title: "WordPress/Shopify", description: "eCommerce & Custom Development" },
      { title: "UI/UX Design", description: "Seamless Digital Experiences" },
      { title: "MVP", description: "Winning MVP Portfolio" },
    ],
    insights: [
      { title: "Blogs" },
      { title: "Events" },
      { title: "Press Release" },
      { title: "Newsletters" },
    ],
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="relative container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </NavLink>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-8 text-sm font-semibold text-gray-700">
          <div
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
            
          >
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `text-sm ${isActive ? "text-blue-700" : "hover:text-red-700"}`
              }
            >
              Services <i className="fas fa-chevron-down ml-1"></i>
            </NavLink>
            {isDropdownOpen === "services" && (
              <div
                className="absolute z-50 left-0 top-9 mt-2 w-full bg-white shadow-lg py-4 grid grid-cols-4 gap-6 px-6 border-t-2 border-blue-800"
                onMouseEnter={() => handleMouseEnter("services")}
                onMouseLeave={handleMouseLeave}
              >
                {dropdownData.services.map((item, index) => (
                  <NavLink to={`/services/${item.title}`} key={index} className="text-sm hover:text-red-700">
                    <h4 className="font-semibold text-gray-800">{item.title}</h4>
                    <p className="text-gray-600 text-xs font-thin">{item.description}</p>
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <div
            onMouseEnter={() => handleMouseEnter("work")}
            onMouseLeave={handleMouseLeave}
            
          >
            <NavLink
              to="/work"
              className={({ isActive }) =>
                `text-sm ${isActive ? "text-blue-700" : "hover:text-red-700"}`
              }
            >
              Work <i className="fas fa-chevron-down ml-1"></i>
            </NavLink>
            {isDropdownOpen === "work" && (
              <div
                className="absolute z-50 left-0 top-9 mt-2 w-full bg-white shadow-lg py-4 grid grid-cols-4 gap-6 px-6 border-t-2 border-blue-800"
                onMouseEnter={() => handleMouseEnter("work")}
                onMouseLeave={handleMouseLeave}
              >
                {dropdownData.work.map((item, index) => (
                  <NavLink to={`/work/${item.title}`} key={index} className="text-sm">
                    <h4 className="font-semibold text-gray-800">{item.title}</h4>
                    <p className="text-gray-600 text-xs font-thin">{item.description}</p>
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-sm ${isActive ? "text-blue-700" : "hover:text-red-700"}`
            }
          >
            About Us
          </NavLink>

          <div
            onMouseEnter={() => handleMouseEnter("insights")}
            onMouseLeave={handleMouseLeave}
            
          >
            <NavLink
              to="/insights"
              className={({ isActive }) =>
                `text-sm ${isActive ? "text-blue-700" : "hover:text-red-700"}`
              }
            >
              Insights <i className="fas fa-chevron-down ml-1"></i>
            </NavLink>
            {isDropdownOpen === "insights" && (
              <div
                className="absolute z-50 top-9 mt-2 w-auto bg-white shadow-lg border-t-2 border-blue-800 py-4 grid grid-cols-1 gap-6 px-6"
                onMouseEnter={() => handleMouseEnter("insights")}
                onMouseLeave={handleMouseLeave}
              >
                {dropdownData.insights.map((item, index) => (
                  <NavLink to={`/insights/${item.title}`} key={index} className="text-sm">
                    <h4 className="font-semibold text-gray-800">{item.title}</h4>
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <div
            onMouseEnter={() => handleMouseEnter("careers")}
            onMouseLeave={handleMouseLeave}
            
          >
            <NavLink
              to="/career"
              className={({ isActive }) =>
                `text-sm ${isActive ? "text-blue-700" : "hover:text-red-700"}`
              }
            >
              Careers <i className="fas fa-chevron-down ml-1"></i>
            </NavLink>
            {isDropdownOpen === "careers" && (
              <NavLink
                to="/career/jobopening"
                className="absolute z-50 top-9 mt-2 w-auto bg-white shadow-lg border-t-2 border-blue-800 py-4 grid grid-cols-1 gap-6 px-6"
              >
                <h4 className="font-semibold text-gray-800">Jobs Opening</h4>
              </NavLink>
            )}
          </div>
        </div>

        {/* Contact Info and Button (Hidden on Mobile/Tablet) */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="tel:+923038974920" className="text-sm font-medium text-blue-700">
            +92 (303) 8974920
          </a>
          <NavLink
            to="/contact"
            className="bg-orange-500 text-white text-sm font-bold py-2 px-4 rounded hover:bg-orange-600"
          >
            CONTACT US
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={handleToggle}
            className="text-blue-700 focus:outline-none text-base"
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
        <ul className="flex flex-col space-y-4 p-4 text-blue-700">
          <li className="text-sm font-semibold hover:text-blue-900">
            <NavLink to="/services" onClick={handleToggle}>
              <i className="fa-solid fa-globe"></i> Services
            </NavLink>
          </li>
          <li className="text-sm font-semibold hover:text-blue-900">
            <NavLink to="/work" onClick={handleToggle}>
              <i className="fa-solid fa-briefcase"></i> Work
            </NavLink>
          </li>
          <li className="text-sm font-semibold hover:text-blue-900">
            <NavLink to="/about" onClick={handleToggle}>
              <i className="fa-solid fa-address-card"></i> About Us
            </NavLink>
          </li>
          <li className="text-sm font-semibold hover:text-blue-900">
            <NavLink to="/insights" onClick={handleToggle}>
              <i className="fa-solid fa-think-peaks"></i> Insights
            </NavLink>
          </li>
          <li className="text-sm font-semibold hover:text-blue-900">
            <NavLink to="/career" onClick={handleToggle}>
              <i className="fa-solid fa-coins"></i> Careers
            </NavLink>
          </li>
          <li className="text-sm font-semibold hover:text-blue-900">
            <a href="tel:+923038974920" onClick={handleToggle}>
              <i className="fa-solid fa-phone-volume"></i> +92 (303) 8974920
            </a>
          </li>
          <li className="text-sm font-semibold pt-6 mx-auto">
            <NavLink
              to="/contact"
              onClick={handleToggle}
              className="bg-orange-500 text-white text-sm font-bold py-2 px-4 rounded hover:bg-orange-600"
            >
              CONTACT US
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
