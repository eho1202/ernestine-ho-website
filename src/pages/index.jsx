import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import Contact from "../components/Contact";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import { homeObjOne, homeObjTwo } from "../components/Resuable/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <About {...homeObjOne} />
      <Portfolio />
      <Contact {...homeObjTwo}/>
      <Footer />
    </>
  );
};

export default Home;
