import { cn } from "@/lib/utils";
import React from 'react';

interface ProductsHeaderProps {
  title:string;
  customClass?:string;
}

function ProductsHeader({title, customClass}:ProductsHeaderProps) {
  return (
    <div className={cn("mb-4 text-2xl font-semibold inline-block text-orange-600 rounded-md", customClass)}>
      {title}
    </div>
  )
}

export default ProductsHeader