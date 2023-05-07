import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import { Link } from "react-router-dom";
import { RiMenu5Line } from "react-icons/ri";
import { HiShoppingCart } from "react-icons/hi";
import "./Navbar.css";
import { BsChevronDown } from "react-icons/bs";

import { motion } from "framer-motion";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");

  useEffect(() => {
    setNavBg("#000");
    setLinkColor("#ecf0f3");
  }, []);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleShadow);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const [showServicesDetails, setShowServicesDetails] = useState(false);
  const [showStoreDetails, setShowStoreDetails] = useState(false);

  const handleServicesClick = () => {
    setShowServicesDetails(!showServicesDetails);
  };
  const handleStoreClick = () => {
    setShowStoreDetails(!showStoreDetails);
  };

  const handleStoreHover = () => {
    setShowStoreDetails(true);
  };

  const handleStoreHoverLeave = () => {
    setShowStoreDetails(false);
  };
  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] md:px-24"
          : "fixed w-full h-20 z-[100] md:px-24"
      }
    >
      <div className="flex justify-between items-center w-full h-full md:px-4 py-4 px-2 2xl:px-16 rounded">
        <div className="animate-bounce">
          <Link className="text-[#fff] font-bold text-3xl">MECHANIC</Link>
        </div>
        <div>
          <ul className="hidden md:flex" style={{ color: `${linkColor}` }}>
            <Link to="/">
              <li className="ml-10 font-normal  text-xl hover:text-[#ff4d23] hover:scale-105 transition-all duration-all hover:border-y-black ">
                Home
              </li>
            </Link>
            <div className="group ml-10">
              <li className="font-normal  text-xl hover:text-[#ff4d23] hover:scale-105 transition-all duration-all hover:border-y-black ">
                Services
                <div className="opacity-0 group-hover:opacity-100 w-[200px] absolute left-0 top-full bg-[#000] pt-10 py-2 rounded-lg shadow-lg">
                  <ul className="p-2">
                    <Link className="text-[#fff] py-1 px-2 " to="/services">
                      Services
                    </Link>
                    <Link
                      to="/serviceDetail"
                      className="text-[#fff] py-1 px-2 "
                    >
                      Service details
                    </Link>
                  </ul>
                </div>
              </li>
            </div>
            <div className="group ml-10">
              <li className="font-normal  text-xl hover:text-[#ff4d23] hover:scale-105 transition-all duration-all hover:border-y-black ">
                Store
                <div className="opacity-0 group-hover:opacity-100 w-[200px] absolute left-0 top-full bg-[#000] pt-10 py-2 rounded-lg shadow-lg">
                  <ul className="p-2">
                    <Link to="/store" className="text-[#fff] py-1 px-2 ">
                      Store
                    </Link>
                    <Link to="/storeDetail" className="text-[#fff] py-1 px-2 ">
                      Store details
                    </Link>
                  </ul>
                </div>
              </li>
            </div>
            <Link to="/about">
              <li className="ml-10 font-normal  text-xl hover:text-[#ff4d23] hover:scale-105 transition-all duration-all hover:border-y-black ">
                About
              </li>
            </Link>
            <Link to="/blog">
              <li className="ml-10 font-normal  text-xl hover:text-[#ff4d23] hover:scale-105 transition-all duration-all hover:border-y-black ">
                Blog
              </li>
            </Link>
            <Link to="/contact">
              <li className="ml-10 font-normal  text-xl hover:text-[#ff4d23] hover:scale-105 transition-all duration-all hover:border-y-black ">
                Contact
              </li>
            </Link>
          </ul>
          <div
            className="md:hidden flex justify-between items-center w-full h-full"
            onClick={handleNav}
            style={{ color: `${linkColor}` }}
          >
            <HiShoppingCart
              size={40}
              className="text-[#ff4d23] text-center align-middle justify-center mr-3 "
            />
            <RiMenu5Line size={40} className="text-[#ff4d23]" />
          </div>
        </div>
        <div className="hidden md:flex">
          <div>
            <HiShoppingCart
              size={40}
              className="text-[#ff4d23] text-center align-middle justify-center mr-3 mt-2"
            />
          </div>
          <div>
            <button className="uppercase text-[#fff] bg-[#808080] rounded-full hover:bg-[#ff4d23] font-bold p-4 hidden md:block">
              get an appointment
            </button>
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hiddden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%]  h-screen bg-[#000] text-white p-2 ease-in duration-500"
              : "fixed left-[-100%] top-0  p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex justify-between items-center w-full mt-3 px-3">
              <Link className="font-bold text-4xl uppercase">Mechanic</Link>
              <div
                onClick={handleNav}
                className="cursor-pointer text-[#ff4d23]"
              >
                <AiOutlineClose size={35} />
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col  py-4">
              <ul>
                <Link to="/" onClick={handleNav}>
                  <li className="ml-3 text-xl">Home</li>
                </Link>
                <li className="relative">
                  <div
                    className="flex items-center justify-between px-3 py-4 cursor-pointer"
                    onClick={handleServicesClick}
                  >
                    <div className="text-xl">Services</div>
                    <div>
                      <BsChevronDown size={25} className={``} />
                    </div>
                  </div>
                  {showServicesDetails && (
                    <ul className="left-full bg-[#000] py-2 rounded-lg shadow-lg">
                      <Link to="/services" onClick={handleNav}>
                        <li className="text-[#fff] text-xl py-1 px-10 hover:bg-gray-200">
                          Services
                        </li>
                      </Link>
                      <Link to="/serviceDetail" onClick={handleNav}>
                        <li className="text-[#fff] text-xl py-1 px-10 hover:bg-gray-200">
                          Service Details
                        </li>
                      </Link>
                    </ul>
                  )}
                </li>
                <li className="relative">
                  <div
                    className="flex items-center justify-between px-3 py-4 cursor-pointer"
                    onClick={handleStoreClick}
                  >
                    <div className="text-xl">Store</div>
                    <div>
                      <BsChevronDown size={25} className={``} />
                    </div>
                  </div>
                  {showStoreDetails && (
                    <ul className="left-full bg-[#000] py-2 rounded-lg shadow-lg">
                      <Link to="/store" onClick={handleNav}>
                        <li className="text-[#fff] text-xl py-1 px-10 hover:bg-gray-200">
                          Store
                        </li>
                      </Link>
                      <Link to="/storeDetail" onClick={handleNav}>
                        <li className="text-[#fff] text-xl py-1 px-10 hover:bg-gray-200">
                          Store Details
                        </li>
                      </Link>
                    </ul>
                  )}
                </li>
                <Link to="/about">
                  <li className="py-4 text-xl ml-3 cursor-pointer">About</li>
                </Link>
                <Link to="/blog">
                  <li className="relative cursor-pointer">
                    <div className="flex items-center justify-between px-3">
                      <div className="text-xl">Blog</div>
                      <div>
                        <BsChevronDown size={20} />
                      </div>
                    </div>
                  </li>
                </Link>
              </ul>
              <div>
                <button className="uppercase text-[#fff] bg-[#808080] rounded-full hover:bg-[#ff4d23] font-bold p-4 mt-10 ml-4">
                  get an appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;