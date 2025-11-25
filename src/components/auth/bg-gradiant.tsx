"use client"
import React from 'react';
import {motion} from "framer-motion";

function BgGradiant() {
  return (
    <>
      <motion.div
      className="size-72 bg-gradient-to-b from-orange-700 to-orange-800 absolute -bottom-28 -right-28 rounded-full blur-2xl opacity-20 duration-700 "
      initial={{scale:0.9}}
      animate={{scale:[0.9, 2, 0.9]}}
      transition={{duration:4, repeat:Infinity}}
      />
      <motion.div
      className="size-72 bg-gradient-to-b from-orange-700 to-orange-800 absolute top-10 left-10 rounded-full blur-2xl opacity-15 duration-700 "
      animate={{scale:[1, 1.5, 1]}}
      transition={{duration:6, repeat:Infinity}}
      />
    </>
  )
}

export default BgGradiant