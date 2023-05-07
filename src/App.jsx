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
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/serviceDetail" element={<ServiceDetail />} />
        <Route path="/store" element={<Store />} />
        <Route path="/storeDetail" element={<StoreDetail />} />
        <Route path={"/blog"} element={<Blog />} />
        <Route path={"/contact"} element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
