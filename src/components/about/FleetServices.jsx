import React, { useState } from "react";
import red from "../../assets/redcar.jpg";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

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
    <div className="flex flex-col-reverse md:flex-row  items-center gap-16 md:mx-10">
      <div className="flex flex-col p-5  md:p-0 md:w-[70%]">
        <div className="md:mt-10 ">
          <h1
            className={`md:text-2xl text-2xl text-transparent bg-clip-text flex justify-between font-bold uppercase ${
              activeParagraphIndex === 0 ? "bg-red-500" : ""
            }`}
            style={{
              color: `${activeParagraphIndex === 0 ? "red" : "white"} `,
            }}
            onClick={() => toggleParagraphVisibility(0)}
          >
            Fuel injection services
            {activeParagraphIndex === 0 ? (
              <div className="h-7 w-7 bg-[red] rounded-full text-center items-center flex justify-center mb-1">
                <IoIosArrowUp className="inline-block " color="white " />
              </div>
            ) : (
              <div className="h-7 w-7 border rounded-full text-center items-center flex justify-center">
                <IoIosArrowDown className="inline-block " />
              </div>
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
              className={`md:text-2xl text-2xl text-transparent bg-clip-text flex justify-between font-bold uppercase ${
                activeParagraphIndex === 1 ? "bg-red-500" : ""
              }`}
              style={{
                color: `${activeParagraphIndex === 1 ? "red" : "white"} `,
              }}
              onClick={() => toggleParagraphVisibility(1)}
            >
              Computer diagnosis
              {activeParagraphIndex === 1 ? (
                <div className="h-7 w-7 bg-[red] rounded-full text-center items-center flex justify-center mb-1">
                  <IoIosArrowUp className="inline-block " color="white " />
                </div>
              ) : (
                <div className="h-7 w-7 border rounded-full text-center items-center flex justify-center">
                  <IoIosArrowDown className="inline-block " />
                </div>
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
          <div className="mt-7">
            <h1
              className={`md:text-2xl text-2xl text-transparent bg-clip-text font-bold flex justify-between uppercase ${
                activeParagraphIndex === 2 ? "bg-red-500" : ""
              }`}
              style={{
                color: `${activeParagraphIndex === 2 ? "red" : "white"} `,
              }}
              onClick={() => toggleParagraphVisibility(2)}
            >
              Steering and suspension
              {activeParagraphIndex === 2 ? (
                <div className="h-7 w-7 bg-[red] rounded-full text-center items-center flex justify-center mb-1">
                  <IoIosArrowUp className="inline-block " color="white " />
                </div>
              ) : (
                <div className="h-7 w-7 border rounded-full text-center items-center flex justify-center">
                  <IoIosArrowDown className="inline-block " />
                </div>
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
      <div>
        <img src={red} alt="red car" className=" my-4 md:my-16 rounded-xl" />
      </div>
    </div>
  );
};

export default FleetServices;
