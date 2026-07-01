import Hero from "../components/home/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/home/Projects";
import Skills from "../components/home/Skills";
import Contact from "../components/home/Contact";
import Footer from "../components/Footer";

export default function Home() {

    return (
        <div className="bg-[#0a0a0a] min-h-screen">
            <div className="flex flex-col max-w-[2200px] mx-auto">
                <Navbar />
                <Hero />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </div>
    )
}