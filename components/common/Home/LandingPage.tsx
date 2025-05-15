'use client';

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FacebookIcon, GitBranch, Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen w-full px-4 md:px-12 lg:px-24 py-12 md:py-24 gap-12 relative overflow-hidden">
      
      {/* Main Content Container */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 justify-between w-full relative z-10">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 space-y-8"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-black/30 border border-emerald-500/30 backdrop-blur-sm"
          >
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-emerald-500 font-medium">Available for work</span>
          </motion.div>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight flex items-center gap-3 flex-wrap">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Fullstack Next.js Dev
            </span>
            <br />
            <span className="text-gray-300 flex items-center gap-2">
            Kamal Hosny <span title="Egypt" className="text-2xl">🇵🇸</span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
            Bridging imagination with technology through modern web development. 
            Specializing in <span className="text-emerald-400">React ecosystems</span> and 
            <span className="text-cyan-400"> scalable architectures</span>.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Button
              asChild
              className="bg-gradient-to-r cursor-pointer from-emerald-600 to-cyan-600 text-white px-8 py-6 rounded-xl hover:scale-105 transition-transform duration-300"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Explore Projects
              </motion.div>
            </Button>
            
            <Button
              variant="outline"
              className="cursor-pointer border-emerald-500/50 text-emerald-400 px-8 py-6 rounded-xl backdrop-blur-sm hover:text-white hover:bg-emerald-500/10"
            >
              Download CV
            </Button>
          </div>
{/* social media links */}
          <div className="flex gap-4 flex-wrap">
            <Link href="https://www.linkedin.com/in/kamal-hosny-681068295/">
              <span className="text-emerald-400 transition-colors flex rounded justify-center items-center h-10 w-10  hover:bg-emerald-400 hover:text-white">
              <Linkedin />
              </span>
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=100076564117070">
              

              <span className="text-emerald-400 transition-colors flex rounded justify-center items-center h-10 w-10  hover:bg-emerald-400 hover:text-white">
              <FacebookIcon />
              </span>

            </Link>
            <Link href="https://github.com/kamal-hosny">
              

              <span className="text-emerald-400 transition-colors flex rounded justify-center items-center h-10 w-10  hover:bg-emerald-400 hover:text-white">
              <Github />
              </span>

            </Link>
          
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div 
          className="relative min-w-[400px] group"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative z-10 w-full aspect-square rounded-3xl overflow-hidden border-4 border-emerald-500/20 transform rotate-2 group-hover:rotate-0 transition-all duration-500 shadow-2xl shadow-emerald-500/20">
            <Image
              src="/image/myImage.jpg"
              fill
              alt="Kamal Hosny"
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
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
  );
};

export default LandingPage;