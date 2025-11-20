"use client"
import React from 'react';
import Image from "next/image";
import { Button } from "../ui/button";
import OrderDialog from "./order-dialog";

interface OrderProps{
  orders:any
}

function OrderHistory({orders}:OrderProps) {
  const [selectedOrder, setSelectedOrder] = React.useState<boolean>(false);
  return (
    <div className="space-y-6">
        {orders.map((order:any) => (
          <div
            key={order.id}
            className="p-6 border rounded-md dark:bg-zinc-800/30 bg-zinc-200/30 "
          >
            <div className="md:flex md:flex-row md:justify-between md:items-start  mb-4 dark:text-zinc-200 text-zinc-800">
              <p className="text-sm  pb-1">
                    Order ID:{" "}
                  <span className="dark:text-zinc-400 text-zinc-600 ">
                  {order.id}
                  </span>
              </p>
              <p className="font-sm">
                    Placed:{" "}
                  <span className="dark:text-zinc-400 text-zinc-700 ">
                  {order.date}
                  </span>
              </p>
              <p className="text-sm ">
                  Total:{" "}
                <span className="dark:text-zinc-400 text-zinc-700 ">
                  {order.total}
                </span>
              </p>
            </div>

            <div className="flex items-start space-x-4 border-t dark:border-zinc-700 border-zinc-300 pt-4">
              <div className="relative w-20 h-20 rounded-lg overflow-hidden flex">
                <Image
                  src={order.image}
                  alt={order.item}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-base font-medium">{order.item}</p>
                <p className="text-sm text-orange-700 font-semibold">
                  {order.status}
                </p>
                <div className="mt-3 flex md:flex-row flex-col gap-3">
                  <Button className="cursor-pointer  w-full md:w-auto bg-zinc-50 hover:bg-zinc-100" variant="outline" size="sm">
                    Buy it again
                  </Button>
                  <Button 
                  onClick={() => setSelectedOrder(true)}
                  className="cursor-pointer w-full md:w-auto bg-orange-700 hover:bg-orange-800 text-white"   size="sm">
                    View detail
                  </Button>
                </div>
              </div>
            </div>
            
          </div>
        ))}
        <OrderDialog orders={orders} selectedOrder={selectedOrder} setSelectedOrder={setSelectedOrder}  />
      </div>
  )
}

export default OrderHistory