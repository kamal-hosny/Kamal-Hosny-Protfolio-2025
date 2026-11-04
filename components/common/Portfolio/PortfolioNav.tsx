"use client";

import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import BrandLogo from "../Header/BrandLogo";

const navItems = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function PortfolioNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: "-25% 0px -65% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-20 border-b border-white/[0.08] bg-[#090b0e]/[0.88] backdrop-blur-[18px]">
      <div className="mx-auto flex min-h-[76px] w-[min(1320px,calc(100%-64px))] items-center justify-between gap-7 max-[700px]:min-h-[66px] max-[700px]:w-[calc(100%-40px)] max-[420px]:w-[calc(100%-32px)]">
        <BrandLogo />
        <nav className="flex flex-1 items-center justify-center gap-8 text-[13px] text-[#9299a5] [&_a]:transition-colors [&_a:hover]:text-[#c7f36b] [&_a[aria-current=location]]:text-[#c7f36b] max-[700px]:absolute max-[700px]:top-[66px] max-[700px]:right-0 max-[700px]:left-0 max-[700px]:hidden max-[700px]:items-stretch max-[700px]:gap-0 max-[700px]:border-b max-[700px]:border-white/[0.08] max-[700px]:bg-[#090b0e] max-[700px]:px-5 max-[700px]:pt-2 max-[700px]:pb-[18px] max-[700px]:data-[open=true]:flex max-[700px]:data-[open=true]:flex-col max-[700px]:[&_a]:border-b max-[700px]:[&_a]:border-white/[0.08] max-[700px]:[&_a]:py-[13px]" data-open={menuOpen} aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={activeSection === item.id ? "location" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a className="hidden items-center gap-2 text-[#c7f36b] max-[700px]:flex" href="/pdf/Kamal-Hosny-CV.pdf" download="Kamal-Hosny-CV.pdf" onClick={() => setMenuOpen(false)}>
            <Download size={15} /> Download CV
          </a>
        </nav>
        <div className="flex items-center gap-3 max-[700px]:hidden">
          <a className="inline-flex min-h-10 items-center justify-center gap-[7px] border border-white/[0.08] bg-white/[0.02] px-3 text-xs font-semibold text-[#f3f4f6] transition duration-200 hover:-translate-y-0.5 hover:border-[#c7f36b]/50 hover:text-[#c7f36b]" href="/pdf/Kamal-Hosny-CV.pdf" download="Kamal-Hosny-CV.pdf">
            <Download size={15} /> Download CV
          </a>
          <a className="inline-flex min-h-10 items-center justify-center gap-[9px] border border-transparent bg-[#c7f36b] px-4 text-xs font-semibold text-[#141810] transition duration-200 hover:-translate-y-0.5 hover:bg-[#d3fa82]" href="#contact">Let&apos;s Talk</a>
        </div>
        <button
          className="hidden size-[42px] items-center justify-center border border-white/[0.08] bg-[#141820] max-[700px]:inline-flex"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
    </header>
  );
}