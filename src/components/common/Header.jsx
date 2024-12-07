import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/SCRIPTIFY.png";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open
  const [isOpen, setIsOpen] = useState(false); // State to handle mobile menu

  const handleMouseEnter = (dropdown) => {
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownToggle = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const dropdownData = {
    services: [
      { title: "Hire Team", description: "Hire Dedicated Team" },
      { title: "Blockchain", description: "DApps & NFT Marketplace" },
      { title: "Web Apps", description: "Building Resilient Web Apps" },
      { title: "Mobile Apps", description: "iOS, Android and Wearable Apps" },
      {
        title: "UI/UX Design",
        description: "Aesthetically Pleasing Interfaces",
      },
      { title: "WordPress", description: "Empowering Websites with WordPress" },
      { title: "Shopify", description: "eCommerce Store Development" },
      { title: "MVP", description: "MVP for Startups" },
    ],
    portfolio: [
      { title: "Blockchain", description: "Collection of Blockchain Apps" },
      { title: "Mobile Apps", description: "iOS, Android & Wearable Apps" },
      { title: "Web Apps", description: "Showcasing our Web App Expertise" },
      {
        title: "WordPress/Shopify",
        description: "eCommerce & Custom Development",
      },
      { title: "UI/UX Design", description: "Seamless Digital Experiences" },
      { title: "MVP", description: "Winning MVP Portfolio" },
    ],
    // insights: [
    //   { title: "Blogs" },
    //   { title: "Events" },
    //   { title: "Press Release" },
    //   { title: "Newsletters" },
    // ],
  };

  return (
    <header className="bg-white shadow-md sticky top-0 left-0 right-0 z-50">
      <nav className="relative container mx-auto px-6 xl:px-36 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </NavLink>

        {/* Navigation Links (Desktop) */}
        <div className="hidden lg:flex space-x-8 text-sm font-semibold text-gray-700">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm ${isActive ? "text-blue-700" : "hover:text-red-700"}`
            }
          >
            Home
          </NavLink>
          {/* Services Dropdown */}
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
              Services 
              {/* <i className="fas fa-chevron-down ml-1"></i> */}
            </NavLink>
            {/* {openDropdown === "services" && (
              <div
                className="absolute z-50 left-0 top-9 mt-2 w-full bg-white shadow-lg py-4 grid grid-cols-4 gap-6 px-6 border-t-2 border-blue-800"
                onMouseEnter={() => handleMouseEnter("services")}
                onMouseLeave={handleMouseLeave}
              >
                {dropdownData.services.map((item, index) => (
                  <NavLink
                    to={`/services/${item.title}`}
                    key={index}
                    className="text-sm hover:text-red-700"
                  >
                    <h4 className="font-semibold text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-xs font-thin">
                      {item.description}
                    </p>
                  </NavLink>
                ))}
              </div>
            )} */}
          </div>

          {/* Work Dropdown */}
          <div
            onMouseEnter={() => handleMouseEnter("portfolio")}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `text-sm ${isActive ? "text-blue-700" : "hover:text-red-700"}`
              }
            >
              Portfolio 
              {/* <i className="fas fa-chevron-down ml-1"></i> */}
            </NavLink>
            {/* {openDropdown === "work" && (
              <div
                className="absolute z-50 left-0 top-9 mt-2 w-full bg-white shadow-lg py-4 grid grid-cols-4 gap-6 px-6 border-t-2 border-blue-800"
                onMouseEnter={() => handleMouseEnter("work")}
                onMouseLeave={handleMouseLeave}
              >
                {dropdownData.work.map((item, index) => (
                  <NavLink
                    to={`/work/${item.title}`}
                    key={index}
                    className="text-sm"
                  >
                    <h4 className="font-semibold text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-xs font-thin">
                      {item.description}
                    </p>
                  </NavLink>
                ))}
              </div>
            )} */}
          </div>

          {/* Other Links */}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-sm ${isActive ? "text-blue-700" : "hover:text-red-700"}`
            }
          >
            About Us
          </NavLink>

          {/* Insights Dropdown */}
          {/* <div
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
            {openDropdown === "insights" && (
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
          </div> */}

          {/* Careers Dropdown */}
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
              Careers 
              {/* <i className="fas fa-chevron-down ml-1"></i> */}
            </NavLink>
            {/* {openDropdown === "careers" && (
              <NavLink
                to="/career/jobopening"
                className="absolute z-50 top-9 mt-2 w-auto bg-white shadow-lg border-t-2 border-blue-800 py-4 grid grid-cols-1 gap-6 px-6"
              >
                <h4 className="font-semibold text-gray-800">Jobs Opening</h4>
              </NavLink>
            )} */}
          </div>
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
          {/* Phone Number (Mobile) */}
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
          {/* Home Link (Mobile) */}
          <NavLink
            to="/"
            className="block text-sm font-semibold text-gray-700 hover:text-red-700"
            onClick={handleToggle}
          >
            Home
          </NavLink>

          {/* Services Dropdown (Mobile) */}
          <div className="relative">
            <div className="flex items-center justify-between">
              <NavLink
                to="/services"
                className="text-sm font-semibold text-gray-700 flex-1 hover:text-red-700"
                onClick={handleToggle}
              >
                Services
              </NavLink>

              <i
                className={`fa-solid ${
                  openDropdown === "services" ? "fa-minus" : "fa-plus"
                } text-gray-700 cursor-pointer`}
                onClick={() => handleDropdownToggle("services")}
              ></i>
            </div>
            {openDropdown === "services" && (
              <div className="mt-2 space-y-2 pl-4">
                {dropdownData.services.map((item, index) => (
                  <NavLink
                    to={`/services/${item.title}`}
                    key={index}
                    className="block text-sm hover:text-red-700 hover:font-semibold"
                    onClick={handleToggle}
                  >
                    {item.title}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {/* Work Dropdown (Mobile) */}
          <div className="relative">
            <div className="flex items-center justify-between">
              <NavLink
                to="/portfolio"
                className="text-sm font-semibold text-gray-700 flex-1 hover:text-red-700"
                onClick={handleToggle}
              >
                Portfolio
              </NavLink>

              {/* <i
                className={`fa-solid ${
                  openDropdown === "work" ? "fa-minus" : "fa-plus"
                } text-gray-700 cursor-pointer`}
                onClick={() => handleDropdownToggle("work")}
              ></i> */}
            </div>
            {/* {openDropdown === "work" && (
              <div className="mt-2 space-y-2 pl-4">
                {dropdownData.work.map((item, index) => (
                  <NavLink
                    to={`/work/${item.title}`}
                    key={index}
                    className="block text-sm hover:text-red-700 hover:font-semibold"
                    onClick={handleToggle}
                  >
                    {item.title}
                  </NavLink>
                ))}
              </div>
            )} */}
          </div>

          {/* Insights Dropdown (Mobile) */}
          {/* <div className="relative">
            <div className="flex items-center justify-between">
              <NavLink
                to="/insights"
                className="text-sm font-semibold text-gray-700 flex-1 hover:text-red-700"
                onClick={handleToggle}
              >
                Insights
              </NavLink>

              <i
                className={`fa-solid ${
                  openDropdown === "insights" ? "fa-minus" : "fa-plus"
                } text-gray-700 cursor-pointer`}
                onClick={() => handleDropdownToggle("insights")}
              ></i>
            </div>
            {openDropdown === "insights" && (
              <div className="mt-2 space-y-2 pl-4">
                {dropdownData.insights.map((item, index) => (
                  <NavLink
                    to={`/insights/${item.title}`}
                    key={index}
                    className="block text-sm hover:text-red-700 hover:font-semibold"
                    onClick={handleToggle}
                  >
                    {item.title}
                  </NavLink>
                ))}
              </div>
            )}
          </div> */}

          {/* Careers Dropdown (Mobile) */}
          <div className="relative">
            <div className="flex items-center justify-between">
              <NavLink
                to="/career"
                className="text-sm font-semibold text-gray-700 flex-1 hover:text-red-700"
                onClick={handleToggle}
              >
                career
              </NavLink>

              {/* <i
                className={`fa-solid ${
                  openDropdown === "careers" ? "fa-minus" : "fa-plus"
                } text-gray-700 cursor-pointer`}
                onClick={() => handleDropdownToggle("careers")}
              ></i> */}
            </div>
            {/* {openDropdown === "careers" && (
              <NavLink
                to="/career/jobopening"
                className="block mt-2 pl-4 text-sm hover:text-red-700 hover:font-semibold"
                onClick={handleToggle}
              >
                Jobs Opening
              </NavLink>
            )} */}
          </div>

          {/* About Us Link (Mobile) */}
          <NavLink
            to="/about"
            className="block text-sm font-semibold text-gray-700 hover:text-red-700"
            onClick={handleToggle}
          >
            About Us
          </NavLink>

          {/* Contact Us Button (Mobile) */}
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
