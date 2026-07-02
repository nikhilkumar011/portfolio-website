export default function AboutSection() {
  return (
    <section id="about" className="border-b border-black/10 px-7 py-24 dark:border-white/10 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex items-baseline gap-3.5">
          <span className="whitespace-nowrap font-mono text-xs text-indigo-600 dark:text-indigo-400">
            // 01 ABOUT
          </span>
          <div className="h-px flex-1 bg-black/15 dark:bg-white/15" />
        </div>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-[1.1fr_0.9fr] sm:gap-16">
          <div className="space-y-4.5 text-[15.5px] leading-[1.8] text-neutral-500 dark:text-neutral-400">
            <p>
              I&apos;m <strong className="font-semibold text-neutral-900 dark:text-white">Nikhil Kumar Tiwari</strong>,
              a Computer Science engineering student who enjoys taking an idea all the way from a
              database schema to a deployed, working interface. Most of what I build lives in the{" "}
              <strong className="font-semibold text-neutral-900 dark:text-white">MERN stack</strong>, with growing
              experience in <strong className="font-semibold text-neutral-900 dark:text-white">Java &amp; Spring Boot</strong>{" "}
              for backend systems.
            </p>
            <p>
              I like systems that have a real workflow behind them — approvals, authentication,
              real-time updates — rather than just static pages. That&apos;s shown up in projects
              ranging from a{" "}
              <strong className="font-semibold text-neutral-900 dark:text-white">visitor management system</strong> with
              QR-based entry to a{" "}
              <strong className="font-semibold text-neutral-900 dark:text-white">real-time chat application</strong>{" "}
              built on Socket.IO.
            </p>
            <p>
              Outside of project work, I&apos;m steadily going deeper into{" "}
              <strong className="font-semibold text-neutral-900 dark:text-white">
                DSA, DBMS, Operating Systems and Computer Networks
              </strong>{" "}
              — the fundamentals that make the frameworks make sense.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-black/10 bg-black/10 dark:border-white/10 dark:bg-white/10">
            <StatCell num="7+" label="Projects shipped" />
            <StatCell num="MERN" label="Primary stack" />
            <StatCell num="Java" label="+ Spring Boot" />
            <StatCell num="CS" label="Engineering student" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCell({ num, label }: { num: string; label: string }) {
  return (
    <div className="bg-white p-5 dark:bg-[#121214]">
      <div className="font-display text-[26px] font-bold text-indigo-600 dark:text-indigo-400">{num}</div>
      <div className="mt-1 font-mono text-xs text-neutral-500 dark:text-neutral-400">{label}</div>
    </div>
  );
}