import React from "react";
import {
  AiFillPhone,
  AiOutlineArrowRight,
  AiOutlineCalendar,
} from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

const Offices = () => {
  return (
    <div className="bg-[#000] grid grid-cols-1 md:grid-cols-3 gap-10 pt-20 px-5 md:px-32 pb-20">
      <div className="bg-[#161616] mt-10  rounded-lg p-8">
        <h1 className="uppercase text-white font-bold text-2xl">
          Nairobi Office
        </h1>
        <div className="mt-10 flex gap-5">
          <IoLocationSharp color="#ff4d24" size="1.5rem" />
          <h1 className="text-white flex flex-col">
            <a
              href="https://goo.gl/maps/7XJqJqE4YrXZ6Y5r9"
              className="text-white hover:text-[grey]"
            >
              123, Main Street, Nairobi, Kenya, 00100
            </a>
          </h1>
        </div>
        <div className="flex mt-3 gap-5">
          <AiFillPhone color="#ff4d24" size="1.5rem" />
          <h1 className="text-white">
            <a href="tel:123-456-7890" className="text-white hover:text-[grey]">
              123-456-7890
            </a>
          </h1>
        </div>
        <div className="mt-3 flex items-center gap-5">
          <IoMdMail color="#ff4d24" size="1.5rem" />
          <h1 className="text-lg font-medium">
            <a
              href="mailto:mechanic@eg.com"
              className="text-white hover:text-[grey]"
            >
              mechanic@gmail.com
            </a>
          </h1>
        </div>

        <div className="flex items-center mt-3 gap-5">
          <div className="">
            <AiOutlineCalendar size={25} color="#ff4d24" />
          </div>
          <div>
            <h1 className="text-white text-md">Mon-Sat: 5 A.M. – 10 P.M.</h1>
          </div>
        </div>

        <p className="flex font-medium mt-5 gap-3 items-center text-[#ff4d23]">
          Find us on map{" "}
          <span>
            <AiOutlineArrowRight />
          </span>
        </p>
      </div>
      <div className="bg-[#161616] mt-10  rounded-lg p-8">
        <h1 className="uppercase text-white font-bold text-2xl">
          Nairobi Office
        </h1>
        <div className="mt-10 flex gap-5">
          <IoLocationSharp color="#ff4d24" size="1.5rem" />
          <h1 className="text-white flex flex-col">
            <a
              href="https://goo.gl/maps/7XJqJqE4YrXZ6Y5r9"
              className="text-white hover:text-[grey]"
            >
              123, Main Street, Nairobi, Kenya, 00100
            </a>
          </h1>
        </div>
        <div className="flex mt-3 gap-5">
          <AiFillPhone color="#ff4d24" size="1.5rem" />
          <h1 className="text-white">
            <a href="tel:123-456-7890" className="text-white hover:text-[grey]">
              123-456-7890
            </a>
          </h1>
        </div>
        <div className="mt-3 flex items-center gap-5">
          <IoMdMail color="#ff4d24" size="1.5rem" />
          <h1 className="text-lg font-medium">
            <a
              href="mailto:mechanic@eg.com"
              className="text-white hover:text-[grey]"
            >
              mechanic@gmail.com
            </a>
          </h1>
        </div>

        <div className="flex items-center mt-3 gap-5">
          <div className="">
            <AiOutlineCalendar size={25} color="#ff4d24" />
          </div>
          <div>
            <h1 className="text-white text-md">Mon-Sat: 5 A.M. – 10 P.M.</h1>
          </div>
        </div>

        <p className="flex font-medium mt-5 gap-3 items-center text-[#ff4d23]">
          Find us on map{" "}
          <span>
            <AiOutlineArrowRight />
          </span>
        </p>
      </div>
      <div className="bg-[#161616] mt-10  rounded-lg p-8">
        <h1 className="uppercase text-white font-bold text-2xl">
          Nairobi Office
        </h1>
        <div className="mt-10 flex gap-5">
          <IoLocationSharp color="#ff4d24" size="1.5rem" />
          <h1 className="text-white flex flex-col">
            <a
              href="https://goo.gl/maps/7XJqJqE4YrXZ6Y5r9"
              className="text-white hover:text-[grey]"
            >
              123, Main Street, Nairobi, Kenya, 00100
            </a>
          </h1>
        </div>
        <div className="flex mt-3 gap-5">
          <AiFillPhone color="#ff4d24" size="1.5rem" />
          <h1 className="text-white">
            <a href="tel:123-456-7890" className="text-white hover:text-[grey]">
              123-456-7890
            </a>
          </h1>
        </div>
        <div className="mt-3 flex items-center gap-5">
          <IoMdMail color="#ff4d24" size="1.5rem" />
          <h1 className="text-lg font-medium">
            <a
              href="mailto:mechanic@eg.com"
              className="text-white hover:text-[grey]"
            >
              mechanic@gmail.com
            </a>
          </h1>
        </div>

        <div className="flex items-center mt-3 gap-5">
          <div className="">
            <AiOutlineCalendar size={25} color="#ff4d24" />
          </div>
          <div>
            <h1 className="text-white text-md">Mon-Sat: 5 A.M. – 10 P.M.</h1>
          </div>
        </div>

        <p className="flex font-medium mt-5 gap-3 items-center text-[#ff4d23]">
          Find us on map{" "}
          <span>
            <AiOutlineArrowRight />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Offices;
