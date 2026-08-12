import TerminalTyping from "./terminal-typing";

export default function Hero() {
  return (
    <section className="border-b border-black/10 px-7 pt-32 pb-20 dark:border-white/10 sm:pt-[130px] sm:pb-[90px]">
      <div className="mx-auto max-w-5xl">
        <div className="mb-5 flex items-center gap-2 font-mono text-xs text-indigo-600 dark:text-indigo-400">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
          AVAILABLE FOR OPPORTUNITIES
        </div>

        <TerminalTyping />

        <h1 className="mb-4.5 font-display text-[clamp(34px,6vw,64px)] font-bold leading-[1.05] tracking-tight">
          Nikhil Kumar Tiwari
          <br />
          <span className="text-indigo-600 dark:text-indigo-400">builds full-stack software.</span>
        </h1>

        <p className="mb-9 max-w-lg text-[17px] leading-relaxed text-neutral-500 dark:text-neutral-400">
          Engineering student in Computer Science, focused on building real, working products
          with the MERN stack and Java — from QR-based visitor systems to real-time chat apps.
        </p>

        <div className="flex flex-wrap items-center gap-3.5">
          {/*
            Drop your CV file at /public/Nikhil_Kumar_Tiwari_CV.pdf
            and this link will download it directly.
          */}
          <a
            href="/NKTR.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-5.5 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-85 active:scale-[0.97] dark:bg-white dark:text-black"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
            </svg>
            Download CV
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg border border-black/15 px-5.5 py-3.5 text-sm font-semibold transition-colors hover:border-indigo-500 hover:bg-indigo-500/10 dark:border-white/15"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-black/15 px-5.5 py-3.5 text-sm font-semibold transition-colors hover:border-indigo-500 hover:bg-indigo-500/10 dark:border-white/15"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}