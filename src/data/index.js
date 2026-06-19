import {
  IconDeviceDesktopCode,
  IconServerCog,
  IconStack3,
  IconCreditCard,
  IconBroadcast,
  IconBulb,
  IconCertificate,
  IconBrandReact,
  IconBrandNodejs,
  IconCode,
  IconTerminal2,
  IconCloud,
} from "@tabler/icons-react";
export const projects = [
  {
    id: 1,
    label: "Real-time Communication",
    title: "Real-Time Chat Application",
    description:
      "Full-featured messaging platform with bi-directional communication via Socket.io — private rooms, typing indicators, read receipts, and live presence tracking. Architected for thousands of concurrent users with horizontal scaling in mind.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    github: "https://github.com/shastriarya",
    live: null,
  },
  {
    id: 2,
    label: "E-Commerce",
    title: "Jewelry E-Commerce Platform",
    description:
      "End-to-end luxury e-commerce experience — product catalog, cart, checkout, order tracking, and a full admin dashboard. Mobile-first, fast, and conversion-optimised from day one.",
    tech: ["Next.js", "MongoDB", "Tailwind CSS", "Node.js"],
    github: "https://github.com/shastriarya",
    live: null,
  },
  {
    id: 3,
    label: "Fintech Integration",
    title: "Payment Gateway Integration",
    description:
      "Production-grade multi-provider payment flow with Razorpay and Stripe. Webhook verification, idempotent transactions, refund handling, and a full audit log. PCI-aware architecture throughout.",
    tech: ["Node.js", "Razorpay", "Stripe", "Express", "MongoDB"],
    github: "https://github.com/shastriarya",
    live: null,
  },
  {
    id: 4,
    label: "Video Communication",
    title: "WebRTC Video Calling Platform",
    description:
      "Peer-to-peer video calling with WebRTC, STUN/TURN server integration, screen sharing, and multi-participant room management. Handles NAT traversal and network topology edge cases cleanly.",
    tech: ["WebRTC", "Socket.io", "Node.js", "React"],
    github: "https://github.com/shastriarya",
    live: null,
  },
  {
    id: 5,
    label: "Healthcare SaaS",
    title: "Healthcare Appointment System",
    description:
      "Full clinic management system — doctor schedules, patient records, smart booking engine, automated email reminders, and admin controls. Designed for real clinical workflow, not demo scenarios.",
    tech: ["React", "Node.js", "MongoDB", "Nodemailer", "Express"],
    github: "https://github.com/shastriarya",
    live: null,
  },
];

export const skillGroups = [
  {
    name: "Languages",
    items: ["JavaScript", "Java", "Python", "C"],
  },
  {
    name: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML5 / CSS3"],
  },
  {
    name: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "WebSockets"],
  },
  {
    name: "Database & Cloud",
    items: ["MongoDB", "MySQL", "Mongoose", "Cloud Basics"],
  },
  {
    name: "Realtime & Media",
    items: ["Socket.io", "WebRTC", "STUN / TURN"],
  },
  {
    name: "DevOps & Tooling",
    items: ["Git / GitHub", "Docker", "Linux", "Postman"],
  },
];
export const services = [
  {
    icon: IconDeviceDesktopCode,
    name: "Frontend Engineering",
    description:
      "React and Next.js applications with performance-first architecture, accessibility, and pixel-precise UI implementation.",
  },
  {
    icon: IconServerCog,
    name: "Backend & API Design",
    description:
      "Scalable Node.js APIs with clean architecture, thorough auth, database design, and production-ready error handling.",
  },
  {
    icon: IconStack3,
    name: "MERN Stack Development",
    description:
      "Full-stack product development from zero. MongoDB, Express, React, Node.js — the complete package, delivered as a working system.",
  },
  {
    icon: IconCreditCard,
    name: "Payment Integrations",
    description:
      "Razorpay and Stripe payment flows with webhooks, idempotency, refunds, and reconciliation logic built in from the start.",
  },
  {
    icon: IconBroadcast,
    name: "Real-Time Systems",
    description:
      "WebSocket-based chat, live collaboration, and WebRTC video calling infrastructure — built for reliability at scale.",
  },
  {
    icon: IconBulb,
    name: "Consulting & Architecture",
    description:
      "Technical review, stack decisions, and codebase audits for teams who want to ship faster without accumulating debt.",
  },
];

export const experiences = [
  {
    period: "2026 – Present",
    role: "Freelance Full Stack Developer",
    company: "Independent · Remote",
    description:
      "Building production applications for clients across e-commerce, healthcare, and fintech. End-to-end ownership from architecture to deployment.",
  },
  {
    period: "2025",
    role: "Backend & APIs Specialization",
    company: "Self-Directed",
    description:
      "Deep focus on Node.js, REST API design patterns, JWT authentication, MongoDB aggregation pipelines, and real-time systems with WebSockets.",
  },
  {
    period: "2024",
    role: "Frontend & React Development",
    company: "Self-Directed",
    description:
      "Transitioned from static HTML/CSS to component architecture with React. Adopted Tailwind CSS and Next.js. Shipped first full-stack applications.",
  },
  {
    period: "2023",
    role: "Programming Foundations",
    company: "Bhubanswar, Odisha",
    description:
      "Started with C and Java. Built a rigorous base in data structures, OOP, and algorithms that still informs how I think about systems today.",
  },
];
export const certifications = [
  {
    icon: IconCertificate,
    name: "Full Stack Web Development",
    org: "Udemy",
    year: "2023",
  },
  {
    icon: IconBrandReact,
    name: "React — The Complete Guide",
    org: "Udemy",
    year: "2023",
  },
  {
    icon: IconBrandNodejs,
    name: "Node.js, Express, MongoDB",
    org: "Coursera",
    year: "2023",
  },
  {
    icon: IconCode,
    name: "Java Programming Masterclass",
    org: "Udemy",
    year: "2022",
  },
  {
    icon: IconTerminal2,
    name: "Linux Fundamentals",
    org: "Linux Foundation",
    year: "2024",
  },
  {
    icon: IconCloud,
    name: "Cloud Practitioner Essentials",
    org: "AWS",
    year: "2024",
  },
];
export const stats = [
  { number: "5+", label: "Production apps shipped and maintained" },
  { number: "6", label: "Certifications earned across platforms" },
  { number: "3", label: "Real-time platforms built from scratch" },
  { number: "2+", label: "Years of consistent self-driven learning" },
];

export const testimonials = [
  {
    quote:
      "Arya doesn't just build what you ask — he asks the right questions first, then delivers something better than you imagined. The real-time chat system he built for us handles thousands of users without a hiccup.",
    name: "Rahul Kumar",
    role: "Founder, TechStart India",
    initials: "RK",
  },
  {
    quote:
      "The payment integration Arya built is rock solid — we've processed over ₹50L through it with zero critical bugs. He documented everything meticulously, which made handing off to our team seamless.",
    name: "Priya Mehta",
    role: "CTO, ShopBridge",
    initials: "PM",
  },
  {
    quote:
      "We needed a developer who could own the entire stack. Arya handled our healthcare booking system end-to-end — from database design to the patient-facing UI. Exceptional attention to detail.",
    name: "Dr. Divya Sharma",
    role: "Director, CareClinic Network",
    initials: "DS",
  },
  {
    quote:
      "Clean code, fast delivery, zero drama. Arya built our e-commerce platform on schedule and it performs brilliantly. Every component is well-structured — our team extended it without needing to refactor anything.",
    name: "Aditya Nair",
    role: "Co-founder, Gems & Glory",
    initials: "AN",
  },
];
