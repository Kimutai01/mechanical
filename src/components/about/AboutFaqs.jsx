import React, { useState } from "react";
import PerformanceCheck from "./PerformanceCheck";
import Autocheck from "./Autocheck";

const AboutFaqs = () => {
  const [activeComponentIndex, setActiveComponentIndex] = useState(0);

  const handleClick = (index) => {
    setActiveComponentIndex(index);
  };

  return (
    <div className="absolute mx-32 mt-[-93px]">
      <div className="flex justify-between bg-[#161616] relative rounded-lg">
        <div className="flex-1">
          <h2
            style={{
              backgroundColor:
                activeComponentIndex === 0 ? "red" : "transparent",
              cursor: "pointer",
            }}
            className="text-white uppercase text-3xl font-bold p-7 rounded-lg"
            onClick={() => handleClick(0)}
          >
            Performance check
          </h2>
          <div
            className={`border-t-[1px] border-[grey] ${
              activeComponentIndex === 0 ? "w-full" : "hidden"
            }`}
          />
          {activeComponentIndex === 0 && (
            <div className="w-full">
              <PerformanceCheck />
            </div>
          )}
        </div>
        <div className="flex-1">
          <h2
            style={{
              backgroundColor:
                activeComponentIndex === 1 ? "red" : "transparent",
              cursor: "pointer",
            }}
            className="text-white uppercase text-3xl font-bold p-7 rounded-lg"
            onClick={() => handleClick(1)}
          >
            Auto maintenance
          </h2>
          <div
            className={`border-t-[1px] border-[grey] ${
              activeComponentIndex === 1 ? "w-full" : "hidden"
            }`}
          />
          {activeComponentIndex === 1 && (
            <div className="w-full">
              <Autocheck />
            </div>
          )}
        </div>
        <div className="flex-1">
          <h2
            style={{
              backgroundColor:
                activeComponentIndex === 2 ? "red" : "transparent",
              cursor: "pointer",
            }}
            className="text-white uppercase text-3xl font-bold p-7 rounded-lg"
            onClick={() => handleClick(2)}
          >
            Fleet services
          </h2>
          <div
            className={`border-t-[1px] border-[grey] ${
              activeComponentIndex === 2 ? "w-full" : "hidden"
            }`}
          />
          {activeComponentIndex === 2 && (
            <div className="w-full">
              <PerformanceCheck />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutFaqs;
