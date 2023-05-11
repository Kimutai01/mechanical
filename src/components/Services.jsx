import React from "react";
import mot from "../assets/8.svg";
import service from "../assets/schedule.jpg";
import detailing from "../assets/detailing.jpg";
import engine from "../assets/engine.jpg";

const ServicesOffered = () => {
  return (
    <div>
      <div className="bg-[#000]">
        <h1>Services</h1>
        <div className="mx-60 grid md:grid-cols-3 md:gap-32 md:mx-36 p-5  grid-cols-1 gap-5 pt-5 ">
          <div className=" flex flex-col justify-center items-center text-center">
            <div class="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-[#802714] to-[#ff4d23] animate-pulse-slow">
              <div class="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-[#cb3f1d] to-[#ff4d23] animate-pulse-slow">
                <div class="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-[#ea4821] to-[#ff4d23] animate-pulse-slow">
                  <h1 class="text-white">1</h1>
                </div>
              </div>
            </div>

            <h1 className="text-[#ff4d23] text-3xl font-bold">INSPECTION</h1>
            <p className="text-[grey]">
              We can provide professional servicing and maintenance work with no
              loss of manufacturer warranty coverage.
            </p>
          </div>

          <div className=" flex flex-col justify-center items-center text-center">
            <div class="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-[#802714] to-[#ff4d23] animate-pulse-slow">
              <div class="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-[#cb3f1d] to-[#ff4d23] animate-pulse-slow">
                <div class="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-[#ea4821] to-[#ff4d23] animate-pulse-slow">
                  <h1 class="text-white">2</h1>
                </div>
              </div>
            </div>

            <h1 className="text-[#ff4d23] text-3xl font-bold">DIAGNOSTIC</h1>
            <p className="text-[grey]">
              We can provide professional servicing and maintenance work with no
              loss of manufacturer warranty coverage.
            </p>
          </div>

          <div className=" flex flex-col justify-center items-center text-center">
            <div class="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-[#802714] to-[#ff4d23] animate-pulse-slow">
              <div class="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-[#cb3f1d] to-[#ff4d23] animate-pulse-slow">
                <div class="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-[#ea4821] to-[#ff4d23] animate-pulse-slow">
                  <h1 class="text-white">1</h1>
                </div>
              </div>
            </div>

            <h1 className="text-[#ff4d23] text-3xl font-bold">UPGRADES</h1>
            <p className="text-[grey]">
              We can provide professional servicing and maintenance work with no
              loss of manufacturer warranty coverage.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 md:gap-8 md:mx-24 p-5  grid-cols-1 gap-5 pt-5 mt-10">
          <div className="bg-[#161616] rounded-b-lg">
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

          <div className="bg-[#161616] rounded-b-lg">
            <img src={engine} alt="" className="w-full rounded-t-lg" />
            <div className="p-5">
              <h1 className="uppercase text-[#fff] font-bold text-2xl">
                Engine
              </h1>
              <p className="text-[grey] font-medium">
                Diam maecenas sed enim ut sem viverra scelerisque mauris.
              </p>
              <button className="text-[#ff4d23] underline mt-4">
                learn more
              </button>
            </div>
          </div>

          <div className="bg-[#161616] rounded-b-lg">
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

          <div className="bg-[#161616] rounded-b-lg">
            <img src={detailing} alt="" className="w-full rounded-t-lg" />
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
    </div>
  );
};

export default ServicesOffered;
