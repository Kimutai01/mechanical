import React from "react";
import PerformanceDetail from "../components/all/PerformanceDetail";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Performance = () => {
  return (
    <>
      <div className="bg-[#ff4d23] h-[400px]">
        <h1 className="flex text-center  items-center justify-center h-full text-white text-5xl font-bold uppercase">
          Performance Check
        </h1>
      </div>
      <PerformanceDetail />
      <Contact />
      <Footer />
    </>
  );
};

export default Performance;
