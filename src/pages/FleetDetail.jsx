import React from "react";
import Fleet from "../components/all/Fleet";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const FleetDetail = () => {
  return (
    <div>
      {" "}
      <div className="bg-[#ff4d23] h-[400px]">
        <h1 className="flex text-center  items-center justify-center h-full text-white text-5xl font-bold uppercase">
          Fleet Services
        </h1>
      </div>
      <Fleet />
      <Contact />
      <Footer />
    </div>
  );
};

export default FleetDetail;
