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
    <div style={{ padding: "28px 24px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", position: "relative" }}>
        {/* ── Hero image ── */}
        <Reveal delay={0} y={20}>
          <div
            onClick={() => setLightbox(active)}
            style={{
              width: "100%",
              aspectRatio: "16/7",
              overflow: "hidden",
              cursor: "zoom-in",
              borderRadius: 6,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "#111",
              position: "relative",
            }}
          >
            <img
              src={hero.src}
              alt={hero.alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
                display: "block",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <div
              style={{
                position: "absolute",
                bottom: 12,
                right: 12,
                background: "rgba(0,0,0,0.6)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 2,
                padding: "3px 9px",
                fontFamily: "'Courier New', monospace",
                fontSize: 10,
                color: "rgba(245,240,232,0.6)",
                letterSpacing: "0.1em",
              }}
            >
              {active + 1} / {images.length}
            </div>
          </div>
        </Reveal>

        {/* ── Thumbnails row ── */}
        {images.length > 1 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: 6,
              marginTop: 6,
            }}
          >
            {visibleThumbs.map((img, i) => {
              const realIdx = i + 1;
              const isActive = active === realIdx;
              return (
                <Reveal key={realIdx} delay={100 + i * 60} y={14}>
                  <div
                    onClick={() => {
                      setLightbox(realIdx); // ← opens the modal at THIS image's index
                    }}
                    style={{
                      aspectRatio: "16/9",
                      overflow: "hidden",
                      cursor: "pointer",
                      borderRadius: 4,
                      border: isActive
                        ? "1px solid #a8e63d"
                        : "1px solid rgba(255,255,255,0.07)",
                      background: "#111",
                      outline: isActive ? "1px solid rgba(168,230,61,0.3)" : "none",
                      outlineOffset: 1,
                      transition: "border-color 0.15s",
                      position: "relative",
                    }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        opacity: isActive ? 1 : 0.55,
                        transition: "opacity 0.15s",
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) e.currentTarget.style.opacity = "0.85";
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) e.currentTarget.style.opacity = "0.55";
                      }}
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
                  style={{
                    aspectRatio: "16/9",
                    borderRadius: 4,
                    border: "1px solid rgba(255,255,255,0.07)",
                    background: "#111",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 4,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={images[THUMB_LIMIT + 1]?.src}
                    alt=""
                    aria-hidden
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      opacity: 0.15,
                      filter: "blur(2px)",
                    }}
                  />
                  <span
                    style={{
                      position: "relative",
                      fontFamily: "'Arial Black', sans-serif",
                      fontSize: 20,
                      fontWeight: 900,
                      color: "#f5f0e8",
                      lineHeight: 1,
                    }}
                  >
                    +{overflow}
                  </span>
                  <span
                    style={{
                      position: "relative",
                      fontFamily: "'Courier New', monospace",
                      fontSize: 9,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "rgba(245,240,232,0.4)",
                    }}
                  >
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
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.92)",
              zIndex: 999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button
              onClick={(e) => { e.stopPropagation(); prevLight(); }}
              style={{
                position: "absolute",
                left: 24,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 2,
                color: "#f5f0e8",
                fontFamily: "'Courier New', monospace",
                fontSize: 18,
                padding: "10px 16px",
                cursor: "pointer",
              }}
            >
              ←
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: "80vw", maxHeight: "80vh" }}
            >
              <img
                src={images[lightbox].src}
                alt={images[lightbox].alt}
                style={{
                  maxWidth: "100%",
                  maxHeight: "80vh",
                  objectFit: "contain",
                  display: "block",
                  borderRadius: 4,
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              />
              <div
                style={{
                  marginTop: 12,
                  fontFamily: "'Courier New', monospace",
                  fontSize: 11,
                  color: "rgba(245,240,232,0.4)",
                  letterSpacing: "0.08em",
                  textAlign: "center",
                }}
              >
                {images[lightbox].alt} — {lightbox + 1} / {images.length}
              </div>
            </div>

            <button
              onClick={(e) => { e.stopPropagation(); nextLight(); }}
              style={{
                position: "absolute",
                right: 24,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 2,
                color: "#f5f0e8",
                fontFamily: "'Courier New', monospace",
                fontSize: 18,
                padding: "10px 16px",
                cursor: "pointer",
              }}
            >
              →
            </button>

            <button
              onClick={closeLightbox}
              style={{
                position: "absolute",
                top: 20,
                right: 24,
                background: "none",
                border: "none",
                color: "rgba(245,240,232,0.4)",
                fontFamily: "'Courier New', monospace",
                fontSize: 13,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              esc ✕
            </button>
          </div>
        )}
      </div>
    </div>
  );
}