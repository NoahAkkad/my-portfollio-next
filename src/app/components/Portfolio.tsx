import React from "react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Project One",
    description: "A web application built with React.js and Node.js.",
    image: "/images/project1.png",
    link: "https://project-one.com",
  },
  {
    title: "Project Two",
    description: "A mobile-responsive e-commerce site using Next.js.",
    image: "/images/project2.png",
    link: "https://project-two.com",
  },
  {
    title: "Project Three",
    description: "A CMS platform created with WordPress and custom themes.",
    image: "/images/project3.png",
    link: "https://project-three.com",
  },
  // Add more projects as needed
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          My Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                width={800}
                height={500}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
