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
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <div className="bg-[#000] flex flex-col md:flex-row pt-20 px-5 md:px-32 pb-20 gap-16">
      <ContactForm />
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
