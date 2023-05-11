import React from "react";
import Hero from "../components/Hero";
import Why from "../components/Why";
import ServicesOffered from "../components/Services";
import Faqs from "../components/Faqs";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Why />
      <ServicesOffered />
      <Faqs />
    </div>
  );
};

export default Home;
