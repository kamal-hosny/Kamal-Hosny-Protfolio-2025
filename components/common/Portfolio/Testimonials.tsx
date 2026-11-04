import Image from "next/image";
import { clientsTestimonials } from "@/data/data";

export default function Testimonials() {
  return (
    <section className="border-b border-white/[0.08] bg-[#0c0f13] py-[108px] max-[700px]:py-[76px]" id="testimonials">
      <div className="mx-auto w-[min(1180px,calc(100%-64px))] max-[700px]:w-[calc(100%-40px)] max-[420px]:w-[calc(100%-32px)]">
        <div className="mb-11 flex items-end justify-between gap-9 max-[700px]:mb-[30px] max-[700px]:flex-col max-[700px]:items-start max-[700px]:gap-4">
          <div className="max-w-[620px]"><p className="mb-[14px] font-[family-name:var(--font-jetbrains-mono)] text-[11px] uppercase text-[#c7f36b]">04 / Kind words</p><h2 className="m-0 font-[family-name:var(--font-space-grotesk)] text-[clamp(34px,4vw,49px)] font-semibold leading-[1.08]">Good work is a conversation.</h2></div>
          <p className="m-0 max-w-[480px] text-sm leading-[1.8] text-[#9299a5] max-[700px]:text-[13px]">A few words from people I&apos;ve had the pleasure of working with.</p>
        </div>
        <div className="grid grid-cols-3 border-t border-l border-white/[0.08] max-[700px]:grid-cols-2 max-[420px]:grid-cols-1">
          {clientsTestimonials.map((testimonial) => (
            <article className="flex min-h-[245px] flex-col justify-between border-r border-b border-white/[0.08] p-[22px] transition-colors hover:bg-white/[0.025] max-[700px]:min-h-[250px] max-[700px]:p-4 max-[420px]:min-h-0" key={testimonial.name}>
              <p className="m-0 text-[13px] leading-[1.8] text-[#d2d5da]" dir="auto">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="size-10 shrink-0 overflow-hidden rounded-full bg-[#1b2029]"><Image src={testimonial.image} alt={testimonial.name} width={40} height={40} sizes="40px" className="h-full w-full object-cover" /></div>
                <div><h3 className="m-0 text-xs font-semibold">{testimonial.name}</h3>{testimonial.role && <p className="mt-1 mb-0 max-w-[250px] text-[10px] leading-[1.5] text-[#9299a5]">{testimonial.role}</p>}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}