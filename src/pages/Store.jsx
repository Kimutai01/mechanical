import React from "react";
import Hero from "../components/services/Hero";
import Products from "../components/shop/Products";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const Store = () => {
  return (
    <>
      <Hero heading=" Shop" />

      <Products />
      <Contact />
      <Footer />
    </>
  );
};

export default Store;
