import React from "react";
import Image from "next/image";
import { portfolioItems } from "../utils/data";
import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const Portfolio: React.FC = () => {
  return (
    <ProjectCard />
    
  );
};

export default Portfolio;
