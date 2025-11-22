import React from 'react'
import Image from "next/image"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface ImageSliderProps {
  images:{
    altText:string;
    id:string;
    productId:string;
    url:string
  }[]
}

function ProductImageSlider({images}:ImageSliderProps) {
  return (
    <div className={cn("md:col-span-4 border-0 ", images.length >= 5 ? "pb-40" : " pb-20 md:pb-40 lg:pb-20" )}>
      <Tabs defaultValue={images[2].id} className="w-full gap-y-5">
        {/* ---------- Main Image Display ---------- */}
         {!!images.length &&
            images.map((image) => (
              <TabsContent
                key={image.id}
                value={image.id}
                className="relative w-full h-full aspect-square  rounded-sm"
              >
                <Image
                  src={image.url}
                  alt="Product Image 1"
                  fill
                  className="object-contain rounded-sm"
                />
              </TabsContent>
            ))}
        

        {/* ---------- Thumbnail Tabs ---------- */}
        
          <div className="flex justify-center">
            <TabsList className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 ">
          {!!images.length &&
            images.map((image) => (
              <TabsTrigger
              key={image.id}
                value={image.id}
                className="relative col-span-1 size-20 border-4 border-zinc-500 rounded-lg overflow-hidden cursor-pointer"
              >
                <Image
                  src={image.url}
                  alt={image.altText ? image.altText : "Image"}
                  fill
                  className="object-cover"
                />
              </TabsTrigger>
            ))}
        </TabsList>
          </div>
       
      </Tabs>
    </div>
  );
}

export default ProductImageSlider