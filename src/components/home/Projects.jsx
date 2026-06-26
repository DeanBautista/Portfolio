const PROJECTS = [
  {
    name: "FlavorFind",
    description:
      "A recipe discovery platform with intelligent ingredient-based search, user collections, and real-time cooking timers. Built with a React frontend and a RESTful Node.js API.",
    tags: ["React", "Node.js", "MongoDB", "Cloudinary", "JWT Auth"],
    liveUrl: "#",
  },
  {
    name: "DevFlow",
    description:
      "A developer workflow dashboard that aggregates GitHub activity, CI/CD pipeline statuses, and team notifications into a single streamlined interface.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Vercel"],
    liveUrl: "#",
  },
  {
    name: "CloudVault",
    description:
      "A secure file storage microservice with chunked uploads, thumbnail generation via Cloudinary, and shareable expiring links — all behind JWT-based authentication.",
    tags: ["Express", "MongoDB", "Cloudinary", "JWT Auth", "REST APIs"],
    liveUrl: "#",
  },
  {
    name: "CloudVault",
    description:
      "A secure file storage microservice with chunked uploads, thumbnail generation via Cloudinary, and shareable expiring links — all behind JWT-based authentication.",
    tags: ["Express", "MongoDB", "Cloudinary", "JWT Auth", "REST APIs"],
    liveUrl: "#",
  },
];

export default function Projects() {
  return (
    <section className="bg-[#0a0a0a] px-6 py-20 border-white/10 border-t">
      {/* Section heading */}
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
          Selected Projects
        </h2>
      </div>

      {/* Project list */}
      <div className="border-t border-white/10">
        {PROJECTS.map((project, index) => (
          <ProjectRow key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function ProjectRow({ project, index }) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border-b border-white/10 px-0 py-8 md:py-10 transition-colors duration-200 hover:bg-white/[0.03] cursor-pointer"
    >
      <div className="flex items-start justify-between gap-8">
        {/* Left: number + content */}
        <div className="flex items-start gap-6 md:gap-10 flex-1 min-w-0">
          {/* Index number */}
          <span className="text-[#f5f0e8]/20 font-mono text-xs pt-1 shrink-0 w-6 text-right group-hover:text-[#a8e63d]/60 transition-colors duration-200">
            {num}
          </span>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3
              className="text-[#f5f0e8] group-hover:text-[#a8e63d] font-black uppercase text-xl md:text-2xl leading-tight tracking-tight mb-3 transition-colors duration-200"
              style={{ fontFamily: "'Arial Black', 'Helvetica Neue', Arial, sans-serif" }}
            >
              {project.name}
            </h3>
            <p className="text-[#f5f0e8]/50 text-sm leading-relaxed font-mono max-w-md mb-4">
              {project.description}
            </p>
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
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

        {/* Right: View Live link */}
        <div className="shrink-0 pt-1 pr-2">
          <span className="text-[#f5f0e8]/20 group-hover:text-[#a8e63d] font-mono text-xs tracking-wide whitespace-nowrap transition-colors duration-200">
            View Live →
          </span>
        </div>
      </div>
    </a>
  );
}