import React from 'react'
import { Banknote, HandCoins, Heart, LockKeyhole, Truck } from "lucide-react";

import { Button } from "../ui/button";
import { ProductWithImages } from "@/lib/types";
import ProductDescription from "./product-description";
import { 
  Card, 
  CardContent } from "../ui/card";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue } from "../ui/select";
import Link from "next/link";

interface ProductInfoProps {
  product:ProductWithImages
}
function ProductInfo({product}:ProductInfoProps) {
  let discount = 0;
  if(product.comparePrice) {
    discount = ((product.comparePrice - product.price) / product.comparePrice) * 100;  }
    
  const description = product.description ? product.description : "No detail."
  return (
<div className="col-span-5 border-0 ">
        <div className="border-b-[1px] dark:border-zinc-700 border-zinc-300 pb-5">
        <h1 className="text-2xl/relaxed font-medium text-justify pb-2 ">{product.name}</h1>
        <Link href={`/${product.category.slug}`} className="text-sm text-orange-700 dark:hover:text-orange-700 transition-all duration-200 hover:underline">
        {product.category.name}
        </Link>
        </div>
          <div className="pt-5 pb-3">
            
        <h2 className="text-lg dark:text-zinc-300 text-zinc-700  flex items-center">
          <b className="dark:text-zinc-100 text-zinc-900 text-4xl ">${product.price} </b>
          &nbsp; &nbsp;<span className="line-through font-normal text-zinc-400">${product.comparePrice}</span>
          {
            product.comparePrice && (
              <span className="text-green-500 font-medium text-lg"> &nbsp;{discount.toFixed(0)}% OFF
              </span> 
            )
          }
          
        </h2>
        <div className="dark:text-zinc-400 text-zinc-700 text-sm ">
            Inclusive of all taxes
          </div>
          </div>
        <p className="pb-6 text-green-600 font-medium text-lg">In stock</p>
        <Select >
            <SelectTrigger className="w-full cursor-pointer">
              <SelectValue placeholder="Select Quantity" className="" />
            </SelectTrigger>
            <SelectContent className="">
              {[1, 2, 3, 4, 5].map((q) => (
                <SelectItem className="" key={q} value={String(q)}>
                  {q}
                </SelectItem>
              ))}
            </SelectContent>
          </Select> 
          <div className="grid grid-cols-3 gap-3 mb-5 pt-5 flex-col md:flex-row">
          <Button className="cursor-pointer w-full md:w-1/2">
            Add to Cart
          </Button>
          <Button className="bg-orange-700 hover:bg-orange-700 text-white cursor-pointer w-full md:w-1/2 ">
            Buy Now
          </Button>
          <Button variant="outline" className="cursor-pointer w-10 ">
            <Heart className="size-5" />
          </Button>
        </div>

        
      
        <div className="grid grid-cols-2 md:grid-cols-2  xl:grid-cols-4 gap-x-5 gap-y-4 text-xs  mt-5">
          {
          [
            {policy:'10 days Return and exchagne', icon:HandCoins},
            {policy:'Pay on Delivery', icon:Banknote},
            {policy:'Free Delivery', icon:Truck},
            {policy:'100% Secure', icon:LockKeyhole},

          ].map((item) => (
            <Card key={item.policy} className="p-0 dark:bg-zinc-900/30 bg-zinc-50 ">
              <CardContent className="p-1.5 px-2 text-center dark:text-zinc-200 text-zinc-700 flex justify-center items-center font-medium text-[15px] gap-x-2 h-14">
                <span><item.icon className="size-6"  /></span>
                {item.policy}
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="pt-6">
          <h3 className="text-2xl pb-4">
            About this item
          </h3>
          <ProductDescription description={ description} />
        </div>
        
      </div>
  )
}

export default ProductInfo;  