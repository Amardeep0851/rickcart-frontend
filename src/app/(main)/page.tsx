import ProductList from "@/components/product/product-list";
import Slider from "@/components/slider/slider";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";

export default function Home() {
  
  return (
    <div className="">
      <Slider />
      <div className="bg-zinc-100 dark:bg-zinc-900 rounded-lg">
        <ProductList title="Popular Products" />
      </div>
      
    </div>
  );
}
