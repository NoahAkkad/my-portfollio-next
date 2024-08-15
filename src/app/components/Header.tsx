import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">Noah Akkad</Link>
        </div>

        {/* Navigation Menu */}
        <nav className="space-x-4">
          <Link href="/" scroll={false} legacyBehavior>
            <a className="text-gray-700 hover:text-blue-500">Home</a>
          </Link>
          <Link href="../pages/About" scroll={false} legacyBehavior>
            <a className="text-gray-700 hover:text-blue-500">About</a>
          </Link>
          <Link href="../pages/Portfolio" scroll={false} legacyBehavior>
            <a className="text-gray-700 hover:text-blue-500">Portfolio</a>
          </Link>
          <Link href="../pages/CV" scroll={false} legacyBehavior>
            <a className="text-gray-700 hover:text-blue-500">CV</a>
          </Link>
          <Link href="../pages/Contact" scroll={false} legacyBehavior>
            <a className="text-gray-700 hover:text-blue-500">Contact</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
