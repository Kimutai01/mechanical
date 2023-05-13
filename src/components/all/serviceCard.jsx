import React from "react";
import mot from "../../assets/performance.svg";
import repair from "../../assets/autorepair.svg";
import car from "../../assets/fleet.svg";
import { useInView } from "react-intersection-observer";

import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useScroll, motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const ServiceCard = () => {
  const { scrollY } = useScroll();
  const controls = useAnimation();

  const servicesRef = useRef();

  useEffect(() => {
    const element = servicesRef.current;
    controls.start("visible");

    const onScroll = () => {
      const scrollPosition = element.offsetTop - window.innerHeight;

      if (scrollY.current >= scrollPosition) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [controls, scrollY]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div ref={servicesRef} className="bg-[#000]">
      <motion.div
        className="grid md:grid-cols-3 md:gap-6 md:mx-36 p-5  grid-cols-1 gap-5 md:absolute pt-5 md:-mt-20"
        variants={variants}
        initial="hidden"
        animate={controls}
      >
        <div className="bg-[#161616] p-5 shadow-md z-30 rounded-lg">
          <Link to="/performance">
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
          </Link>
        </div>

        <div className="bg-[#161616] p-5 shadow-md z-30 rounded-lg">
          <Link to="/repair">
            <img src={repair} alt="" className="h-[80px] w-[80px]" />
            <h1 className="text-[#fff] text-2xl font-bold uppercase mt-5">
              Auto Repair
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
          </Link>
        </div>

        <div className="bg-[#161616] p-5 shadow-md z-30 rounded-lg">
          <Link to="/fleet">
            <img src={car} alt="" className="h-[80px] w-[80px]" />
            <h1 className="text-[#fff] text-2xl font-bold uppercase mt-5">
              Fleet Services
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
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceCard;
