
import Billboard from "@/components/billboard/billboard"
import ProductList from "@/components/product/product-list"
import ProductSlider from "@/components/product/product-slider"
import React from 'react'

async function CategoryPage() {
  
  return (
    <div className="flex-1">

      <Billboard />
      <div className="bg-zinc-100 dark:bg-zinc-900 rounded-lg">
        <ProductList title="Popular products" />
      </div>
      
      <ProductSlider />
      
    </div>
  )
}

export default CategoryPage