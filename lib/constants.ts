export const SECTIONS_LIST = [
  "home",
  "about",
  "experience",
  "projects",
  "contact",
];

export const INTIAL_SECTION = "home";

export const projects = [
  {
    title: "ChunavSetu – Election Data Management",
    description:
      "Developed a frontend dashboard for managing and searching large-scale citizen data with advanced filters, role-based access control, and real-time API integrations.",
    tech: ["React.js", "Redux", "Tailwind CSS", "PrimeReact"],
    image:
      "https://images.pexels.com/photos/11813182/pexels-photo-11813182.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "#",
    github: "#",
  },
  {
    title: "Athertons – Enterprise Admin Dashboard (UK Firm)",
    description:
      "Led development of a large-scale role-based dashboard for managing clients, employees, suppliers, and projects with dynamic tables, advanced filtering, and analytics.",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Material UI",
      "Chart.js",
      "Context API",
    ],
    image:
      "https://images.pexels.com/photos/6476580/pexels-photo-6476580.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "https://athertons.co.uk/",
    github: "#",
  },
  {
    title: "GenAIGuru",
    description:
      "AI-driven content platform where users can read blogs, earn coins, and unlock content. Integrated ChatGPT 3.5 and DALL·E for interactive AI features.",
    tech: ["Node.js", "MongoDB", "React.js", "ChatGPT API", "DALL·E"],
    image:
      "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "#",
    github: "#",
  },
  {
    title: "iPhones Into Cash",
    description:
      "Vue.js/Nuxt.js platform for trading electronic devices with SSR for SEO, dynamic routing, and admin panel for managing users and transactions.",
    tech: ["Vue.js", "Nuxt.js", "Pinia", "REST APIs"],
    image:
      "https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "https://iphonesintocash.com/",
    github: "#",
  },
  {
    title: "Store It",
    description:
      "Google Drive-like file storage system with OTP authentication, reusable UI components, and Next.js SSR integration using AppWrite.",
    tech: ["Next.js", "AppWrite", "shadcn/ui"],
    image:
      "https://images.pexels.com/photos/374720/pexels-photo-374720.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "https://nextjs-storeit.vercel.app/sign-in",
    github: "https://github.com/01aksh/Nextjs-storeit",
  },
  {
    title: "Udharaa – Crowd Funding Platform",
    description:
      "Community platform for startups and investors with real-time chat, messaging, and analytics. Built detailed admin panel with Socket.IO and MongoDB aggregation pipelines.",
    tech: ["React.js", "MongoDB", "Socket.IO", "REST APIs"],
    image:
      "https://images.pexels.com/photos/6476585/pexels-photo-6476585.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "https://udharaa.com/",
    github: "#",
  },
];

export const technologies = [
  { name: "React.js", level: 95, category: "Frontend" },
  { name: "Next.js", level: 90, category: "Frontend" },
  { name: "Vue.js", level: 85, category: "Frontend" },
  { name: "TypeScript", level: 88, category: "Frontend" },
  { name: "Node.js", level: 92, category: "Backend" },
  { name: "Express.js", level: 90, category: "Backend" },
  { name: "MongoDB", level: 87, category: "Database" },
  { name: "Tailwind CSS", level: 93, category: "Frontend" },
];

export const experiences = [
  {
    period: "Sep 2023 – Present",
    role: "Frontend Developer & Team Lead",
    company: "SDS Softwares – Noida",
    description:
      "Contributing to full-stack development across React.js, Next.js, Vue.js, and Node.js projects, while leading a small team and ensuring scalable, high-performance solutions.",
    achievements: [
      "Developed and deployed dynamic web applications using React.js, Next.js (SSR/SSG), and Vue.js.",
      "Built backend services with Node.js, Express.js, and MongoDB to handle complex business logic and APIs.",
      "Integrated REST APIs and real-time communication features using Socket.IO for interactive dashboards.",
      "Optimized applications for SEO and performance with server-side rendering (SSR).",
      "Led a team on AI Resume Pro and Athertons projects, implementing reusable component libraries, state management, and modern full-stack practices.",
    ],
  },
  {
    period: "Sep 2022 – Oct 2023",
    role: "Frontend Developer",
    company: "Massive Dynamics – Karnataka",
    description:
      "Built responsive, user-friendly applications with React.js and Tailwind CSS while collaborating with backend teams to deliver production-ready solutions.",
    achievements: [
      "Designed and developed reusable UI components, improving consistency across projects.",
      "Optimized frontend rendering and state management, reducing page load time by 30%.",
      "Implemented role-based access control and authentication workflows in client applications.",
      "Collaborated in Agile teams, ensuring high-quality delivery within tight deadlines.",
    ],
  },
];
