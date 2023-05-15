import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Store from "./pages/Store";
import StoreDetail from "./pages/StoreDetail";
import Blog from "./pages/Blog";
import Performance from "./pages/Performance";
import Repair from "./pages/Repair";
import FleetDetail from "./pages/FleetDetail";
import Contactt from "./pages/Contact";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/serviceDetail" element={<ServiceDetail />} />
        <Route path="/store" element={<Store />} />
        <Route path="/storeDetail" element={<StoreDetail />} />
        <Route path={"/blog"} element={<Blog />} />
        <Route path={"/contact"} element={<Contactt />} />
        <Route path={"/performance"} element={<Performance />} />
        <Route path={"/repair"} element={<Repair />} />
        <Route path={"/fleet"} element={<FleetDetail />} />
        <Route path={"/store"} element={<Store />} />
        <Route path={"/product:id"} element={<StoreDetail />} />
      </Routes>
    </div>
  );
}

export default App;
