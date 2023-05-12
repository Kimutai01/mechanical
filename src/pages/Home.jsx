import React from "react";
import Hero from "../components/Hero";
import Why from "../components/Why";
import ServicesOffered from "../components/Services";
import Faqs from "../components/Faqs";
import Specialist from "../components/Specialist";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Why />
      <ServicesOffered />
      <Faqs />
      <Specialist />
      <Testimonials />
      <Pricing />
    </div>
  );
};

export default Home;
