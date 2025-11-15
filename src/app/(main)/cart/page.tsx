import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import ProductsHeader from "@/components/product/products-header";

export default function OrderPages() {
  return (
    <div className="dark:bg-zinc-800 bg-zinc-100 text-zinc-100 p-4 rounded-md mt-4">
      

      {/* Cart Page */}
      
        <ProductsHeader title="Your Cart" />
        <section className="lg:grid md:grid-cols-5">
        <div className="space-y-4 col-span-3 ">
          {[1, 2].map((item) => (
            <Card key={item} className="bg-zinc-800 border-zinc-700 p-4 rounded-sm flex">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-zinc-700 rounded-md"></div>
                <div>
                  <h3 className="text-lg font-semibold">Product Name</h3>
                  <p className="text-sm text-zinc-400">Category</p>
                  <p className="text-orange-700 font-semibold mt-1">₹7,000</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Input type="number" defaultValue={1} min={1} className="w-16 bg-zinc-700 border-zinc-600 text-center" />
                <Button variant="destructive" className="bg-orange-700 hover:bg-orange-600 text-white">
                  Remove
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="md:grid-cols-2  p-4">
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
            <Button className="bg-orange-800 hover:bg-orange-700 text-white mt-5 py-5 rounded-xl text-lg font-semibold cursor-pointer">
              Proceed to Checkout
            </Button>
          
        </div>
      </section>
    </div>
  );
}
