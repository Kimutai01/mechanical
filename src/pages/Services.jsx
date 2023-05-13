import React from "react";
import red from "../assets/engine.jpg";
import Hero from "../components/services/Hero";
import ServiceCard from "../components/all/serviceCard";
import Pricing from "../components/Pricing";
import ServiceOffered from "../components/services/ServiceOffered";
import Patners from "../components/services/Patners";

const Services = () => {
  return (
    <>
      <Hero />
      <ServiceCard />
      <Pricing />
      <ServiceOffered />
      <Patners />
    </>
  );
};

export default Services;
