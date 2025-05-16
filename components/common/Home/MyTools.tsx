"use client";

import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import MainTitle from '../MainTitle';

const tools = [
  {
    name: "Next.js",
    icon: "/image/languages/next.svg",
  },
  {
    name: "React",
    icon: "/image/languages/React.svg",
  },
  {
    name: "TypeScript",
    icon: "/image/languages/typescript.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "/image/languages/tailwindcss.svg",
  },
  {
    name: "MongoDB",
    icon: "/image/languages/mongodb.svg",
  },
  {
    name: "PostgreSQL",
    icon: "/image/languages/postgresql.svg",
  },
  {
    name: "Git",
    icon: "/image/languages/git.svg",
  },

];

const MyTools = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">

        <MainTitle 
          title={
            <span className="text-white">
            Tools that I have used
            </span>
          } 
          description={
            <span className="animate-gradient bg-gradient-to-r from-emerald-400 via-cyan-400  to-blue-500 bg-clip-text text-transparent bg-[length:200%_auto]">
               A collection of modern technologies and tools I use to build amazing web applications
            </span>
          } 
        />



        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          className="w-full"
        >
          {tools.map((tool, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-emerald-500/50 transition-colors duration-300 group">
                <div className="relative w-16 h-16 mb-4">
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    fill
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h3 className="text-white text-sm font-medium">{tool.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MyTools;
