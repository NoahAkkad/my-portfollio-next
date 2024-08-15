import React from "react";
import "./styles/globals.css"; // Import global styles
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "My Portfolio",
  description: "A portfolio showcasing my work as a Full-Stack Developer",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
