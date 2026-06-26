const SKILLS = [
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "REST APIs",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
];

export default function Skills() {
  return (
    <section className="bg-[#0a0a0a] px-6 py-16">
      {/* Section heading */}
      <div className="flex items-baseline gap-3 mb-10">
        <span
          className="text-[#a8e63d] font-mono text-xs tracking-widest"
          aria-hidden="true"
        >
          01.
        </span>
        <h2
          className="text-[#f5f0e8] font-black uppercase text-3xl md:text-4xl leading-none tracking-tight"
          style={{ fontFamily: "'Arial Black', 'Helvetica Neue', Arial, sans-serif" }}
        >
          Skills &amp; Toolkit
        </h2>
      </div>

      {/* Grid */}
      <div className="border border-white/10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
        {SKILLS.map((skill, index) => (
          <SkillCell key={skill.name} skill={skill} index={index} total={SKILLS.length} />
        ))}
      </div>
    </section>
  );
}

function SkillCell({ skill, index, total }) {
  // Determine border rendering: right border on all but last column,
  // bottom border on all but last row cells
  const cols = 5; // matches md:grid-cols-5 (largest breakpoint)
  const isLastInRow = (index + 1) % cols === 0;
  const isLastRow = index >= total - (total % cols || cols);

  return (
    <div
      className={[
        "group flex flex-col items-center justify-center gap-4 py-10 px-6",
        "border-white/10",
        "border border-1",
        "transition-colors duration-200 hover:bg-white/[0.03]",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <img
        src={skill.icon}
        alt={skill.name}
        width={40}
        height={40}
        className="opacity-50 group-hover:opacity-80 transition-opacity duration-200"
        style={{
          // Keep Express (black icon) visible on dark bg with invert
          filter: skill.name === "Express" ? "invert(1) opacity(0.5)" : undefined,
        }}
        loading="lazy"
      />
      <span className="text-[#f5f0e8]/40 group-hover:text-[#f5f0e8]/70 transition-colors duration-200 font-mono text-xs tracking-wide">
        {skill.name}
      </span>
    </div>
  );
}2