import {  FiGithub, FiLinkedin, FiMail } from "react-icons/fi"
import { FaWhatsapp } from "react-icons/fa"


const generateId = () => crypto.randomUUID();


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
    id: generateId(),
    title: "TechTrove Store",
    description: "A modern tech e-commerce platform for selling PC and console parts. It features product listings by brand and category, smart inventory tracking, order management, and a dashboard for handling customer inquiries.",
    tech: ["Next.js"],
    image: "https://res.cloudinary.com/dizj9rluo/image/upload/v1793828104/screencapture-de-hash-url-shortener-vercel-app-2026-11-04-23_34_27_etfzkv.png",
    githubLink: "https://github.com/kamal-hosny/",
    liveLink: "https://tech-trove-ebon.vercel.app/",
    featured: true
  },
  {
    id: generateId(),
    title: "ANKH.",
    description: "A platform for showcasing call center services, featuring agent selection, data record management, and a custom plan builder with a complete purchase flow and email confirmations for both client and business.",
    tech: ["Next.js"],
    image: "https://res.cloudinary.com/dizj9rluo/image/upload/v1752658924/93cfc857-0970-43a7-827a-81f555d63ee8_dycgga.png",
    githubLink: "https://github.com/kamal-hosny/",
    liveLink: "https://ankh-sooty.vercel.app/",
    featured: true
  },
  {
    id: generateId(),
    title: "Mabani",
    description: "A professional client project developed for a leading construction and development company in Saudi Arabia. The platform showcases completed buildings, residential towers, and interior design projects, emphasizing quality and craftsmanship. It also highlights official certifications and includes an integrated contact system for initiating new collaborations and project inquiries.",
    tech: ["Next.js"],
    image: "https://res.cloudinary.com/dizj9rluo/image/upload/v1752658587/9ce384d8-a6e3-4b62-a686-7ca80962d1c9_hlwoye.png",
    githubLink: "https://github.com/kamal-hosny/",
    liveLink: "https://mabanialtatweer.com/",
    featured: true
  },




  {
    id: generateId(),
    title: "Aqarek",
    description: "A full-stack e-commerce platform for real estate, enabling property browsing, purchasing, and management.",
    tech: ["React", "TypeScript", "Tailwind"],
    image: "https://res.cloudinary.com/dizj9rluo/image/upload/f_auto,q_auto/aac2088f-0a80-4b29-bff4-2ab873405c48_2_tnvuxl",
    githubLink: "https://github.com/kamal-hosny/Blink",
    liveLink: "https://blink-puce.vercel.app/",
    featured: true
  },







  {
    id: generateId(),
    title: "OilfieldTools",
    description: "A full-stack e-commerce platform for oilfield equipment, offering product listings and secure transactions.",
    tech: ["React", "TypeScript", "Tailwind"],
    image: "https://res.cloudinary.com/dizj9rluo/image/upload/v1747438647/dgpsf0gj24nynvoua7hg.png",
    githubLink: "https://github.com/kamal-hosny/OilfieldTools-ecommerce",
    liveLink: "https://oilfield-tools-ecommerce.vercel.app/",
    featured: true
  },
  {
    id: generateId(),
    title: "Bulm Store",
    description: "A sleek and responsive e-commerce platform for premium kitchen appliances, offering a seamless browsing and purchasing experience with elegant design and intuitive UI.",
    tech: ["React", "TypeScript", "Tailwind"],
    image: "https://res.cloudinary.com/dizj9rluo/image/upload/3f919001-f3bc-4dc3-b998-47b53b866220_2_zxrmqv.png",
    githubLink: "https://github.com/kamal-hosny/Cookers-e-commerce-F-",
    liveLink: "https://cookers-e-commerce-f.vercel.app/",
    featured: true
  },

  {
    id: generateId(),
    title: "Blink",
    description: "Build Scape is your go-to platform for innovative architectural design and construction solutions.",
    tech: ["React"],
    image: "https://res.cloudinary.com/dizj9rluo/image/upload/v1752657965/13addd1e-be1f-431f-a84b-3650332369f8_zjr0tz.png",
    githubLink: "https://github.com/kamal-hosny/OilfieldTools-ecommerce",
    liveLink: "https://oilfield-tools-ecommerce.vercel.app/",
    featured: true
  },

  {
    id: generateId(),
    title: "Build Scape",
    description: "Build Scape is your go-to platform for innovative architectural design and construction solutions.",
    tech: ["React", "Tailwind"],
    image: "https://res.cloudinary.com/dizj9rluo/image/upload/v1752658227/4b4ad30b-67f8-4dd9-8007-f06fac3e3ffe_hyc0fb.png",
    githubLink: "https://github.com/kamal-hosny",
    liveLink: "https://blackllne.web.app/",
    featured: true
  },








  {
    id: generateId(),
    title: "Ventry Code Portfolio",
    description: "A personal portfolio showcasing projects with smooth animations and modern design.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    image: "https://res.cloudinary.com/dizj9rluo/image/upload/v1747439047/qticdxeo5h85nqu5v32c.png",
    githubLink: "https://github.com/kamal-hosny/ventry-code-portfolio",
    liveLink: "https://ventry-code-portfolio.vercel.app/",
    featured: false
  },
  {
    id: generateId(),
    title: "Arcane",
    description: "A modern web application with animations, built to showcase dynamic UI/UX design.",
    tech: ["Next.js", "JavaScript", "Tailwind", "GSAP"],
    image: "https://res.cloudinary.com/dizj9rluo/image/upload/v1747439605/sqougsmuhtqj0to8r5jw.png",
    githubLink: "https://github.com/kamal-hosny/Arcane",
    liveLink: "https://arcane-silk.vercel.app/",
    featured: false
  },
  {
    id: generateId(),
    title: "Donezo-Todo",
    description: "A full-stack todo application with database integration for task management.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Prisma", "MongoDB"],
    image: "https://res.cloudinary.com/dizj9rluo/image/upload/v1747440155/1f6c6a25-23e4-4ecf-8541-1d57411d1ff7_puyhmc.png",
    githubLink: "https://github.com/kamal-hosny/Donezo-Todo",
    liveLink: "https://ventry-code-portfolio.vercel.app/",
    featured: true
  },
  // {
  //   id: generateId(),
  //   title: "حضانة بداية خطوة",
  //   description: "A website for a nursery, providing information about services and enrollment.",
  //   tech: ["React", "Tailwind"],
  //   image: "https://res.cloudinary.com/dizj9rluo/image/upload/v1747441041/fdde3ed2-0bf3-42c3-8001-cbdf44c845bb_ufsijr.png",
  //   githubLink: null,
  //   liveLink: "https://client-first-step.vercel.app/",
  //   featured: false
  // },
  {
    id: generateId(),
    title: "Dashboard",
    description: "A responsive admin dashboard for data visualization and management.",
    tech: ["React", "Tailwind"],
    image: "https://res.cloudinary.com/dizj9rluo/image/upload/v1747441348/519b75d2-542d-49f7-b0d6-e94bba01fe2b_qz5kyh.png",
    githubLink: null,
    liveLink: null,
    featured: false
  },
  {
    id: generateId(),
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

export const clientsTestimonials = [
  {
    name: "Ahmed Fares",
    role: "Jr. Penetration Tester | Ethical Hacker | Bug Bounty Hunter | Full-Stack Laravel Developer",
    company: "",
    text: "الصراحه شغل عالي جداا ومش بس عشان احنا صحاب الصراحه الشغل بتاعك ياكمال نضيف ومترتب و كمان بيبقى عندك افكار كويسه بتضيفها الموقع ممكن تكون فريده مش  عند ناس كتير وده الاي مخليني شايفك مميز.",
    image: "https://res.cloudinary.com/dizj9rluo/image/upload/v1747502863/WhatsApp_Image_2025-05-17_at_20.24.01_7e67cea0_iu8nu8.jpg",
  },
  {
    name: "Youssef Samir",
    role: "",
    company: "",
    text: "بجد كمال أنقذني، كان عندي مشكلة في الويب سايت وخلصه في وقت قياسي. محترف جدًا وشغله نضيف.",
    image: "https://res.cloudinary.com/dizj9rluo/image/upload/v1744113485/defaultPerson_e7w75t.jpg",
  },
  {
    name: "Sarah Khaled",
    role: "",
    company: "",
    text: "Great communication and very responsive. He understood exactly what I wanted and delivered even better!",
    image: "https://res.cloudinary.com/dizj9rluo/image/upload/v1744113485/defaultPerson_e7w75t.jpg",
  },
  {
    name: "Hassan Adel",
    role: "",
    company: "",
    text: "كنت متردد في الأول، بس بصراحة كمال عمللي موقع تحفة وسهل الاستخدام. شكراً يا بطل!",
    image: "https://res.cloudinary.com/dizj9rluo/image/upload/v1744113485/defaultPerson_e7w75t.jpg",
  },
  {
    name: "Nouran Magdy",
    role: "",
    company: "",
    text: "The delivery was on time and everything worked perfectly. Definitely coming back for future work.",
    image: "https://res.cloudinary.com/dizj9rluo/image/upload/v1744113485/defaultPerson_e7w75t.jpg",
  },
  {
    name: "Mohamed Tarek",
    role: "",
    company: "",
    text: "كمال فاهم هو بيعمل إيه، شغله مظبوط جدًا، وبيشرح كل حاجة ببساطة. أنصح أي حد يتعامل معاه.",
    image: "https://res.cloudinary.com/dizj9rluo/image/upload/v1744113485/defaultPerson_e7w75t.jpg",
  },
]
