import { cn } from "@/lib/utils";
import React from 'react';

interface ProductsHeaderProps {
  title:string;
  customClass?:string;
}

function ProductsHeader({title, customClass}:ProductsHeaderProps) {
  return (
    <div className={cn("mb-4 text-3xl font-semibold inline-block dark:text-orange-600 text-orange-700  rounded-md", customClass)}>
      {title}
    </div>
  )
}

export default ProductsHeader