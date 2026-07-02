import { useState } from "react";
import Reveal from "../Reveal";

const THUMB_LIMIT = 4; // max thumbnails shown before "+N" tile

export default function ProjectGallery({ images }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(null); // index | null

  const hero = images[active];
  const thumbImages = images.slice(1);
  const visibleThumbs = thumbImages.slice(0, THUMB_LIMIT);
  const overflow = thumbImages.length - THUMB_LIMIT;

  const closeLightbox = () => setLightbox(null);
  const prevLight = () =>
    setLightbox((i) => (i - 1 + images.length) % images.length);
  const nextLight = () =>
    setLightbox((i) => (i + 1) % images.length);

  return (
    <div className="px-6 py-7">
      <div className="relative mx-auto max-w-[900px]">
        {/* ── Hero image ── */}
        <Reveal delay={0} y={20}>
          <div
            onClick={() => setLightbox(active)}
            className="relative w-full aspect-[16/7] overflow-hidden cursor-zoom-in rounded-md border border-white/[0.08] bg-[#111]"
          >
            <img
              src={hero.src}
              alt={hero.alt}
              className="block w-full h-full object-cover object-top transition-transform duration-300 ease-in-out hover:scale-[1.02]"
            />
            <div className="absolute bottom-3 right-3 rounded-sm border border-white/[0.12] bg-black/60 px-[9px] py-[3px] font-mono text-[10px] tracking-[0.1em] text-[#f5f0e8]/60">
              {active + 1} / {images.length}
            </div>
          </div>
        </Reveal>

        {/* ── Thumbnails row ── */}
        {images.length > 1 && (
          <div className="mt-1.5 grid grid-cols-5 gap-1.5">
            {visibleThumbs.map((img, i) => {
              const realIdx = i + 1;
              const isActive = active === realIdx;
              return (
                <Reveal key={realIdx} delay={100 + i * 60} y={14}>
                  <div
                    onClick={() => {
                      setLightbox(realIdx); // ← opens the modal at THIS image's index
                    }}
                    className={`relative aspect-video overflow-hidden cursor-pointer rounded transition-colors duration-150 ${
                      isActive
                        ? "border border-[#a8e63d] outline outline-1 outline-[#a8e63d]/30 outline-offset-1"
                        : "border border-white/[0.07] outline-none"
                    } bg-[#111]`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className={`block w-full h-full object-cover transition-opacity duration-150 ${
                        isActive
                          ? "opacity-100"
                          : "opacity-55 hover:opacity-85"
                      }`}
                    />
                  </div>
                </Reveal>
              );
            })}

            {/* +N overflow tile */}
            {overflow > 0 && (
              <Reveal delay={100 + visibleThumbs.length * 60} y={14}>
                <div
                  onClick={() => setLightbox(THUMB_LIMIT + 1)}
                  className="relative aspect-video overflow-hidden rounded border border-white/[0.07] bg-[#111] cursor-pointer flex flex-col items-center justify-center gap-1"
                >
                  <img
                    src={images[THUMB_LIMIT + 1]?.src}
                    alt=""
                    aria-hidden
                    className="absolute inset-0 w-full h-full object-cover opacity-15 blur-[2px]"
                  />
                  <span className="relative font-['Arial_Black',sans-serif] text-xl font-black leading-none text-[#f5f0e8]">
                    +{overflow}
                  </span>
                  <span className="relative font-mono text-[9px] tracking-[0.15em] uppercase text-[#f5f0e8]/40">
                    more
                  </span>
                </div>
              </Reveal>
            )}
          </div>
        )}

        {/* ── Lightbox ── */}
        {lightbox !== null && (
          <div
            onClick={closeLightbox}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/[0.92]"
          >
            <button
              onClick={(e) => { e.stopPropagation(); prevLight(); }}
              className="absolute left-6 rounded-sm border border-white/[0.12] bg-white/[0.06] px-4 py-2.5 font-mono text-lg text-[#f5f0e8] cursor-pointer"
            >
              ←
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              className="max-w-[80vw] max-h-[80vh]"
            >
              <img
                src={images[lightbox].src}
                alt={images[lightbox].alt}
                className="block max-w-full max-h-[80vh] rounded border border-white/10 object-contain"
              />
              <div className="mt-3 text-center font-mono text-[11px] tracking-[0.08em] text-[#f5f0e8]/40">
                {images[lightbox].alt} — {lightbox + 1} / {images.length}
              </div>
            </div>

            <button
              onClick={(e) => { e.stopPropagation(); nextLight(); }}
              className="absolute right-6 rounded-sm border border-white/[0.12] bg-white/[0.06] px-4 py-2.5 font-mono text-lg text-[#f5f0e8] cursor-pointer"
            >
              →
            </button>

            <button
              onClick={closeLightbox}
              className="absolute top-5 right-6 border-none bg-transparent font-mono text-[13px] uppercase tracking-[0.1em] text-[#f5f0e8]/40 cursor-pointer"
            >
              esc ✕
            </button>
          </div>
        )}
      </div>
    </div>
  );
}