import Image from "next/image";
import { ArrowUpRight, ChevronDown, Github } from "lucide-react";
import { projects } from "@/data/data";

function ProjectLinks({ githubLink, liveLink }: { githubLink: string | null; liveLink: string | null }) {
  return (
    <div className="flex items-start gap-[14px] [&_svg]:size-4">
      {liveLink && <a className="inline-flex items-center gap-[6px] text-[11px] text-[#9299a5] transition-colors hover:text-[#c7f36b]" href={liveLink} target="_blank" rel="noreferrer">Live site <ArrowUpRight /></a>}
      {githubLink && <a className="inline-flex items-center gap-[6px] text-[11px] text-[#9299a5] transition-colors hover:text-[#c7f36b]" href={githubLink} target="_blank" rel="noreferrer"><Github /> Source</a>}
    </div>
  );
}

export default function Projects() {
  const featuredProjects = projects.slice(0, 3);
  const secondaryProjects = projects.slice(3);

  return (
    <section className="border-b border-white/[0.08] py-[108px] max-[700px]:py-[76px]" id="projects">
      <div className="mx-auto w-[min(1180px,calc(100%-64px))] max-[700px]:w-[calc(100%-40px)] max-[420px]:w-[calc(100%-32px)]">
        <div className="mb-11 flex items-end justify-between gap-9 max-[700px]:mb-[30px] max-[700px]:flex-col max-[700px]:items-start max-[700px]:gap-4">
          <div className="max-w-[620px]">
            <p className="mb-[14px] font-[family-name:var(--font-jetbrains-mono)] text-[11px] uppercase text-[#c7f36b]">01 / Selected work</p>
            <h2 className="m-0 font-[family-name:var(--font-space-grotesk)] text-[clamp(34px,4vw,49px)] font-semibold leading-[1.08]">A selection of things I&apos;ve built.</h2>
          </div>
          <p className="m-0 max-w-[480px] text-sm leading-[1.8] text-[#9299a5] max-[700px]:text-[13px]">Real products and experiments, designed and developed with a focus on clarity, usability, and thoughtful engineering.</p>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-11 max-[700px]:grid-cols-1 max-[700px]:gap-y-[34px]">
          {featuredProjects.map((project, index) => (
            <article className={`group min-w-0 ${index === 0 ? "col-span-full grid grid-cols-[minmax(0,1.2fr)_minmax(300px,.8fr)] items-center gap-7 border-b border-white/[0.08] pb-[30px] max-[700px]:col-auto max-[700px]:grid-cols-1 max-[700px]:gap-0 max-[700px]:border-b-0 max-[700px]:pb-0" : ""}`} key={project.title}>
              <a className="relative block aspect-[1.62] overflow-hidden border border-white/[0.08] bg-[#141820] after:absolute after:inset-[45%_0_0] after:bg-[linear-gradient(transparent,rgba(9,11,14,.38))] after:content-['']" href={project.liveLink ?? project.githubLink ?? "#projects"} target={project.liveLink || project.githubLink ? "_blank" : undefined} rel="noreferrer" aria-label={`View ${project.title}`}>
                <Image src={project.image} alt={`${project.title} project screenshot`} fill priority={index < 2} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 570px" className="object-cover transition-transform duration-500 group-hover:scale-[1.035]" />
                <span className="absolute top-[14px] left-[14px] z-[1] border border-white/[0.08] bg-[#090b0e]/[0.86] px-[9px] py-[7px] font-[family-name:var(--font-jetbrains-mono)] text-[10px] text-[#c7f36b]">0{index + 1}</span>
                <span className="absolute right-4 bottom-4 z-[1] grid size-[42px] place-items-center border border-white/30 bg-[#090b0e]/[0.76] text-[#f3f4f6] transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-[#c7f36b] group-hover:text-[#090b0e] [&_svg]:size-[18px]" aria-hidden="true"><ArrowUpRight /></span>
              </a>
              <div className={`grid gap-[15px] pt-5 ${index === 0 ? "max-[700px]:pt-5" : ""}`}>
                <div className="flex items-start justify-between gap-[18px] max-[700px]:flex-col max-[700px]:gap-[10px]">
                  <h3 className="m-0 font-[family-name:var(--font-space-grotesk)] text-[23px] font-semibold">{project.title}</h3>
                  <ProjectLinks githubLink={project.githubLink} liveLink={project.liveLink} />
                </div>
                <p className="m-0 max-w-[620px] text-[13px] leading-[1.8] text-[#9299a5]">{project.description}</p>
                <div className="flex flex-wrap items-baseline gap-x-[14px] gap-y-[10px] border-t border-white/[0.08] pt-[14px]">
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-[9px] uppercase text-[#c7f36b]">Built with</span>
                  <div className="flex flex-wrap gap-[7px]" aria-label={`Technologies used for ${project.title}`}>
                    {project.tech.map((technology) => <span className="border border-[#c7f36b]/[0.22] bg-[#c7f36b]/[0.055] px-[9px] py-[6px] font-[family-name:var(--font-jetbrains-mono)] text-[10px] text-[#d7e8b3]" key={technology}>{technology}</span>)}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        {secondaryProjects.length > 0 && (
          <details className="group mt-10">
            <summary className="mx-auto flex min-h-[46px] w-fit cursor-pointer list-none items-center justify-center gap-[9px] border border-white/[0.08] bg-white/[0.02] px-[19px] text-[13px] font-semibold text-[#f3f4f6] transition duration-200 hover:-translate-y-0.5 hover:border-[#c7f36b]/50 hover:text-[#c7f36b] [&::-webkit-details-marker]:hidden [&_svg]:size-4 [&_svg]:transition-transform group-open:[&_svg]:rotate-180">
              <span className="group-open:hidden">Show more projects</span>
              <span className="hidden group-open:inline">Show fewer projects</span>
              <ChevronDown aria-hidden="true" />
            </summary>
            <div className="mt-[42px] grid grid-cols-3 border-t border-white/[0.08] max-[700px]:grid-cols-2 max-[420px]:grid-cols-1" aria-label="More projects">
              {secondaryProjects.map((project) => (
                <article className="min-w-0 border-b border-white/[0.08] py-[22px] pr-[22px] pl-0 nth-[3n+2]:border-l nth-[3n+2]:border-white/[0.08] nth-[3n+2]:pl-[22px] nth-[3n+3]:border-l nth-[3n+3]:border-white/[0.08] nth-[3n+3]:pl-[22px] max-[700px]:nth-[3n+2]:border-l-0 max-[700px]:nth-[3n+2]:pl-0 max-[700px]:nth-[3n+3]:border-l-0 max-[700px]:nth-[3n+3]:pl-0 max-[700px]:nth-[even]:border-l max-[700px]:nth-[even]:border-white/[0.08] max-[700px]:nth-[even]:pl-4 max-[420px]:px-0 max-[420px]:nth-[even]:border-l-0" key={project.title}>
                  <div className="relative mb-4 aspect-[1.8] overflow-hidden border border-white/[0.08] bg-[#141820]">
                    <Image src={project.image} alt={`${project.title} project screenshot`} fill sizes="(max-width: 700px) 50vw, 360px" className="object-cover transition-transform duration-500 hover:scale-[1.035]" />
                  </div>
                  <h3 className="mb-[9px] mt-0 font-[family-name:var(--font-space-grotesk)] text-lg">{project.title}</h3>
                  <p className="m-0 line-clamp-3 text-xs leading-[1.7] text-[#9299a5]">{project.description}</p>
                  <div className="mt-4 flex items-center justify-between gap-[10px]"><span className="font-[family-name:var(--font-jetbrains-mono)] text-[9px] text-[#c7f36b]">{project.tech.join(" · ")}</span><ProjectLinks githubLink={project.githubLink} liveLink={project.liveLink} /></div>
                </article>
              ))}
            </div>
          </details>
        )}
      </div>
    </section>
  );
}