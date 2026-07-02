import ThemeToggle from "./theme-toggle";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#FAFAF7]/80 backdrop-blur-md dark:border-white/10 dark:bg-[#0A0A0B]/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-7 py-4.5">
        <a href="#top" className="text-base font-semibold tracking-tight">
          Nikhil<span className="text-indigo-600 dark:text-indigo-400">.</span>dev
        </a>

        <nav className="hidden gap-8 sm:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}