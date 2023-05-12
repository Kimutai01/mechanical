import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#000]">
      <div className="flex flex-col md:flex-row justify-between md:mx-32">
        <div>
          <h1 className="font-bold text-4xl uppercase text-white text-center pb-5">
            Mechanic
          </h1>
        </div>
        <div className="md:flex md:flex-row grid grid-cols-2 gap-10 text-lg font-bold text-center text-white">
          <div>
            <Link to="/services">Home</Link>
          </div>
          <div>
            <Link to="/services">About</Link>
          </div>
          <div>
            <Link to="/services">Store</Link>
          </div>
          <div>
            <Link to="/services">Pricing</Link>
          </div>
          <div>
            <Link to="/services">Store</Link>
          </div>
          <div>
            <Link to="/services">Blog</Link>
          </div>
        </div>
      </div>

      <p className="text-[grey] md:ml-80 text-center font-medium p-10 md:text-left">
        @{new Date().getFullYear()} Mechanic. All rights reserved. developed by
        <span className="text-[#FF0000]">
          {" "}
          <Link to="https://www.kiprotichkimutai.dev">Kiprotich Kimutai</Link>
        </span>
      </p>
    </div>
  );
};

export default Footer;
