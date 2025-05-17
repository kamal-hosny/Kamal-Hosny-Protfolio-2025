"use client"
import { motion } from 'framer-motion'
import { Code2, Layers, Rocket, Shield, Zap } from 'lucide-react'
import { Space_Grotesk } from 'next/font/google'
import { useEffect } from 'react'
import MainTitle from '../MainTitle'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

const styles = `
  @keyframes gradient {
    0% { background-position: 0% center; }
    50% { background-position: 100% center; }
    100% { background-position: 0% center; }
  }
  
  .animate-gradient {
    animation: gradient 8s linear infinite;
  }
`;

const advantages = [
  {
    title: "Modern Tech Stack",
    description: "Expertise in Next.js, React, and modern web technologies",
    icon: Code2,
    delay: 0.2,
    color: "from-purple-500 to-indigo-500"
  },
  {
    title: "Full Stack Development",
    description: "End-to-end development from frontend to backend solutions",
    icon: Layers,
    delay: 0.3,
    color: "from-cyan-500 to-emerald-500"
  },
  {
    title: "Performance Focus",
    description: "Optimized applications with blazing fast load times",
    icon: Zap,
    delay: 0.4,
    color: "from-amber-500 to-orange-500"
  },
  {
    title: "Secure & Scalable",
    description: "Building robust applications with security best practices",
    icon: Shield,
    delay: 0.5,
    color: "from-pink-500 to-rose-500"
  },
  {
    title: "Rapid Development",
    description: "Quick delivery without compromising on quality",
    icon: Rocket,
    delay: 0.6,
    color: "from-green-500 to-lime-500"
  }
]

const MyAdvantages = () => {
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <section className={`relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-black ${spaceGrotesk.className}`}>
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"/>
      </div>

      <div className="container mx-auto px-4 relative">
        <MainTitle 
          title={
            <span className="text-white">
              Why Choose Me?
            </span>
          } 
        />

        {/* Dynamic grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-full md:max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: advantage.delay,
                type: "spring",
                bounce: 0.4
              }}
              className={`group relative h-full min-h-[200px] md:min-h-[280px] p-4 md:p-8 rounded-xl md:rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] ${
                index === 0 || index === 4 ? 'md:col-span-2 lg:col-span-3' : ''
              }`}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${advantage.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}/>
              
              {/* Grid pattern */}
              <div className="absolute inset-0 bg-[url('/dot-grid.svg')] opacity-10 mix-blend-overlay"/>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
              
              <div className="relative flex flex-col h-full">
                {/* Animated icon */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 5 : -5 }}
                  className="mb-4 md:mb-6 self-start p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm border border-white/10"
                >
                  <advantage.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </motion.div>

                {/* Floating text */}
                <motion.h3 
                  whileHover={{ y: -5 }}
                  className="text-xl md:text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-3 md:mb-4 tracking-tight"
                  style={{ backgroundImage: `linear-gradient(45deg, ${advantage.color.replace('from-', '').replace('to-', '').split(' ').join(', ')})` }}
                >
                  {advantage.title}
                </motion.h3>

                <p className="text-gray-300/80 text-base md:text-lg leading-relaxed mb-4 md:mb-6 font-light">
                  {advantage.description}
                </p>

                {/* Hover effect line */}
                <div className="mt-auto w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent transition-all duration-500"/>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MyAdvantages