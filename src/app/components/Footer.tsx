import React from "react";
import { personalDetails } from "../../utils/data";

const { socialLinks } = personalDetails;

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Noah Akkad. All rights reserved.
        </p>
        <div className="mt-4">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-gray-400 hover:text-white transition duration-200"
          >
            GitHub
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-gray-400 hover:text-white transition duration-200"
          >
            LinkedIn
          </a>
          <a
            href={socialLinks.facebook}
            target="_blank"
            className="mx-2 text-gray-400 hover:text-white transition duration-200"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
