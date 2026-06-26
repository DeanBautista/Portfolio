import { useState, useEffect } from "react";

const COMMANDS = [
  "git push origin main",
  "let me = fullStackDev();",
  "pnpm run dev",
];

const TYPING_SPEED = 60;
const BACKSPACE_SPEED = 35;
const PAUSE_AFTER_TYPE = 2500;
const PAUSE_AFTER_BACKSPACE = 300;

function TerminalTyper() {
  const [displayed, setDisplayed] = useState("");
  const [cmdIndex, setCmdIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const current = COMMANDS[cmdIndex];

    if (isPaused) {
      const timeout = setTimeout(() => {
        setIsPaused(false);
        setIsTyping(false);
      }, PAUSE_AFTER_TYPE);
      return () => clearTimeout(timeout);
    }

    if (isTyping) {
      if (displayed.length < current.length) {
        const timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, TYPING_SPEED);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing — pause before backspacing
        setIsPaused(true);
      }
    } else {
      // Backspacing
      if (displayed.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, BACKSPACE_SPEED);
        return () => clearTimeout(timeout);
      } else {
        // Finished backspacing — move to next command
        const timeout = setTimeout(() => {
          setCmdIndex((i) => (i + 1) % COMMANDS.length);
          setIsTyping(true);
        }, PAUSE_AFTER_BACKSPACE);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayed, isTyping, isPaused, cmdIndex]);

  return (
    <span className="text-[#a8e63d]">
      {displayed}
      <span className="inline-block w-[2px] h-[1em] bg-[#a8e63d] ml-[2px] align-middle animate-pulse" />
    </span>
  );
}

export default function Hero() {
  return (
    <section className="bg-[#0a0a0a] flex flex-col min-h-[calc(100vh-94px)]">
      {/* Name block */}
      <div className="flex flex-col px-6 justify-center flex-1">

        {/* Clip wrapper — hides DEAN PAOLO below until animated in */}
        <div className="overflow-hidden">
          <h1
            className="animate-hero-reveal font-black uppercase leading-none tracking-tight text-[clamp(3rem,13vw,11rem)] text-[#f5f0e8] text-left"
            style={{ fontFamily: "'Arial Black', 'Helvetica Neue', Arial, sans-serif" }}
          >
            Dean Paolo
          </h1>
        </div>

        {/* Clip wrapper — hides BAUTISTA. below until animated in */}
        <div className="overflow-hidden mt-1 md:mt-0">
          <h1
            className="animate-hero-reveal font-black uppercase leading-none tracking-tight text-[clamp(3rem,13vw,11rem)] text-left"
            style={{
              fontFamily: "'Arial Black', 'Helvetica Neue', Arial, sans-serif",
              color: "transparent",
              WebkitTextStroke: "2px #f5f0e8",
            }}
          >
            <span className="hidden md:inline">Bautista.</span>
            <span className="inline md:hidden">Bautista</span>
          </h1>
        </div>

      </div>

      {/* Bottom info row — border bleeds full width */}
      <div className="border-t border-b border-white/10">
        <div className="flex flex-col md:flex-row md:items-start">

          {/* Tagline — left half */}
          <div className="md:w-1/2 px-6 pt-5 md:pt-6 border-b pb-6 md:border-b-0 md:border-r border-white/10">
            <p className="text-[#f5f0e8]/70 text-sm leading-relaxed font-mono text-left lg:w-[80%] 2xl:w-[60%]">
              Building full-stack web products — from database schema to deployment pipeline — with clarity and care.
            </p>
          </div>

          {/* Terminal block — right half */}
          <div className="md:w-1/2 px-6 pt-5 md:pt-6 pb-6 flex flex-col gap-1.5">
            <span className="text-[#f5f0e8]/40 text-xs tracking-widest uppercase font-mono text-left">
              Current
            </span>
            <div className="flex items-center gap-2 font-mono text-sm justify-start">
              <span className="text-[#f5f0e8]/40">$</span>
              <TerminalTyper />
            </div>
          </div>

        </div>
        {/* Bottom border — full width */}
        <div className="border-t border-white/10" />
      </div>
    </section>
  );
}