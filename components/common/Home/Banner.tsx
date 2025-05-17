"use client";
import { socialLinks } from '@/data/data';
import React from 'react'
import { FiExternalLink, FiMail } from 'react-icons/fi';


const Banner = () => {
  // const googleFormLink = "https://forms.gle/your-google-form-link-here"
  
  

  return (
    <div id='contact' className="relative isolate px-6 py-24 lg:px-8 bg-gradient-to-b from-black via-emerald-900 to-black">
      <div className="mx-auto max-w-2xl text-center">
        <div className="inline-flex items-center gap-x-2 bg-white/5 px-4 py-2 rounded-full mb-6">
          <FiMail className="text-emerald-400 text-xl" />
          <h2 className="text-sm font-semibold text-gray-100">Get in Touch</h2>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Let&apos;s Build Something Amazing Together!
        </h1>
        
        <p className="mt-6 text-lg leading-8 text-gray-300 animate-pulse">
          Share your ideas and I&apos;ll get back to you within 24 hours
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            // onClick={() => window.open(googleFormLink, "_blank")}
            className="flex items-center gap-x-2 rounded-full bg-emerald-800 px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-emerald-400 transition-all duration-300"
          >
            <FiExternalLink className="text-lg" />
            Contact Form
          </button>
        </div>

        <div className="mt-8 flex justify-center space-x-6">
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

        <div className="mt-8 border-t border-white/10 pt-8">
          <p className="text-xs leading-5 text-gray-400">
            Prefer direct communication? 
            <a 
              href="mailto:kamalixon.dev@gmail.com" 
              className="text-emerald-400 hover:text-emerald-300 ml-2"
            >
              Click to send email
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Banner