import React from "react";
import PricePackage from "./PricePackage";

const Pricing = () => {
  return (
    <div className="bg-[#000]  pt-[650px] md:pt-96">
      <h1 className="text-white font-bold text-4xl text-center uppercase">
        Choose your pack
      </h1>
      <p className="text-[grey] w-[35%] text-center font-medium mx-auto mt-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
        ornare nunc tellus fermentum, amet curabitur lacus.
      </p>
      <PricePackage />
    </div>
  );
};

export default Pricing;
