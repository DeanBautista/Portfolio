import { useState, useEffect } from "react";

const NAV_ITEMS = ["Skills", "Experience", "Projects", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock page scroll while the overlay menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="relative w-full bg-[#0a0a0a]">
      {/* Top nav row */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0a0a0a]">
        <span className="text-[#f5f0e8] text-xs tracking-widest uppercase font-mono">
          DPB <span className="text-white/40">·</span> DEV
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 md:gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-[#f5f0e8] text-xs tracking-widest uppercase font-mono hover:text-white transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button (mobile only) */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden relative w-5 h-3.5 flex flex-col justify-between group"
        >
          <span
            className={`block h-px w-full bg-[#f5f0e8] transition-transform duration-300 ${
              open ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-full bg-[#f5f0e8] transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-px w-full bg-[#f5f0e8] transition-transform duration-300 ${
              open ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu — overlays the screen, doesn't push content */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute inset-x-0 top-full h-screen bg-[#0a0a0a] z-40 transition-opacity duration-300 ease-in-out ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col px-6 py-2">
          {NAV_ITEMS.map((item) => (
            <li key={item} className="border-t border-white/5 first:border-t-0">
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block py-4 text-[#f5f0e8] text-xs tracking-widest uppercase font-mono hover:text-white transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}