import React, { useState } from "react";
import PerformanceCheck from "./PerformanceCheck";
import Autocheck from "./Autocheck";
import FleetServices from "./FleetServices";

const AboutFaqs = () => {
  const [activeComponent, setActiveComponent] = useState("performance check");

  return (
    <div className="bg-[#161616] md:w-[85%] absolute rounded-xl md:mx-32 mt-[-100px]">
      <div className="flex flex-col md:flex-row justify-between md:border-b md:border-[grey] ">
        <div
          onClick={() => setActiveComponent("performance check")}
          className="border-b border-[grey] md:border-b "
        >
          {activeComponent === "performance check" ? (
            <h1 className="bg-[#ff4d23] text-white text-3xl p-8 rounded-xl uppercase font-bold">
              Performance check
            </h1>
          ) : (
            <h1 className="text-white p-8 text-3xl font-bold uppercase">
              Performance check
            </h1>
          )}
        </div>
        <div
          onClick={() => setActiveComponent("autocheck")}
          className="border-b border-[grey] md:border-b "
        >
          {activeComponent === "autocheck" ? (
            <h1 className="bg-[#ff4d23] text-white text-3xl p-8 rounded-xl uppercase font-bold">
              Auto Maintainance
            </h1>
          ) : (
            <h1 className="text-white p-8 text-3xl font-bold uppercase">
              Auto Maintainance
            </h1>
          )}
        </div>

        <div onClick={() => setActiveComponent("fleet services")}>
          {activeComponent === "fleet services" ? (
            <h1 className="bg-[#ff4d23] text-white text-3xl p-8 rounded-xl uppercase font-bold">
              Fleet services
            </h1>
          ) : (
            <h1 className="text-white p-8 text-3xl font-bold uppercase">
              Fleet services
            </h1>
          )}
        </div>
      </div>

      {activeComponent === "performance check" && <PerformanceCheck />}
      {activeComponent === "autocheck" && <Autocheck />}
      {activeComponent === "fleet services" && <FleetServices />}
    </div>
  );
};

export default AboutFaqs;
