import React from "react";
import engine from "../../assets/hertz.png";
import toyota from "../../assets/toyota.png";
import merc from "../../assets/merc.png";
import retronic from "../../assets/retronic.png";

const Patners = () => {
  return (
    <div className="bg-[#000] px-5 pt-10 md:px-32 md:pt-20 md:flex md:justify-between md:items-center pb-10 grid grid-cols-2">
      <div>
        <img
          src={toyota}
          alt=""
          className="hover:opacity-50 transition duration-500 ease-in-out cursor-pointer"
        />
      </div>
      <div>
        <img
          src={merc}
          alt=""
          className="hover:opacity-50 transition duration-500 ease-in-out cursor-pointer"
        />
      </div>
      <div>
        <img
          src={engine}
          alt=""
          className="hover:opacity-50 transition duration-500 ease-in-out cursor-pointer"
        />
      </div>
      <div>
        <img
          src={retronic}
          alt=""
          className="hover:opacity-50 transition duration-500 ease-in-out cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Patners;
