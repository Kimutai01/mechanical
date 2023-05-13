import React, { useState } from "react";
import red from "../../assets/redcar.jpg";
import {
  IoIosArrowDropupCircle,
  IoIosArrowDropdownCircle,
} from "react-icons/io";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import { FaCarCrash } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";

const PerformanceCheck = () => {
  const [activeParagraphIndex, setActiveParagraphIndex] = useState(null);

  const toggleParagraphVisibility = (index) => {
    setActiveParagraphIndex(activeParagraphIndex === index ? null : index);
  };
  return (
    <div className="flex">
      <div className="flex flex-col   p-5 md:p-0 mt-10">
        <div className="mt-10 ">
          <h1
            className={`md:text-2xl text-2xl text-transparent bg-clip-text font-bold uppercase ${
              activeParagraphIndex === 0 ? "bg-red-500" : ""
            }`}
            style={{
              color: `${activeParagraphIndex === 0 ? "red" : "white"} `,
            }}
            onClick={() => toggleParagraphVisibility(0)}
          >
            How long will it take to fix my car
            {activeParagraphIndex === 0 ? (
              <IoIosArrowDropupCircle className="inline-block ml-2" />
            ) : (
              <IoIosArrowDropdownCircle className="inline-block ml-2" />
            )}
          </h1>

          {activeParagraphIndex === 0 && (
            <p className="text-[grey]">
              Your car might need service for a multitude of reasons from any
              assortment of low fluids, worn brake linings, or component
              malfunctions. Depending on what the issue is, it could be fixed in
              a day or take over 1 week for a major job. Once we diagnose your
              car, we will be able to give you a better estimate for how long
              the repair will take.
            </p>
          )}
        </div>
        <div className="border-t-[1px] border-[grey] mt-7">
          <div className="mt-7 ">
            <h1
              className={`md:text-2xl text-2xl text-transparent bg-clip-text font-bold uppercase ${
                activeParagraphIndex === 1 ? "bg-red-500" : ""
              }`}
              style={{
                color: `${activeParagraphIndex === 1 ? "red" : "white"} `,
              }}
              onClick={() => toggleParagraphVisibility(1)}
            >
              Do i need an appointment
              {activeParagraphIndex === 1 ? (
                <IoIosArrowDropupCircle className="inline-block ml-2" />
              ) : (
                <IoIosArrowDropdownCircle className="inline-block ml-2" />
              )}
            </h1>

            {activeParagraphIndex === 1 && (
              <p className="text-[grey]">
                It is highly recommended that you make an appointment. We are an
                independent auto repair center and we pride ourselves on our
                quality work and stellar reviews. We might be completely booked
                and not be able to get to your car right away. For that reason,
                we recommend making an appointment or calling ahead.
              </p>
            )}
          </div>
        </div>
        <div className="mt-7 border-t-[1px] border-[grey]">
          <div className="mt-7 ">
            <h1
              className={`md:text-2xl text-2xl text-transparent bg-clip-text font-bold uppercase ${
                activeParagraphIndex === 2 ? "bg-red-500" : ""
              }`}
              style={{
                color: `${activeParagraphIndex === 2 ? "red" : "white"} `,
              }}
              onClick={() => toggleParagraphVisibility(2)}
            >
              Do you offer warranty
              {activeParagraphIndex === 2 ? (
                <IoIosArrowDropupCircle className="inline-block ml-2" />
              ) : (
                <IoIosArrowDropdownCircle className="inline-block ml-2" />
              )}
            </h1>

            {activeParagraphIndex === 2 && (
              <p className="text-[grey]">
                Yes, we certainly do. Our warranty is 2 years or 24,000 miles
                and covers you nationwide! We are proud to stand behind our
                work.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceCheck;
