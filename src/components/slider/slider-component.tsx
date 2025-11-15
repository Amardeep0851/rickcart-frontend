"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import getBillboards from "@/actions/getBillboards";
import { BillboardType } from "@/lib/types";

export default function SliderComponent({billboards}:{billboards:BillboardType[]}) {
  
  const [current, setCurrent] = useState(0);

  // auto slide every 5s
  useEffect(() => {
    if (!billboards.length) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % billboards.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [billboards]);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % billboards.length);
  const prevSlide = () =>
    setCurrent((prev) =>
      prev === 0 ? billboards.length - 1 : prev - 1
    );

  if (!billboards.length) return null;
  
  return (
    
      <div className="dark:bg-zinc-900 bg-zinc-100 rounded-lg my-5">
      <div className="w-full aspect-[7/2] max-h-[400px] relative">
        {billboards.map((billboard, index) => (
          <Image
            key={index}
            src={billboard.imageUrl}
            alt={billboard.altText || "Billboard"}
            fill
            priority={index === current}
            className={`object-cover transition-opacity duration-700 rounded-lg ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full text-white hover:bg-black/60"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full text-white hover:bg-black/60"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {billboards.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 w-2 rounded-full ${
              idx === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
    
  );
}
