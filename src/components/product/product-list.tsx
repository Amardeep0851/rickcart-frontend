import React from 'react'
import ProductCard from "./product-card"
import ProductsHeader from "./products-header";

function ProductList({title}:{title:string}) {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1];
  return (
    <div className="mt-4 p-5">
    
    <ProductsHeader title={title} />
    <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 gap-y-7 ">
        
        {products.map((_, index) => (
          <ProductCard data={index} key={index} />
        ))}
      </div>
    </div>
    
  )
}

export default ProductList