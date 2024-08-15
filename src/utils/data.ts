// Updated TypeScript Interface
export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
}

// Corrected Portfolio Items Array
export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of Project One.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/A.jpg",
    link: "https://example.com/project-one",
  },
  {
    id: 2,
    title: "Project Two",
    description: "A brief description of Project Two.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "/images/A.jpg",
    link: "https://example.com/project-two",
  },
  {
    id: 3,
    title: "Project Three",
    description: "A brief description of Project Three.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "/images/A.jpg",
    link: "https://example.com/project-three",
  },
  // Add more projects here
];

// Personal Details
export const personalDetails = {
  name: "Noah Akkad",
  role: "Full-Stack Developer",
  description:
    "I am a passionate full-stack developer with experience in modern web technologies...",
  resumeLink: {
    english: "/public/Noah_Akkad_Full_Stack_Developer_EN.pdf",
    swedish: "/public/Noah_Akkad_Full_Stack_Developer_SV.pdf",
  },
  contactEmail: "noah.akkad@gmail.com",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/noah-akkad",
    github: "https://github.com/noahakkad",
    facebook: "https://www.facebook.com/profile.php?id=100004695977526",
    // Add more social links here
  },
};
