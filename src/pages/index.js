import React, { useState } from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import Navbar from "../components/Navbar/NavBar";
import Sidebar from "../components/Sidebar/Sidebar";
import Contact from "../components/Contact/Contact";
import About from "../components/About/About";
import Portfolio from "../components/Portfolio/Portfolio";
import Footer from "../components/Footer/Footer";
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
