import React from "react";
import red from "../assets/jacob.jpg";

const Specialist = () => {
  return (
    <div className="bg-[#161616] pt-28 pb-96">
      <h1 className="uppercase text-[white] text-3xl p-6 md:p-0 md:text-4xl font-bold md:mx-32">
        meet our specialists
      </h1>
      <div className="grid md:grid-cols-4 md:gap-5 md:mx-32 p-5 md:p-0   grid-cols-1 gap-5 pt-10 ">
        <div>
          <img src={red} alt="" className="rounded-lg" />
          <div className="mt-5">
            <h1 className="uppercase text-white font-bold text-2xl">
              Michael Munavu
            </h1>
            <p className="text-[grey] text-lg font-bold mt-3">
              Founder of mechanic
            </p>
          </div>
        </div>

        <div>
          <img src={red} alt="" className="rounded-lg" />
          <div className="mt-5">
            <h1 className="uppercase text-white font-bold text-2xl">
              Michael Munavu
            </h1>
            <p className="text-[grey] text-lg font-bold mt-3">
              Founder of mechanic
            </p>
          </div>
        </div>

        <div>
          <img src={red} alt="" className="rounded-lg" />
          <div className="mt-5">
            <h1 className="uppercase text-white font-bold text-2xl">
              Michael Munavu
            </h1>
            <p className="text-[grey] text-lg font-bold mt-3">
              Founder of mechanic
            </p>
          </div>
        </div>

        <div>
          <img src={red} alt="" className="rounded-lg" />
          <div className="mt-5">
            <h1 className="uppercase text-white font-bold text-2xl">
              Michael Munavu
            </h1>
            <p className="text-[grey] text-lg font-bold mt-3">
              Founder of mechanic
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialist;
