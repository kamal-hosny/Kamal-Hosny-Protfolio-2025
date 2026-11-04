const skillGroups = [
  { title: "Frontend Development", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js"] },
  { title: "Styling & UI", items: ["Tailwind CSS", "Sass", "shadcn/ui", "HeroUI", "Figma"] },
  { title: "State & Data", items: ["Redux Toolkit", "Zustand", "TanStack Query", "Axios"] },
  { title: "Forms & Validation", items: ["React Hook Form", "Zod"] },
  { title: "Motion & Interaction", items: ["Framer Motion"] },
  { title: "Build & Package Tools", items: ["Vite", "Webpack", "npm", "pnpm", "Yarn"] },
  { title: "Code Quality & Monitoring", items: ["ESLint", "Prettier", "Lighthouse", "Sentry"] },
  { title: "Version Control & Deployment", items: ["Git", "GitHub", "GitHub Actions", "Docker", "Vercel"] },
];

export default function Expertise() {
  return (
    <section className="border-b border-white/[0.08] py-[108px] max-[700px]:py-[76px]" id="skills">
      <div className="mx-auto grid w-[min(1180px,calc(100%-64px))] grid-cols-[.7fr_1.3fr] gap-[70px] max-[900px]:gap-[42px] max-[700px]:w-[calc(100%-40px)] max-[700px]:grid-cols-1 max-[700px]:gap-[30px] max-[420px]:w-[calc(100%-32px)]">
        <div className="sticky top-[120px] self-start max-[700px]:static">
          <p className="mb-[14px] font-[family-name:var(--font-jetbrains-mono)] text-[11px] uppercase text-[#c7f36b]">02 / Engineering expertise</p>
          <h2 className="m-0 font-[family-name:var(--font-space-grotesk)] text-[clamp(34px,4vw,49px)] font-semibold leading-[1.08]">The tools and technologies I study and use.</h2>
          <p className="mt-[18px] max-w-[480px] text-sm leading-[1.8] text-[#9299a5]">A practical toolkit across frontend development, interface design, application data, testing, and deployment.</p>
        </div>
        <div className="border-t border-white/[0.08]">
          {skillGroups.map((group) => (
            <div className="grid grid-cols-[minmax(160px,.7fr)_1.3fr] gap-5 border-b border-white/[0.08] py-[21px] max-[700px]:grid-cols-1 max-[700px]:gap-[10px]" key={group.title}>
              <h3 className="mt-0.5 mb-0 font-[family-name:var(--font-space-grotesk)] text-[15px] font-medium">{group.title}</h3>
              <div className="flex flex-wrap gap-x-[15px] gap-y-[7px] text-xs leading-[1.8] text-[#9299a5]">{group.items.map((skill, index) => <span key={skill}>{index > 0 && <span className="mr-[15px] text-[#c7f36b]/50">/</span>}{skill}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}