import React from "react";
// import mot from "../assets/performance.svg";
// import repair from "../assets/autorepair.svg";
// import car from "../assets/fleet.svg";
import { useInView } from "react-intersection-observer";

import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useScroll, motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const ContactServices = () => {
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
    <div className="bg-[#161616]">
      <h1 className=" text-3xl md:text-5xl text-center w-[90%] md:w-[50%] pt-28 mx-auto text-white font-bold">
        SERVICES INCLUDED IN EVERY PLAN
      </h1>
      <p className="text-[grey] text-center md:w-[35%] pt-5 mx-auto font-medium">
        Visit us to check your vehicle's status, service history, and repair
        history, view reviews of our services, and much more.
      </p>
      <div ref={servicesRef} className=" mt-20 bg-[#161616]">
        <motion.div
          className="grid md:grid-cols-3 md:gap-6 md:px-36 p-5  grid-cols-1 gap-5  pt-5 "
          variants={variants}
          initial="hidden"
          animate={controls}
        >
          <div className="bg-[#000] p-5 shadow-md z-30 rounded-lg">
            <Link to="/performance">
              {/* <img src={mot} alt="" className="h-[80px] w-[80px]" /> */}
              <h1 className="text-[#fff] text-2xl font-bold uppercase mt-5">
                Performance check
              </h1>
              <p className="text-[#5c5c5c] font-xl font-medium mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam
              </p>
              <button className="home-btn flex items-center mt-5 ">
                <h1>Read more</h1>
                <div className="rounded-full bg-[#8e8e8e] font-bold">
                  <BsArrowRightShort size={25} className="text-[white]" />
                </div>
              </button>
            </Link>
          </div>

          <div className="bg-[#000] p-5 shadow-md z-30 rounded-lg">
            <Link to="/repair">
              {/* <img src={repair} alt="" className="h-[80px] w-[80px]" /> */}
              <h1 className="text-[#fff] text-2xl font-bold uppercase mt-5">
                Auto Repair
              </h1>
              <p className="text-[#5c5c5c] font-xl font-medium mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam
              </p>
              <button className="home-btn flex items-center mt-5 ">
                <h1>Read more</h1>
                <div className="rounded-full bg-[#8e8e8e] font-bold">
                  <BsArrowRightShort size={25} className="text-[white]" />
                </div>
              </button>
            </Link>
          </div>

          <div className="bg-[#000] p-5 shadow-md z-30 rounded-lg">
            <Link to="/fleet">
              <img src={car} alt="" className="h-[80px] w-[80px]" />
              <h1 className="text-[#fff] text-2xl font-bold uppercase mt-5">
                Fleet Services
              </h1>
              <p className="text-[#5c5c5c] font-xl font-medium mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam
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
    </div>
  );
};

export default ContactServices;
