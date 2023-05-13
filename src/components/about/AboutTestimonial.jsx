import React, { useState } from "react";
import red from "../../assets/brandon.jpg";
import wat from "../../assets/Watson.jpg";
import bern from "../../assets/bern.jpg";

import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const testimonialsData = [
  {
    image: red,
    name: "KRISTIN WATSON",
    title: "F1 racer",
    paragraph:
      "It’s such a pleasure dealing with them. Everything is so convenient. They do the job efficiently, and timely, and charge exactly what they said they would. I stopped going to the dealership because I never got such good service from them. I was very happy with the work completed by Mechanic 128.",
  },
  {
    image: wat,
    name: "JOSHUA REDDICK",
    title: "Baseball player",
    paragraph:
      "Mechanic 128 is the best! Their team is knowledgeable, friendly, and always go above and beyond to make sure my car is running smoothly. They even helped me find a part that I needed, which I couldn't find anywhere else. I highly recommend them!",
  },
  {
    image: bern,
    name: "JESSICA BERNHARD",
    title: "Entrepreneur",
    paragraph:
      "I was blown away by the level of service I received from Mechanic 128. They were professional, friendly, and really took the time to explain what was wrong with my car and how they were going to fix it. I never felt like I was being taken advantage of. They have a customer for life!",
  },
];

const AboutTestimonials = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handlePreviousTestimonial = () => {
    setCurrentTestimonialIndex(
      (currentTestimonialIndex - 1 + testimonialsData.length) %
        testimonialsData.length
    );
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex(
      (currentTestimonialIndex + 1) % testimonialsData.length
    );
  };

  const currentTestimonial = testimonialsData[currentTestimonialIndex];

  return (
    <div className="mt-[-250px] p-5 absolute">
      <div className="border bg-[#000] border-[red] flex flex-col md:flex-row items-center md:gap-20 gap-10 ">
        <div className="flex flex-col md:flex-row gap-2 md:items-center h-[450px] ml-[-10px] mr-[-10px] md:ml-0 md:mr-0 md:p-5 ">
          <BsFillArrowLeftCircleFill
            className="text-[grey] cursor-pointer hidden md:block"
            onClick={handlePreviousTestimonial}
            size={40}
          />
          <img
            src={currentTestimonial.image}
            alt=""
            className="rounded-lg mt-[-10px] mb-[-20px]"
          />
          <BsFillArrowRightCircleFill
            className="text-[red] cursor-pointer hidden md:block"
            onClick={handleNextTestimonial}
            size={40}
          />
          <div className="flex md:hidden gap-2 items-center ml-10">
            <BsFillArrowLeftCircleFill
              className="text-[grey]  cursor-pointer"
              onClick={handlePreviousTestimonial}
              size={40}
            />
            <BsFillArrowRightCircleFill
              className="text-[red] cursor-pointer"
              onClick={handleNextTestimonial}
              size={40}
            />
          </div>
        </div>
        <div className="md:w-[50%] w-[80%] mt-10 md:mt-0 mb-3  ">
          <h1 className="text-white font-bold text-3xl md:text-4xl">
            WHAT OUR CUSTOMERS SAY
          </h1>
          <p className="text-white mt-5 text-sm md:text-lg font-medium">
            {currentTestimonial.paragraph}
          </p>
          <h3 className="text-[red] mt-5 text-2xl font-bold">
            {currentTestimonial.name}
          </h3>
          <p className="text-gray-500 text-lg">{currentTestimonial.title}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutTestimonials;
