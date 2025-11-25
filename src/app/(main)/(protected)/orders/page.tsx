import React from "react";
import OrdersHeader from "@/components/orders/order-header";
import OrderHistory from "@/components/orders/order-history";

export default function OrdersPage() {
  const orders = [
    {
      id: "171-9190782-4201104",
      date: "5 November 2022",
      total: "₹449.00",
      address: "Amardeep Singh, H No. 1334, Street No. - 9, Ajit Nagar, near Kishanpura, Jalandahr, Punjab, India",
      status: "Delivered",
      item: "Amazon Brand - Symbol Men's Solid Regular Casual Shirt (Dark Grey M)",
      image: "/images/site-images/71v2jVh6nIL._SX679_ (1).jpg",
    },
    {
      id: "171-0118342-2995514",
      date: "2 November 2022",
      total: "₹529.00",
      address: "Amardeep Singh, H No. 1334, Street No. - 9, Ajit Nagar, near Kishanpura, Jalandahr, Punjab, India",
      status: "Return complete",
      item: "Amazon Brand - Symbol Men's Solid Regular Casual Shirt (Dark Grey L)",
      image: "/images/site-images/71v2jVh6nIL._SX679_ (1).jpg",
    },
  ];

  return (
    <div className="min-h-screen dark:bg-zinc-900 bg-zinc-100 px-8 py-8 mt-4 rounded-md">
      <OrdersHeader />
      <OrderHistory orders={orders} />
      
    </div>
  );
}
