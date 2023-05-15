import React from "react";
import Hero from "../components/services/Hero";
import Offices from "../components/Offices";
import ContactServices from "../components/ContactServices";
import Patners from "../components/services/Patners";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const Contactt = () => {
  return (
    <>
      <div className="service-background">
        <div className="flex flex-col justify-center px-8 md:px-28 h-full">
          <h1 className="uppercase text-5xl md:text-6xl font-bold text-white">
            Contact Us
          </h1>
          <p className="text-[#fff] md:w-[35%] font-medium text-lg  mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
            ornare nunc tellus fermentum, amet curabitur lacus.
          </p>
        </div>
      </div>
      <Offices />
      <ContactServices />
      <Patners />
      <Contact />
      <Footer />
    </>
  );
};

export default Contactt;
