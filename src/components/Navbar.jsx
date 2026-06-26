export default function Navbar() {
  return (
    <header className="w-full bg-[#0a0a0a]">
      {/* Top nav row */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <span className="text-[#f5f0e8] text-xs tracking-widest uppercase font-mono">
          DPB <span className="text-white/40">·</span> DEV
        </span>
        <ul className="flex items-center gap-6 md:gap-8">
          {["Skills", "Projects", "Contact"].map((item) => (
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
      </nav>

      {/* Status bar */}
      <div className="flex items-center justify-between px-6 py-2.5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#a8e63d] animate-pulse" />
          <span className="text-[#f5f0e8] text-xs tracking-widest uppercase font-mono">
            Open to Work
          </span>
        </div>
        <span className="text-[#f5f0e8] text-xs tracking-widest uppercase font-mono">
          Full-Stack <span className="text-white/40 mx-1">·</span> PH
          <span className="text-white/40 mx-1">+</span> Remote
        </span>
      </div>
    </header>
  );
}