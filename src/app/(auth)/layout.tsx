"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  Inter
} from "next/font/google";

import Logo from "@/components/header/logo";
import { cn } from "@/lib/utils";
import ShoppingImage from "./components/shopping-image";


const inter = Inter({ weight: "600", subsets: ["latin"] });

function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="bg-linear-to-b from-zinc-950 to-orange-800/15 min-h-screen px-4 pt-3 pb-10 relative overflow-hidden ">
      <div className="max-w-[1400px] mx-auto  ">

        {/* header */}
        <header>
          <nav className="flex justify-between ">
            <Logo />
            {/* <Link 
            href={pathname.startsWith("/sign-up") ? "/sign-in" : "/sign-up"}
            className="bg-orange-600/80 text-white hover:bg-orange-600/70 cursor-pointer text-base mt-2 rounded-md px-3 py-1 z-50">
              {
                pathname.startsWith("/sign-up")
                ? "Log In"
                : "Create new account"
              }
            </Link> */}
          </nav>
        </header>
        {/* header */}
        

        <div className="lg:grid lg:grid-cols-5 ">

          {/* left side */}
          <div className="col-span-3 lg:pr-10 ">
            <motion.h1 
            className={cn( "text-5xl/tight pt-20 font-medium text-white text-center lg:text-left ", inter.className )}
            initial={{x:-40, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:0.5}}
            >
              Create Your Account and Start Shopping
            </motion.h1>
            
            <ShoppingImage />
            <div className="border-t-4 rounded-full w-full border-orange-700 -mt-1 z-50" />
          </div>

          {/* right side login or sign up */}
          <motion.div 
            className="col-span-2 lg:ml-16 xl:ml-0 z-50 lg:mt-4 mt-8 flex justify-center lg:justify-end items-center"
            initial={{x:50, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{
              duration:1
            }}
          >
            {children}
          </motion.div>
          {/* right side login or sign up */}
        </div>
      </div>
      {/* right bottom side ornage circle */}
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
    </div>
  );
}

export default AuthLayout;
