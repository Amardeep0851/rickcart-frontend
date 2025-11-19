import React from "react";
import { Minus, Plus, Trash } from "lucide-react";

import { Card} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProductsHeader from "@/components/product/products-header";

export default function OrderPages() {
  return (
    <div className="dark:bg-zinc-800 bg-zinc-100 text-zinc-100 rounded-md mt-4 p-4 min-h-screen">
      {/* Cart Page */}

      <ProductsHeader title={`Your Cart (${2})`} />
      <section className="lg:grid lg:grid-cols-7 gap-x-6">
        <div className="space-y-4 col-span-3 lg:col-span-5  ">
          {[1, 2].map((item) => (
            <Card
              key={item}
              className="dark:bg-zinc-800 bg-zinc-100 shadow-none p-4 rounded-md flex justify-between dark:hover:bg-zinc-800/70 duration-100 "
            >
              <div className="flex items-center gap-4 ">
                <div className="w-20 h-20 bg-zinc-700 rounded-md"></div>
                <div>
                  <h3 className="text-lg font-semibold">Product Name</h3>
                  <p className="text-sm text-zinc-400">Category</p>
                  <p className="text-orange-700 font-semibold mt-1">₹7,000</p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex gap-2">
                  <Button
                    className="cursor-pointer bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-700 dark:text-zinc-100"
                    variant="outline"
                    size="sm"
                  >
                    <Minus className="size-3" />
                  </Button>
                  <Input
                    type="text"
                    className="w-8 h-8 dark:bg-zinc-700 bg-zinc-100 text-center"
                    readOnly
                  />
                  <Button
                    className="cursor-pointer bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-700 dark:text-zinc-200"
                    size="sm"
                    variant="outline"
                  >
                    <Plus className="size-3" />
                  </Button>
                </div>
                <Button
                  className="cursor-pointer  "
                  variant="destructive"
                  size="sm"
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
