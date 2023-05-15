import React from "react";

import { motion } from "framer-motion";

import "./Hero.css";
import { BsArrowRightShort } from "react-icons/bs";
import automobile from "../assets/automobile.svg";
import car from "../assets/carservice.svg";
import auto from "../assets/autocar.svg";
import mot from "../assets/carsmot.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    // add scroll up animation to the hero section using framer motion
    <div className="home-background">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="pt-44 md:px-40"
      >
        <h2 className="text-[#fff] font-bold md:text-6xl text-4xl ml-4 md:ml-0 w-[80%]">
          PROFESSIONAL CAR REPAIR AND MAINTENANCE
        </h2>
        <p className="text-[#fff] text-xl pt-10 font-medium mx-3 md:mx-0  md:w-[50%]">
          We are focused on providing our clients with the highest level of
          quality and excellent customer support.
        </p>
        <Link to="/contact">
          <button className="home-btn mt-10 md:mt-20 ml-3 md:ml-3 flex items-center w-[90%] md:w-[28%] ">
            <h1>Get appointment now</h1>
            <div className="rounded-full bg-white font-bold">
              <BsArrowRightShort size={25} className="text-[red]" />
            </div>
          </button>
        </Link>

        <div className="grid md:grid-cols-4 md:gap-2 pt-10 mx-5 md:pt-20 grid-cols-2 gap-2">
          <img src={automobile} alt="" className=" " />
          <img src={car} alt="" className="" />
          <img src={auto} alt="" className="" />
          <img src={mot} alt="" className="" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
