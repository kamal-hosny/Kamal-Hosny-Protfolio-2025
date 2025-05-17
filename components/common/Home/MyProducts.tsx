"use client"

import React from 'react'
import MainTitle from '../MainTitle'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiGithub, FiEye } from 'react-icons/fi'
import { projects } from '@/data/data'


const MyProducts = () => {
  return (
    <section id='MyProducts' className="relative py-20 bg-gradient-to-b from-black to-blue-950 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <MainTitle 
          title={<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">My Projects</span>} 
        />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
            hidden: {}
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { type: 'spring', stiffness: 100 }
                },
                hidden: { 
                  opacity: 0, 
                  y: 50,
                  transition: { type: 'spring', stiffness: 100 }
                }
              }}
              whileHover={{ 
                scale: 1.02,
              }}
              className="group relative rounded-2xl overflow-hidden shadow-2xl backdrop-blur-lg border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                
                {/* Action Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                  <motion.a
                    href={project.githubLink ?? undefined}
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 px-6 py-3 bg-cyan-500/10 rounded-full backdrop-blur-sm border border-cyan-400/30 hover:border-cyan-400/60 transition-all"
                  >
                    <FiGithub className="text-cyan-400" />
                    <span className="text-cyan-400 font-medium">GitHub</span>
                  </motion.a>
                  
                  <motion.a
                    href={project.liveLink ?? undefined}
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/30 hover:border-white/60 transition-all"
                  >
                    <FiEye className="text-white" />
                    <span className="text-white font-medium">Preview</span>
                  </motion.a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-gradient-to-b from-black/80 to-black">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-5 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span 
                      key={techIndex}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 bg-white/5 rounded-lg text-sm text-cyan-300 border border-white/10 hover:border-cyan-400/30 transition-all"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-40 transition-opacity duration-300">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600/30 to-blue-600/30 blur-3xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"
        />
      </div>
    </section>
  )
}

export default MyProducts