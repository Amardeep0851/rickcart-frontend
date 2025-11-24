import React from "react";
import { Banknote, CreditCard, Heart, RefreshCcw, Truck } from "lucide-react";

import { Button } from "../ui/button";
import { ProductWithImages } from "@/lib/types";
import ProductDescription from "./product-description";
import { Card, CardContent, CardHeader } from "../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Link from "next/link";

interface ProductInfoProps {
  product: ProductWithImages;
}
function ProductInfo({ product }: ProductInfoProps) {
  let discount = 0;
  if (product.comparePrice) {
    discount =
      ((product.comparePrice - product.price) / product.comparePrice) * 100;
  }

  const description = product.description ? product.description : "No detail.";
  return (
    <div className="col-span-5 border-0 ">
      <div className="border-b-[1px] dark:border-zinc-700 border-zinc-300 pb-5">
        <h1 className="text-2xl/relaxed font-medium text-justify pb-2 ">
          {product.name}
        </h1>
        <Link
          href={`/${product.category.slug}`}
          className="text-sm text-orange-600 dark:hover:text-orange-700 transition-all duration-200 hover:underline"
        >
          {`${product.category.name}`}
        </Link>
      </div>
      <div className="pt-5 pb-3">
        <h2 className="text-lg dark:text-zinc-300 text-zinc-700  flex items-center">
          <b className="dark:text-zinc-100 text-zinc-900 text-4xl ">
            ${product.price}{" "}
          </b>
          &nbsp; &nbsp;
          <span className="line-through font-normal text-zinc-400">
            ${product.comparePrice}
          </span>
          {product.comparePrice && (
            <span className="text-green-500 font-medium text-lg">
              {" "}
              &nbsp;{discount.toFixed(0)}% OFF
            </span>
          )}
        </h2>
        <div className="dark:text-zinc-400 text-zinc-700 text-sm ">
          Inclusive of all taxes
        </div>
      </div>
      <p className="pb-6 text-green-600 font-medium text-lg">In stock</p>
      <Select>
        <SelectTrigger className="cursor-pointer">
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
        <Button className="cursor-pointer w-full">Add to Cart</Button>
        <Button className="bg-orange-700  hover:bg-orange-700 text-white cursor-pointer w-full  ">
          Buy Now
        </Button>
        <Button variant="outline" className="cursor-pointer w-10 ">
          <Heart className="size-5" />
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2  xl:grid-cols-4 gap-x-3 gap-y-4 text-xs  mt-8">
        {[
          {
            content2: "On orders > ₹500",
            content: "Free Delivery",
            icon: Truck,
          },
          { content2: "10 Days Policy", content: "Returns", icon: RefreshCcw },
          {
            content2: "pay cash on delivery",
            content: "Pay on Delivery",
            icon: Banknote,
          },
          {
            content2: "100% secure payment",
            content: "Secure Pay",
            icon: CreditCard,
          },
        ].map((item) => (
          <Card
            key={item.content}
            className="p-0 rounded-md dark:bg-zinc-900/30 bg-zinc-50 py-2.5 "
          >
            <CardContent className=" text-center dark:text-zinc-50 text-zinc-900 flex flex-col justify-center items-center font-medium text-sm ">
              <span>
                <item.icon className="size-6 text-orange-600 mb-2" />
              </span>
              {item.content}
              <div className="text-[10px] text-zinc-500 font-normal mt-0.5">
                {item.content2}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-6 dark:bg-zinc-800/30 bg-zinc-100 border-[1px] dark:border-zinc-700/60 border-zinc-200  p-6 rounded-md shadow-sm">
        <h3 className="text-2xl mb-4 font-medium">About this item</h3>
        <ProductDescription description={description} />
      </div>
    </div>
  );
}

export default ProductInfo;
