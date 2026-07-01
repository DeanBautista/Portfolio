import { useState, useEffect } from "react";
import "../../animation.css";

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
        setIsPaused(true);
      }
    } else {
      if (displayed.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, BACKSPACE_SPEED);
        return () => clearTimeout(timeout);
      } else {
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

/**
 * HeroLine
 * One line of the name block, revealed via an editorial mask-wipe: the text
 * is fully in place from the start, and a solid panel covering it wipes away
 * left-to-right (anchored right, scaleX 1 -> 0) like a curtain pulling back.
 * `delayMs` staggers each line so they land one after another.
 */
function HeroLine({ children, delayMs, active, outline = false, textClassName = "" }) {
  return (
    <div className="hero-line-wrap">
      <h1
        className={`font-black uppercase leading-none tracking-tight text-[clamp(3rem,13vw,11rem)] text-left ${textClassName}`}
        style={{
          fontFamily: "'Arial Black', 'Helvetica Neue', Arial, sans-serif",
          ...(outline
            ? { color: "transparent", WebkitTextStroke: "2px #f5f0e8" }
            : { color: "#f5f0e8" }),
        }}
      >
        {children}
      </h1>

      {/* Mask panel — covers the line, then wipes away to reveal it */}
      <span
        aria-hidden="true"
        className={`hero-mask ${active ? "hero-mask--active" : ""}`}
        style={{ animationDelay: active ? `${delayMs}ms` : undefined }}
      />
    </div>
  );
}

export default function Hero() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Small tick so the initial (hidden) state paints before we flip to active —
    // guarantees the transition actually runs instead of snapping in.
    const t = setTimeout(() => setActive(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="bg-[#0a0a0a] flex flex-col min-h-[calc(100vh-94px)]">
      {/* Name block */}
      <div className="flex flex-col px-6 justify-center flex-1">
        <HeroLine delayMs={100} active={active}>
          Dean Paolo
        </HeroLine>

        <div className="mt-1 md:mt-0">
          <HeroLine delayMs={280} active={active} outline>
            <span className="hidden md:inline">Bautista.</span>
            <span className="inline md:hidden">Bautista</span>
          </HeroLine>
        </div>
      </div>

      {/* Bottom info row — fades/slides in after the name has landed */}
      <div
        className={`hero-fade-row border-t border-b border-white/10 ${active ? "hero-fade-row--active" : ""}`}
      >
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