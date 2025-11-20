"use client"
import React from 'react';
import { Mail, Phone, MapPin } from "lucide-react";
import {motion} from "framer-motion";

function InfoSection() {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10  -mt-12 z-50">
        {[
          { icon: MapPin, 
            heading:"Our Address", 
            contentLine1:"123 Street Name, Jalandhar, ",
            contentLine2:" Punjab, India "
          },
          { icon: Phone, 
            heading:"Phone Number", 
            contentLine1:"+91 98765-43210",
            contentLine2:" Mon–Sun, 10 AM – 7 PM "
          },
          { icon: Mail, 
            heading:"Email", 
            contentLine1:"support@rickcart.com",
            contentLine2:" We reply within 24 hours. "
          }
          ].map((item, index) => (
          <motion.div 
          className="dark:bg-zinc-900/50 bg-zinc-200/30 border dark:border-zinc-700 border-zinc-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-orange-700/10 transition-all " 
          key={index}
          initial={{opacity:0, y:-20}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.5}}
          >
            <item.icon className="size-10 mx-auto mb-4 text-orange-700" />
            <h3 className="text-lg font-semibold mb-1">{item.heading}</h3>
            <p className="dark:text-zinc-300 text-zinc-700 text-sm leading-relaxed">
              {item.contentLine1}
              <br />
              {item.contentLine2}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default InfoSection