import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import "./container.css";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="custom-container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and About Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h1 className="text-xl font-bold text-white">HD Photos</h1>
            <p className="mt-2">
              Welcome to HD Photo is your ultimate destination for <br />{" "}
              stunning, high-definition photography.
            </p>
          </div>

          {/* Social Media Section */}
          <div className="w-full md:w-1/3">
            <h2 className="text-lg font-semibold text-white mb-3">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <i className="fab fa-facebook"></i> Facebook
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center border-t border-gray-700 pt-4">
          <p>Make by Waleed &copy; 2025 My Website. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
