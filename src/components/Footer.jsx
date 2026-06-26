export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 px-6 py-5">
      <div className="flex items-center justify-between">
        {/* Copyright */}
        <p className="text-[#f5f0e8]/20 font-mono text-[10px] tracking-widest uppercase">
          &copy; {year} Dean Paolo Bautista
        </p>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-1.5 text-[#f5f0e8]/20 hover:text-[#a8e63d] font-mono text-[10px] tracking-widest uppercase transition-colors duration-200"
          aria-label="Back to top"
        >
          Back to Top
          <span
            className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5"
            aria-hidden="true"
          >
            ↑
          </span>
        </button>
      </div>
    </footer>
  );
}