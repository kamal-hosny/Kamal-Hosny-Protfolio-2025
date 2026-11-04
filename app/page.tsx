import About from "@/components/common/Portfolio/About";
import Contact from "@/components/common/Portfolio/Contact";
import Expertise from "@/components/common/Portfolio/Expertise";
import Hero from "@/components/common/Portfolio/Hero";
import PortfolioNav from "@/components/common/Portfolio/PortfolioNav";
import Projects from "@/components/common/Portfolio/Projects";
import Testimonials from "@/components/common/Portfolio/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen overflow-clip">
      <PortfolioNav />
      <main>
        <Hero />
        <Projects />
        <Expertise />
        <About />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}
