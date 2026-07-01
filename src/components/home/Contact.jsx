import { useEffect, useState } from "react";
import Reveal from "../Reveal";

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    invert: true,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    invert: false,
  },
  {
    name: "Telegram",
    url: "https://t.me/",
    icon: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
    invert: true,
  },
  {
    name: "Discord",
    url: "https://discord.com/",
    icon: "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a69f118df70ad7828d4_icon_clyde_blurple_RGB.svg",
    invert: true,
  },
];

const EMAIL = "deanpaolo.bautista@gmail.com";

function TerminalLine() {
  const text = 'echo "Let\'s build something."';
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (displayed.length < text.length) {
      const t = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, 45);
      return () => clearTimeout(t);
    } else {
      setDone(true);
    }
  }, [displayed, text]);

  return (
    <div className="flex items-center gap-2 font-mono text-sm">
      <span className="text-[#a8e63d]/60">$</span>
      <span className="text-[#a8e63d]">{displayed}</span>
      {!done && (
        <span className="inline-block w-[2px] h-[1em] bg-[#a8e63d] ml-[1px] align-middle animate-pulse" />
      )}
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="px-6 pt-5 pb-6 md:pt-6">
      <p className="text-[#f5f0e8]/30 font-mono text-[10px] tracking-widest uppercase mb-4">
        Find me on
      </p>
      <ul className="flex flex-col gap-3">
        {SOCIAL_LINKS.map((link) => (
          <li key={link.name}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 w-fit"
            >
              <img
                src={link.icon}
                alt={link.name}
                width={18}
                height={18}
                className="opacity-40 group-hover:opacity-80 transition-opacity duration-200"
                style={{ filter: link.invert ? "invert(1)" : undefined }}
              />
              <span className="text-[#f5f0e8]/40 group-hover:text-[#f5f0e8]/80 font-mono text-sm tracking-wide transition-colors duration-200">
                {link.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-[#0a0a0a] px-6 py-16">
      {/* Section heading */}
      <Reveal>
        <div className="flex items-baseline gap-3 mb-10">
          <span className="text-[#a8e63d] font-mono text-xs tracking-widest" aria-hidden="true">
            03.
          </span>
          <h2
            className="text-[#f5f0e8] font-black text-3xl md:text-4xl leading-none tracking-tight"
            style={{ fontFamily: "'Arial Black', 'Helvetica Neue', Arial, sans-serif" }}
          >
            Get in Touch
          </h2>
        </div>
      </Reveal>

      {/* Card — stacked on mobile, two-column on md+ */}
      <Reveal delay={120} y={24}>
        <div className="border border-white/10">

          {/* Mobile layout: email on top, social below (border-b between) */}
          <div className="md:hidden">
            <div className="px-6 pt-6 pb-6 border-b border-white/10">
              <p className="text-[#f5f0e8]/30 font-mono text-[10px] tracking-widest uppercase mb-4">
                Email
              </p>
              <button
                onClick={handleCopy}
                className="group flex items-center gap-3 text-left"
                aria-label="Copy email address"
              >
                <span
                  className="text-[#f5f0e8] font-black text-xl tracking-tight group-hover:text-[#a8e63d] transition-colors duration-200"
                  style={{ fontFamily: "'Arial Black', 'Helvetica Neue', Arial, sans-serif" }}
                >
                  {EMAIL}
                </span>
                <span className="text-[#f5f0e8]/20 group-hover:text-[#a8e63d]/60 font-mono text-xs transition-colors duration-200">
                  {copied ? "copied!" : "copy"}
                </span>
              </button>
              <div className="mt-6">
                <TerminalLine />
              </div>
            </div>
            <SocialLinks />
          </div>

          {/* Desktop layout: two columns side by side */}
          <div className="hidden md:flex">
            {/* Left col — email + terminal */}
            <div className="flex-1 px-8 py-8 border-r border-white/10">
              <p className="text-[#f5f0e8]/30 font-mono text-[10px] tracking-widest uppercase mb-5">
                Email
              </p>
              <button
                onClick={handleCopy}
                className="group flex items-center gap-3 text-left"
                aria-label="Copy email address"
              >
                <span
                  className="text-[#f5f0e8] font-black text-2xl lg:text-3xl tracking-tight group-hover:text-[#a8e63d] transition-colors duration-200"
                  style={{ fontFamily: "'Arial Black', 'Helvetica Neue', Arial, sans-serif" }}
                >
                  {EMAIL}
                </span>
                <span className="text-[#f5f0e8]/20 group-hover:text-[#a8e63d]/60 font-mono text-xs transition-colors duration-200">
                  {copied ? "copied!" : "copy"}
                </span>
              </button>

              {/* Divider */}
              <div className="border-t border-white/10 mt-8 mb-6" />

              <TerminalLine />
            </div>

            {/* Right col — social links */}
            <div className="flex-1 w-64 lg:w-72 px-8 py-8 shrink-0">
              <p className="text-[#f5f0e8]/30 font-mono text-[10px] tracking-widest uppercase mb-5">
                Find me on
              </p>
              <ul className="flex flex-col gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 w-fit"
                    >
                      <img
                        src={link.icon}
                        alt={link.name}
                        width={18}
                        height={18}
                        className="opacity-40 group-hover:opacity-80 transition-opacity duration-200"
                        style={{ filter: link.invert ? "invert(1)" : undefined }}
                      />
                      <span className="text-[#f5f0e8]/40 group-hover:text-[#f5f0e8]/80 font-mono text-sm tracking-wide transition-colors duration-200">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </Reveal>
    </section>
  );
}