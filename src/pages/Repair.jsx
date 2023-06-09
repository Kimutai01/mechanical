import React from "react";
import Autorepair from "../components/all/Autorepair";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Repair = () => {
  return (
    <div>
      <div className="bg-[#ff4d23] h-[400px]">
        <h1 className="flex text-center  items-center justify-center h-full text-white text-5xl font-bold uppercase">
          Auto Repair
        </h1>
      </div>
      <Autorepair />
      <Contact />
      <Footer />
    </div>
  );
};

export default Repair;
