import React from "react";
import mot from "../assets/8.svg";

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
                  <h1 class="text-white">1</h1>
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
      </div>
    </div>
  );
};

export default ServicesOffered;
