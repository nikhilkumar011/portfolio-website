"use client";

import { useState } from "react";

const SKILLS: Record<string, string[]> = {
  Languages: ["C++", "Java", "JavaScript", "TypeScript", "Python", "SQL", "C"],
  Frontend: ["React.js", "Next.js", "Tailwind CSS", "Shadcn/UI", "TanStack Query", "HTML5", "CSS3"],
  Backend: [
    "Node.js",
    "Express.js",
    "Spring Boot",
    "REST APIs",
    "JWT Auth",
    "Socket.IO",
    "Better Auth",
    "Java Servlets",
  ],
  Databases: ["MongoDB", "Mongoose", "PostgreSQL", "Prisma ORM"],
  Tools: ["Git", "GitHub", "Postman", "Vercel", "Linux"],
  Concepts: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks", "RESTful API Design"],
};

const CATEGORIES = Object.keys(SKILLS);

export default function SkillsSection() {
  const [active, setActive] = useState(CATEGORIES[0]);

  return (
    <section id="skills" className="border-b border-black/10 px-7 py-24 dark:border-white/10 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex items-baseline gap-3.5">
          <span className="whitespace-nowrap font-mono text-xs text-indigo-600 dark:text-indigo-400">
            // 02 SKILLS
          </span>
          <div className="h-px flex-1 bg-black/15 dark:bg-white/15" />
        </div>

        <div className="mb-7 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active === cat
                  ? "border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-black"
                  : "border-black/15 text-neutral-500 hover:border-indigo-500 dark:border-white/15 dark:text-neutral-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2.5">
          {SKILLS[active].map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-black/10 bg-white px-3.5 py-2 font-mono text-[12.5px] dark:border-white/10 dark:bg-[#121214]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}