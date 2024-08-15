import React from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Noah Akkad - Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Noah Akkad, a Full-Stack Developer specializing in modern web technologies."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
