import React from "react";
import Hero from "../components/about/Hero";
import AboutFaqs from "../components/about/AboutFaqs";
import WhyChooseUs from "../components/about/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import ServiceOffered from "../components/services/ServiceOffered";
import AboutServicesOffered from "../components/about/AboutServicesOffered";
import AboutSpecialist from "../components/about/AboutSpecialist";
import Pricing from "../components/Pricing";
import AboutPricing from "../components/about/AboutPricing";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Hero />
      <AboutFaqs />
      <WhyChooseUs />
      <Testimonials />
      <AboutServicesOffered />
      <AboutSpecialist />
      <AboutPricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default About;
