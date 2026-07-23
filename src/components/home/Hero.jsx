import { useState, useEffect } from "react";
import "../../animation.css";
import Reveal from "../Reveal";


/** Minimal inline icons — no external icon-library dependency. */
function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" {...props}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.68 5.4-5.24 5.68.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12 24 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2.5" />
      <path d="m3 6.5 9 6.25L21 6.5" />
    </svg>
  );
}

/**
 * HeroLine
 * One line of the name block, revealed via an editorial mask-wipe: the text
 * is fully in place from the start, and a solid panel covering it wipes away
 * left-to-right (anchored right, scaleX 1 -> 0) like a curtain pulling back.
 * `delayMs` staggers each line so they land one after another.
 */
function HeroLine({
  children,
  delayMs,
  active,
  outline = false,
  textClassName = "",
}) {
  return (
    <div className="hero-line-wrap">
      <h1
        className={`
          text-center lg:text-left
          text-[clamp(1.6rem,8vw,2.6rem)] lg:text-[clamp(2.8rem,6vw,4.4rem)] xl:text-[clamp(2.2rem,6vw,6.2rem)]
          font-black
          uppercase
          leading-none
          tracking-tight
          font-['Arial_Black','Helvetica_Neue',Arial,sans-serif]
          ${
            outline
              ? "text-transparent [-webkit-text-stroke:2px_#f5f0e8]"
              : "text-[#f5f0e8]"
          }
          ${textClassName}
        `}
      >
        {children}
      </h1>

      <span
        aria-hidden="true"
        className={`hero-mask ${active ? "hero-mask--active" : ""}`}
        style={active ? { animationDelay: `${delayMs}ms` } : undefined}
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
    <section className="bg-[#0a0a0a] flex flex-col min-h-[calc(100vh-94px)] border-b border-white/10">
      {/* lg:gap-15 xl:gap-40 */}
      <div className="flex-1 min-h-0 max-w-[1550px] grid grid-cols-1 gap-5 content-center lg:content-center lg:grid-cols-[1.35fr_1fr] lg:mx-auto lg:gap-15 xl:grid-cols-[minmax(auto,1fr)_minmax(auto,1fr)] xl:gap-16 xl:mx-auto">
        {/* Left — name, bio, quick facts. On mobile/tablet this comes AFTER the
            portrait (order-2); on desktop it's back on the left (lg:order-1). */}
        <div className="order-2 lg:order-1 flex flex-col items-center text-center justify-start gap-4 lg:gap-8 px-6 pt-0 pb-14 lg:py-10 lg:items-start lg:justify-center lg:text-left">
          <div>
            <HeroLine delayMs={100} active={active}>
              Dean Paolo
            </HeroLine>
            <div className="mt-1 lg:mt-0">
              <HeroLine delayMs={280} active={active} outline>
                Bautista.
              </HeroLine>
            </div>
          </div>

          {/* Bio */}
          <Reveal active={active} delayMs={520} className="max-w-[52ch]">
            <span className="block text-[#f5f0e8]/40 text-xs tracking-widest uppercase font-mono mb-3">
              About
            </span>
            <p className="text-[#f5f0e8]/80 text-base lg:text-lg leading-relaxed">
              {/* TODO: swap in real bio copy */}
              Full-stack developer who takes products from a blank schema to a live deploy
              React and Node, PHP and Laravel, SQL and MongoDB. Built secure authentication systems, 
              role-based access control, AI-integrated tools, and the UIs that bring them together, 
              through an internship, a capstone project, and independent apps.
            </p>
          </Reveal>

          {/* Quick facts (desktop) / social icons (mobile & tablet) */}
          <Reveal active={active} delayMs={680} className="w-full">
          {/* Social icons — TODO: swap in real profile URLs */}
          <div className="flex items-center justify-center lg:justify-start gap-6">
            <a
              href="https://github.com/deanbautista"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[#f5f0e8]/60 hover:text-[#a8e63d] transition-colors"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/dean-paolo-bautista-6145083ba/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#f5f0e8]/60 hover:text-[#a8e63d] transition-colors"
            >
              <LinkedinIcon />
            </a>
            <a
              href="mailto:you@example.com"
              aria-label="Email"
              className="text-[#f5f0e8]/60 hover:text-[#a8e63d] transition-colors"
            >
              <MailIcon />
            </a>
          </div>
        </Reveal>
        </div>

        {/* Right — portrait. On mobile/tablet this is a centered circular
            avatar above the name (order-1); on desktop it's the full-bleed
            photo on the right (lg:order-2). */}
        <div className="order-1 lg:order-2 relative flex justify-center items-center pt-8 pb-0 lg:py-0 min-h-0 lg:ml-0 xl:ml-0">
          <Reveal
            active={active}
            delayMs={360}
            className="relative w-52 h-52 sm:w-60 sm:h-60 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden group"
          >
            {/* Monogram fallback, sits behind the photo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[#f5f0e8]/10 text-[clamp(2.5rem,10vw,8rem)] font-black font-['Arial_Black','Helvetica_Neue',Arial,sans-serif]">
                DPB
              </span>
            </div>

            <img
              src="/profile/profile.jpg"
              alt="Portrait of Dean Paolo Bautista"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
              className="relative w-full h-full object-cover object-top
                        transition-all duration-700 ease-out
                        group-hover:scale-[1.03]"
            />

            {/* Faint tint so the photo reads as part of the same palette */}
            <div className="pointer-events-none absolute inset-0 bg-[#a8e63d] mix-blend-color opacity-[0.08] group-hover:opacity-0 transition-opacity duration-700" />
          </Reveal>

        </div>
      </div>
    </section>
  );
}