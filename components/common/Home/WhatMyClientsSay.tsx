"use client"

import React from 'react'
import MainTitle from '../MainTitle'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/pagination'

const clientsTestimonials = [
  {
    name: "Kamal Hosny",
    role: "CEO",
    company: "Tech Innovators",
    text: "Working with this team revolutionized our digital presence. Their attention to detail and creative solutions exceeded all our expectations.",
    image: "https://avatars.githubusercontent.com/u/150514586?v=4",
  },
  {
    name: "Ahmed Fares 🇵🇸",
    role: "CTO",
    company: "StartUp Hub",
    text: "كنت اعاني من حساسيه الاختراق لاكن بعد تعلم السايبر سيكيورتي اصبحت احلى من قبل.",
    image: "https://media.licdn.com/dms/image/v2/D4D35AQHpLQwYjcfBAg/profile-framedphoto-shrink_800_800/B4DZZzbaoYG4Ag-/0/1745693289372?e=1748005200&v=beta&t=uB-QsNnVzSBBhC1r7LZAQu-OmG1JSr-3WV02jJ5VF3s",
  },
  {
    name: "كلاوي",
    role: "Product Manager",
    company: "Digital Solutions",
    text: "Their technical expertise and communication skills are outstanding. We've seen got a significant boost in user engagement.",
    image: "https://media.licdn.com/dms/image/v2/D4E35AQFeMUioT40caA/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1734778499641?e=1748005200&v=beta&t=aUTsDJrwkBPdPaHbetK5LoJE9_fBkdAieZ7cFJKq8_g",
  },
  {
    name: "هاني زوكربيرغ",
    role: "Founder",
    company: "مؤسس سوا زبييس",
    text: "The scalable architecture they implemented allowed us to grow seamlessly. Highly recommended!",
    image: "https://sawa-space.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdikjox62g%2Fimage%2Fupload%2Fv1746642341%2Fimges%2Fdbbagno2kzq1iwuqhef8.jpg&w=1920&q=75",
  },
]

const WhatMyClientsSay = () => {
  return (
    <section className="relative py-16 bg-gradient-to-b from-blue-950 to-black overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <MainTitle 
          title={
            <span className="text-white">
              Client Testimonials
            </span>
          } 
         
        />

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation={{
            nextEl: '.testimonial-next',
            prevEl: '.testimonial-prev',
          }}
          className="!pb-12 !pt-8"
        >
          {clientsTestimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full bg-white/5 rounded-lg p-6 border border-white/10 hover:border-cyan-400/30 backdrop-blur-sm transition-all group">
                {/* Quote Icon */}
                <div className="text-cyan-400 text-xl mb-2 opacity-80">“</div>

                {/* Testimonial Text */}
                <p className="text-base text-gray-300 mb-4 leading-snug line-clamp-4">
                  {testimonial.text}
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-3">
                  {/* Client Image */}
                  <div className="relative w-12 h-12 overflow-hidden rounded-xl border border-cyan-400/20 group-hover:border-cyan-400 transition-all shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Client Details */}
                  <div>
                    <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-400 text-xs">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-70 transition-opacity" />
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation */}
          <button className="testimonial-next absolute top-1/2 right-2 z-10 -translate-y-1/2 bg-white/5 p-2 rounded-full hover:bg-white/10 transition-all">
            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <button className="testimonial-prev absolute top-1/2 left-2 z-10 -translate-y-1/2 bg-white/5 p-2 rounded-full hover:bg-white/10 transition-all">
            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </Swiper>
      </div>

      {/* Animated Particles Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent)] animate-pulse"></div>
        <div className="absolute w-1 h-1 bg-cyan-400/50 rounded-full top-[20%] left-[30%] animate-[particle_15s_linear_infinite]"></div>
        <div className="absolute w-1 h-1 bg-cyan-400/50 rounded-full top-[40%] left-[60%] animate-[particle_12s_linear_infinite]"></div>
        <div className="absolute w-1 h-1 bg-cyan-400/50 rounded-full top-[60%] left-[20%] animate-[particle_18s_linear_infinite]"></div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[#090909] to-transparent z-5 pointer-events-none" />

      <style jsx>{`
        @keyframes particle {
          0% { transform: translate(0, 0); opacity: 0.8; }
          100% { transform: translate(100vw, 100vh); opacity: 0; }
        }
      `}</style>
    </section>
  )
}

export default WhatMyClientsSay