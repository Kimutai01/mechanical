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
const Autorepair = () => {
  return (
    <div className="flex flex-col px-5 pb-10 md:flex-row bg-[#000] gap-10 pt-36 md:px-32">
      <div className="bg-[#000] md:w-[70%]">
        <h1 className="text-white text-4xl font-bold pt-10 w-[70%]">
          TYPES OF CAR SERVICES
        </h1>
        <p className="text-lg text-[grey]">
          When it comes to car services, there are a few different types that
          you can choose from. Each type of service has its own benefits and
          drawbacks, so it’s important to choose the right one for your needs.
          Here are a few of the most common types of car services:
        </p>

        <p className="text-lg text-[grey] pt-10">
          Oil Changes: One of the most basic, but still important, car services
          is an oil change. This involves draining the old oil from your engine
          and replacing it with new oil. It’s important to get your oil changed
          regularly in order to keep your engine running smoothly.
        </p>
        <p className="text-lg text-[grey] pt-10">
          Tire Rotations: Another common car service is a tire rotation. This is
          when you swap out your tires so that they wear evenly. Tire rotations
          are important because they help to extend the life of your tires and
          prevent flat spots from forming.
        </p>

        <p className="text-lg text-[grey] pt-10">
          Brake Service: If you notice that your brakes are starting to feel
          spongy or unresponsive, it’s time for a brake service. This involves
          checking your brake pads and discs, and replacing them if necessary.
          Brake service is important for keeping your car safe to drive.
        </p>

        <h1 className="text-white text-4xl font-bold pt-10 w-[70%]">
          WHY YOU SHOULD GET YOUR CAR SERVICED
        </h1>
        <p className="text-lg text-[grey] pt-10">
          Your car is one of your most important possessions, so it’s important
          to take care of it. One way to do that is by getting regular car
          servicing.
        </p>
        <p className="text-lg text-[grey] pt-10">
          Car servicing is a preventive measure that helps keep your vehicle
          running smoothly and efficiently. It also helps identify potential
          problems early on, before they become more serious and expensive to
          fix.
        </p>

        <p className="text-lg text-[grey] pt-10">
          There are many benefits to getting your car serviced regularly. Here
          are just a few:
        </p>

        <p className="text-lg text-[grey] pt-10">
          1. Improved performance and fuel efficiency. Regular servicing can
          help improve your car’s performance and fuel efficiency. This is
          because any potential issues with your engine, tires, or other
          components will be identified and fixed during servicing.
        </p>

        <p className="text-lg text-[grey] pt-5">
          2. Extended lifespan. Getting your car serviced regularly can help
          extend its lifespan by keeping it in good condition. This means you
          won’t have to replace it as often, which can save you money in the
          long run.
        </p>

        <p className="text-lg text-[grey] pt-5">
          3. Safer driving. Servicing can also help make your car safer to
          drive. This is because any safety issues will be identified and fixed
          during servicing, making it less likely for you to be involved in an
          accident.
        </p>
        <p className="text-lg text-[grey]">
          <p className="text-lg text-[grey] pt-5">
            4. Peace of mind. Knowing that your car is being
          </p>
        </p>
        <h1 className="text-white text-4xl font-bold pt-10  w-[70%]">
          WHEN TO GET YOUR CAR SERVICED
        </h1>
        <p className="text-lg text-[grey] pt-5">
          It's important to stay on top of your car's maintenance and service
          schedule. But how do you know when it's time to bring your car in for
          a tune-up?
        </p>
        <p className="text-lg text-[grey] pt-5">
          Here are a few general guidelines to help you know when to schedule
          car service
        </p>
        <div className="flex items-center mt-5">
          <span className="bg-[#46221b] h-7 w-7 rounded-full">
            <TiTick className="mt-1 ml-1" size={20} color="red" />
          </span>
          <p className="ml-2 text-lg text-[grey]">
            Every 3,000 miles or every 3 months, whichever comes first
          </p>
        </div>

        <div className="flex items-center mt-3">
          <span className="bg-[#46221b] h-7 w-7 rounded-full">
            <TiTick className="mt-1 ml-1" size={20} color="red" />
          </span>
          <p className="ml-2 text-lg text-[grey]">
            After every major road trip
          </p>
        </div>

        <div className="flex items-center mt-3">
          <span className="bg-[#46221b] h-7 w-7 rounded-full">
            <TiTick className="mt-1 ml-1" size={20} color="red" />
          </span>
          <p className="ml-2 text-lg text-[grey]">
            When you notice something isn't working properly
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

export default Autorepair;
