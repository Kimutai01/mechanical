import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#000] pt-5">
      <div className="flex flex-col md:flex-row justify-between md:mx-32">
        <div>
          <h1 className="font-bold text-4xl uppercase text-white text-center pb-5 animate-pulse">
            Mechanic
          </h1>
        </div>
        <div className="md:flex md:flex-row grid grid-cols-2 gap-10 text-lg font-bold text-center text-white ">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link
              to="/about"
              className="hover:text-[#ff4d23] hover:scale-105 transition-all duration-all"
            >
              About
            </Link>
          </div>
          <div>
            <Link
              to="/contact"
              className="hover:text-[#ff4d23] hover:scale-105 transition-all duration-all"
            >
              Contact
            </Link>
          </div>
          <div>
            <Link
              to="/services"
              className="hover:text-[#ff4d23] hover:scale-105 transition-all duration-all"
            >
              Services
            </Link>
          </div>
          <div>
            <Link
              to="/store"
              className="hover:text-[#ff4d23] hover:scale-105 transition-all duration-all"
            >
              Store
            </Link>
          </div>
        </div>
      </div>

      <p className="text-[grey] md:ml-80 text-center font-medium p-10 md:text-left">
        @{new Date().getFullYear()} Mechanic. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
