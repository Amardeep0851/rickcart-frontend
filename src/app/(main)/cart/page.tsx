"use client";
import React, { useEffect, useMemo } from "react";
import Image from "next/image";
import { ArrowRight, Minus, Plus, ShoppingCart, Trash } from "lucide-react";

import { useCartStore } from "@/hooks/use-cart";
import { useGetCartProducts } from "@/actions/hooks/useCartProduct";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoadingCircle, LoadingCircleWithoutPosition } from "@/components/ui/loading";
import ProductsHeader from "@/components/product/products-header";
import Link from "next/link";
import EmptyCart from "@/components/cart/empty-cart";

export default function OrderPages() {
  const { cart, changeQuantity, removeItem } = useCartStore();
  const { data, loading, firstTimeLoading } = useGetCartProducts();
  let shippingCharges = 100;
 
  const withoutShippingTotal = useMemo(() => {
     return data.reduce((sum, item) => {
    const cartItem = cart.find(c => c.id === item.id);
    return sum + (item.comparePrice ?? item.price) * (cartItem?.quantity ?? 1);
  }, 0);
  },[cart, data])

  if(withoutShippingTotal > 50){
    shippingCharges = 0
  }
  const finalTotal = shippingCharges+withoutShippingTotal;
  console.log(firstTimeLoading);
  if(firstTimeLoading){
    return (
      <div className="dark:bg-zinc-900 bg-zinc-100 text-zinc-100 rounded-md mt-4 p-4 min-h-screen flex justify-center items-center">
        <LoadingCircleWithoutPosition />
      </div>
    )
  }

  if (!data.length && !loading ) {
    return (
      <EmptyCart />
    );
  }

  return (
    <div className="dark:bg-zinc-900 bg-zinc-100 text-zinc-100 rounded-md mt-4 p-4 min-h-screen">
      {/* Cart Page */}

      <ProductsHeader title={`Your Cart (${cart.length})`} />
      <section className="lg:grid lg:grid-cols-7 gap-x-6">
        <div className="space-y-4 col-span-3 lg:col-span-5  ">
          {data?.map((item, index) => {
            const cartItem = cart.find((c) => c.id === item.id);
            return (
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
                    disabled={loading}
                    size="sm"
                    onClick={() => changeQuantity(item.id, -1)}
                  >
                    <Minus className="size-3" />
                  </Button>
                  {
                    cartItem && <Input
                      type="text"
                      value={cartItem.quantity}
                      className="w-16 h-8 dark:bg-zinc-700 bg-zinc-100 text-center"
                      readOnly
                      disabled={loading}
                    />
                        }
                  <Button
                    className="cursor-pointer bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-700 dark:text-zinc-200"
                    size="sm"
                    variant="outline"
                    disabled={loading}
                    onClick={() => changeQuantity(item.id, +1)}
                  >
                    <Plus className="size-3" />
                  </Button>
                </div>
                <Button
                  className="cursor-pointer  "
                  variant="orange"
                  size="sm"
                  disabled={loading}
                  onClick={() => removeItem(item.id)}
                >
                  <Trash className="size-3" />
                </Button>
              </div>
            </Card>
            )
          })}
        </div>

        <div className="lg:col-span-2  p-4 w-full mt-4 lg:mt-0 dark:text-zinc-100 text-zinc-900 ">
          <div className="flex justify-between mb-3 ">
            <div className="">Subtotal</div>
            
            <div className="">$${withoutShippingTotal}</div>
          </div>
          <div className="flex justify-between mb-3">
            <span>Shipping</span>
            <span>${shippingCharges}</span>
          </div>
          <div className="flex justify-between text-lg font-semibold border-t dark:border-zinc-700 border-zinc-200 pt-3">
            <span>Total</span>
            <span>${finalTotal}</span>
          </div>
          <div className="flex justify-end pt-6">
            <Button 
            disabled={loading}
            className="bg-orange-700 hover:bg-orange-800 text-white cursor-pointer w-full">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
