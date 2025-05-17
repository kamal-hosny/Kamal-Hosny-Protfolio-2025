import {  FiGithub, FiLinkedin, FiMail } from "react-icons/fi"
import { FaWhatsapp } from "react-icons/fa"

const projectIds = [
  '59653f53-0371-4ede-a2ca-6a3fbcc49246',
  'b8941c88-96c8-422d-9be9-d9253a24d19f',
  'c7653f53-0371-4ede-a2ca-6a3fbcc49246',
  'd8941c88-96c8-422d-9be9-d9253a24d19f',
  'e9653f53-0371-4ede-a2ca-6a3fbcc49246',
  'f8941c88-96c8-422d-9be9-d9253a24d19f',
  'g7653f53-0371-4ede-a2ca-6a3fbcc49246',
  'h8941c88-96c8-422d-9be9-d9253a24d19f'
];

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  githubLink: string | null;
  liveLink: string | null;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: projectIds[0],
    title: "Aqarek",
    description: "A full-stack e-commerce platform for real estate, enabling property browsing, purchasing, and management.",
    tech: ["React", "TypeScript", "Tailwind"],
    image: "https://res.cloudinary.com/dizj9rluo/image/upload/f_auto,q_auto/aac2088f-0a80-4b29-bff4-2ab873405c48_2_tnvuxl",
    githubLink: "https://github.com/kamal-hosny/Real-estate-graduation-project",
    liveLink: "https://real-estate-graduation-project.vercel.app/",
    featured: true
  },
  {
    id: projectIds[1],
    title: "OilfieldTools",
    description: "A full-stack e-commerce platform for oilfield equipment, offering product listings and secure transactions.",
    tech: ["React", "TypeScript", "Tailwind"],
    image: "https://res.cloudinary.com/dizj9rluo/image/upload/v1747438647/dgpsf0gj24nynvoua7hg.png",
    githubLink: "https://github.com/kamal-hosny/OilfieldTools-ecommerce",
    liveLink: "https://oilfield-tools-ecommerce.vercel.app/",
    featured: true
  },
  {
    id: projectIds[2],
    title: "Arcane",
    description: "A modern web application with animations, built to showcase dynamic UI/UX design.",
    tech: ["Next.js", "JavaScript", "Tailwind", "GSAP"],
    image: "https://res.cloudinary.com/dizj9rluo/image/upload/v1747439605/sqougsmuhtqj0to8r5jw.png",
    githubLink: "https://github.com/kamal-hosny/Arcane",
    liveLink: "https://arcane-silk.vercel.app/",
    featured: false
  },
  {
    id: projectIds[3],
    title: "Ventry Code Portfolio",
    description: "A personal portfolio showcasing projects with smooth animations and modern design.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    image: "https://res.cloudinary.com/dizj9rluo/image/upload/v1747439047/qticdxeo5h85nqu5v32c.png",
    githubLink: "https://github.com/kamal-hosny/ventry-code-portfolio",
    liveLink: "https://ventry-code-portfolio.vercel.app/",
    featured: false
  },
  {
    id: projectIds[4],
    title: "Donezo-Todo",
    description: "A full-stack todo application with database integration for task management.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Prisma", "MongoDB"],
    image: "https://res.cloudinary.com/dizj9rluo/image/upload/v1747440155/1f6c6a25-23e4-4ecf-8541-1d57411d1ff7_puyhmc.png",
    githubLink: "https://github.com/kamal-hosny/Donezo-Todo",
    liveLink: "https://ventry-code-portfolio.vercel.app/",
    featured: true
  },
  {
    id: projectIds[5],
    title: "حضانة بداية خطوة",
    description: "A website for a nursery, providing information about services and enrollment.",
    tech: ["React", "Tailwind"],
    image: "https://res.cloudinary.com/dizj9rluo/image/upload/v1747441041/fdde3ed2-0bf3-42c3-8001-cbdf44c845bb_ufsijr.png",
    githubLink: null,
    liveLink: "https://client-first-step.vercel.app/",
    featured: false
  },
  {
    id: projectIds[6],
    title: "Dashboard",
    description: "A responsive admin dashboard for data visualization and management.",
    tech: ["React", "Tailwind"],
    image: "https://res.cloudinary.com/dizj9rluo/image/upload/v1747441348/519b75d2-542d-49f7-b0d6-e94bba01fe2b_qz5kyh.png",
    githubLink: null,
    liveLink: null,
    featured: false
  },
  {
    id: projectIds[7],
    title: "Portfolio Graphic Design",
    description: "A portfolio showcasing graphic design projects with a clean and minimal UI.",
    tech: ["React"],
    image: "https://res.cloudinary.com/dizj9rluo/image/upload/%D8%AA%D8%B5%D9%85%D9%8A%D9%85_%D8%A8%D8%AF%D9%88%D9%86_%D8%B9%D9%86%D9%88%D8%A7%D9%86_1_amx4lr.png",
    githubLink: "https://github.com/kamal-hosny/portfolioGraphicDesign",
    liveLink: "https://portfolio-graphic-design-mu.vercel.app/",
    featured: false
  }
];



export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/kamal-hosny",
    icon: <FiGithub />,
    color: "hover:text-gray-400",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kamal-hosny-681068295/",
    icon: <FiLinkedin />,
    color: "hover:text-blue-400"
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/+201013655708",
    icon: <FaWhatsapp />,
    color: "hover:text-green-400"
  },
  {
    name: "Email",
    url: "mailto:kamalixon.dev@gmail.com",
    icon: <FiMail />,
    color: "hover:text-orange-400"
  }
]