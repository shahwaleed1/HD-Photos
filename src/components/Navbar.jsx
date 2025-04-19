import React, { useState } from "react";
import { Link } from "react-router-dom";
import Searchbox from './Searchbox.jsx';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (searchTerm) => {
    console.log("Search term:", searchTerm);
    // Implement your search logic here
  };
  

  return (
    <nav className="backdrop-blur-lg bg-[rgba(35, 35, 35, 0.5)] drop-shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 text-slate-700">
          <div className="flex items-center">
            <Link to="/">
              <img className="max-w-[3.50rem]" src="logo.png" alt="logo" />
            </Link>
            {/* <Searchbox /> */}
          </div>
          <div className="hidden md:flex space-x-4">
            <Link
              to="/"
              className=" hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className=" hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>
            <Link
              to="/services"
              className=" hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className=" hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
          </div>
          <div className="flex md:hidden">
            <button
              className="text-gray-400 hover:text-gray-500 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-gray-400 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-400 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-gray-400 block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-gray-400 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
