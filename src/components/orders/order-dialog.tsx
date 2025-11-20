import Image from "next/image";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { ScrollArea } from "../ui/scroll-area";

interface OrderDialogProps {
  selectedOrder: boolean;
  setSelectedOrder: (value: boolean) => void;
  orders: any;
}

function OrderDialog({
  selectedOrder,
  setSelectedOrder,
  orders,
}: OrderDialogProps) {
  const componentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "Order Details", // Optional: customize the print title
  });
  return (
    <div className="">
      <Dialog onOpenChange={setSelectedOrder} open={selectedOrder}>
        <DialogContent
          className="md:min-w-[700px] dark:bg-zinc-900 bg-zinc-100 print-area "
          ref={componentRef}
        >
          <DialogHeader>
            <DialogTitle className="text-center text-xl">
              Order Details
            </DialogTitle>
          </DialogHeader>
          <DialogDescription>
            <div className="md:flex md:justify-between  text-sm border-b dark:border-zinc-700 border-zinc-300 pb-4  ">
              <p>
                {" "}
                <span className="font-semibold dark:text-zinc-100 text-zinc-900">
                  Order number:
                </span>
                IdWillHere
              </p>
              <p>
                <span className="font-semibold dark:text-zinc-100 text-zinc-900">
                  Order placed:
                </span>{" "}
                date
              </p>
            </div>
            <div className="md:grid md:grid-cols-3 gap-4 border-b dark:border-zinc-700 border-zinc-300 py-4  mb-4">
              <div>
                <h3 className="font-semibold dark:text-zinc-100 text-zinc-900">
                  Ship to
                </h3>
                <p className="dark:text-zinc-300 text-zinc-700 text-sm">name</p>
                <p className="dark:text-zinc-300 text-zinc-700 text-sm">
                  address
                </p>
              </div>
              <div>
                <h3 className="font-semibold dark:text-zinc-100 text-zinc-900 mt-1 md:mt-0">
                  Payment method
                </h3>
                <p className="dark:text-zinc-300 text-zinc-700 text-sm">
                  payment
                </p>
              </div>
              <div className="md:justify-self-end">
                <h3 className="font-semibold dark:text-zinc-100 text-zinc-900 mt-1 md:mt-0">
                  Order Summary
                </h3>
                <p className="dark:text-zinc-300 text-zinc-700 text-sm">
                  Item(s) Subtotal: {orders.subtotal}
                </p>
                <p className="dark:text-zinc-300 text-zinc-700 text-sm">
                  Shipping: {orders.shipping}
                </p>
                <p className="dark:text-zinc-300 text-zinc-700 text-sm">
                  Grand Total: {orders.grandTotal}
                </p>
              </div>
            </div>
          </DialogDescription>

          <div className="w-full border-b dark:border-zinc-700 border-zinc-300 pb-4">
            <ScrollArea className="h-48 scroll-area-height">
              <div className="flex gap-x-4 ">
                <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                  <Image
                    src={orders[0].image}
                    alt={orders[0].item}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-medium">{orders[0].item}</p>
                  <p className="dark:text-zinc-300 text-zinc-700 text-sm">
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                      {" "}
                      Items:
                    </span>{" "}
                    3
                  </p>
                  <p className="text-sm text-orange-700 font-semibold">
                    {orders[0].status}
                  </p>
                </div>
              </div>
            </ScrollArea>
          </div>

          <DialogFooter className="no-print">
            <Button
              onClick={() => setSelectedOrder(false)}
              variant="default"
              className="cursor-pointer"
            >
              Close
            </Button>
            <Button onClick={handlePrint} variant="orange">
              Print
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default OrderDialog;
