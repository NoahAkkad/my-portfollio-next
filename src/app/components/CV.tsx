import React from "react";
import { personalDetails } from "../../utils/data";

const { resumeLink } = personalDetails;

const CV: React.FC = () => {
  return (
    <section id="cv" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          My CV
        </h2>
        <div className="max-w-4xl mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Download My CV
          </h3>
          <p className="text-gray-600 mb-6">
            You can download my CV in both English and Swedish below:
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href={resumeLink.english}
              download
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
            >
              Download CV (English)
            </a>
            <a
              href={resumeLink.swedish}
              download
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
            >
              Download CV (Swedish)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;
