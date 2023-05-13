import React from "react";
import { TiTick } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { BsArrowRightShort } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
const PerformanceDetail = () => {
  return (
    <div className="flex flex-col px-5 pb-10 md:flex-row bg-[#000] gap-10 pt-36 md:px-32">
      <div className="bg-[#000] md:w-[70%]">
        <p className="text-lg text-[grey]">
          A performance check is a service offered by many car care facilities.
          It is a series of tests and checks performed on a car to ensure that
          it is running at its best. The checks can include engine diagnostics,
          suspension and steering checks, wheel alignment, and more.
        </p>
        <h1 className="text-white text-4xl font-bold pt-10 w-[70%]">
          WHAT ARE THE BENEFITS OF A PERFORMANCE CHECK?
        </h1>
        <p className="text-lg text-[grey] pt-10">
          When you get a performance check on your car, you're essentially
          getting a tune-up. This means that all of the systems in your car are
          checked and adjusted to ensure optimal performance. This can include
          things like the fuel mixture, ignition timing, and more.
        </p>
        <p className="text-lg text-[grey] pt-10">
          A performance check is a great way to keep your car running smoothly
          and efficiently. It can also help to improve your gas mileage. Plus,
          it's a good opportunity to have a professional look over your car and
          catch any potential problems before they become serious.
        </p>
        <img
          src="https://assets.website-files.com/633148302ffcde4d1f5b7e89/633ac9561867532fd9ebb184_Performance%20check.jpg"
          alt=""
          className="w-full pt-10"
        />
        <h1 className="text-white text-4xl font-bold pt-10 w-[70%]">
          HOW OFTEN SHOULD I GET A PERFORMANCE CHECK?
        </h1>
        <p className="text-lg text-[grey] pt-10">
          It is important to keep up with the performance of your car. Depending
          on how often you drive and the conditions you typically drive in, you
          should get a performance check at least once a year. You can take your
          car to a automotive specialist to have it checked, or do it yourself
          if you know what to look for.
        </p>
        <p className="text-lg text-[grey] pt-10">
          Some things you should check during a performance check are the oil
          level and condition, the air filter, the tires, the brakes, the
          suspension, and the engine. These are all important parts of your car
          that can affect its performance. Making sure they are in good
          condition will help keep your car running smoothly and efficiently.
        </p>
        <h1 className="text-white text-4xl font-bold pt-10  w-[70%]">
          WHAT DOES A PERFORMANCE CHECK INCLUDE?
        </h1>
        <p className="text-lg text-[grey] pt-5">
          A performance check for your car can include a variety of services,
          depending on the needs of your vehicle. Some common services that may
          be performed during a performance check include:
        </p>
        <div className="flex items-center mt-5">
          <span className="bg-[#46221b] h-7 w-7 rounded-full">
            <TiTick className="mt-1 ml-1" size={20} color="red" />
          </span>
          <p className="ml-2 text-lg text-[grey]">
            Checking and replenishing fluid levels
          </p>
        </div>

        <div className="flex items-center mt-3">
          <span className="bg-[#46221b] h-7 w-7 rounded-full">
            <TiTick className="mt-1 ml-1" size={20} color="red" />
          </span>
          <p className="ml-2 text-lg text-[grey]">
            Inspecting brakes and tires
          </p>
        </div>

        <div className="flex items-center mt-3">
          <span className="bg-[#46221b] h-7 w-7 rounded-full">
            <TiTick className="mt-1 ml-1" size={20} color="red" />
          </span>
          <p className="ml-2 text-lg text-[grey]">
            Checking the battery and charging system
          </p>
        </div>

        <div className="flex items-center mt-3">
          <span className="bg-[#46221b] h-7 w-7 rounded-full">
            <TiTick className="mt-1 ml-1" size={20} color="red" />
          </span>
          <p className="ml-2 text-lg text-[grey]">
            Testing the engine's ignition system
          </p>
        </div>

        <div className="flex items-center mt-3">
          <span className="bg-[#46221b] h-7 w-7 rounded-full">
            <TiTick className="mt-1 ml-1" size={20} color="red" />
          </span>
          <p className="ml-2 text-lg text-[grey]">
            Inspecting the air filter and fuel system
          </p>
        </div>

        <div className="flex items-center mt-3">
          <span className="bg-[#46221b] h-7 w-7 rounded-full">
            <TiTick className="mt-1 ml-1" size={20} color="red" />
          </span>
          <p className="ml-2 text-lg text-[grey]">
            Fuel Filter replacement Seal full setup cleaned
          </p>
        </div>
      </div>
      <div className="md:w-[30%] md:sticky md:top-16 md:h-screen">
        <div className="bg-[#161616]  rounded-lg p-8">
          <h1 className="text-white font-bold text-2xl">
            HAVE ADDITIONAL QUESTIONS?
          </h1>
          <div className="mt-5 flex gap-2">
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
          <div className="flex mt-10 gap-2">
            <AiFillPhone color="#ff4d24" size="1.5rem" />
            <h1 className="text-white">
              <a
                href="tel:123-456-7890"
                className="text-[#ff4d23] font-semibold hover:text-[grey]"
              >
                123-456-7890
              </a>
            </h1>
          </div>
          <div className="mt-5 flex items-center gap-2">
            <IoMdMail color="#ff4d24" size="1.5rem" />
            <h1 className="text-lg font-medium">
              <a
                href="mailto:mechanic@eg.com"
                className="text-[#ff4d23] font-semibold hover:text-[grey]"
              >
                mechanic@gmail.com
              </a>
            </h1>
          </div>
          <button className="why-btn flex items-center mt-10 mb-10 ">
            <h1>Contact us</h1>
            <div className="rounded-full bg-[#ff866c] hover:bg-[#8e8e8e] font-bold">
              <BsArrowRightShort size={25} className="text-[white]" />
            </div>
          </button>
        </div>
        <div className="bg-[#161616] mt-10  rounded-lg p-8">
          <h1 className="uppercase text-white font-bold text-2xl">
            Service hours
          </h1>
          <div className="flex gap-7">
            <div className="flex items-center gap-2">
              <AiOutlineCalendar size={25} color="#ff4d24" />
              <h1 className="text-[#ff4d24] text-md font-semibold">
                Monday - Friday
              </h1>
            </div>
            <div>
              <h1 className="text-[grey] text-md">8AM - 9PM</h1>
            </div>
          </div>
          <div className="flex mt-5 gap-20">
            <div className="flex items-center gap-2">
              <AiOutlineCalendar size={25} color="#ff4d24" />
              <h1 className="text-[#ff4d24] text-md font-semibold">Saturday</h1>
            </div>
            <div>
              <h1 className="text-[grey] text-md">8AM - 7PM</h1>
            </div>
          </div>
          <div className="flex mt-5 gap-24">
            <div className="flex items-center gap-2">
              <AiOutlineCalendar size={25} color="#ff4d24" />
              <h1 className="text-[#ff4d24] text-md font-semibold">Sunday</h1>
            </div>
            <div>
              <h1 className="text-[grey] text-md">8AM - 2PM</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceDetail;
