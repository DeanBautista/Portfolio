import Reveal from "../Reveal";

const SKILLS = [
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
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
    name: "Zustand",
    icon: "https://cdn.simpleicons.org/zustand/443E38",
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
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "Laravel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "Cloudinary",
    icon: "https://cdn.simpleicons.org/cloudinary/3448C5",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "npm",
    icon: "https://cdn.simpleicons.org/npm/CB3837",
  },
  {
    name: "pnpm",
    icon: "https://cdn.simpleicons.org/pnpm/F69220",
  },
  {
    name: "Postman",
    icon: "https://cdn.simpleicons.org/postman/FF6C37",
  },
  {
    name: "Swagger",
    icon: "https://cdn.simpleicons.org/swagger/85EA2D",
  },
  {
    name: "PlanetScale",
    icon: "https://cdn.simpleicons.org/planetscale/000000",
  },
  {
    name: "ChatGPT",
    icon: "https://cdn.simpleicons.org/openai/FFFFFF",
  },
  {
    name: "Claude",
    icon: "https://cdn.simpleicons.org/claude/D97757",
  },
];
// Stagger step (ms) between each cell. Capped via modulo so the last
// cells in a long grid don't end up waiting seconds after the section
// is already fully in view.
const STAGGER_STEP = 40;
const STAGGER_CAP = 10; // resets stagger every 10 cells (roughly 2 rows on desktop)

export default function Skills() {
  return (
    <section 
      className="bg-[#0a0a0a] px-6 py-16 w-full max-w-7xl mx-auto"
      id="skills"
    >
      {/* Section heading */}
      <Reveal>
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
      </Reveal>

      {/* Grid */}
      <div className="border border-white/10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
        {SKILLS.map((skill, index) => (
          <Reveal
            key={skill.name}
            delay={(index % STAGGER_CAP) * STAGGER_STEP}
            y={16}
            className="border border-white/10"
          >
            <SkillCell skill={skill} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function SkillCell({ skill }) {
  return (
    <div className="group flex flex-col items-center justify-center gap-4 py-10 px-6 transition-colors duration-200 hover:bg-white/[0.03]">
      <img
        src={skill.icon}
        alt={skill.name}
        width={40}
        height={40}
        className="opacity-50 group-hover:opacity-80 transition-opacity duration-200"
        style={{
          filter:
            ["Express", "GitHub", "PlanetScale", "ChatGPT"].includes(skill.name)
              ? "invert(1) opacity(0.5)"
              : undefined,
        }}
        loading="lazy"
      />
      <span className="text-[#f5f0e8]/40 group-hover:text-[#f5f0e8]/70 transition-colors duration-200 font-mono text-xs tracking-wide">
        {skill.name}
      </span>
    </div>
  );
}