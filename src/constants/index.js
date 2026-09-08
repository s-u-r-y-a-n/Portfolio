import { carrent, jobit, tripguide, reactjs, nodejs, mongodb, redux } from "../assets";

export const profile = {
  name: "Surya N",
  role: "Full Stack Developer",
  focus: "React, Node.js, APIs, databases, and cloud development",
  email: "[ADD EMAIL]",
  github: "[ADD LINK]",
  linkedin: "[ADD LINK]",
  resume: "[ADD RESUME PDF]",
};

export const navLinks = [
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "experience", title: "Experience" },
  { id: "contact", title: "Contact" },
];

export const skillGroups = [
  {
    title: "Frontend",
    accent: "cyan",
    skills: ["React.js", "JavaScript", "Redux Toolkit", "React Router", "Vite", "Material UI", "SCSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    accent: "lime",
    skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "JWT Authentication", "WebSockets"],
  },
  {
    title: "Data",
    accent: "amber",
    skills: ["MongoDB", "Mongoose", "MySQL", "Sequelize"],
  },
  {
    title: "Cloud & Tools",
    accent: "coral",
    skills: ["AWS Lambda", "DynamoDB", "S3", "SES", "CloudWatch", "AWS SAM", "Git", "GitHub", "Postman", "Jira"],
  },
];

export const featuredTech = [
  { name: "React", icon: reactjs },
  { name: "Node.js", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Redux", icon: redux },
];

export const projects = [
  {
    number: "01",
    name: "Task Management Application",
    label: "Featured full-stack build",
    description: "A production-style task management platform designed around secure user flows, organized workspaces, and a clear operational dashboard.",
    features: ["JWT access and refresh tokens", "OTP and email verification", "Task CRUD, search, filtering, and analytics", "Protected routes and profile management"],
    tags: ["React", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    image: carrent,
    source_code_link: "[ADD LINK]",
    live_link: "[ADD LINK]",
  },
  {
    number: "02",
    name: "Admission Management System",
    label: "Serverless architecture",
    description: "A cloud-oriented admissions workflow with distinct student, admin, and super-admin paths and a serverless backend foundation.",
    features: ["AWS Lambda and DynamoDB services", "S3 and SES integrations", "JWT authentication and role-based access", "Student, admin, and super-admin workflows"],
    tags: ["AWS Lambda", "DynamoDB", "S3", "SES", "JWT", "AWS SAM"],
    image: jobit,
    source_code_link: "[ADD LINK]",
    live_link: "[ADD LINK]",
  },
  {
    number: "03",
    name: "University Website",
    label: "Responsive web application",
    description: "A responsive university platform connecting a React interface to Node.js services, database integrations, and authenticated workflows.",
    features: ["Responsive React interface", "Express.js REST API integration", "JWT and role-based access concepts", "Real-time communication with WebSockets"],
    tags: ["React", "Node.js", "Express.js", "MongoDB", "WebSockets"],
    image: tripguide,
    source_code_link: "[ADD LINK]",
    live_link: "[ADD LINK]",
  },
  {
    number: "04",
    name: "Enterprise Engineering Case Study",
    label: "Professional experience",
    description: "A confidentiality-conscious summary of work across full-stack delivery, API integration, debugging, and production support without exposing private company details.",
    features: ["Microservices exposure and GraphQL", "TypeScript and Redux workflows", "CloudWatch-based debugging and monitoring", "Jira-based delivery and production investigation"],
    tags: ["TypeScript", "Redux", "GraphQL", "Microservices", "CloudWatch", "Jira"],
    image: null,
    source_code_link: "[ADD LINK]",
    live_link: "[ADD LINK]",
  },
];

export const experience = {
  title: "Full Stack Development",
  company: "Professional experience",
  duration: "Approximately 1.5 years",
  points: [
    "Build full-stack web application features with React, Node.js, Express.js, and database integrations.",
    "Develop and integrate REST APIs, authentication flows, authorization, and role-based access control.",
    "Investigate production issues through structured debugging, logs, and CloudWatch-based monitoring.",
    "Work with cloud and serverless concepts, microservices exposure, GraphQL, and Agile/Jira workflows.",
  ],
};

export const certifications = [
  "Meta Front-End Developer Professional Certificate",
  "The Complete 2024 Web Development Bootcamp",
  "Web Development Certification - Karka Academy",
];
