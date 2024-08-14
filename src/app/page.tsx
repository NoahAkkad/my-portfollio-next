import Image from "next/image";
import Headers from "./components/Header";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <>
      <Headers />
      <Hero />
      <ProjectCard title={"My Portfollio"} description={"fagsdfasd"} image={"/images/A.jpg"} link={""} />
      <ProjectCard title={"My Portfollio"} description={"fagsdfasd"} image={"/images/A.jpg"} link={""} />
    </>
  );
}
