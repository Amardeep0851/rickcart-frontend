import React, { Suspense } from 'react'

import Billboard from "@/components/billboard/billboard"
import ProductList, { ProductListSkelton } from "@/components/product/product-list"
import ProductSlider from "@/components/product/product-slider"
import { fetchProductByCategory } from "@/actions/get-products-by-categories"
import { ProductsType } from "@/lib/types"

async function CategoryPage({params}:{params:Promise<{category:string}>}) {
  const category = (await params).category
  const response = await fetchProductByCategory(category);
  const data = response?.data ?? [];
  
  
  return (
    <div className="flex-1">

      <Billboard />
      <div className="bg-zinc-100 dark:bg-zinc-900 rounded-lg">
        <Suspense fallback={<ProductListSkelton />} >
          <ProductList title="Popular products" data={data}   />
        </Suspense>
      </div>
      
      {/* <ProductSlider /> */}
      
    </div>
  )
}

export default CategoryPage