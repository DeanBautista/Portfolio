import { useNavigate } from "react-router-dom";
import { PROJECTS } from "../../data/projects";
import Reveal from "../Reveal";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section 
      className="bg-[#0a0a0a] px-6 py-20 border-white/10 border-t"
      id="projects"
    >
      <div className="max-w-screen-2xl mx-auto">
        {/* Section heading */}
        <Reveal>
          <div className="flex items-baseline gap-3 mb-10">
            <span
              className="text-[#a8e63d] font-mono text-xs tracking-widest"
              aria-hidden="true"
            >
              03.
            </span>
            <h2
              className="text-[#f5f0e8] font-black uppercase text-3xl md:text-4xl leading-none tracking-tight"
              style={{ fontFamily: "'Arial Black', 'Helvetica Neue', Arial, sans-serif" }}
            >
              Selected Projects
            </h2>
          </div>
        </Reveal>

        {/* Project list */}
        <div className="border-t border-white/10">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.slug} delay={index * 90} y={24}>
              <ProjectRow
                project={project}
                index={index}
                onClick={() => navigate(`/project/${project.slug}`)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ project, index, onClick }) {
  const num = String(index + 1).padStart(2, "0");
  const displayName = Array.isArray(project.name) ? project.name.join(" ") : project.name;

  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
      className="group block border-b border-white/10 px-0 py-8 md:py-10 transition-colors duration-200 hover:bg-white/[0.03] cursor-pointer"
    >
      <div className="flex flex-col md:flex-row items-start md:justify-between gap-4 md:gap-8">
        {/* Left: number + content */}
        <div className="flex items-start gap-6 md:gap-10 flex-1 min-w-0 w-full">
          <span className="text-[#f5f0e8]/20 font-mono text-xs pt-1 shrink-0 w-6 text-right group-hover:text-[#a8e63d]/60 transition-colors duration-200">
            {num}
          </span>

          <div className="flex-1 min-w-0">
            <h3
              className="text-[#f5f0e8] group-hover:text-[#a8e63d] font-black uppercase text-xl md:text-2xl leading-tight tracking-tight mb-3 transition-colors duration-200"
              style={{ fontFamily: "'Arial Black', 'Helvetica Neue', Arial, sans-serif" }}
            >
              {displayName}
            </h3>
            <p className="text-[#f5f0e8]/50 text-sm leading-relaxed font-mono max-w-md mb-4">
              {project.description}
            </p>
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

        {/* Right: View Project link */}
        <div className="shrink-0 pt-1 pr-2 pl-12 md:pl-0 flex flex-col justify-between gap-3 self-start md:self-auto">
          <span className="flex justify-start md:justify-end text-[#f5f0e8]/20 group-hover:text-[#a8e63d] font-mono text-xs tracking-wide whitespace-nowrap transition-colors duration-200">
            View Project →
          </span>
        </div>
      </div>
    </div>
  );
}