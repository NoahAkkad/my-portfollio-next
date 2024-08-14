import React from "react";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        {/* Hero Content */}
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I&apos;m Noah Akkad
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Full Stack Developer with a passion for creating amazing web
            experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center space-x-4">
            <Link href="#portfolio" scroll={false}>
              <a className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg text-lg">
                View My Work
              </a>
            </Link>
            <Link href="#cv" scroll={false}>
              <a className="bg-transparent border border-white hover:bg-white hover:text-gray-900 py-3 px-6 rounded-lg text-lg">
                Download CV
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
