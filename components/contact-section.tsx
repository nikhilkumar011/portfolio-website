const LINKS = [
  {
    label: "Email",
    href: "mailto:nikhilkumar.0112358@gmail.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 6l9 7 9-7M3 6h18v12H3z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/nikhilkumar011",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.96.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 015.83 0c2.22-1.5 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.42.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.21 0 .31.21.66.79.55A11.53 11.53 0 0023.5 12.02C23.5 5.74 18.27.5 12 .5z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nikhil-kumar-tiwari-8b16b0376/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/nikhil73kumar",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="px-7 py-24 sm:py-28">
      <div className="mx-auto max-w-5xl text-center">
        <div className="mb-4.5 font-mono text-xs text-indigo-600 dark:text-indigo-400">// 04 CONTACT</div>
        <h2 className="mb-4.5 font-display text-[clamp(28px,5vw,46px)] font-bold tracking-tight">
          Let&apos;s build something.
        </h2>
        <p className="mb-10 text-base text-neutral-500 dark:text-neutral-400">
          Open to internships, collaborations, and interesting problems.
        </p>
        <div className="flex flex-wrap justify-center gap-3.5">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label === "Email" ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-full border border-black/15 px-5 py-3 text-sm font-medium transition-colors hover:border-indigo-500 hover:bg-indigo-500 hover:text-white dark:border-white/15"
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <footer className="mt-20 text-center font-mono text-[12.5px] text-neutral-500 dark:text-neutral-400">
        © 2026 Nikhil Kumar Tiwari — built with Next.js &amp; Tailwind CSS
      </footer>
    </section>
  );
}