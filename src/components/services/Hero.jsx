import React from "react";

const Hero = ({ heading }) => {
  return (
    <>
      <div className="service-background">
        <h1 className="flex align-middle uppercase justify-center items-center h-full text-6xl font-bold text-white">
          {heading}
        </h1>
      </div>
    </>
  );
};

export default Hero;
