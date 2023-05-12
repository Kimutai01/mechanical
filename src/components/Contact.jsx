import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
const Contact = () => {
  return (
    <div className="bg-[#000] flex flex-col md:flex-row pt-20 px-32 pb-20 gap-16">
      <div className="bg-[#161616] md:w-[85%] px-10 rounded-lg pb-10">
        <div className="flex flex-col md:flex-row mt-10 gap-5">
          <div className="flex flex-col md:w-[50%]">
            <label for="name" className="text-white mb-3">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name.."
              className="bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#ff4d24]"
            />
          </div>
          <div className="flex flex-col md:w-[50%]">
            <label for="phone" className="text-white mb-3">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Your phone number.."
              className="bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#ff4d24]"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-10 gap-5">
          <div className="flex flex-col md:w-[50%]">
            <label for="car" className="text-white mb-3">
              Car
            </label>
            <input
              type="text"
              id="car"
              name="name"
              placeholder="Enter your car model.."
              className="bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#ff4d24]"
            />
          </div>
          <div className="flex flex-col md:w-[50%]">
            <label for="email" className="text-white mb-3">
              Email Address
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Your email address.."
              className="bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#ff4d24]"
            />
          </div>
        </div>
        <div className="flex flex-col mt-10">
          <label for="subject" className="text-white mb-3">
            Message
          </label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            height="350px"
            className="bg-[#161616] text-white border-[grey] border-[1px] rounded-lg p-2 font-medium focus:outline-none focus:border-[#ff4d24]"
          ></textarea>
        </div>

        <button className="why-btn flex items-center mt-10 mb-10 ">
          <h1>Get Appointment now</h1>
        </button>
      </div>
      <div>
        <h1 className="text-white text-4xl font-bold uppercase">
          Get a free appointment
        </h1>
        <div className="mt-10 flex gap-5">
          <AiFillInstagram color="#ff4d24" size="1.5rem" />
          <AiFillFacebook color="#ff4d24" size="1.5rem" />
          <FaTwitter color="#ff4d24" size="1.5rem" />
        </div>
        <div className="mt-10 flex items-center gap-5">
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
        <div className="mt-10 flex gap-5">
          <IoLocationSharp color="#ff4d24" size="1.5rem" />
          <h1 className="text-white flex flex-col">
            <a
              href="https://goo.gl/maps/7XJqJqE4YrXZ6Y5r9"
              className="text-white hover:text-[grey]"
            >
              123, Main Street, Nairobi, Kenya, 00100
            </a>
            <a
              href="https://goo.gl/maps/7XJqJqE4YrXZ6Y5r9"
              className="text-white mt-3 hover:text-[grey]"
            >
              456, Main Street, Nairobi, Kenya, 00100
            </a>
          </h1>
        </div>
        <div className="flex mt-10 gap-5">
          <AiFillPhone color="#ff4d24" size="1.5rem" />
          <h1 className="text-white">
            <a href="tel:123-456-7890" className="text-white hover:text-[grey]">
              123-456-7890
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
