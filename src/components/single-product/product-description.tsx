"use client"

import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";

// We define the URL outside. Note we wrap it in `url('...')` here.
const checkmarkUrl = `url("/svg/check.svg")`;

export default function ProductDescription({ description }: { description: string }) {
  const [sanitizedContent, setSanitizedContent] = useState("");

  useEffect(() => {
    // Sanitize only on client to avoid hydration mismatch
    setSanitizedContent(DOMPurify.sanitize(description));
  }, [description]);

  return (
    <div 
      className="
        text-zinc-300 
        text-sm
        leading-relaxed
        
        /* TARGET THE LISTS (<ul>) */
        [&_ul]:space-y-3 
        [&_ul]:my-4
        
        /* TARGET THE ITEMS (<li>) */
        [&_li]:relative 
        [&_li]:pl-8 
        [&_li]:list-none
        
        /* CREATE THE FAKE CHECKMARK (::before) */
        [&_li::before]:content-['']
        [&_li::before]:absolute
        [&_li::before]:left-0
        [&_li::before]:top-[2px]
        [&_li::before]:h-5
        [&_li::before]:w-5
        [&_li::before]:bg-no-repeat
        [&_li::before]:bg-center
        [&_li::before]:bg-contain
        
        /* USE THE CSS VARIABLE WE DEFINED BELOW */
        [&_li::before]:bg-[image:var(--check-icon)]
      "
      // We pass the complex string here as a CSS variable.
      // Next.js handles this safely at runtime, so it won't break the build.
      style={{
        '--check-icon': checkmarkUrl
      } as React.CSSProperties}
    >
      <div className="dark:text-zinc-300 text-zinc-800 text-base" dangerouslySetInnerHTML={{ __html: sanitizedContent || description }} />
    </div>
  );
}