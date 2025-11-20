"use client"
import Image from "next/image"
import React from 'react'
import {motion} from "framer-motion";

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";

function ContactForm() {
  return (
    <div className="grid grid-cols-1 rounded-md dark:bg-zinc-900 bg-zinc-100 lg:grid-cols-2 gap-4 relative py-8 pr-4 overflow-hidden">
        
        {/* LEFT — Text Section */}
        <Image 
          src="/images/site-images/contact-us-agent3.png" 
            fill 
            alt="Agent" 
            objectFit="cover" 
            objectPosition="center" 
            className="opacity-5 rounded-t-md" 
          />
        <div className="flex flex-col  justify-center px-4 relative">
          <motion.h2 
            className="text-5xl font-semibold text-orange-700 mb-4 leading-tight"
            initial={{opacity:0, y:-20}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.5}}          
          >
            Get in touch with us
          </motion.h2>
          <motion.p 
          className="text-zinc-800 dark:text-zinc-200 text-lg leading-relaxed text-justify"
          initial={{opacity:0, y:-20}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.5}}
          >
            Need to get in touch with us? Either fill out the form with your
            inquiry or contact us using the phone number or email shown above.
            We will try our best to solve your problem as soon as possible.
          </motion.p>
          
        </div>

        {/* RIGHT — Form*/}
        <motion.form 
        className="dark:bg-zinc-900/50 bg-zinc-200/50  z-10 border dark:border-zinc-700 border-zinc-300  p-8 rounded-2xl shadow-lg"
        initial={{opacity:0, y:-20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5}}
        >
          <div className="mb-6">
            <label className="block text-sm mb-1">Your Name</label>
            <Input
              type="text"
              className="w-full border-zinc-400/60 dark:border-zinc-700"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm mb-1">Email Address</label>
            <Input
              type="email"
              className="w-full border-zinc-400/60 dark:border-zinc-700"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm mb-1">Message</label>
            <Textarea
              rows={5}
              className="w-full border-zinc-400/60 dark:border-zinc-700"
            />
          </div>

          <Button
            type="submit"
            variant="orange"
            className="float-end"
          >
            Send Message
          </Button>
        </motion.form>

      </div>
  )
}

export default ContactForm