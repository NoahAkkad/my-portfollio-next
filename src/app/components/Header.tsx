import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/" passHref>
            Noah Akkad
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="space-x-4">
          <Link href="/" passHref legacyBehavior>
            <a className="text-gray-700 hover:text-blue-500">Home</a>
          </Link>
          <Link href="#about" passHref legacyBehavior>
            <a className="text-gray-700 hover:text-blue-500">About</a>
          </Link>
          <Link href="#portfolio" passHref legacyBehavior>
            <a className="text-gray-700 hover:text-blue-500">Portfolio</a>
          </Link>
          <Link href="#cv" passHref legacyBehavior>
            <a className="text-gray-700 hover:text-blue-500">CV</a>
          </Link>
          <Link href="#contact" passHref legacyBehavior>
            <a className="text-gray-700 hover:text-blue-500">Contact</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
