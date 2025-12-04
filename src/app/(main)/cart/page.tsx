"use client";
import React from "react";
import Image from "next/image";
import { Minus, Plus, Trash } from "lucide-react";

import { useCartStore } from "@/hooks/use-cart";
import { useGetCartProducts } from "@/actions/hooks/useCartProduct";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoadingCircle } from "@/components/ui/loading";
import ProductsHeader from "@/components/product/products-header";

export default function OrderPages() {
  const { cart, changeQuantity, addItem, removeItem } = useCartStore();
  const { data, loading } = useGetCartProducts();
  // if (loading) {
  //   return (
  //     <div className="dark:bg-zinc-800 bg-zinc-100 text-zinc-100 rounded-md mt-4 p-4 min-h-screen">
  //       <LoadingCircle />
  //     </div>
  //   );
  // }

  return (
    <div className="dark:bg-zinc-800 bg-zinc-100 text-zinc-100 rounded-md mt-4 p-4 min-h-screen">
      {/* Cart Page */}

      <ProductsHeader title={`Your Cart (${cart.length})`} />
      <section className="lg:grid lg:grid-cols-7 gap-x-6">
        <div className="space-y-4 col-span-3 lg:col-span-5  ">
          {data?.map((item, index) => (
            <Card
              key={index}
              className="dark:bg-zinc-800 bg-zinc-100 shadow-none p-4 rounded-md flex justify-between dark:hover:bg-zinc-800/70 duration-100 "
            >
              <div className="flex items-start gap-4 ">
                <div className="aspect-square h-28 rounded-sm relative mt-2 bg-zinc-200  ">
                  <Image
                    src={item.images[0].url}
                    fill
                    alt={item.name}
                    className="rounded-sm p-3"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-zinc-400">{item.category.name}</p>
                  <div className="text-orange-700 font-semibold mt-1">
                    <div className="flex items-baseline gap-2 pt-1">
                      <span className="text-base font-bold dark:text-white text-zinc-800">
                        ${item.comparePrice}
                      </span>
                      {item.price && (
                        <span className="text-sm text-gray-500 line-through">
                          ${item.price}
                        </span>
                      )}
                      {/* Calculate Discount % */}
                      <span className="text-xs dark:text-green-500 text-green-500 font-medium">
                        {Math.round(
                          item?.comparePrice
                            ? ((item.price - item?.comparePrice) / item.price) *
                                100
                            : 0
                        )}
                        % OFF
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex gap-2">
                  <Button
                    className="cursor-pointer bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-700 dark:text-zinc-100"
                    variant="outline"
                    size="sm"
                    onClick={() => changeQuantity(item.id, -1)}
                  >
                    <Minus className="size-3" />
                  </Button>
                  {
                    cart.map((cartItem) => {
                      if(cartItem.id === item.id){
                        return (<Input
                          type="text"
                          className="w-8 h-8 dark:bg-zinc-700 bg-zinc-100 text-center"
                          value={ cartItem.quantity }
                          readOnly
                        />)
                      }
                    })
                  }
                  <Button
                    className="cursor-pointer bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-700 dark:text-zinc-200"
                    size="sm"
                    variant="outline"
                    onClick={() => changeQuantity(item.id, +1)}
                  >
                    <Plus className="size-3" />
                  </Button>
                </div>
                <Button
                  className="cursor-pointer  "
                  variant="orange"
                  size="sm"
                  onClick={() => removeItem(item.id)}
                >
                  <Trash className="size-3" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="lg:col-span-2  p-4 w-full mt-4 lg:mt-0 ">
          <div className="flex justify-between mb-3 ">
            <div className="">Subtotal</div>
            <div className="">₹14,000</div>
          </div>
          <div className="flex justify-between mb-3">
            <span>Shipping</span>
            <span>₹150</span>
          </div>
          <div className="flex justify-between text-lg font-semibold border-t dark:border-zinc-700 border-zinc-200 pt-3">
            <span>Total</span>
            <span>₹14,150</span>
          </div>
          <div className="flex justify-end pt-6">
            <Button className="bg-orange-700 hover:bg-orange-800 text-white cursor-pointer w-full">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
