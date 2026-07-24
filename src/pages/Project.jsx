import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PROJECTS, getProjectBySlug } from "../data/projects";
import ProjectHeader from "../components/project/ProjectHeader";
import ProjectStats from "../components/project/ProjectStats";
import ProjectGallery from "../components/project/ProjectGallery";
import ProjectStack from "../components/project/ProjectStack";
import ProjectHighlights from "../components/project/ProjectHighlights";
import ProjectCTA from "../components/project/ProjectCTA";

export default function Project() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
    });

    return () => cancelAnimationFrame(id);
  }, [slug]);

  if (!project) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-[#0a0a0a] text-[#f5f0e8]">
        <button onClick={() => navigate("/home")}>← Back home</button>
      </section>
    );
  }

  const {
    name,
    tags,
    description,
    stats,
    stack,
    highlights,
    links,
    images,
  } = project;

  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  const onBack = () => navigate("/home");
  const onNext = () => navigate(`/project/${nextProject.slug}`);

  return (
    <section
      key={slug}
      className="min-h-screen bg-[#0a0a0a] font-['Arial_Black','Helvetica_Neue',Arial,sans-serif] text-[#f5f0e8]"
    >
      {/* <ProjectBreadcrumb onBack={onBack} name={name} /> */}

      <ProjectHeader
        name={name}
        tags={tags}
        description={description}
      />

      <ProjectStats stats={stats} />

      <ProjectGallery images={images} />

      <div className="border-t border-white/10">
        <div className="grid grid-cols-2 border-b border-white/10">
          <ProjectStack stack={stack} />
          <ProjectHighlights highlights={highlights} />
        </div>

        <ProjectCTA links={links} onNext={onNext} slug={slug} />
      </div>
    </section>
  );
}