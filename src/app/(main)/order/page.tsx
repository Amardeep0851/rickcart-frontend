import React from 'react';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function OrderPage() {
  return (
    <div>
      {/* Order Summary Page */}
      <section className="max-w-5xl mx-auto mb-16">
        <h1 className="text-3xl font-semibold text-orange-700 mb-6">Order Summary</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Order Details */}
          <div className="bg-zinc-800 p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" className="bg-zinc-700 border-zinc-600" />
              </div>
              <div>
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="123 Main Street" className="bg-zinc-700 border-zinc-600" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="New York" className="bg-zinc-700 border-zinc-600" />
                </div>
                <div>
                  <Label htmlFor="zip">ZIP Code</Label>
                  <Input id="zip" placeholder="10001" className="bg-zinc-700 border-zinc-600" />
                </div>
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="+91 9876543210" className="bg-zinc-700 border-zinc-600" />
              </div>
            </form>
          </div>

          {/* Payment Summary */}
          <div className="bg-zinc-800 p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Payment Summary</h2>
            <div className="space-y-3 border-b border-zinc-700 pb-3 mb-3">
              <div className="flex justify-between"><span>Subtotal</span><span>₹14,500</span></div>
              <div className="flex justify-between"><span>Shipping</span><span>₹150</span></div>
              <div className="flex justify-between"><span>Discount</span><span className="text-orange-700">-₹500</span></div>
            </div>
            <div className="flex justify-between text-lg font-semibold mb-6">
              <span>Total</span>
              <span>₹14,150</span>
            </div>
            <Button className="w-full bg-orange-700 hover:bg-orange-600 text-white py-6 rounded-xl text-lg font-semibold">
              Place Order
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OrderPage