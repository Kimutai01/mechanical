import React from "react";
import mot from "../../assets/performance.svg";
import repair from "../../assets/autorepair.svg";
import car from "../../assets/fleet.svg";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { BsArrowRightShort } from "react-icons/bs";

const ServiceCard = () => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Only trigger when 50% of the element is visible
    triggerOnce: true, // Only trigger once
  });
  return (
    <motion.div
      className="grid md:grid-cols-3 md:gap-6 md:mx-36 p-5  grid-cols-1 gap-5 md:absolute pt-5 md:-mt-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      ref={ref}
    >
      <div className="bg-[#161616] p-5 shadow-md z-30 rounded-lg">
        <img src={mot} alt="" className="h-[80px] w-[80px]" />
        <h1 className="text-[#fff] text-2xl font-bold uppercase mt-5">
          Performance check
        </h1>
        <p className="text-[#5c5c5c] font-xl font-medium mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>
        <button className="home-btn flex items-center mt-5 ">
          <h1>Read more</h1>
          <div className="rounded-full bg-[#8e8e8e] font-bold">
            <BsArrowRightShort size={25} className="text-[white]" />
          </div>
        </button>
      </div>

      <div className="bg-[#161616] p-5 shadow-md z-30 rounded-lg">
        <img src={repair} alt="" className="h-[80px] w-[80px]" />
        <h1 className="text-[#fff] text-2xl font-bold uppercase mt-5">
          Performance check
        </h1>
        <p className="text-[#5c5c5c] font-xl font-medium mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>
        <button className="home-btn flex items-center mt-5 ">
          <h1>Read more</h1>
          <div className="rounded-full bg-[#8e8e8e] font-bold">
            <BsArrowRightShort size={25} className="text-[white]" />
          </div>
        </button>
      </div>

      <div className="bg-[#161616] p-5 shadow-md z-30 rounded-lg">
        <img src={car} alt="" className="h-[80px] w-[80px]" />
        <h1 className="text-[#fff] text-2xl font-bold uppercase mt-5">
          Performance check
        </h1>
        <p className="text-[#5c5c5c] font-xl font-medium mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>
        <button className="home-btn flex items-center mt-5 ">
          <h1>Read more</h1>
          <div className="rounded-full bg-[#8e8e8e] font-bold">
            <BsArrowRightShort size={25} className="text-[white]" />
          </div>
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
