export const siteConfig = {
  name: "Kevin Remon George",
  title: "Data Analyst & Computer Science & AI Student",
  location: "Cairo, Egypt",
  email: "Kevinrgeorge2006@gmail.com",
  phone: "(+20) 1224431131",
  resumeUrl: "/resume.pdf",
  social: {
    linkedin: "https://www.linkedin.com/in/kevin-remon-george-fouad",
    github: "https://github.com/KEvons18",
  },
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ],
};

export const projectsData = [
  {
    title: "Workspace Reservation Desktop Application",
    year: 2026,
    description:
      "Engineered a full-stack desktop application for managing workspace bookings. Implemented robust input validation logic that improved data integrity and reduced invalid entries, delivering a seamless user experience.",
    technologies: ["SQL", "C#", "Electron"],
    githubUrl: "https://github.com/birdbox219/Moazakra-mangemtn-workspace",
    isPlaceholder: false,
  },
  {
    title: "Online Library System",
    year: 2026,
    description:
      "Developed a full-stack web application with a Django REST Framework backend and interactive frontend. Integrated RESTful APIs with consistent data rendering, and elevated UI consistency across all pages for a polished, professional experience.",
    technologies: ["Django", "Django REST Framework", "HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Mark-Emad2/no-mongols-allowed",
    isPlaceholder: false,
  },
  {
    title: "Image Filter Tool",
    year: 2025,
    description:
      "Built a C++ image processing application that applies convolution-based filters — including blur, sharpen, and edge detection — to bitmap images, demonstrating low-level pixel manipulation and algorithmic thinking.",
    technologies: ["C++"],
    githubUrl: "https://github.com/janaessam510/OOP-assignment_1",
    isPlaceholder: false,
  },
  {
    title: "Music Player Application",
    year: 2025,
    description:
      "Engineered a cross-platform desktop music player using JUCE and C++ with full audio playback, media controls, and playlist management, showcasing proficiency in audio programming and desktop GUI development.",
    technologies: ["JUCE", "C++"],
    githubUrl: "https://github.com/kevinremongeorge/music-player",
    isPlaceholder: true,
  },
];

export const skillsData = {
  "Data & BI Tools": ["Power BI", "Tableau", "DAX", "Power Query", "Data Modeling", "ETL", "Business Intelligence Reporting"],
  "Programming Languages": ["Python", "SQL", "C++", "C#", "JavaScript"],
  "Frameworks & Libraries": ["Django", "Django REST Framework", "Electron"],
  "Core Competencies": [
    "Data Visualization",
    "KPI Tracking",
    "HR Analytics",
    "Dashboard Development",
    "Data Storytelling",
    "Frontend/Backend Development",
    "OOP",
    "Image Processing",
    "Audio Programming",
  ],
};

export const experienceData = [
  {
    role: "Freelance Data Analyst",
    company: "Self-Employed",
    period: "Jan 2025 - Present",
    location: "Cairo, Egypt",
    highlights: [
      "Designed and delivered Power BI dashboards for HR analytics, KPI tracking, and business performance monitoring, reducing manual reporting time for multiple clients.",
      "Analyzed business datasets using Python and SQL to identify trends, growth opportunities, and performance bottlenecks.",
      "Communicated findings to non-technical stakeholders through visual data storytelling and actionable reports.",
      "Applied DAX and Power Query to build calculated measures, data models, and automated data transformations.",
    ],
  },
];

export const achievementsData = [
  {
    title: "Microsoft Power BI Specialist",
    organization: "DEPI",
    period: "Jun - Dec 2025",
    description: "Intensive certification program focused on data analytics, dashboard development, and business intelligence using Microsoft Power BI.",
  },
  {
    title: "General Level Certificate",
    organization: "DECI",
    period: "2023",
    description: "General level certification demonstrating foundational competency.",
  },
];

export const educationData = {
  degree: "Bachelor of Computer Science and Artificial Intelligence",
  institution: "Cairo University",
  period: "2024 - 2028",
  coursework: [
    "Data Structures",
    "Algorithms",
    "Artificial Intelligence",
    "Database Systems",
    "Software Engineering",
    "Object-Oriented Programming",
  ],
};

export const languagesData = [
  { language: "Arabic", level: "Native" },
  { language: "English", level: "Professional Working Proficiency" },
];
