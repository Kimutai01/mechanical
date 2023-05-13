import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import red from "../../assets/redcar.jpg";

const WhyChooseUs = () => {
  return (
    <div className="bg-[#000] pt-[900px] p-5 md:p-0 md:pt-96 md:px-32 pb-80 flex flex-col-reverse md:flex-row gap-10 ">
      <div className="md:mt-28 ">
        <h1 className="text-white uppercase text-4xl md:text-5xl font-bold md:w-[60%]  ">
          Why choose us
        </h1>
        <p className="text-[grey] md:w-[60%] mt-10">
          We are very proud of the service we provide and stand by every product
          we carry. Our testimonials demonstrate our work quality and customer
          satisfaction.
        </p>
        <div className="flex flex-col md:flex-row gap-5 md:gap-10">
          <button className="home-btn flex items-center mt-10 md:mb-10 group">
            <h1>Read more</h1>
            <div className="rounded-full bg-[#8e8e8e] font-bold group-hover:bg-[#ff866c] ">
              <BsArrowRightShort size={25} className="text-[white]" />
            </div>
          </button>
          <button className="why-btn flex items-center md:mt-10 mb-10 ">
            <h1>Get started</h1>
            <div className="rounded-full bg-[#ff866c] hover:bg-[#8e8e8e] font-bold">
              <BsArrowRightShort size={25} className="text-[white]" />
            </div>
          </button>
        </div>
      </div>
      <div className="mt-28 ">
        <img src={red} alt="" className="rounded-xl" />
      </div>
    </div>
  );
};

export default WhyChooseUs;
