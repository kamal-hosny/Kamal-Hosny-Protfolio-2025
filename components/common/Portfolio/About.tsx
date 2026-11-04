import Image from "next/image";

const principles = [
  { title: "Performance First", description: "Fast, responsive experiences are a core product feature, not a final polish step." },
  { title: "Clean Architecture", description: "Clear structure keeps interfaces easier to extend, test, and maintain." },
  { title: "User-Centered Design", description: "Useful details and accessible patterns make every interaction feel considered." },
  { title: "Continuous Learning", description: "Curiosity keeps my tools and decisions aligned with a changing web." },
];

export default function About() {
  return (
    <section className="border-b border-white/[0.08] py-[108px] max-[700px]:py-[76px]" id="about">
      <div className="mx-auto w-[min(1180px,calc(100%-64px))] max-[700px]:w-[calc(100%-40px)] max-[420px]:w-[calc(100%-32px)]">
        <div className="grid grid-cols-[minmax(260px,.72fr)_minmax(0,1.28fr)] items-center gap-[72px] max-[900px]:gap-[42px] max-[700px]:grid-cols-1 max-[700px]:gap-[30px]">
          <div className="relative min-h-[390px] overflow-hidden border border-white/[0.08] bg-[#141820] max-[700px]:min-h-[350px] max-[700px]:max-w-[400px]"><Image src="/image/myImage.jpg" alt="Kamal Hosny" fill sizes="(max-width: 700px) 90vw, 360px" className="object-cover object-[center_32%] grayscale" /></div>
          <div>
            <p className="mb-[14px] font-[family-name:var(--font-jetbrains-mono)] text-[11px] uppercase text-[#c7f36b]">03 / A little about me</p>
            <h2 className="m-0 max-w-[560px] font-[family-name:var(--font-space-grotesk)] text-[clamp(34px,4vw,49px)] font-semibold leading-[1.08]">I care about how things work, and how they feel.</h2>
            <p className="mt-5 max-w-[610px] text-sm leading-[1.9] text-[#9299a5]">I&apos;m a Front-End Engineer who builds responsive, maintainable, high-performance web applications. I enjoy turning complex ideas into clear interfaces and solving the engineering details behind them.</p>
            <p className="mt-5 max-w-[610px] text-sm leading-[1.9] text-[#9299a5]">My approach brings frontend architecture, user experience, and performance together from the start, so the finished product is both useful to people and dependable to build on.</p>
          </div>
        </div>
        <div className="mt-[76px] border-t border-white/[0.08] pt-6 max-[700px]:mt-[52px]"><p className="mb-[14px] font-[family-name:var(--font-jetbrains-mono)] text-[11px] uppercase text-[#c7f36b]">How I work</p><h3 className="m-0 font-[family-name:var(--font-space-grotesk)] text-[22px] font-medium">Principles behind the pixels.</h3></div>
        <div className="mt-5 grid grid-cols-4 border-y border-white/[0.08] max-[900px]:grid-cols-2">
          {principles.map((principle, index) => (
            <article className={`py-5 pr-[18px] pb-[22px] ${index > 0 ? "border-l border-white/[0.08] pl-[18px] max-[900px]:pl-[18px]" : ""} ${index === 2 || index === 3 ? "max-[900px]:border-t max-[900px]:border-white/[0.08]" : ""} ${index === 2 ? "max-[900px]:border-l-0 max-[900px]:pl-0" : ""} max-[420px]:pr-[10px] ${index > 0 && index % 2 === 1 ? "max-[420px]:pl-[10px]" : ""}`} key={principle.title}>
              <span className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] text-[#c7f36b]">0{index + 1}</span><h4 className="mt-[18px] mb-2 font-[family-name:var(--font-space-grotesk)] text-base font-medium">{principle.title}</h4><p className="m-0 text-[11px] leading-[1.7] text-[#9299a5]">{principle.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}