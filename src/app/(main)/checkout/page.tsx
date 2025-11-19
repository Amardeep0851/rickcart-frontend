import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ProductsHeader from "@/components/product/products-header";

function OrderPage() {
  return (
    <div>
      {/* Order Summary Page */}
      <section className="max-w-7xl mx-auto dark:bg-zinc-800 bg-zinc-100 mt-4 rounded-md p-4 min-h-screen ">
        <ProductsHeader title="Order Summary" />
        <div className="grid lg:grid-cols-2 gap-4 ">
          {/* Order Details */}
          <div className="border-r-2 p-4 ">
            <h2 className="text-xl font-semibold mb-4">
              Add delivery information
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstname" className="pb-3">
                    First Name<span className="text-orange-700">*</span>{" "}
                  </Label>
                  <Input id="firstname" placeholder="John" />
                </div>
                <div>
                  <Label htmlFor="lastname" className="pb-3">
                    Last Name
                  </Label>
                  <Input id="lastname" placeholder="Deo" />
                </div>
              </div>

              <div>
                <Label htmlFor="address" className="pb-3">
                  Address<span className="text-orange-700">*</span>
                </Label>
                <Input id="address" placeholder="123 Main Street" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city" className="pb-3">
                    City<span className="text-orange-700">*</span>
                  </Label>
                  <Input id="city" placeholder="New York" />
                </div>
                <div>
                  <Label htmlFor="zip" className="pb-3">
                    ZIP Code<span className="text-orange-700">*</span>
                  </Label>
                  <Input id="zip" placeholder="10001" />
                </div>
              </div>
              <div>
                <Label htmlFor="phone" className="pb-3">
                  Phone Number<span className="text-orange-700">*</span>
                </Label>
                <Input id="phone" placeholder="+91 9876543210" />
              </div>
              <div>
                <Label htmlFor="secondNumber " className="pb-3">
                  Other Phone Number
                </Label>
                <Input id="secondNumber " placeholder="+91 9876543210" />
              </div>
            </form>
          </div>

          {/* Payment Summary */}
          <div className="p-4 ">
            <h2 className="text-xl font-semibold mb-4">Payment Summary</h2>
            <div className="space-y-3 border-b border-zinc-700 pb-3 mb-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹14,500</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₹150</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-orange-700">-₹500</span>
              </div>
            </div>
            <div className="flex justify-between text-lg font-semibold mb-6">
              <span>Total</span>
              <span>₹14,150</span>
            </div>
            <Button className="w-full bg-orange-700 hover:bg-orange-700/80 cursor-pointer text-white">
              Place Order
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OrderPage;
