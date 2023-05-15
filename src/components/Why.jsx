import React, { useState } from "react";
import mot from "../assets/performance.svg";
import repair from "../assets/autorepair.svg";
import car from "../assets/fleet.svg";
import { useInView } from "react-intersection-observer";
import ReactPlayer from "react-player";
import ServiceCard from "./all/serviceCard";

import { motion } from "framer-motion";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
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
      <ServiceCard />
      <div
        className="md:pt-80 p-10 flex gap-10 md:px-36 flex-col md:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
      >
        <div className="md:w-[30%]">
          <h2 className="text-white text-5xl font-bold ">Why us?</h2>
          <p className="text-[grey] text-xl font-normal medium">
            All Mechanic 128 workshops employ the latest test techniques and
            digital information systems. This ideal combination ensures
            systematic vehicle diagnosis and qualified repair work.
          </p>
          <Link to="/about">
            <button className="why-btn flex items-center mt-5 ">
              <h1>View more</h1>
              <div className="rounded-full bg-[#ff866c] font-bold">
                <BsArrowRightShort size={25} className="text-[white]" />
              </div>
            </button>
          </Link>
        </div>
        <div className="md:w-[70%]">
          <div className="mt-10">
            <h1
              className={`md:text-5xl text-3xl text-transparent bg-clip-text font-bold uppercase cursor-pointer ${
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
              className={`md:text-5xl text-3xl text-transparent bg-clip-text font-bold uppercase cursor-pointer ${
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
              className={`md:text-5xl text-3xl text-transparent bg-clip-text font-bold uppercase cursor-pointer ${
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
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        ref={ref}
      >
        <div className="md:w-screen md:h-screen p-10">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=mYmNM8-XRP0&ab_channel=InsiderCars"
            playing
            loop
            muted
            width="100%"
            height="100%"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Why;
