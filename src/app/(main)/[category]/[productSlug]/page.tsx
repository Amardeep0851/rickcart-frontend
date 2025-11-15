import React from 'react';
import { Banknote, HandCoins, LockKeyhole, Truck } from "lucide-react";


import { fetchProduct } from "@/actions/fetchProduct";
import ProductList from "@/components/product/product-list";
import ProductDescription from "@/components/single-product/product-description";
import ProductImageSlider from "@/components/single-product/product-image-slider";
import ProductInfo from "@/components/single-product/product-info";
import { Card, CardContent } from "@/components/ui/card";

async function page({params}:{params:Promise<{category:string, productSlug:string}>}) {
  const {category, productSlug} = await params;
  const product = await fetchProduct(productSlug);

  
  return (
    <div className="p-4 pt-8 pr-4 dark:bg-zinc-800 bg-zinc-100 my-5 rounded-md ">
    
      <div className="flex flex-col  md:grid md:grid-cols-7  md:gap-5 md:gap-y-7 ">
      <ProductImageSlider images={product.images} />
      <ProductInfo product={product} />
      </div>
    
    <div className="border-t-2 dark:border-zinc-700 border-zinc-200 mt-14" >
      <ProductList title="Similar Products" />
    </div>
    </div>
  )
}

export default page

