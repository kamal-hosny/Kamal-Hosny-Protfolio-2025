"use client"

import React from 'react'
import MainTitle from '../MainTitle'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiGithub, FiEye } from 'react-icons/fi'
import { projects } from '@/data/data'

const MyProducts = () => {
  return (
    <section id='projects' className="relative py-28 bg-gradient-to-b from-black via-blue-950/80  to-black overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <MainTitle 
          title={<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">My Projects</span>}
          description="Explore a collection of my latest and most innovative projects, each a testament to my skills and creativity." 
        />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
            hidden: {}
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id || index}
              variants={{
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { type: 'spring', stiffness: 120, damping: 15 }
                },
                hidden: { 
                  opacity: 0, 
                  y: 80,
                  transition: { type: 'spring', stiffness: 120, damping: 15 }
                }
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { type: 'spring', stiffness: 300 }
              }}
              className="group relative rounded-[2rem] overflow-hidden shadow-2xl backdrop-blur-lg border border-cyan-400/10 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-cyan-400/20"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className="h-full w-full"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700"
                  />
                </motion.div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                
                {/* Action Buttons */}
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                  <motion.a
                    href={project.githubLink ?? undefined}
                    target="_blank"
                    whileHover={{ y: -2 }}
                    className="flex items-center gap-2 px-5 py-2.5 bg-cyan-400/5 rounded-xl backdrop-blur-sm border border-cyan-400/20 hover:border-cyan-400/40 hover:bg-cyan-400/10 transition-all"
                  >
                    <FiGithub className="text-cyan-400 text-xl" />
                    <span className="text-cyan-400 font-medium text-sm">Code</span>
                  </motion.a>
                  
                  <motion.a
                    href={project.liveLink ?? undefined}
                    target="_blank"
                    whileHover={{ y: -2 }}
                    className="flex items-center gap-2 px-5 py-2.5 bg-white/5 rounded-xl backdrop-blur-sm border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all"
                  >
                    <FiEye className="text-white text-xl" />
                    <span className="text-white font-medium text-sm">Live Demo</span>
                  </motion.a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-gradient-to-b from-cyan-900/10 to-blue-900/10">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 mb-4">
                  {project.title}
                </h3>
                
                <p className="text-gray-300/90 mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span 
                      key={techIndex}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 bg-cyan-400/5 rounded-lg text-xs font-medium text-cyan-300/90 border border-cyan-400/10 hover:border-cyan-400/30 transition-all"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-50 transition-opacity duration-500">
                <div className="absolute -inset-8 bg-gradient-to-tr from-cyan-600/30 to-blue-600/30 blur-3xl animate-pulse-slow" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-15">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/25 rounded-full blur-[180px]"
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 -z-10 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
              opacity: 0
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default MyProducts