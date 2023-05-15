import React from "react";
import red from "../assets/engine.jpg";
import Hero from "../components/services/Hero";
import ServiceCard from "../components/all/serviceCard";
import Pricing from "../components/Pricing";
import ServicePricing from "../components/services/ServicePricing";
import ServiceOffered from "../components/services/ServiceOffered";
import Patners from "../components/services/Patners";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const Services = () => {
  return (
    <>
      <Hero heading="Our Services" />
      <ServiceCard />
      <ServicePricing />
      <ServiceOffered />
      <Patners />
      <Contact />
      <Footer />
    </>
  );
};

export default Services;
