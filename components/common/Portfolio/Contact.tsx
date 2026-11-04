import { ArrowUpRight, Github, Linkedin, Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-[#10141a] pt-[100px] max-[700px]:pt-[76px]" id="contact">
      <div className="mx-auto w-[min(1180px,calc(100%-64px))] max-[700px]:w-[calc(100%-40px)] max-[420px]:w-[calc(100%-32px)]">
        <div className="grid grid-cols-[1.2fr_.8fr] items-end gap-[50px] pb-[76px] max-[700px]:grid-cols-1 max-[700px]:gap-7 max-[700px]:pb-14">
          <div><p className="mb-[14px] font-[family-name:var(--font-jetbrains-mono)] text-[11px] uppercase text-[#c7f36b]">05 / Contact</p><h2 className="m-0 max-w-[700px] font-[family-name:var(--font-space-grotesk)] text-[clamp(42px,6vw,72px)] font-semibold leading-none max-[700px]:text-[clamp(44px,11vw,62px)]">Have an idea? Let&apos;s build <span className="text-[#c7f36b]">something great.</span></h2></div>
          <div className="flex flex-col items-start gap-5">
            <p className="m-0 max-w-[360px] text-[13px] leading-[1.8] text-[#9299a5]">Have a project in mind or want to talk through an idea? I&apos;d be glad to hear from you.</p>
            <a className="inline-flex items-center gap-[10px] text-[13px] text-[#f3f4f6] [&_svg]:size-4 [&_svg:first-child]:text-[#c7f36b]" href="mailto:kamalixon.dev@gmail.com"><Mail /> kamalixon.dev@gmail.com <ArrowUpRight /></a>
            <a className="inline-flex items-center gap-[10px] text-[13px] text-[#f3f4f6] [&_svg]:size-4 [&_svg:first-child]:text-[#c7f36b]" href="https://wa.me/201013655708" target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp +201013655708 <ArrowUpRight /></a>
            <a className="inline-flex min-h-[46px] items-center justify-center gap-[9px] border border-transparent bg-[#c7f36b] px-[19px] text-[13px] font-semibold text-[#141810] transition duration-200 hover:-translate-y-0.5 hover:bg-[#d3fa82]" href="mailto:kamalixon.dev@gmail.com">Start a conversation <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <footer className="flex min-h-[72px] items-center justify-between gap-6 border-t border-white/[0.08] text-[11px] text-[#9299a5] max-[420px]:min-h-0 max-[420px]:flex-col max-[420px]:items-start max-[420px]:justify-center max-[420px]:gap-3 max-[420px]:py-[18px]">
          <span>© {new Date().getFullYear()} Kamal Hosny. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <a className="inline-flex transition-colors hover:text-[#c7f36b]" href="https://github.com/kamal-hosny" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16} /></a>
            <a className="inline-flex transition-colors hover:text-[#c7f36b]" href="https://www.linkedin.com/in/kamal-hosny-681068295/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a>
            <a className="inline-flex transition-colors hover:text-[#c7f36b]" href="https://wa.me/201013655708" target="_blank" rel="noreferrer" aria-label="WhatsApp">WhatsApp</a>
          </div>
        </footer>
      </div>
    </section>
  );
}