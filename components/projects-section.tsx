type Project = {
  name: string;
  desc: string;
  tags: string[];
  url: string;
  full?: boolean;
};

const PROJECTS: Project[] = [
  {
    name: "LeetCode Clone",
    desc: "A full-stack LeetCode-inspired coding platform where users can solve programming problems, run code in multiple languages, and receive instant feedback through an integrated online code execution system.Built with Next.js, Prisma, PostgreSQL, Judge0, and Better Auth, it features secure authentication, problem management, test case validation, submissions, and role-based access for admins and users.",
    tags: ["Next.js", "Postgresql", "Prisma", "docker", "Judge0","BetterAuth"],
    url: "https://github.com/nikhilkumar011/Leetcode-Clone",
    full: true,
  },
  {
    name: "Visitor Pass Management System",
    desc: "Full-stack MERN system for managing visitor requests, approvals, QR-based entry, and automated email notifications for organizations.",
    tags: ["MongoDB", "Express", "React", "Node.js", "QR Code"],
    url: "https://github.com/nikhilkumar011/VISITOR-PASS-MANAGEMENT-SYSTEM",
    full: true,
  },
  {
    name: "unmuteX",
    desc: "Next.js 16 landing page and community platform for public speaking practice — brand story, founder spotlight, program journey, and a feedback flow.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    url: "https://github.com/nikhilkumar011/unmuteX",
  },
  {
    name: "Fullstack Chat Application",
    desc: "Real-time chat application built with React, Node.js and Socket.IO for instant bidirectional messaging.",
    tags: ["React", "Node.js", "Socket.IO"],
    url: "https://github.com/nikhilkumar011/Fullstack-Chat-Application",
  },
  {
    name: "Blog Application (MERN)",
    desc: "Full-stack blog platform where users create and manage posts, interact with others, and explore content via search and filtering.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    url: "https://github.com/nikhilkumar011/Blog-Application-MERN",
  },
  {
    name: "Movie Review Predictor",
    desc: "Web app that predicts whether a movie review is positive or negative using a Logistic Regression machine learning model.",
    tags: ["Python", "Machine Learning", "Logistic Regression"],
    url: "https://github.com/nikhilkumar011/Movie-review-predictor",
  },
  {
    name: "The Laundry Service Website",
    desc: "Frontend for a laundry service — pick services, book them, and receive a confirmation email via EmailJS.",
    tags: ["HTML", "Tailwind CSS", "JavaScript", "EmailJS"],
    url: "https://github.com/nikhilkumar011/The-laundry-service-website",
  },
  {
    name: "To-Do List App",
    desc: "A clean, functional task manager for creating, tracking and completing day-to-day to-dos.",
    tags: ["JavaScript", "HTML", "CSS"],
    url: "https://github.com/nikhilkumar011/To-do-list-app",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="border-b border-black/10 px-7 py-24 dark:border-white/10 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex items-baseline gap-3.5">
          <span className="whitespace-nowrap font-mono text-xs text-indigo-600 dark:text-indigo-400">
            // 03 PROJECTS
          </span>
          <div className="h-px flex-1 bg-black/15 dark:bg-white/15" />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {PROJECTS.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col rounded-xl border border-black/10 bg-white p-6 transition-all hover:-translate-y-1 hover:border-indigo-500 dark:border-white/10 dark:bg-[#121214] ${
                p.full ? "sm:col-span-2" : ""
              }`}
            >
              <div className="mb-3.5 flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-semibold tracking-tight">{p.name}</h3>
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-black/15 transition-all group-hover:rotate-45 group-hover:border-indigo-500 group-hover:bg-indigo-500 dark:border-white/15">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="group-hover:stroke-white"
                  >
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </span>
              </div>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-indigo-500/10 px-2.5 py-1 font-mono text-[11px] text-indigo-600 dark:text-indigo-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}