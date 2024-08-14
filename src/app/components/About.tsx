import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            I am a passionate Full Stack Developer with expertise in both
            frontend and backend development. With experience across various
            technologies like React.js, Next.js, Node.js, and MongoDB, I focus
            on building scalable, efficient, and user-friendly web applications.
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Over the years, I have successfully delivered numerous projects,
            working closely with cross-functional teams and clients to bring
            ideas to life. My goal is to create impactful digital solutions that
            solve real-world problems and enhance user experiences.
          </p>
          <p className="text-lg md:text-xl text-gray-600">
            I am always eager to learn new technologies and improve my skills.
            When I&apos;m not coding, I enjoy exploring design trends, contributing
            to open-source projects, and staying updated with the latest
            industry developments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
