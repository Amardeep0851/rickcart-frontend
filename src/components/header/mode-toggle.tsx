"use client"
import React from 'react';
import { useTheme } from "next-themes"
import { Sun, Moon, SunDim } from "lucide-react";
import { cn } from "@/lib/utils";

function ThemeToggle() {
  const { setTheme } = useTheme()
  return (

    <div className="relative w-7 h-8 flex items-center order-5 ">
      <Sun 
      className={cn("size-5  rounded-full cursor-pointer absolute rotate-0 scale-0 left-2 dark:block dark:rotate-90 dark:scale-100  transition-all duration-300 ", )} 
      onClick={() => setTheme("light")} /> 
    
      <SunDim
      className="size-5 cursor-pointer absolute left-2 rotate-0 dark:-rotate-180 dark:scale-0 transition-all duration-300 " 
      onClick={() => setTheme("dark")} /> 
    </div>
  )
}

export default ThemeToggle