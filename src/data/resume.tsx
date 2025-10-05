import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio2.vercel.app",
  name: "Abdul Azeez",
  initials: "AA",
  description:
    "Passionate about building web applications and exploring new technologies. Curious about blockchain  ",
  summary: `Worked on  backend development, microservices, cloud computing, optimizing frontend performance for applications scaling 5k users and 100k+ views.`, // Update with Abdul Azeez's summary
  avatarUrl: "/Me.webp", // Abdul Azeez's profile image
  skills: [
    // Frontend Technologies
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "HTML5",
    "CSS3",
    "Tailwind CSS",

    // Backend Technologies
    "Node.js",
    "Express.js",
    "Python",
    "Django",
    "FastAPI",

    // Databases
    "MongoDB",
    "PostgreSQL",
    "MySQL",

    // Tools & Others
    "Git",
    "GitHub",
    "Docker",
    "AWS",
    "Vercel",

    // Add Abdul Azeez's specific skills here
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://abdulazeez.hashnode.dev",
      icon: NotebookIcon,
      label: "Blog",
    }, // Update with Abdul Azeez's blog
  ],
  contact: {
    email: "azeez160604@gmail.com", // Update with Abdul Azeez's email

    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Abdul-Azeez060", // Update with Abdul Azeez's GitHub
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "www.linkedin.com/in/abdul-azeez-md-156822258", // Update with Abdul Azeez's LinkedIn
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Azzu_007__", // Update with Abdul Azeez's X/Twitter
        icon: Icons.x,
        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto:azeez160604@gmail.com", // Update with Abdul Azeez's email
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    // Uncomment and update with Abdul Azeez's work experience
    // {
    //   company: "Company Name",
    //   href: "https://company-website.com",
    //   badges: [],
    //   location: "Location",
    //   title: "Job Title",
    //   logoUrl: "/company-logo.png",
    //   start: "Start Date",
    //   end: "End Date",
    //   description:
    //     "Description of work and achievements",
    // },
  ],
  education: [
    {
      school: "Your University/College Name", // Update with Abdul Azeez's university
      href: "https://your-university-website.com/", // Update with university URL
      degree: "Your Degree Title", // Update with Abdul Azeez's degree
      logoUrl: "/your-university-logo.png", // Update with university logo
      start: "Start Year", // Update with start year
      end: "End Year", // Update with end year
    },
    {
      school: "Your High School Name", // Update with Abdul Azeez's high school
      href: "https://your-school-website.com/", // Update with school URL
      degree: "High School Diploma/Certificate", // Update with appropriate qualification
      logoUrl: "/your-school-logo.png", // Update with school logo
      start: "Start Year", // Update with start year
      end: "End Year", // Update with end year
    },
    // Add more educational institutions as needed
  ],
  projects: [
    {
      title: "ListenFree",
      href: "https://listenfree.in",
      dates: "2024",
      active: true,
      description:
        "A seamless music streaming platform offering ad-free listening with 4k+ active users and 100k+ views. Features playlist management, favorites, recently played, and party rooms.",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "JioSaavn API",
        "Cloudflare Workers",
        "Appwrite",
        "Google OAuth",
        "LocalStorage",
      ],
      links: [
        {
          type: "Website",
          href: "https://listenfree.in",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Abdul-Azeez060/Listenfreedev",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/listenfreepic.png", // Replace with /listenfreepic.png when available
      video: "",
    },
    {
      title: "Velgo",
      href: "https://velgo.abdulazeez.xyz",
      dates: "2024",
      active: true,
      description:
        "Comprehensive full-stack web application with secure OTP authentication, rate limiting, and automated CI/CD deployment on AWS EC2.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Express.js",
        "AWS EC2",
        "GitHub Actions",
        "Nginx",
        "Docker",
      ],
      links: [
        {
          type: "Website",
          href: "https://velgo.abdulazeez.xyz",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Abdul-Azeez060/Velgo",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/velgopic.png", // Replace with /velgopic.png when available
      video: "",
    },
    {
      title: "Graphify",
      href: "#",
      dates: "2024 - Upcoming",
      active: false,
      description:
        "Text-to-Animation Platform using FastAPI, Redis Queue, LLM, and Manim for creating mathematical visualizations and educational content.",
      technologies: [
        "React.js",
        "FastAPI",
        "Redis Queue",
        "Gemini API",
        "Manim",
        "Amazon S3",
        "Kubernetes",
        "KEDA",
      ],
      links: [
        {
          type: "Demo",
          href: "https://www.notion.so/Graphify-Upcoming-product-20e42df80dae80098ad5d892fa6ce306?source=copy_link",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/graphify.png",
      video: "",
    },
    {
      title: "WebPro",
      href: "https://web-pro-bwf1.vercel.app",
      dates: "2024",
      active: true,
      description:
        "AI-powered website builder using React.js and Gemini API for natural language processing and real-time code generation with StackBlitz integration.",
      technologies: [
        "React.js",
        "JavaScript",
        "Gemini API",
        "StackBlitz",
        "Real-time Rendering",
      ],
      links: [
        {
          type: "Website",
          href: "https://web-pro-bwf1.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Abdul-Azeez060/WebPro",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/webpro.png",
      video: "",
    },
    {
      title: "Financial AI Agent",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Sophisticated multi-agent financial system using CrewAI framework with React.js, TypeScript, and FastAPI for comprehensive financial analysis.",
      technologies: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "CrewAI",
        "FastAPI",
        "Python",
        "Multi-Agent Systems",
      ],
      links: [
        {
          type: "Website",
          href: "https://finn-ai-v2.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Abdul-Azeez060/SevenSeas-Google_Solution-",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/finAI.png",
      video: "",
    },
  ],
  hackathons: [
    // Add hackathons from Abdul Azeez's experience if any
  ],
} as const;
