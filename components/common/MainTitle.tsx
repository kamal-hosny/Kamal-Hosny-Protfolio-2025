import { motion } from 'framer-motion';
import { Poppins } from 'next/font/google';
import { ReactNode } from 'react';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['italic', 'normal']
})

interface MainTitleProps {
  title: ReactNode;
  description?: ReactNode;
  highlightedWords?: {
    word: string;
    color: string;
  }[];
}

// Fixed positions for the dots to prevent hydration mismatches
const dotPositions = [
  { top: '82.23%', left: '9.33%' },
  { top: '41.23%', left: '26.04%' },
  { top: '92.10%', left: '3.55%' },
  { top: '99.67%', left: '68.88%' },
  { top: '52.44%', left: '67.93%' },
  { top: '37.87%', left: '66.53%' }
];

const MainTitle = ({ 
  title, 
  description = "Crafting digital excellence through innovation, precision, and cutting-edge tech",
  highlightedWords = [
    { word: "innovation", color: "text-cyan-300" },
    { word: "precision", color: "text-emerald-300" },
    { word: "cutting-edge tech", color: "text-purple-300" }
  ]
}: MainTitleProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2 }}
      className={`text-center mb-24 relative z-10 ${poppins.className}`}
    >
      {/* Floating Particles Background */}
      <div className="absolute inset-0 overflow-hidden">
        {dotPositions.map((position, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.4 }}
            transition={{ 
              duration: 0.8,
              delay: i * 0.1,
              type: "spring"
            }}
            className="absolute w-2 h-2 bg-emerald-400 rounded-full"
            style={{
              top: position.top,
              left: position.left,
            }}
          />
        ))}
      </div>

      {/* Main Title with Dynamic Shadow */}
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter
                   bg-gradient-to-r from-cyan-400 via-emerald-300 to-cyan-400 
                   bg-clip-text text-transparent drop-shadow-2xl
                   hover:drop-shadow-[0_10px_30px_rgba(34_211_238_/_0.3)] transition-all"
      >
        <span className="relative inline-block text-white">
          {title}
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute -bottom-4 left-0 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500"
          />
        </span>
      </motion.h2>

      {/* Animated Description Card */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="inline-block relative group"
      >
        <div className="relative z-10 px-8 py-6 bg-black/50 backdrop-blur-lg
                        rounded-2xl border border-cyan-500/20 
                        hover:border-emerald-500/40 transition-colors">
          <p className="text-gray-300/90 italic font-light 
                       leading-relaxed max-w-3xl mx-auto">
            {typeof description === 'string' ? (
              description.split(' ').map((word, index) => {
                const highlightedWord = highlightedWords.find(hw => 
                  description.includes(hw.word) && 
                  description.indexOf(hw.word) === description.indexOf(word)
                );
                
                return highlightedWord ? (
                  <span key={index} className={`font-semibold ${highlightedWord.color}`}>
                    {word}{' '}
                  </span>
                ) : (
                  <span key={index}>{word}{' '}</span>
                );
              })
            ) : (
              description
            )}
          </p>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-40 
                       blur-2xl transition-opacity bg-gradient-to-r from-cyan-500/30 
                       to-emerald-500/30"/>
      </motion.div>
    </motion.div>
  )
}

export default MainTitle