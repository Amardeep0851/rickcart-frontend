"use client"
import React from 'react';
import Image from "next/image";
import {motion} from "framer-motion"

function Header() {
  return (
      <div className="z-0">
        <div className="relative w-full h-[400px] overflow-hidden bg-zinc-800">
          <Image 
          src="/images/site-images/contact-us-agent2.jpg" 
            fill 
            alt="Agent" 
            objectFit="cover" 
            objectPosition="center" 
            className="opacity-30 rounded-t-md" 
          />
          <div className="absolute inset-0 grid grid-cols-3 ">
            <motion.div 
              className="bg-orange-900  rounded-4xl blur-md opacity-30 "
              initial={{rotate:90}}
              animate={{ scale:[1,2,1 ]}}
              transition={{repeat:Infinity, duration:18}} 
            />
             <motion.div 
              className="bg-green-700  rounded-full blur-md opacity-30 "
              animate={{ scale:[1.3,2,1.3  ]}}
              transition={{repeat:Infinity, duration:12}} 
            />
            <motion.div 
              className="bg-blue-700  rounded-4xl blur-md opacity-30 "
              initial={{rotate:180}}
              animate={{ scale:[1.6,2,1.6  ]}}
              transition={{repeat:Infinity, duration:18}} 
            />            
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center ">
            <motion.h1 
              className="text-5xl text-orange-600 font-bold"
              initial={{x:-20, opacity:0}}
              animate={{x:0, opacity:1}}
              transition={{duration:0.3}}
            >
              Contact Us
            </motion.h1>
            <motion.p 
              className="text-zinc-50 mt-2 text-lg"
              initial={{x:-20, opacity:0}}
              animate={{x:0, opacity:1}}
              transition={{duration:0.3}}
            >
              Questions, support, feedback — we're here to help.
            </motion.p>
          </div>
        </div>
        
      </div>
  )
}

export default Header