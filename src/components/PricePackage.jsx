import React from "react";
import { TiTick } from "react-icons/ti";
import { BsArrowRightShort } from "react-icons/bs";

const PricePackage = () => {
  return (
    <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 md:px-32 py-10">
      <div className="bg-[#161616] rounded-lg p-5">
        <p className="text-[grey]">Starter price</p>
        <h1 className="flex gap-3 mt-4">
          <p className="text-5xl font-bold">$138</p>
          <p className="font-medium text-[grey] line-through text-2xl">$300</p>
        </h1>
        <div className="flex items-center mt-10">
          <span className="bg-[#46221b] h-7 w-7 rounded-full">
            <TiTick className="mt-1 ml-1" size={20} color="red" />
          </span>
          <p className="ml-2">Radiator Flush</p>
        </div>
        <div className="flex items-center mt-4">
          <span className="bg-[#46221b] h-7 w-7 rounded-full">
            <TiTick className="mt-1 ml-1" size={20} color="red" />
          </span>
          <p className="ml-2">Transmission Flush</p>
        </div>
        <div className="flex items-center mt-4">
          <span className="bg-[#46221b] h-7 w-7 rounded-full">
            <TiTick className="mt-1 ml-1" size={20} color="red" />
          </span>
          <p className="ml-2">Brake Fluid Flush</p>
        </div>
        <div className="flex items-center mt-4">
          <span className="bg-[#46221b] h-7 w-7 rounded-full">
            <TiTick className="mt-1 ml-1" size={20} color="red" />
          </span>
          <p className="ml-2">Batteries</p>
        </div>
        <button className="home-btn flex items-center mt-10 mb-10 group">
          <h1>Get started</h1>
          <div className="rounded-full bg-[#8e8e8e] font-bold group-hover:bg-[#ff866c] ">
            <BsArrowRightShort size={25} className="text-[white]" />
          </div>
        </button>
      </div>

      <div className="bg-[#4d190d] rounded-lg p-5 border-[1px] border-[#ff4d24]">
        <p className="text-[grey]">Regular price</p>
        <h1 className="flex gap-3 mt-4">
          <p className="text-5xl font-bold">$238</p>
          <p className="font-medium text-[grey] line-through text-2xl">$499</p>
        </h1>
        <div className="flex items-center mt-10">
          <span className="bg-[#46221b] h-7 w-7 rounded-full">
            <TiTick className="mt-1 ml-1" size={20} color="red" />
          </span>
          <p className="ml-2">Radiator Flush</p>
        </div>
        <div className="flex items-center mt-4">
          <span className="bg-[#46221b] h-7 w-7 rounded-full">
            <TiTick className="mt-1 ml-1" size={20} color="red" />
          </span>
          <p className="ml-2">Transmission Flush</p>
        </div>
        <div className="flex items-center mt-4">
          <span className="bg-[#46221b] h-7 w-7 rounded-full">
            <TiTick className="mt-1 ml-1" size={20} color="red" />
          </span>
          <p className="ml-2">Brake Fluid Flush</p>
        </div>
        <div className="flex items-center mt-4">
          <span className="bg-[#46221b] h-7 w-7 rounded-full">
            <TiTick className="mt-1 ml-1" size={20} color="red" />
          </span>
          <p className="ml-2">Batteries</p>
        </div>
        <button className="why-btn flex items-center mt-10 mb-10 ">
          <h1>Get started</h1>
          <div className="rounded-full bg-[#ff866c] hover:bg-[#8e8e8e] font-bold">
            <BsArrowRightShort size={25} className="text-[white]" />
          </div>
        </button>
      </div>

      <div className="bg-[#161616] rounded-lg p-5">
        <p className="text-[grey]">Advanced price</p>
        <h1 className="flex gap-3 mt-4">
          <p className="text-5xl font-bold">$338</p>
          <p className="font-medium text-[grey] line-through text-2xl">$699</p>
        </h1>
        <div className="flex items-center mt-10">
          <span className="bg-[#46221b] h-7 w-7 rounded-full">
            <TiTick className="mt-1 ml-1" size={20} color="red" />
          </span>
          <p className="ml-2">Radiator Flush</p>
        </div>
        <div className="flex items-center mt-4">
          <span className="bg-[#46221b] h-7 w-7 rounded-full">
            <TiTick className="mt-1 ml-1" size={20} color="red" />
          </span>
          <p className="ml-2">Transmission Flush</p>
        </div>
        <div className="flex items-center mt-4">
          <span className="bg-[#46221b] h-7 w-7 rounded-full">
            <TiTick className="mt-1 ml-1" size={20} color="red" />
          </span>
          <p className="ml-2">Brake Fluid Flush</p>
        </div>
        <div className="flex items-center mt-4">
          <span className="bg-[#46221b] h-7 w-7 rounded-full">
            <TiTick className="mt-1 ml-1" size={20} color="red" />
          </span>
          <p className="ml-2">Batteries</p>
        </div>
        <button className="home-btn flex items-center mt-10 mb-10 group">
          <h1>Get started</h1>
          <div className="rounded-full bg-[#8e8e8e] hover:bg-[#ff866c] font-bold group-hover:bg-[#ff866c] ">
            <BsArrowRightShort size={25} className="text-[white]" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default PricePackage;
