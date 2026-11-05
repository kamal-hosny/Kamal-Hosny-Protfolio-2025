"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  ChevronDown,
  Github,
  FileText,
  ExternalLink,
  ChartNoAxesCombined,
  ShieldCheck,
  Zap,
  CreditCard,
  QrCode,
  Database,
  Cpu,
  Layers,
  Lock,
  Server,
  Sparkles,
  LucideIcon,
} from "lucide-react";
import { projects, Project } from "@/data/data";

const HIGHLIGHT_ICONS: Record<string, LucideIcon> = {
  "chart-no-axes-combined": ChartNoAxesCombined,
  chartnoaxescombined: ChartNoAxesCombined,
  "shield-check": ShieldCheck,
  shieldcheck: ShieldCheck,
  zap: Zap,
  "credit-card": CreditCard,
  creditcard: CreditCard,
  "qr-code": QrCode,
  qrcode: QrCode,
  database: Database,
  cpu: Cpu,
  layers: Layers,
  lock: Lock,
  server: Server,
  sparkles: Sparkles,
};

function getHighlightIcon(name?: string): LucideIcon | null {
  if (!name) return null;
  const key = name.toLowerCase().trim();
  if (HIGHLIGHT_ICONS[key]) return HIGHLIGHT_ICONS[key];
  const stripped = key.replace(/[-_]/g, "");
  if (HIGHLIGHT_ICONS[stripped]) return HIGHLIGHT_ICONS[stripped];
  return Sparkles;
}

function ProjectLinks({
  githubLink,
  liveLink,
  caseStudyUrl,
  referenceLink,
  referenceLinkLabel,
}: {
  githubLink?: string | null;
  liveLink?: string | null;
  caseStudyUrl?: string | null;
  referenceLink?: string | null;
  referenceLinkLabel?: string | null;
}) {
  return (
    <div className="flex flex-wrap items-center gap-[14px] [&_svg]:size-4">
      {liveLink && (
        <a
          className="inline-flex items-center gap-[6px] text-[11px] text-[#9299a5] transition-colors hover:text-[#c7f36b]"
          href={liveLink}
          target="_blank"
          rel="noreferrer"
        >
          Live site <ArrowUpRight />
        </a>
      )}
      {githubLink && (
        <a
          className="inline-flex items-center gap-[6px] text-[11px] text-[#9299a5] transition-colors hover:text-[#c7f36b]"
          href={githubLink}
          target="_blank"
          rel="noreferrer"
        >
          <Github /> Source
        </a>
      )}
      {caseStudyUrl && (
        <a
          className="inline-flex items-center gap-[6px] text-[11px] text-[#9299a5] transition-colors hover:text-[#c7f36b]"
          href={caseStudyUrl}
          target="_blank"
          rel="noreferrer"
        >
          <FileText /> Case study
        </a>
      )}
      {referenceLink && (
        <a
          className="inline-flex items-center gap-[6px] text-[11px] text-[#9299a5] transition-colors hover:text-[#c7f36b]"
          href={referenceLink}
          target="_blank"
          rel="noreferrer"
        >
          <ExternalLink /> {referenceLinkLabel || "Reference"}
        </a>
      )}
    </div>
  );
}

function ProjectMediaSlider({
  project,
  index,
  projectNumber,
  primaryUrl,
}: {
  project: Project;
  index: number;
  projectNumber: string;
  primaryUrl: string;
}) {
  const images =
    project.images && project.images.length > 0
      ? project.images
      : [project.coverImage || project.image || ""].filter(Boolean);

  const [currentImg, setCurrentImg] = useState(0);
  const totalImgs = images.length;

  useEffect(() => {
    if (totalImgs <= 1) return;
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % totalImgs);
    }, 4000);
    return () => clearInterval(timer);
  }, [totalImgs]);

  return (
    <div className="relative aspect-[1.62] w-full min-w-0 overflow-hidden border border-white/[0.08] bg-[#141820]">
      <a
        className="relative block size-full after:absolute after:inset-[45%_0_0] after:bg-[linear-gradient(transparent,rgba(9,11,14,.38))] after:content-['']"
        href={primaryUrl}
        target={primaryUrl !== "#projects" ? "_blank" : undefined}
        rel="noreferrer"
        aria-label={`View ${project.title}`}
      >
        {images.map((imgSrc, imgIdx) => (
          <Image
            key={imgSrc || imgIdx}
            src={imgSrc}
            alt={`${project.title} screenshot ${imgIdx + 1}`}
            fill
            priority={index < 2 && imgIdx === 0}
            sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 570px"
            className={`object-cover transition-opacity duration-700 group-hover:scale-[1.035] ${
              imgIdx === currentImg ? "opacity-100 z-[1]" : "opacity-0 z-0 pointer-events-none"
            }`}
          />
        ))}
      </a>

      {/* Number Badge */}
      <span className="pointer-events-none absolute top-[14px] left-[14px] z-[5] border border-white/[0.08] bg-[#090b0e]/[0.86] px-[9px] py-[7px] font-[family-name:var(--font-jetbrains-mono)] text-[10px] text-[#c7f36b]">
        {projectNumber}
      </span>

      {/* Multiple images indicator */}
      {totalImgs > 1 && (
        <div className="pointer-events-none absolute bottom-4 left-4 z-[5] flex items-center gap-1.5 border border-white/[0.08] bg-[#090b0e]/[0.85] px-2 py-1">
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-[9px] text-[#c7f36b]">
            0{currentImg + 1}
          </span>
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-[9px] text-white/30">
            /
          </span>
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-[9px] text-[#9299a5]">
            0{totalImgs}
          </span>
        </div>
      )}

      {/* Arrow Button */}
      <a
        href={primaryUrl}
        target={primaryUrl !== "#projects" ? "_blank" : undefined}
        rel="noreferrer"
        aria-label={`Open ${project.title}`}
        className="absolute right-4 bottom-4 z-[5] grid size-[42px] place-items-center border border-white/30 bg-[#090b0e]/[0.76] text-[#f3f4f6] transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-[#c7f36b] group-hover:text-[#090b0e] [&_svg]:size-[18px]"
      >
        <ArrowUpRight />
      </a>
    </div>
  );
}

function HighlightsSlider({
  highlights,
  title,
}: {
  highlights: NonNullable<Project["highlights"]>;
  title?: string;
}) {
  const [startIndex, setStartIndex] = useState(0);
  const total = highlights.length;

  useEffect(() => {
    if (total <= 2) return;
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 2) % total);
    }, 3800);
    return () => clearInterval(interval);
  }, [total]);

  const item1 = highlights[startIndex];
  const item2 = highlights[(startIndex + 1) % total];
  const currentPair = total === 1 ? [item1] : [item1, item2];
  const currentGroup = Math.floor(startIndex / 2) + 1;
  const totalGroups = Math.ceil(total / 2);

  return (
    <div className="min-w-0 border-t border-white/[0.08] pt-[14px]">
      <div className="mb-2.5 flex items-center justify-between">
        <span className="font-[family-name:var(--font-jetbrains-mono)] text-[9px] uppercase tracking-wider text-[#c7f36b]">
          {title || "Engineering Highlights"}
        </span>
        {total > 2 && (
          <div className="flex items-center gap-1.5 font-[family-name:var(--font-jetbrains-mono)] text-[9px] text-[#9299a5]/70">
            <span>
              0{currentGroup} / 0{totalGroups}
            </span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-2.5 min-w-0 max-[520px]:grid-cols-1">
        {currentPair.map((highlight, idx) => {
          if (!highlight) return null;
          const Icon = getHighlightIcon(highlight.icon);
          return (
            <div
              key={`${startIndex}-${idx}-${highlight.title}`}
              className="min-w-0 border border-white/[0.06] bg-white/[0.02] p-2.5 transition-all duration-300"
            >
              <div className="flex items-center gap-2">
                {Icon && <Icon className="size-3.5 shrink-0 text-[#c7f36b]" />}
                <span className="truncate font-[family-name:var(--font-space-grotesk)] text-[12px] font-medium text-[#f3f4f6]">
                  {highlight.title}
                </span>
              </div>
              {highlight.description && (
                <p className="mt-1 m-0 text-[11px] leading-[1.6] text-[#9299a5] line-clamp-2">
                  {highlight.description}
                </p>
              )}
            </div>
          );
        })}
      </div>
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
          {featuredProjects.map((project, index) => {
            const liveUrl = project.liveUrl ?? project.liveLink;
            const githubUrl = project.githubUrl ?? project.githubLink;
            const technologies = project.technologies ?? project.tech ?? [];
            const projectNumber = project.projectNumber ?? `0${index + 1}`;
            const primaryUrl = liveUrl ?? githubUrl ?? project.caseStudyUrl ?? project.referenceLink ?? "#projects";

            return (
              <article
                className={`group min-w-0 ${
                  index === 0
                    ? "col-span-full grid grid-cols-[minmax(0,1.2fr)_minmax(300px,.8fr)] items-center gap-7 border-b border-white/[0.08] pb-[30px] max-[700px]:col-auto max-[700px]:grid-cols-1 max-[700px]:gap-0 max-[700px]:border-b-0 max-[700px]:pb-0"
                    : ""
                }`}
                key={project.id || project.title}
              >
                {/* Media Container with Image Slideshow */}
                <ProjectMediaSlider
                  project={project}
                  index={index}
                  projectNumber={projectNumber}
                  primaryUrl={primaryUrl}
                />

                {/* Content Container */}
                <div className={`grid min-w-0 gap-[15px] pt-5 ${index === 0 ? "max-[700px]:pt-5" : ""}`}>
                  {(project.projectLabel || project.projectType) && (
                    <div className="flex flex-wrap items-center gap-2 font-[family-name:var(--font-jetbrains-mono)] text-[10px] uppercase tracking-wider text-[#c7f36b]">
                      {project.projectLabel && <span>{project.projectLabel}</span>}
                      {project.projectLabel && project.projectType && <span className="text-white/25">/</span>}
                      {project.projectType && <span className="text-[#9299a5]">{project.projectType}</span>}
                    </div>
                  )}

                  <div className="flex items-start justify-between gap-[18px] max-[700px]:flex-col max-[700px]:gap-[10px]">
                    <div>
                      <h3 className="m-0 font-[family-name:var(--font-space-grotesk)] text-[23px] font-semibold">
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <p className="mt-1 m-0 font-[family-name:var(--font-space-grotesk)] text-[13px] text-[#f3f4f6]/85">
                          {project.subtitle}
                        </p>
                      )}
                    </div>
                    <ProjectLinks
                      githubLink={githubUrl}
                      liveLink={liveUrl}
                      caseStudyUrl={project.caseStudyUrl}
                      referenceLink={project.referenceLink}
                      referenceLinkLabel={project.referenceLinkLabel}
                    />
                  </div>

                  <p className="m-0 max-w-[620px] text-[13px] leading-[1.8] text-[#9299a5]">
                    {project.description}
                  </p>

                  {/* Highlights Slider: 2 items at a time, moving to the next 2 automatically */}
                  {project.highlights && project.highlights.length > 0 && (
                    <HighlightsSlider
                      highlights={project.highlights}
                      title={project.highlightsTitle}
                    />
                  )}

                  {/* Built with Technologies */}
                  {technologies.length > 0 && (
                    <div className="flex flex-wrap items-baseline gap-x-[14px] gap-y-[10px] border-t border-white/[0.08] pt-[14px]">
                      <span className="font-[family-name:var(--font-jetbrains-mono)] text-[9px] uppercase text-[#c7f36b]">
                        Built with
                      </span>
                      <div className="flex flex-wrap gap-[7px]" aria-label={`Technologies used for ${project.title}`}>
                        {technologies.map((technology) => (
                          <span
                            className="border border-[#c7f36b]/[0.22] bg-[#c7f36b]/[0.055] px-[9px] py-[6px] font-[family-name:var(--font-jetbrains-mono)] text-[10px] text-[#d7e8b3]"
                            key={technology}
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {secondaryProjects.length > 0 && (
          <details className="group mt-10">
            <summary className="mx-auto flex min-h-[46px] w-fit cursor-pointer list-none items-center justify-center gap-[9px] border border-white/[0.08] bg-white/[0.02] px-[19px] text-[13px] font-semibold text-[#f3f4f6] transition duration-200 hover:-translate-y-0.5 hover:border-[#c7f36b]/50 hover:text-[#c7f36b] [&::-webkit-details-marker]:hidden [&_svg]:size-4 [&_svg]:transition-transform group-open:[&_svg]:rotate-180">
              <span className="group-open:hidden">Show more projects</span>
              <span className="hidden group-open:inline">Show fewer projects</span>
              <ChevronDown aria-hidden="true" />
            </summary>
            <div className="mt-[42px] grid grid-cols-3 border-t border-white/[0.08] max-[700px]:grid-cols-2 max-[420px]:grid-cols-1" aria-label="More projects">
              {secondaryProjects.map((project) => {
                const imageSrc = project.coverImage || project.image || "";
                const liveUrl = project.liveUrl ?? project.liveLink;
                const githubUrl = project.githubUrl ?? project.githubLink;
                const technologies = project.technologies ?? project.tech ?? [];

                return (
                  <article
                    className="min-w-0 border-b border-white/[0.08] py-[22px] pr-[22px] pl-0 nth-[3n+2]:border-l nth-[3n+2]:border-white/[0.08] nth-[3n+2]:pl-[22px] nth-[3n+3]:border-l nth-[3n+3]:border-white/[0.08] nth-[3n+3]:pl-[22px] max-[700px]:nth-[3n+2]:border-l-0 max-[700px]:nth-[3n+2]:pl-0 max-[700px]:nth-[3n+3]:border-l-0 max-[700px]:nth-[3n+3]:pl-0 max-[700px]:nth-[even]:border-l max-[700px]:nth-[even]:border-white/[0.08] max-[700px]:nth-[even]:pl-4 max-[420px]:px-0 max-[420px]:nth-[even]:border-l-0"
                    key={project.id || project.title}
                  >
                    <div className="relative mb-4 aspect-[1.8] overflow-hidden border border-white/[0.08] bg-[#141820]">
                      {imageSrc && (
                        <Image
                          src={imageSrc}
                          alt={`${project.title} project screenshot`}
                          fill
                          sizes="(max-width: 700px) 50vw, 360px"
                          className="object-cover transition-transform duration-500 hover:scale-[1.035]"
                        />
                      )}
                    </div>
                    <h3 className="mb-[9px] mt-0 font-[family-name:var(--font-space-grotesk)] text-lg">
                      {project.title}
                    </h3>
                    <p className="m-0 line-clamp-3 text-xs leading-[1.7] text-[#9299a5]">
                      {project.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between gap-[10px]">
                      <span className="font-[family-name:var(--font-jetbrains-mono)] text-[9px] text-[#c7f36b]">
                        {technologies.join(" · ")}
                      </span>
                      <ProjectLinks
                        githubLink={githubUrl}
                        liveLink={liveUrl}
                        caseStudyUrl={project.caseStudyUrl}
                        referenceLink={project.referenceLink}
                        referenceLinkLabel={project.referenceLinkLabel}
                      />
                    </div>
                  </article>
                );
              })}
            </div>
          </details>
        )}
      </div>
    </section>
  );
}
