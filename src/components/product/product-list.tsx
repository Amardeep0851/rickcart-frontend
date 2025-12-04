import React from 'react'
import ProductCard, { ProductCardSkelton } from "./product-card"
import ProductsHeader, { ProductsHeaderSkelton } from "./products-header";
import { ProductWithImagesArray } from "@/lib/types";

type ProductListProps = {
  title:string;
  data:ProductWithImagesArray[]
}

function ProductList({title, data}:ProductListProps) {
  return (
    <div className="mt-4 p-5">
    
    <ProductsHeader title={title} />
    <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 gap-y-7 ">
        
        {data?.map((item, index) => (
          <ProductCard item={item} key={index} />
        ))}
      </div>
    </div>
    
  )
}

export function ProductListSkelton() {
  return (
    <div className="mt-4 p-5">
    
    <ProductsHeaderSkelton />
    <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 gap-y-7 ">
        
        {[1,2,3,4,5]?.map((_, index) => (
          <ProductCardSkelton key={index} />
        ))}
      </div>
    </div>
  )
}

export default ProductList