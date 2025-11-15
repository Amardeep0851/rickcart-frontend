import React from 'react';
import Link from "next/link";
import Image from "next/image";

import { ProductsType } from "@/lib/types";


function ProductCard({data}:{data:number}) {
  return (
    <div
            className="col-span-1 border-[1px] rounded-sm pb-3 cursor-pointer underline-offset-4 transition-all duration-200
            border-zinc-100 dark:border-zinc-900 hover:dark:border-zinc-800 dark:bg-zinc-800/70 bg-zinc-200/50 hover:dark:bg-zinc-800 hover:bg-zinc-200/80 
            shadow-sm dark:shadow-zinc-800 dark:shadow-md "
            
          >
            <div className="">
            <div className="relative h-64">
              <Image
                src="/images/site-images/71v2jVh6nIL._SX679_ (1).jpg"
                fill
                alt="Product image "
                className="rounded-t-sm object-cover"
              />
            </div>
            <div className="px-3">
              <h1 className="pt-2 group-hover:underline transition-all duration-200 text-base">Product</h1>
              <div className="pb-2 font-semibold">$878</div>
              
            </div>
            </div>
            <div className="text-zinc-500 text-sm px-3 ">
              <Link href="/categoy" className="hover:text-orange-700 hover:underline transition-all duration-200">
                Category
              </Link>  
              </div>
          </div>
  )
}

export default ProductCard