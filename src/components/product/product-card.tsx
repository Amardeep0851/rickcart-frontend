"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Heart, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { ProductWithImagesArray } from "@/lib/types";
import { timeAgo } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";
import { useCartStore } from "@/hooks/use-cart";

type ProductCardProps = {
  item:ProductWithImagesArray
}
function ProductCard({ item }:ProductCardProps) {
  const ago = timeAgo(item.createdAt);
  const {addItem, cart, removeItem} = useCartStore()

  const productCreated = new Date(item.createdAt);
  const threeMonths = 90*24*60*60*1000;
  const isNewProduct = (Date.now() - productCreated.getTime()) <= threeMonths;  
 
  return (
    <div className="group relative col-span-1 bg-zinc-900/80 rounded-xl border border-gray-800 overflow-hidden transition-all duration-300  ">
      {/* 1. Image Area with Badges & Actions */}
      
        <div className="relative h-[280px] bg-white overflow-hidden p-4 flex items-center justify-center">
          
          {/* Badge: New / Sale */}
          <div className="absolute top-3 left-3 z-20">
            {
              isNewProduct && <Badge className="bg-orange-700 hover:bg-orange-700/90 text-white px-2 py-1 text-xs font-bold uppercase tracking-wide">
              {isNewProduct ? "New Arrival" : ago }
            </Badge>
            }
          </div>

          {/* Wishlist Button (Top Right) */}
          <Button className="absolute top-3 right-3 z-20 p-2 rounded-full bg-white/80 hover:bg-orange-100 text-gray-600 hover:text-orange-700 transition-colors cursor-pointer">
            <Heart className="size-5" />
          </Button>

          {/* Product Image (Zoom on Hover) */}
          <Link href={`/${item.category.slug}/${item.slug}`} className="z-0 absolute inset-0 ">
          <img
            src={item.images[0].url}
            alt={item.name}
            className="object-contain h-full w-full transition-transform duration-500 group-hover:scale-110 z-0"
          />
          
          </Link>

          {/* "Quick Add" Button (Appears on Hover) */}
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out z-20 flex justify-center">
            {
              cart.find((cartItem) => cartItem.id === item.id ) 
              ?
              <Button className=" bg-orange-700/95 hover:bg-orange-700" variant="orange" onClick={() => removeItem(item.id)}>
              <ShoppingCart size={16} />
              Remove Item
            </Button>
                : <Button className=" bg-orange-700/95 hover:bg-orange-700" variant="orange" onClick={() => addItem(item.id, 1)}>
                <ShoppingCart size={16} />
                Add to Cart
                </Button>
            }
          </div>
          
        </div>

        {/* 2. Details Area */}
        <div className="p-4 space-y-2">
          {/* Category & Rating Row */}
          <div className="flex justify-between items-center text-xs text-gray-400">
            <span className="uppercase tracking-wider">{item.category.name}</span>
            {/* <div className="flex items-center gap-1 text-yellow-500">
            <Star size={12} fill="currentColor" />
            <span>{product.rating}</span>
          </div> */}
          </div>

          {/* Title - Limit to 2 lines */}
          <h3 className="text-white font-medium text-lg leading-tight group-hover:text-orange-500 transition-colors line-clamp-2">
            <Link href={`/${item.category.slug}/${item.slug}`}>
              {item.name}
            </Link>
          </h3>

          {/* Price Row */}
          <Link href={`/${item.category.slug}/${item.slug}`}>
          <div className="flex items-baseline gap-2 pt-1">
            <span className="text-xl font-bold text-white">
              ${item.comparePrice}
            </span>
            {item.price && (
              <span className="text-sm text-gray-500 line-through">
                ${item.price}
              </span>
            )}
            {/* Calculate Discount % */}
            <span className="text-xs text-green-500 font-medium">
              {Math.round(
                item?.comparePrice 
                ? (( item.price - item?.comparePrice ) / item.price) * 100
                : 0
              )}
              % OFF
            </span>
          </div>
          </Link>
        </div>
    </div>
  );
}

export default ProductCard;

export function ProductCardSkelton() {
  return (
    <div className="group relative col-span-1 bg-zinc-900/80 rounded-xl border border-gray-800 overflow-hidden transition-all duration-300  ">
      {/* 1. Image Area with Badges & Actions */}
      
        <div className="relative h-[280px] bg-white overflow-hidden p-4 flex items-center justify-center">
          
          {/* Badge: New / Sale */}
          <div className="absolute top-3 left-3 z-20">
            {
              <Badge className="bg-orange-700 hover:bg-orange-700/90 text-white px-2 py-1 text-xs font-bold uppercase tracking-wide">
                <Skeleton />
            </Badge>
            }
          </div>

          {/* Wishlist Button (Top Right) */}
          <Button className="absolute top-3 right-3 z-20 p-2 rounded-full bg-white/80 hover:bg-orange-100 text-gray-600 hover:text-orange-700 transition-colors cursor-pointer">
            <Heart className="size-5" />
          </Button>

          {/* Product Image (Zoom on Hover) */}
          
          <Skeleton />

          {/* "Quick Add" Button (Appears on Hover) */}
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out z-20">
            <Skeleton />
          </div>
          
        </div>

        {/* 2. Details Area */}
        <div className="p-4 space-y-2">
          {/* Category & Rating Row */}
          <div className="flex justify-between items-center text-xs text-gray-400">
            <span className="uppercase tracking-wider"> <Skeleton /> </span>
            {/* <div className="flex items-center gap-1 text-yellow-500">
            <Star size={12} fill="currentColor" />
            <span>{product.rating}</span>
          </div> */}
          </div>

          {/* Title - Limit to 2 lines */}
          <h3 className="text-white font-medium text-lg leading-tight group-hover:text-orange-500 transition-colors line-clamp-2">
            <Skeleton />
          </h3>

          {/* Price Row */}
          
          <div className="flex items-baseline gap-2 pt-1">
            <span className="text-xl font-bold text-white">
              <Skeleton />
            </span>
            
              <span className="text-sm text-gray-500 line-through">
                <Skeleton />
              </span>
            {/* Calculate Discount % */}
            <span className="text-xs text-green-500 font-medium">
              <Skeleton />
            </span>
          </div>
        </div>
    </div>
  )
}

// old design
// <div
    //         className="col-span-1 border-[1px] rounded-sm pb-3 cursor-pointer underline-offset-4 transition-all duration-200
    //         border-zinc-100 dark:border-zinc-900 hover:dark:border-zinc-800 dark:bg-zinc-800/70 bg-zinc-200/50 hover:dark:bg-zinc-800 hover:bg-zinc-200/80
    //         shadow-sm dark:shadow-zinc-800 dark:shadow-md "

    //       >
    //         <div className="">
    //         <div className="relative h-64">
    //           <Image
    //             src="/images/site-images/71v2jVh6nIL._SX679_ (1).jpg"
    //             fill
    //             alt="Product image "
    //             className="rounded-t-sm object-cover"
    //           />
    //         </div>
    //         <div className="px-3">
    //           <h1 className="pt-2 group-hover:underline transition-all duration-200 text-base">Product</h1>
    //           <div className="pb-2 font-semibold">$878</div>

    //         </div>
    //         </div>
    //         <div className="text-zinc-500 text-sm px-3 ">
    //           <Link href="/categoy" className="hover:text-orange-700 hover:underline transition-all duration-200">
    //             Category
    //           </Link>
    //           </div>
    //       </div>