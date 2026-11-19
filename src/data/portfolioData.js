

export const profile = {
  name: "Prince Raghav",
  role: "Java Full Stack Developer",
  tagline:
    "I build full-stack web apps with Java, Spring Boot, Hibernate, and React — clean APIs, solid databases, and interfaces people enjoy using.",
  availability: "Open to junior full-stack roles",
  email: "prince.raghav1401@gmail.com",
  phone: "+91-7078378216",
  github: "https://github.com/princeraghav1401-maker",
  linkedin: "https://www.linkedin.com/in/princeraghav1401",
  resumeFile: "/resume.pdf",
  location: "Bulandshahr, Uttar Pradesh, India",
};

export const heroBadges = [
  "Java",
  "Spring Boot",
  "React",
  "Hibernate",
  "MySQL",
  "Oracle",
];

/** Hero portrait technology orbit (icons only; labels in tooltips) */
export const heroSkillOrbs = [
  {
    id: "java",
    label: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    slot: "java",
  },
  {
    id: "spring",
    label: "Spring Boot",
    icon: "https://cdn.simpleicons.org/springboot/6DB33F",
    slot: "spring",
  },
  {
    id: "react",
    label: "React",
    icon: "https://cdn.simpleicons.org/react/61DAFB",
    slot: "react",
  },
  {
    id: "mysql",
    label: "MySQL",
    icon: "https://cdn.simpleicons.org/mysql/4479A1",
    slot: "mysql",
  },
  {
    id: "oracle",
    label: "Oracle",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg",
    slot: "oracle",
  },
];

export const aboutStats = [
  { value: "2025", label: "BCA finished" },
  { value: "2025–27", label: "MCA in progress" },
  { value: "6 mo", label: "Full-stack training" },
  { value: "Java", label: "Main focus" },
];

export const aboutParagraphs = [
  "I am a Java full-stack developer. I work with Java, Spring Boot, Hibernate, React, JDBC, Oracle, and MySQL.",
  "The apps I have built cover records, logins, REST APIs, and databases — the ordinary work that makes a product real. OOP, SQL, data structures, SDLC, and MVC are the base under that.",
  "BCA is done. MCA is underway. I want a junior role where the code ships and I keep learning beside people who already do this for a living.",
];

export const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "JavaScript", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "HTML5", "CSS3", "Bootstrap", "Framer Motion"],
  },
  {
    title: "Backend",
    skills: ["JDBC", "Servlets", "Hibernate", "Spring Framework", "Spring MVC", "Spring Boot"],
  },
  {
    title: "Database",
    skills: ["Oracle Database", "MySQL"],
  },
  {
    title: "Tools",
    skills: ["Eclipse IDE", "VS Code", "IntelliJ IDEA", "Postman", "Git", "GitHub"],
  },
  {
    title: "Core concepts",
    skills: [
      "OOP",
      "Collections Framework",
      "Exception Handling",
      "CRUD",
      "MVC Architecture",
      "REST APIs",
      "Data Structures",
      "SDLC",
    ],
  },
];

export const softSkills = [
  "Problem solving",
  "Logical thinking",
  "Quick learning",
  "Team collaboration",
  "Communication",
  "Time management",
];

export const training = {
  company: "CodeSquadz, Noida",
  role: "Java Full Stack Developer Trainee",
  duration: "Aug 2025 – Feb 2026",
  topics: [
    "Core Java & Advanced Java",
    "JDBC & Servlets",
    "Hibernate ORM",
    "Spring Framework, Spring MVC, Spring Boot",
    "ReactJS & JavaScript",
    "HTML5 & CSS3",
    "Oracle Database & MySQL",
    "CRUD operations & database connectivity",
    "Authentication & exception handling",
    "Git / GitHub & debugging",
    "MVC architecture & SDLC",
  ],
};

export const experiences = [
  {
    id: "codesquadz-training",
    icon: "briefcase",
    metaLabel: "PROFESSIONAL DEVELOPMENT",
    metaStatus: "COMPLETED",
    eyebrow: "JAVA FULL STACK",
    role: training.role,
    company: training.company,
    duration: training.duration,
    topicsKicker: "CORE LEARNING",
    topicsTitle: "Hands-on expertise",
    topicsCountLabel: "MODULES",
    topics: training.topics,
    footerTag: "BUILD • LEARN • SHIP",
    footerIndex: "01",
  },
  {
    id: "freelance-rivora",
    icon: "handshake",
    metaLabel: "FREELANCE PROJECT",
    metaStatus: "COMPLETED",
    eyebrow: "REACT / E-COMMERCE",
    role: "Frontend Developer (Freelance)",
    company: "Rivora E-Commerce — Client Project",
    duration: "2026",
    topicsKicker: "DELIVERABLES",
    topicsTitle: "Scope & outcomes",
    topicsCountLabel: "ITEMS",
    topics: [
      "Responsive storefront with product search, filters, and category browsing",
      "Product detail pages with image gallery and related recommendations",
      "Cart, wishlist, and checkout flows with client-side validation",
      "Reusable React component library with Framer Motion micro-interactions",
      "Vite build pipeline, Tailwind CSS theming, and mobile-first layout",
      "GitHub delivery, documentation, and handoff walkthrough with the client",
    ],
    footerTag: "DISCOVER • DESIGN • DELIVER",
    footerIndex: "02",
  },
];

export const projects = [
  {
    id: "cbse-result-portal",
    name: "CBSE Student Result Management System",
    image: "/cbse.png",
    year: "2025 – 2026",
    type: "Java Full Stack Project",
    summary:
      "A school portal for student records and results. Admins sign in, store profile photos in Oracle, and scores calculate themselves.",
    description:
      "A complete Java full-stack application for schools to manage student records and results. Admins register and log in through a session-based authentication flow, then add, update, search and remove student records with server-side validation at every step. Profile images are stored directly as Oracle BLOBs and served back through a dedicated retrieval endpoint, while results are calculated automatically from stored marks. The data layer targets Oracle 10g, including ROWNUM-based pagination for compatibility with older Oracle installations.",
    tech: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "Hibernate",
      "Thymeleaf",
      "Oracle Database",
      "HTML5",
      "CSS3",
    ],
    features: [
      "Add, update, delete and search student records",
      "Admin registration and login",
      "Session-based authentication",
      "Role-based access control",
      "Oracle BLOB profile image storage & retrieval",
      "Automatic result calculation",
      "Server-side validation & duplicate roll-number checks",
      "Exception handling throughout the request flow",
      "Oracle 10g–compatible pagination using ROWNUM",
    ],
    github: "https://github.com/princeraghav1401-maker/CBSE_MANAGEMENT_PORTAL",
    demo: null,
  },
  {
    id: "personal-portfolio",
    name: "Personal Portfolio Website",
    image: "/portfoliyo.png",
    year: "2026",
    type: "React Frontend Project",
    summary:
      "This website. React components, motion, and a contact form wired to EmailJS.",
    description:
      "The portfolio you're viewing right now. Built as a component-based React application with a reusable animation system, a working contact form wired to EmailJS, and careful attention to responsiveness and reduced-motion accessibility across every section.",
    tech: ["React.js", "JavaScript", "HTML5", "CSS3", "Framer Motion", "EmailJS"],
    features: [
      "Fully responsive, component-based architecture",
      "Framer Motion animation system",
      "Working contact form with EmailJS integration",
      "Reusable sections across the site",
      "Motion that respects reduced-motion settings",
    ],
    github: "https://github.com/princeraghav1401-maker",
    demo: null,
  },
  {
    id: "personal-portfolio",
    name: "Skribble_Game",
    image: "/skribble.png",
    year: "2026",
    type: "React Full Stack Project",
    summary:
      "A multiplayer drawing-and-guessing game. Private rooms, a shared canvas, chat, scores, and a winner at the end.",
    description:
      "Developed a real-time multiplayer web application where players can create or join private game rooms using room codes or invite links. The application supports turn-based drawing and guessing, configurable rounds and timers, real-time canvas synchronization using Socket.IO, automatic hints, live chat, scoring, leaderboard ranking, and winner declaration. The project follows a modular frontend-backend architecture using React and TypeScript on the frontend and Node.js, Express.js, and Socket.IO on the backend.",
    tech: ["React.js", "JavaScript", "HTML5 Canvas", "CSS3", "Framer Motion", "Vite" ,"Node.js", "Express.js", "Socket.IO","MySQL"],
    features: [
      "Private Multiplayer Rooms – Create or join rooms using unique room codes and invite links with configurable game settings.",
      "Real-Time Drawing – Synchronized canvas drawing with brush, colors, brush-size control, eraser, undo, and clear tools.",
      "Live Guessing & Chat – Players can submit guesses and communicate through real-time chat during gameplay.",
      "Game & Scoring System – Supports multiple rounds, automatic drawer rotation, timers, hints, correct-guess detection, and live score updates.",
      "Leaderboard & Winner System – Displays real-time player rankings and automatically declares the winner after all rounds.",
    ],
    github: "https://github.com/princeraghav1401-maker/skribbl-clone",
    demo: null,
  },
  {
    id: "React-Full-Stack-Project",
    name: "Rivora-Ecommerce-Website",
    image: "/rivora.png",
    year: "2026",
    type: "React Full Stack Project",
    summary:
      "A shop front in React: search, filters, product pages, cart, wishlist, and checkout.",
    description:
      "Developed a modern and responsive e-commerce web application using React.js and Vite, featuring product browsing, search and filtering, product details, cart and wishlist management, and a smooth checkout experience with responsive UI and animations.",

    tech: ["React.js", "JavaScript", "HTML5", "CSS3", "Framer Motion", "Vite","Tailwind CSS"],
    features: [
      "Product Search & Filter",
      "Product Details",
      "Add to Cart",
      "Wishlist Management",
      "Responsive UI",
    ],
    github: "https://github.com/princeraghav1401-maker/Rivora_Frontend",
    demo: null,
  },
  {
    id: "personal-portfolio",
    name: "Quick-Notes",
    image: "/quicknotes.png",
    year: "2026",
    type: "Java Full Stack Project",
    summary:
      "Private notes with login. JWT, encrypted passwords, pin, search, and categories — each user sees only their own notes.",
    description:
      "Developed a full-stack Notes Management System with secure user authentication and user-specific note management. The application provides JWT-based login and registration, BCrypt password encryption, complete note CRUD operations, pinning, search, category filtering, profile management, validation, and error handling. The project follows a modular frontend-backend architecture using React.js and Vite on the frontend and Java, Spring Boot, Spring Security, and MongoDB on the backend..",
    tech: ["Java 17",
      "Spring Boot",
      "Spring Web",
      "Spring Security",
      "JWT",
      "Spring Data MongoDB",
      "MongoDB",
      "React.js",
      "JavaScript",
      "Vite",
      "Axios",
      "Bootstrap 5",
      "CSS3",
      "Lucide React",
      "Maven"],
    features: [
      "Secure Authentication – User registration and login with JWT-based authentication and BCrypt password encryption.",

      "Notes CRUD Management – Create, view, edit, and delete personal notes with validation and proper error handling.",

      "Pin & Organize Notes – Pin important notes and organize notes using categories and tags.",

      "Search & Category Filtering – Search notes by title or content and filter notes based on categories.",

      "User-Specific Data – Each authenticated user can access and manage only their own notes using secured backend APIs."
    ],
    github: "https://github.com/princeraghav1401-maker/QuickNotes",
    demo: null,
  },
];

export const education = [
  {
    id: "mca",
    degree: "MCA",
    institution: "Marathwada Institute of Technology, Bulandshahr",
    period: "2025 – 2027",
    status: "In progress",
    detail: null,
  },
  {
    id: "bca",
    degree: "BCA",
    institution: "Marathwada Institute of Technology, Bulandshahr",
    period: "2022 – 2025",
    status: "Completed 2025",
    detail: null,
  },
  {
    id: "intermediate",
    degree: "Intermediate",
    institution: "Uttar Pradesh State Board",
    period: "2022",
    status: "65%",
    detail: null,
  },
  {
    id: "highschool",
    degree: "High School",
    institution: "Uttar Pradesh State Board",
    period: "2020",
    status: "78%",
    detail: null,
  },
];

export const certifications = [
  {
    id: "hackerrank-java",
    name: "Java (Basic) Skill Certification",
    issuer: "HackerRank",
  },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];
