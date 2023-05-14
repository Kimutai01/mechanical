import React from "react";
import Hero from "../components/services/Hero";
import Products from "../components/shop/Products";
import Footer from "../components/Footer";

const Store = () => {
  return (
    <>
      <Hero heading=" Shop" />

      <Products />
      <Footer />
    </>
  );
};

export default Store;
