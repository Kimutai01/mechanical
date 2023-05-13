import React from "react";
import service from "../../assets/schedule.jpg";
import detailing from "../../assets/detailing.jpg";
import engine from "../../assets/engine.jpg";
import paint from "../../assets/paint.jpg";

const ServiceOffered = () => {
  return (
    <div className="bg-[#161616] pt-28">
      <h1 className="text-white w-[70%] text-3xl md:w-[40%] mx-auto text-center font-bold md:text-4xl">
        HIGH-QUALITY WORKMANSHIP AT A FAIR PRICE
      </h1>
      <p className="text-[grey] md:mx-auto mx-3 md:w-[35%] text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
        ornare nunc tellus fermentum, amet curabitur lacus.
      </p>
      <div className="grid md:grid-cols-3 md:gap-8 md:mx-24 p-5  grid-cols-1 gap-5 pt-5 mt-10">
        <div className="bg-[#000] rounded-lg">
          <img src={service} alt="" className="w-full rounded-t-lg" />
          <div className="p-5">
            <h1 className="uppercase text-[#fff] font-bold text-2xl">
              Schedule
            </h1>
            <p className="text-[grey] font-medium">
              Diam maecenas sed enim ut sem viverra scelerisque mauris.
            </p>
            <button className="text-[#ff4d23] underline mt-4">
              learn more
            </button>
          </div>
        </div>

        <div className="bg-[#000] rounded-lg">
          <img src={engine} alt="" className="w-full rounded-t-lg" />
          <div className="p-5">
            <h1 className="uppercase text-[#fff] font-bold text-2xl">Engine</h1>
            <p className="text-[grey] font-medium">
              Diam maecenas sed enim ut sem viverra scelerisque mauris.
            </p>
            <button className="text-[#ff4d23] underline mt-4">
              learn more
            </button>
          </div>
        </div>

        <div className="bg-[#000] rounded-lg">
          <img src={detailing} alt="" className="w-full rounded-t-lg" />
          <div className="p-5">
            <h1 className="uppercase text-[#fff] font-bold text-2xl">
              Detailing
            </h1>
            <p className="text-[grey] font-medium">
              Diam maecenas sed enim ut sem viverra scelerisque mauris.
            </p>
            <button className="text-[#ff4d23] underline mt-4">
              learn more
            </button>
          </div>
        </div>

        <div className="bg-[#000] rounded-lg">
          <img src={paint} alt="" className="w-full rounded-t-lg" />
          <div className="p-5">
            <h1 className="uppercase text-[#fff] font-bold text-2xl">
              Painting
            </h1>
            <p className="text-[grey] font-medium">
              Diam maecenas sed enim ut sem viverra scelerisque mauris.
            </p>
            <button className="text-[#ff4d23] underline mt-4">
              learn more
            </button>
          </div>
        </div>

        <div className="bg-[#000] rounded-lg">
          <img src={paint} alt="" className="w-full rounded-t-lg" />
          <div className="p-5">
            <h1 className="uppercase text-[#fff] font-bold text-2xl">
              Painting
            </h1>
            <p className="text-[grey] font-medium">
              Diam maecenas sed enim ut sem viverra scelerisque mauris.
            </p>
            <button className="text-[#ff4d23] underline mt-4">
              learn more
            </button>
          </div>
        </div>

        <div className="bg-[#000] rounded-lg">
          <img src={paint} alt="" className="w-full rounded-t-lg" />
          <div className="p-5">
            <h1 className="uppercase text-[#fff] font-bold text-2xl">
              Painting
            </h1>
            <p className="text-[grey] font-medium">
              Diam maecenas sed enim ut sem viverra scelerisque mauris.
            </p>
            <button className="text-[#ff4d23] underline mt-4">
              learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOffered;
