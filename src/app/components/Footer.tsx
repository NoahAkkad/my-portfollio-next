import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Noah Akkad. All rights reserved.
        </p>
        <div className="mt-4">
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-gray-400 hover:text-white transition duration-200"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin-username/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-gray-400 hover:text-white transition duration-200"
          >
            LinkedIn
          </a>
          <a
            href="mailto:your.email@example.com"
            className="mx-2 text-gray-400 hover:text-white transition duration-200"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
