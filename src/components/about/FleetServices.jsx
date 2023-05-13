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

const FleetServices = () => {
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
            Fuel injection services
            {activeParagraphIndex === 0 ? (
              <IoIosArrowDropupCircle className="inline-block ml-2" />
            ) : (
              <IoIosArrowDropdownCircle className="inline-block ml-2" />
            )}
          </h1>

          {activeParagraphIndex === 0 && (
            <p className="text-[grey]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
              ornare nunc tellus fermentum, amet curabitur lacus. Sit aenean
              vitae pellentesque consectetur condimentum lorem aliquam lacus
              vulputate.
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
              Computer diagnosis
              {activeParagraphIndex === 1 ? (
                <IoIosArrowDropupCircle className="inline-block ml-2" />
              ) : (
                <IoIosArrowDropdownCircle className="inline-block ml-2" />
              )}
            </h1>

            {activeParagraphIndex === 1 && (
              <p className="text-[grey]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                sed ornare nunc tellus fermentum, amet curabitur lacus. Sit
                aenean vitae pellentesque consectetur condimentum lorem aliquam
                lacus vulputate.
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
              Steering and suspension
              {activeParagraphIndex === 2 ? (
                <IoIosArrowDropupCircle className="inline-block ml-2" />
              ) : (
                <IoIosArrowDropdownCircle className="inline-block ml-2" />
              )}
            </h1>

            {activeParagraphIndex === 2 && (
              <p className="text-[grey]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                sed ornare nunc tellus fermentum, amet curabitur lacus. Sit
                aenean vitae pellentesque consectetur condimentum lorem aliquam
                lacus vulputate.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleetServices;
