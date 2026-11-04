import Image from "next/image";
import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative flex min-h-[680px] items-center border-b border-white/[0.08] before:absolute before:inset-0 before:-z-10 before:bg-[linear-gradient(rgba(255,255,255,.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.018)_1px,transparent_1px)] before:bg-[size:64px_64px] before:[mask-image:linear-gradient(to_bottom,#000,transparent_90%)] before:content-[''] max-[700px]:min-h-0" id="home">
      <div className="mx-auto grid w-[min(1180px,calc(100%-64px))] grid-cols-[minmax(0,1.15fr)_minmax(340px,.85fr)] items-center gap-16 py-[44px] pb-[104px] max-[900px]:grid-cols-[minmax(0,1fr)_minmax(290px,.85fr)] max-[900px]:gap-[38px] max-[700px]:w-[calc(100%-40px)] max-[700px]:grid-cols-1 max-[700px]:gap-[38px] max-[700px]:py-[66px] max-[700px]:pb-[76px] max-[420px]:w-[calc(100%-32px)]">
        <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:duration-700">
          <p className="mb-[22px] inline-flex items-center gap-[10px] font-[family-name:var(--font-jetbrains-mono)] text-[11px] uppercase text-[#c7f36b]"><span className="size-[7px] rounded-full bg-[#c7f36b] shadow-[0_0_0_4px_rgba(199,243,107,.1)]" /> Front-End Engineer · React.js · Next.js</p>
          <h1 className="m-0 max-w-[760px] font-[family-name:var(--font-space-grotesk)] text-[clamp(52px,6vw,82px)] font-semibold leading-[.99] max-[700px]:max-w-[600px] max-[700px]:text-[clamp(46px,12vw,66px)]">Building digital experiences that <span className="text-[#c7f36b]">scale.</span></h1>
          <p className="mt-[26px] max-w-[590px] text-base leading-[1.8] text-[#9299a5] max-[700px]:text-sm">
            I&apos;m Kamal Hosny, a Front-End Engineer focused on building modern,
            scalable, and high-performance web applications with <strong className="font-medium text-[#f3f4f6]">React.js</strong>,
            <strong className="font-medium text-[#f3f4f6]"> Next.js</strong>, and performance engineering.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a className="inline-flex min-h-[46px] items-center justify-center gap-[9px] border border-transparent bg-[#c7f36b] px-[19px] text-[13px] font-semibold text-[#141810] transition duration-200 hover:-translate-y-0.5 hover:bg-[#d3fa82] max-[420px]:px-[13px] max-[420px]:text-[11px]" href="#projects">Explore My Work <ArrowDown size={16} /></a>
            <a className="inline-flex min-h-[46px] items-center justify-center gap-[9px] border border-white/[0.08] bg-white/[0.02] px-[19px] text-[13px] font-semibold text-[#f3f4f6] transition duration-200 hover:-translate-y-0.5 hover:border-[#c7f36b]/50 hover:text-[#c7f36b] max-[420px]:px-[13px] max-[420px]:text-[11px]" href="#contact">Let&apos;s Connect <ArrowUpRight size={16} /></a>
          </div>
          <div className="mt-[30px] flex flex-wrap items-center gap-[22px]" aria-label="Social profiles">
            <a className="inline-flex items-center gap-2 text-xs text-[#9299a5] transition-colors hover:text-[#c7f36b]" href="https://github.com/kamal-hosny" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
            <a className="inline-flex items-center gap-2 text-xs text-[#9299a5] transition-colors hover:text-[#c7f36b]" href="https://www.linkedin.com/in/kamal-hosny-681068295/" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
            <a className="inline-flex items-center gap-2 text-xs text-[#9299a5] transition-colors hover:text-[#c7f36b]" href="https://wa.me/201013655708" target="_blank" rel="noreferrer"><FaWhatsapp size={16} aria-hidden="true" /> WhatsApp</a>
          </div>
          <div className="mt-6 flex max-w-[590px] items-center gap-4 border-t border-white/[0.08] pt-[14px] max-[700px]:mt-[22px] max-[700px]:flex-col max-[700px]:items-start max-[700px]:gap-2" aria-label="Core technologies">
            <span className="shrink-0 font-[family-name:var(--font-jetbrains-mono)] text-[9px] uppercase text-[#c7f36b]">Core stack</span>
            <div className="flex flex-wrap gap-x-[14px] gap-y-2 font-[family-name:var(--font-jetbrains-mono)] text-[10px] text-[#c6cbd3] max-[700px]:gap-x-[10px]">
              <span>React.js</span>
              <span className="before:mr-[14px] before:text-[#c7f36b]/55 before:content-['/'] max-[700px]:before:mr-[10px]">Next.js</span>
              <span className="before:mr-[14px] before:text-[#c7f36b]/55 before:content-['/'] max-[700px]:before:mr-[10px]">TypeScript</span>
              <span className="before:mr-[14px] before:text-[#c7f36b]/55 before:content-['/'] max-[700px]:before:mr-[10px]">Tailwind CSS</span>
            </div>
          </div>
        </div>
        <div className="group relative z-10 aspect-[.82] min-w-0 overflow-visible border border-white/[0.08] bg-[linear-gradient(145deg,#1d232c,#11151b_70%)] max-[420px]:aspect-[.78]">
          <div className="absolute inset-0 overflow-hidden">
            <Image src="/image/newimage.jpg" alt="Kamal Hosny, Front-End Engineer" fill priority sizes="(max-width: 700px) 90vw, (max-width: 900px) 42vw, 440px" className="scale-[1.025] object-cover object-[center_38%] grayscale transition duration-500 group-hover:scale-[1.05] group-hover:grayscale-[15%]" />
          </div>
          <div className="absolute bottom-[-6%] left-[4%] z-20 w-[min(270px,calc(100%-24px))] border border-white/[0.16] bg-[#0d1015]/80 px-[13px] py-3 font-[family-name:var(--font-jetbrains-mono)] text-[9px] leading-[1.75] shadow-[0_18px_48px_rgba(0,0,0,.4)] backdrop-blur-xl max-[900px]:px-[9px] max-[900px]:py-[10px] max-[900px]:text-[8px] max-[420px]:text-[7px]" aria-label="Frontend code sample">
            <div className="flex items-center justify-between gap-[10px] border-b border-white/[0.08] pb-[9px]">
              <span className="flex gap-1"><i className="size-[6px] rounded-full bg-[#f47770]" /><i className="size-[6px] rounded-full bg-[#e8bd57]" /><i className="size-[6px] rounded-full bg-[#79c77b]" /></span>
              <span className="text-[#d7dbe2]">kamal.ts</span>
              <span className="text-[8px] text-[#c7f36b]">● online</span>
            </div>
            <div className="grid gap-[2px] pt-2 text-[#c3c8d0]" aria-label="Code sample">
              <div className="grid grid-cols-[19px_minmax(0,1fr)] gap-[9px] whitespace-nowrap max-[700px]:grid-cols-[16px_minmax(0,1fr)] max-[700px]:gap-[7px]"><span className="select-none text-right text-[#58616d]">01</span><code className="text-[#d3d8e0]"><span className="text-[#d79bff]">const</span> kamal = {'{'}</code></div>
              <div className="grid grid-cols-[19px_minmax(0,1fr)] gap-[9px] whitespace-nowrap max-[700px]:grid-cols-[16px_minmax(0,1fr)] max-[700px]:gap-[7px]"><span className="select-none text-right text-[#58616d]">02</span><code className="text-[#d3d8e0]"><span className="text-[#82c9f4]">role</span>: <span className="text-[#c7f36b]">&quot;Front-End Engineer&quot;</span>,</code></div>
              <div className="grid grid-cols-[19px_minmax(0,1fr)] gap-[9px] whitespace-nowrap max-[700px]:grid-cols-[16px_minmax(0,1fr)] max-[700px]:gap-[7px]"><span className="select-none text-right text-[#58616d]">03</span><code className="text-[#d3d8e0]"><span className="text-[#82c9f4]">stack</span>: [<span className="text-[#c7f36b]">&quot;React&quot;</span>, <span className="text-[#c7f36b]">&quot;Next.js&quot;</span>, <span className="text-[#c7f36b]">&quot;TS&quot;</span>],</code></div>
              <div className="grid grid-cols-[19px_minmax(0,1fr)] gap-[9px] whitespace-nowrap max-[700px]:grid-cols-[16px_minmax(0,1fr)] max-[700px]:gap-[7px]"><span className="select-none text-right text-[#58616d]">04</span><code className="text-[#d3d8e0]"><span className="text-[#82c9f4]">state</span>: [<span className="text-[#c7f36b]">&quot;Redux&quot;</span>, <span className="text-[#c7f36b]">&quot;Zustand&quot;</span>],</code></div>
              <div className="grid grid-cols-[19px_minmax(0,1fr)] gap-[9px] whitespace-nowrap max-[700px]:grid-cols-[16px_minmax(0,1fr)] max-[700px]:gap-[7px]"><span className="select-none text-right text-[#58616d]">05</span><code className="text-[#d3d8e0]"><span className="text-[#82c9f4]">data</span>: [<span className="text-[#c7f36b]">&quot;TanStack&quot;</span>, <span className="text-[#c7f36b]">&quot;Axios&quot;</span>],</code></div>
              <div className="grid grid-cols-[19px_minmax(0,1fr)] gap-[9px] whitespace-nowrap max-[700px]:grid-cols-[16px_minmax(0,1fr)] max-[700px]:gap-[7px]"><span className="select-none text-right text-[#58616d]">06</span><code className="text-[#d3d8e0]"><span className="text-[#82c9f4]">forms</span>: [<span className="text-[#c7f36b]">&quot;RHF&quot;</span>, <span className="text-[#c7f36b]">&quot;Zod&quot;</span>],</code></div>
              <div className="grid grid-cols-[19px_minmax(0,1fr)] gap-[9px] whitespace-nowrap max-[700px]:grid-cols-[16px_minmax(0,1fr)] max-[700px]:gap-[7px]"><span className="select-none text-right text-[#58616d]">07</span><code className="text-[#d3d8e0]"><span className="text-[#82c9f4]">focus</span>: <span className="text-[#c7f36b]">&quot;fast &amp; accessible&quot;</span></code></div>
              <div className="grid grid-cols-[19px_minmax(0,1fr)] gap-[9px] whitespace-nowrap max-[700px]:grid-cols-[16px_minmax(0,1fr)] max-[700px]:gap-[7px]"><span className="select-none text-right text-[#58616d]">08</span><code className="text-[#d3d8e0]">{'}'};</code></div>
            </div>
          </div>
          <div className="absolute top-6 right-6 left-6 z-10 flex items-start justify-between gap-4 bg-[linear-gradient(90deg,rgba(9,11,14,.78),transparent)] px-3 py-2">
            <div><p className="m-0 font-[family-name:var(--font-space-grotesk)] text-xl">Kamal Hosny</p><p className="mt-[5px] mb-0 text-xs text-[#9299a5]">Front-End Engineer</p></div>
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] uppercase text-[#c7f36b]">EG / 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}