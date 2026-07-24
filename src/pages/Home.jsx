import { useEffect } from "react";
import Hero from "../components/home/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/home/Projects";
import Skills from "../components/home/Skills";
import Contact from "../components/home/Contact";
import Footer from "../components/Footer";
import { saveHomeScroll, getHomeScroll } from "../utils/scrollMemory";
import Experience from "../components/home/Experience";

export default function Home() {
  useEffect(() => {
    const onScroll = () => saveHomeScroll(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });

    const target = getHomeScroll();
    if (target > 0) {
      let attempts = 0;
      const tryRestore = () => {
        attempts++;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        if (maxScroll >= target || attempts > 30) {
          window.scrollTo({ top: target, behavior: "auto" });
        } else {
          requestAnimationFrame(tryRestore);
        }
      };
      requestAnimationFrame(tryRestore);
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <div className="flex flex-col max-w-[2000px] mx-auto">
        <Navbar />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}