"use client";

import { useEffect, useRef, useState } from "react";

const PHRASES = [
  "whoami -> Computer Science engineer",
  "cat skills.json | grep MERN",
  "npm run build-future",
];

export default function TerminalTyping() {
  const [text, setText] = useState("");
  const phraseIndex = useRef(0);
  const charIndex = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      const word = PHRASES[phraseIndex.current];

      if (!deleting.current) {
        charIndex.current++;
        setText(word.slice(0, charIndex.current));
        if (charIndex.current === word.length) {
          deleting.current = true;
          timeout = setTimeout(tick, 1600);
          return;
        }
      } else {
        charIndex.current--;
        setText(word.slice(0, charIndex.current));
        if (charIndex.current === 0) {
          deleting.current = false;
          phraseIndex.current = (phraseIndex.current + 1) % PHRASES.length;
        }
      }
      timeout = setTimeout(tick, deleting.current ? 28 : 48);
    };

    timeout = setTimeout(tick, 400);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="mb-9 max-w-xl rounded-xl border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-[#121214]">
      <div className="flex items-center gap-2 border-b border-black/10 px-3.5 py-2.5 dark:border-white/10">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
      </div>
      <div className="min-h-[92px] px-5 py-4 font-mono text-sm leading-relaxed">
        <span className="text-indigo-600 dark:text-indigo-400">nikhil@dev</span>
        <span className="text-neutral-500">:~$ </span>
        <span>{text}</span>
        <span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-indigo-600 align-middle dark:bg-indigo-400" />
      </div>
    </div>
  );
}