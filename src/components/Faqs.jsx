import React, { useState } from "react";
import red from "../assets/redcar.jpg";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";

const Faqs = () => {
  const [activeParagraphIndex, setActiveParagraphIndex] = useState(null);

  const toggleParagraphVisibility = (index) => {
    setActiveParagraphIndex(activeParagraphIndex === index ? null : index);
  };
  return (
    <div className="flex bg-[#161616] pt-28 md:px-32 ">
      <div className="w-[60%]">
        <h1 className="text-[#fff] text-4xl uppercase font-bold">
          FAQs & News
        </h1>
        <p className="text-[#fff] w-[80%] text-lg font-medium mt-5">
          Customer satisfaction is the measure of our success. Our unique
          service promises mean a commitment to finding the best possible
          solution to any problem.
        </p>
        <img src={red} alt="" className="mt-5" />
      </div>
      <div className="flex flex-col w-[60%] mt-10">
        <div className="mt-10 ">
          <h1
            className={`md:text-2xl text-3xl text-transparent bg-clip-text font-bold uppercase ${
              activeParagraphIndex === 0 ? "bg-red-500" : ""
            }`}
            style={{
              color: `${activeParagraphIndex === 0 ? "red" : "white"} `,
            }}
            onClick={() => toggleParagraphVisibility(0)}
          >
            How long will it take to fix my car
            {activeParagraphIndex === 0 ? (
              <IoIosArrowDropupCircle className="inline-block ml-2" />
            ) : (
              <IoIosArrowDropdownCircle className="inline-block ml-2" />
            )}
          </h1>

          {activeParagraphIndex === 0 && (
            <p className="text-[grey]">
              Your car might need service for a multitude of reasons from any
              assortment of low fluids, worn brake linings, or component
              malfunctions. Depending on what the issue is, it could be fixed in
              a day or take over 1 week for a major job. Once we diagnose your
              car, we will be able to give you a better estimate for how long
              the repair will take.
            </p>
          )}
        </div>
        <div className="border-t-[1px] border-[grey] mt-7">
          <div className="mt-7 ">
            <h1
              className={`md:text-2xl text-2xl text-transparent bg-clip-text font-bold uppercase ${
                activeParagraphIndex === 1 ? "bg-red-500" : ""
              }`}
              style={{
                color: `${activeParagraphIndex === 1 ? "red" : "white"} `,
              }}
              onClick={() => toggleParagraphVisibility(1)}
            >
              Do i need an appointment
              {activeParagraphIndex === 1 ? (
                <IoIosArrowDropupCircle className="inline-block ml-2" />
              ) : (
                <IoIosArrowDropdownCircle className="inline-block ml-2" />
              )}
            </h1>

            {activeParagraphIndex === 1 && (
              <p className="text-[grey]">
                It is highly recommended that you make an appointment. We are an
                independent auto repair center and we pride ourselves on our
                quality work and stellar reviews. We might be completely booked
                and not be able to get to your car right away. For that reason,
                we recommend making an appointment or calling ahead.
              </p>
            )}
          </div>
        </div>
        <div className="mt-7 border-t-[1px] border-[grey]">
          <div className="mt-7 ">
            <h1
              className={`md:text-2xl text-2xl text-transparent bg-clip-text font-bold uppercase ${
                activeParagraphIndex === 2 ? "bg-red-500" : ""
              }`}
              style={{
                color: `${activeParagraphIndex === 2 ? "red" : "white"} `,
              }}
              onClick={() => toggleParagraphVisibility(2)}
            >
              Do you offer warranty
              {activeParagraphIndex === 2 ? (
                <IoIosArrowDropupCircle className="inline-block ml-2" />
              ) : (
                <IoIosArrowDropdownCircle className="inline-block ml-2" />
              )}
            </h1>

            {activeParagraphIndex === 2 && (
              <p className="text-[grey]">
                Yes, we certainly do. Our warranty is 2 years or 24,000 miles
                and covers you nationwide! We are proud to stand behind our
                work.
              </p>
            )}
          </div>
        </div>
        <div className="border-t-[1px] mt-7 border-[grey]">
          <div className="mt-7 ">
            <h1
              className={`md:text-2xl text-2xl text-transparent bg-clip-text font-bold uppercase ${
                activeParagraphIndex === 3 ? "bg-red-500" : ""
              }`}
              style={{
                color: `${activeParagraphIndex === 3 ? "red" : "white"} `,
              }}
              onClick={() => toggleParagraphVisibility(3)}
            >
              Do you have complete auto repair services
              {activeParagraphIndex === 3 ? (
                <IoIosArrowDropupCircle className="inline-block ml-2" />
              ) : (
                <IoIosArrowDropdownCircle className="inline-block ml-2" />
              )}
            </h1>

            {activeParagraphIndex === 3 && (
              <p className="text-[grey]">
                Yes, we have a complete body shop and do restore classic and
                vintage cars. Contact us to tell us about your project car
                today!
              </p>
            )}
          </div>
        </div>
        <div className="border-t-[1px] border-[grey] mt-7">
          <div className="mt-7 ">
            <h1
              className={`md:text-2xl text-2xl text-transparent bg-clip-text font-bold uppercase ${
                activeParagraphIndex === 4 ? "bg-red-500" : ""
              }`}
              style={{
                color: `${activeParagraphIndex === 4 ? "red" : "white"} `,
              }}
              onClick={() => toggleParagraphVisibility(4)}
            >
              Can you do a full technical assessment of my car
              {activeParagraphIndex === 4 ? (
                <IoIosArrowDropupCircle className="inline-block ml-2" />
              ) : (
                <IoIosArrowDropdownCircle className="inline-block ml-2 bg-[#000]" />
              )}
            </h1>

            {activeParagraphIndex === 4 && (
              <p className="text-[grey]">
                Yes, you can get a full MOT with us, you don't even need to
                worry about additional purchases, as you can buy all MOT
                materials in our store
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;