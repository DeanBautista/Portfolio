import { useState } from "react";
import { createPortal } from "react-dom";
import Reveal from "../Reveal";
import pmes1 from "../../assets/pdo/pmes-1.png"
import pmes2 from "../../assets/pdo/pmes-2.png"

// Example shape — adjust to match your actual data source
const EXPERIENCE = {
  role: "Software Developer",
  company: "Bulacan State University Planning and Development Office",
  period: "January 2026 — April 2026",
  location: "Malolos, Bulacan",
  description:
    `Contributed to the development and maintenance of full-stack web applications, working 
    across both front-end and back-end systems while collaborating with team members through 
    GitHub-based version control and development workflows.`,
  highlights: [
    "Developed and integrated RESTful APIs using Node.js and Express.js",
    "Implemented user interfaces based on project requirements and design specifications",
    "Refactored database structures and updated related front-end and back-end code",
  ],
  tags: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Docker", "Postman"],
  images: [
    { src: pmes1, alt: "pmes1" },
    { src: pmes2, alt: "pmes2" },
  ],
};

export default function Experience() {
  return (
    <section
      className="bg-[#0a0a0a] px-6 py-20 border-white/10 border-t"
      id="experience"
    >
      {/* Section heading */}
      <Reveal>
        <div className="flex items-baseline gap-3 mb-10">
          <span
            className="text-[#a8e63d] font-mono text-xs tracking-widest"
            aria-hidden="true"
          >
            02.
          </span>
          <h2
            className="text-[#f5f0e8] font-black uppercase text-3xl md:text-4xl leading-none tracking-tight"
            style={{ fontFamily: "'Arial Black', 'Helvetica Neue', Arial, sans-serif" }}
          >
            Experience
          </h2>
        </div>
      </Reveal>

      {/* Single experience card */}
      <Reveal delay={90} y={24}>
        <ExperienceCard experience={EXPERIENCE} />
      </Reveal>
    </section>
  );
}

function ExperienceCard({ experience }) {
  const { role, company, period, location, description, highlights, tags, images } = experience;

  const [lightbox, setLightbox] = useState(null); // index | null

  const closeLightbox = () => setLightbox(null);
  const prevLight = (e) => {
    e.stopPropagation();
    setLightbox((i) => (i - 1 + images.length) % images.length);
  };
  const nextLight = (e) => {
    e.stopPropagation();
    setLightbox((i) => (i + 1) % images.length);
  };

  return (
    <div className="group border-t border-white/10 py-10 md:py-12">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12">
        {/* Left: role + company + meta */}
        <div className="flex items-start gap-6 md:gap-10 flex-1 min-w-0">
          <span className="text-[#f5f0e8]/20 font-mono text-xs pt-1 shrink-0 w-6 text-right group-hover:text-[#a8e63d]/60 transition-colors duration-200">
            01
          </span>

          <div className="flex-1 min-w-0">
            <h3
              className="text-[#f5f0e8] group-hover:text-[#a8e63d] font-black uppercase text-xl md:text-2xl leading-tight tracking-tight mb-1 transition-colors duration-200"
              style={{ fontFamily: "'Arial Black', 'Helvetica Neue', Arial, sans-serif" }}
            >
              {role}
            </h3>

            <p className="text-[#a8e63d]/80 font-mono text-sm tracking-wide mb-1 md:mb-4">
              {company}
            </p>

            {/* Mobile-only period/location — sits right under the company name.
                Hidden on desktop, where the original right-column block (below) handles it. */}
            <div className="flex items-baseline gap-3 mb-4 md:hidden">
              <span className="text-[#f5f0e8]/70 font-mono text-xs tracking-wide whitespace-nowrap">
                {period}
              </span>
              <span className="text-[#f5f0e8]/30 font-mono text-xs tracking-wide whitespace-nowrap">
                {location}
              </span>
            </div>

            <p className="text-[#f5f0e8]/50 text-sm leading-relaxed font-mono max-w-lg mb-6">
              {description}
            </p>

            {/* Image pair */}
            {images?.length > 0 && (
              <div className="grid grid-cols-2 gap-3 max-w-lg mb-6">
                {images.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setLightbox(i)}
                    className="relative aspect-[4/3] overflow-hidden rounded-sm border border-white/10 bg-white/[0.02] cursor-zoom-in group-hover:border-white/20 transition-colors duration-200"
                  >
                    <img
                      src={img.src}
                      alt={img.alt || `${company} work sample ${i + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover grayscale-[0.3] contrast-[1.05] group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            )}

            {highlights?.length > 0 && (
              <ul className="space-y-2.5 mb-6 max-w-lg">
                {highlights.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[#f5f0e8]/60 text-sm leading-relaxed font-mono"
                  >
                    <span className="text-[#a8e63d]/60 mt-1 shrink-0" aria-hidden="true">
                      —
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[#f5f0e8]/30 font-mono text-[10px] tracking-wide border border-white/10 px-2.5 py-1 rounded-sm group-hover:border-white/20 group-hover:text-[#f5f0e8]/50 transition-all duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: period + location (desktop only — mobile version is shown above, under the company name) */}
        <div className="hidden md:flex shrink-0 md:pt-1 md:pr-2 flex-col items-end justify-start gap-2">
          <span className="text-[#f5f0e8]/70 font-mono text-xs tracking-wide whitespace-nowrap">
            {period}
          </span>
          <span className="text-[#f5f0e8]/30 font-mono text-xs tracking-wide whitespace-nowrap">
            {location}
          </span>
        </div>
      </div>

      {/* ── Lightbox ── */}
      {/* Rendered via portal directly into document.body. This is required because
          Reveal (and similar entrance-animation wrappers) apply a CSS transform to
          animate elements in — and `position: fixed` is positioned relative to the
          nearest transformed ancestor, not the real viewport, once one exists in the
          tree. Without the portal, the lightbox gets trapped inside that section
          instead of covering the whole page. */}
      {lightbox !== null &&
        createPortal(
          <div
            onClick={closeLightbox}
            className="fixed inset-0 z-[999] overflow-y-auto bg-black/[0.92]"
          >
            {/* Sticky nav/close controls — pinned to viewport while backdrop scrolls */}
            {images.length > 1 && (
              <button
                onClick={prevLight}
                className="sticky top-1/2 left-6 float-left -translate-y-1/2 rounded-sm border border-white/[0.12] bg-white/[0.06] px-4 py-2.5 font-mono text-lg text-[#f5f0e8] cursor-pointer z-10"
              >
                ←
              </button>
            )}

            {images.length > 1 && (
              <button
                onClick={nextLight}
                className="sticky top-1/2 right-6 float-right -translate-y-1/2 rounded-sm border border-white/[0.12] bg-white/[0.06] px-4 py-2.5 font-mono text-lg text-[#f5f0e8] cursor-pointer z-10"
              >
                →
              </button>
            )}

            <button
              onClick={closeLightbox}
              className="sticky top-5 right-6 float-right border-none bg-transparent font-mono text-[13px] uppercase tracking-[0.1em] text-[#f5f0e8]/40 cursor-pointer z-10"
            >
              esc ✕
            </button>

            {/* Image wrapper — fills viewport height, image covers as much as possible, scrolls if larger */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="min-h-full w-full flex flex-col items-center justify-center px-20 py-16"
            >
              <img
                src={images[lightbox].src}
                alt={images[lightbox].alt}
                className="block max-w-full rounded border border-white/10 object-contain"
                style={{ maxHeight: "calc(100vh - 8rem)" }}
              />
              <div className="mt-3 text-center font-mono text-[11px] tracking-[0.08em] text-[#f5f0e8]/40">
                {images[lightbox].alt} — {lightbox + 1} / {images.length}
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}