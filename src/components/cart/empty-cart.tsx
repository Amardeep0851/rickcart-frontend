"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart, ArrowRight, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function EmptyCart() {
  const route = useRouter();
  return (
    <div className="flex flex-col items-center justify-center dark:bg-zinc-900 bg-zinc-100 text-zinc-100 rounded-md mt-4 p-4 min-h-screen ">
      {/* ANIMATED ILLUSTRATION CONTAINER */}

      <div className="relative w-40 h-40 mb-8 ">
        {/* 1. The Cart (Static Base) */}
        <div className="absolute inset-0 dark:bg-zinc-800 bg-zinc-100 rounded-full flex items-center justify-center border dark:border-zinc-800 border-zinc-200 shadow-xl">
          <motion.div
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <ShoppingCart className="dark:text-zinc-600 text-zinc-400 size-20" />
          </motion.div>
        </div>

        {/* 2. The "Confused" Question Mark (Animated) */}
        {/* This mimics the "scratching head/confusion" emotion */}
        <motion.div
          className="absolute -top-2 -right-2 bg-orange-600 rounded-full p-2 border-4 dark:border-zinc-950 border-zinc-300  "
          animate={{
            rotate: [0, 20, -20, 10, 0], // Shake head motion
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <HelpCircle className="w-8 h-8 text-white" />
        </motion.div>

        {/* 3. The "Ghost" Elements (Floating away) */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-full h-full"
          animate={{ opacity: [1, 0.8, 0], y: [-80, -3, -1] }}
          transition={{ duration: 4, times:[0, 0.9, 1],  repeat: Infinity }}
        >
          <div className="w-2 h-2 dark:bg-zinc-600 bg-zinc-400 rounded-full absolute top-3 -left-2" />
          <div className="w-2 h-2 dark:bg-zinc-600 bg-zinc-400 rounded-full absolute top-3 left-2" />
        </motion.div>
      </div>

      {/* <div className="w-96 h-auto ">
        <video className="mix-blend-lighten w-full" loop muted  autoPlay>
            <source src="/video/Cartoon_Video_Creation_Request.mp4" type="video/mp4" />
          </video>
      </div> */}

      {/* TEXT CONTENT */}
      <h2 className="text-3xl font-bold text-center dark:text-zinc-200 text-zinc-800 mb-3 ">
        Your Cart is Empty
      </h2>
      <p className="dark:text-zinc-400 text-zinc-700 max-w-lg mb-8 text-lg text-center">
        Looks like you haven't added anything to your cart yet. Explore our
        products and find something you love.
      </p>

      {/* ACTION BUTTON */}
      <Link href="/">
        <Button variant="orange" onClick={() => route.push("/")}>
          Start Shopping
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
      <div className="mt-8 flex gap-6 text-sm text-gray-500">
        <Link href="/orders" className="hover:text-orange-500 hover:underline">
          View Orders
        </Link>
        <span>|</span>
        <Link
          href="/wishlist"
          className="hover:text-orange-500 hover:underline"
        >
          View Wishlist
        </Link>
      </div>
    </div>
  );
}
