import React from 'react'
import { Banknote, HandCoins, LockKeyhole, Truck } from "lucide-react";

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

interface ProductInfoProps {
  product:ProductWithImages
}
function ProductInfo({product}:ProductInfoProps) {
  let discount = 0;
  if(product.comparePrice) {
    discount = ((product.comparePrice - product.price) / product.comparePrice) * 100;  }
    
  const description = product.description ? product.description : "No detail."
  return (
<div className="col-span-4 border-0 ">
        <h1 className="text-2xl font-medium text-justify border-b-2 border-zinc-200/90 pb-5">{product.name}</h1>

        <h2 className="text-lg dark:text-zinc-300 text-zinc-700 pt-5 pb-3">
          <b className="dark:text-zinc-100 text-zinc-900 ">{product.price} </b>
          &nbsp; MRP<span className="line-through font-normal"> {product.comparePrice}</span>
          {
            product.comparePrice && (
              <span className="text-orange-700 font-medium"> &nbsp;({discount.toFixed(0)}% OFF)
              </span> 
            )
          }
          
        </h2>
        <p className="pb-6 text-green-600 font-medium text-lg">In stock</p>
        <Select >
            <SelectTrigger className="w-full cursor-pointer">
              <SelectValue placeholder="Quantity: 1" className="" />
            </SelectTrigger>
            <SelectContent className="">
              {[1, 2, 3, 4, 5].map((q) => (
                <SelectItem className="" key={q} value={String(q)}>
                  {q}
                </SelectItem>
              ))}
            </SelectContent>
          </Select> 
          <div className="flex items-center gap-3 mb-5 pt-5 flex-col md:flex-row">
          <Button className="cursor-pointer w-full md:w-1/2">
            Add to Cart
          </Button>
          <Button className="bg-orange-700 hover:bg-orange-600 text-white cursor-pointer w-full md:w-1/2">
            Buy Now
          </Button>
        </div>

        <Button variant="outline" className="cursor-pointer w-full">Add to Wish List</Button>
      
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