import React from "react";
import Head from "next/head";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import CV from "../components/CV";
import Contact from "../components/Contact";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Noah Akkad - Full-Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Noah Akkad, a Full-Stack Developer specializing in modern web technologies. Explore my projects, resume, and get in touch."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Hero />
        <About />
        <Portfolio />
        <CV />
        <Contact />
      </div>
    </>
  );
};

export default Home;
