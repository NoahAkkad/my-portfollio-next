import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      {/* <Footer /> */}
    </>
  );
};

export default HomePage;
