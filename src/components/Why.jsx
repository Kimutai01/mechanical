import React, { useState } from "react";
import mot from "../assets/performance.svg";
import repair from "../assets/autorepair.svg";
import car from "../assets/fleet.svg";
import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";
import { BsArrowRightShort } from "react-icons/bs";
// motion div scrolls up only when the scroll reaches the div
const Why = () => {
  const [activeParagraphIndex, setActiveParagraphIndex] = useState(null);

  const toggleParagraphVisibility = (index) => {
    setActiveParagraphIndex(activeParagraphIndex === index ? null : index);
  };
  const { ref, inView } = useInView({
    threshold: 0.5, // Only trigger when 50% of the element is visible
    triggerOnce: true, // Only trigger once
  });
  return (
    <div className="bg-[#000]">
      <motion.div
        className="grid md:grid-cols-3 md:gap-6 mx-36  grid-cols-1 gap-5 absolute -mt-20"
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
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
      <motion.div
        className="pt-80 flex gap-10 px-36"
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        ref={ref}
      >
        <div className="w-[30%]">
          <h2 className="text-white text-5xl font-bold ">Why us?</h2>
          <p className="text-[grey] text-xl font-normal medium">
            All Mechanic 128 workshops employ the latest test techniques and
            digital information systems. This ideal combination ensures
            systematic vehicle diagnosis and qualified repair work.
          </p>
          <button className="why-btn flex items-center mt-5 ">
            <h1>View more</h1>
            <div className="rounded-full bg-[#ff866c] font-bold">
              <BsArrowRightShort size={25} className="text-[white]" />
            </div>
          </button>
        </div>
        <div className="w-[70%]">
          <div className="mt-10">
            <h1
              className={`text-5xl text-transparent bg-clip-text font-bold uppercase ${
                activeParagraphIndex === 0 ? "bg-red-500" : ""
              }`}
              style={{
                WebkitTextStroke: `2px ${
                  activeParagraphIndex === 0 ? "red" : "grey"
                } `,
              }}
              onClick={() => toggleParagraphVisibility(0)}
            >
              900 Five Star Reviews
            </h1>

            {activeParagraphIndex === 0 && (
              <p className="text-[grey]">
                Our auto shop technicians are dedicated to helping you get back
                on the road. Zero risks with warranty. Get fair and transparent
                estimates!
              </p>
            )}
          </div>

          <div className="mt-10">
            <h1
              className={`text-5xl text-transparent bg-clip-text font-bold uppercase ${
                activeParagraphIndex === 1 ? "bg-red-500" : ""
              }`}
              style={{
                WebkitTextStroke: `2px ${
                  activeParagraphIndex === 1 ? "red" : "grey"
                } `,
              }}
              onClick={() => toggleParagraphVisibility(1)}
            >
              Free Diagnosis
            </h1>

            {activeParagraphIndex === 1 && (
              <p className="text-[grey]">
                Our auto shop technicians are dedicated to helping you get back
                on the road. Zero risks with warranty. Get fair and transparent
                estimates!
              </p>
            )}
          </div>

          <div className="mt-10">
            <h1
              className={`text-5xl text-transparent bg-clip-text font-bold uppercase ${
                activeParagraphIndex === 2 ? "bg-red-500" : ""
              }`}
              style={{
                WebkitTextStroke: `2px ${
                  activeParagraphIndex === 2 ? "red" : "grey"
                } `,
              }}
              onClick={() => toggleParagraphVisibility(2)}
            >
              No appointment necessary
            </h1>

            {activeParagraphIndex === 2 && (
              <p className="text-[grey]">
                Our auto shop technicians are dedicated to helping you get back
                on the road. Zero risks with warranty. Get fair and transparent
                estimates!
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Why;
