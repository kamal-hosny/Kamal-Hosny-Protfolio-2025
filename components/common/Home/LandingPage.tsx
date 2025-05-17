"use client";

import DownloadCv from "@/components/common/DownloadCv";
import { Button } from "@/components/ui/button";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { socialLinks } from "@/data/data";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const LandingPage = () => {
  return (
    <div id="home" className="relative min-h-screen w-full">
      <div className="container mx-auto px-4 py-12 md:py-24">
        {/* Main Content Container */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 justify-around w-full relative z-10">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 space-y-8 text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-black/30 border border-emerald-500/30 backdrop-blur-sm"
            >
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-emerald-500 font-medium">
                Available for work
              </span>
            </motion.div>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight flex items-center justify-center md:justify-start gap-3 flex-wrap">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Fullstack Next.js Dev
              </span>
              <br />
              <PointerHighlight containerClassName="relative">
                <span className="text-gray-300 flex items-center gap-2">
                  Kamal Hosny
                  <span title="Egypt" className="text-2xl">
                    🇵🇸
                  </span>
                </span>
              </PointerHighlight>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
              Bridging imagination with technology through modern web development.
              Specializing in{" "}
              <span className="text-emerald-400">React ecosystems</span> and
              <span className="text-cyan-400"> scalable architectures</span>.
            </p>

            <div className="flex gap-4 flex-wrap justify-center md:justify-start ">
              <Button
                asChild
                className=" bg-gradient-to-r cursor-pointer from-emerald-600 to-cyan-600 text-white px-8 py-6 rounded-xl hover:scale-105 transition-transform duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Projects
                </motion.div>
              </Button>

        <DownloadCv />
            </div>
            {/* social media links */}
            <div className="flex gap-4 flex-wrap justify-center md:justify-start ">
            {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-300 ${link.color} transition-all duration-300 transform hover:scale-110`}
              aria-label={link.name}
            >
              <span className="sr-only">{link.name}</span>
              {React.cloneElement(link.icon, { className: "h-6 w-6" })}
            </a>
          ))}
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative min-w-[400px] group"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10  overflow-hidden aspect-square rounded-3xl border-4 border-emerald-500/20 transform rotate-2 group-hover:rotate-0 transition-all duration-500 shadow-2xl shadow-emerald-500/20">
              <Image
                // src="/image/myImage.jpg"
                src="/image/myImage.jpg"
                fill
                alt="Kamal Hosny"
                className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
              />

              {/* Animated Border */}
              <div className="absolute inset-0 border-[3px] border-emerald-500/50 rounded-3xl animate-border-pulse" />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-cyan-500/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
