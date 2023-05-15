import React from "react";
import {
  AiFillPhone,
  AiOutlineArrowRight,
  AiOutlineCalendar,
} from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward, IoMdMail } from "react-icons/io";
import { Pagination, Scrollbar } from "swiper";
import { IoLocationSharp } from "react-icons/io5";
import ContactForm from "./ContactForm";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";

const Offices = () => {
  const swipe = () => {
    const swiper = document.querySelector(".swiper-container").swiper;
    swiper.slideNext();
  };

  const swipeBack = () => {
    const swiper = document.querySelector(".swiper-container").swiper;
    swiper.slidePrev();
  };

  const sliderOne = (
    <div>
      <h1 className="text-white text-xl uppercase font-bold">Nairobi</h1>
      <div className="mt-3 flex gap-5">
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
    </div>
  );

  const sliderTwo = (
    <div>
      <h1 className="text-white text-xl uppercase font-bold">Nairobi</h1>
      <div className="mt-3 flex gap-5">
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
    </div>
  );

  const sliderThree = (
    <div>
      <h1 className="text-white text-xl uppercase font-bold">Nairobi</h1>
      <div className="mt-3 flex gap-5">
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
    </div>
  );

  return (
    <div className="bg-[#000] pb-32">
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
              <a
                href="tel:123-456-7890"
                className="text-white hover:text-[grey]"
              >
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
              <a
                href="tel:123-456-7890"
                className="text-white hover:text-[grey]"
              >
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
              <a
                href="tel:123-456-7890"
                className="text-white hover:text-[grey]"
              >
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
      <div className=" px-5 md:px-32 pt-5 md:pt-10 ">
        <img
          src="https://assets.website-files.com/633148302ffcde12c15b7e7d/6336b759ab720c0998bbc40a_Map.jpg"
          alt=""
          className="w-full rounded-lg"
        />
      </div>

      <div className="flex md:flex-row flex-col  mt-24  gap-10 ">
        <div>
          <div className="md:pl-32 px-5 border-[grey]">
            <h2 className="upprecase font-semibold text-lg text-[red]">
              GET IN TOUCH
            </h2>
            <h1 className="text-white font-bold pt-5 w-[90%] text-3xl">
              CONTACT OUR SUPPORT TEAM
            </h1>
            <p className="text-[grey] font-medium text-lg mt-5">
              If you are looking for a local workshop then you can visit our
              workshop finder. For anything else please complete the contact
              form on this page and we will reply to you as soon as possible.
            </p>
            <hr
              className="border-b w-full block border-[grey] mt-5"
              style={{ display: "inline-block" }}
            />
          </div>
          <div>
            <div className="flex md:w-[600px] ml-5  justify-between">
              <Swiper
                loop={true}
                scrollbar={{
                  draggable: true,
                  hide: false,
                }}
                modules={[Pagination, Scrollbar]}
                className="flex cursor-pointer justify-center  items-center swiper-container"
              >
                <SwiperSlide className="flex  justify-center h-full">
                  {sliderOne}
                </SwiperSlide>
                <SwiperSlide className="flex  justify-center h-full">
                  {sliderTwo}
                </SwiperSlide>
              </Swiper>
              <div className="flex cursor-pointer justify-start ">
                <IoIosArrowBack
                  size="2rem"
                  className="text-gray-500 hover:text-[#ff4d24]"
                  onClick={swipeBack}
                />
                <p className="text-white mt-1">|</p>
                <IoIosArrowForward
                  className="text-gray-500 hover:text-[#ff4d24]"
                  size="2rem"
                  onClick={swipe}
                />
              </div>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
};

export default Offices;
