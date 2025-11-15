"use client"
import React, { useEffect } from 'react'
import { useParams, useRouter } from "next/navigation";

import { useGetCategory } from "@/actions/useGetCategory";
import { Skeleton } from "../ui/skeleton";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";

function Billboard() {
  const params = useParams() as { category?: string };
  const router = useRouter();
  const {theme} = useTheme();

  const slug = params.category;
  
  if(!slug){
    router.push("/");
    return null
  }
  const {data, loading, error} = useGetCategory(slug);  

  if(error){
    throw new Error("Something went wrong. Please try again.")
  }
  if(loading){
    return (
      <div className="flex justify-center items-center mt-10 h-96 w-full ">
        <Loader2 className="animate-spin size-4 " />
      </div>
    )
  }
  return (
    <div className="dark:bg-zinc-900 bg-zinc-100 rounded-lg my-5 ">
      <div className="w-full aspect-[7/2] max-h-[400px] relative ">
   {/* <Image src="/images/site-images/billboard-transparent-cover.png" fill alt="" className="z-10 dark:opacity-85 opacity-0  "  /> */}
      {/* <Image src="/images/site-images/billboard-transparent-cover-white.png" fill alt="" className="z-10 opacity-100 dark:opacity-0 mix-blend-plus-darker"  /> */}
      {
        !!data?.billboard?.imageUrl && data?.billboard?.status === true  && 
        (
          <Image src={data?.billboard?.imageUrl} fill alt={data?.billboard?.altText || data?.name ? data.name : "Image"} className="aspect-video"  />
        )
      }
      
      </div>
    </div>
    
  )
}

export default Billboard