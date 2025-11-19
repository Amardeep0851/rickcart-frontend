import React from 'react';
import Image from 'next/image';

export default function OrdersPage() {
  const orders = [
    {
      id: '171-9190782-4201104',
      date: '5 November 2022',
      total: '₹449.00',
      name: 'Amardeep Singh',
      status: 'Delivered',
      item: 'Amazon Brand - Symbol Men\'s Solid Regular Casual Shirt (Dark Grey M)',
      image: '/images/shirt1.png',
    },
    {
      id: '171-0118342-2995514',
      date: '2 November 2022',
      total: '₹529.00',
      name: 'Amardeep Singh',
      status: 'Return complete',
      item: 'Amazon Brand - Symbol Men\'s Solid Regular Casual Shirt (Dark Grey L)',
      image: '/images/shirt2.png',
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 px-8 py-10">
      <h1 className="text-3xl font-semibold mb-6 text-orange-700">Your Orders</h1>

      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-zinc-800 p-6 rounded-2xl shadow-md border border-zinc-700">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-zinc-400">ORDER PLACED</p>
                <p className="text-base font-medium">{order.date}</p>
              </div>
              <div>
                <p className="text-sm text-zinc-400">TOTAL</p>
                <p className="text-base font-medium">{order.total}</p>
              </div>
              <div>
                <p className="text-sm text-zinc-400">SHIP TO</p>
                <p className="text-base font-medium">{order.name}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-zinc-400">ORDER # {order.id}</p>
                <button className="text-orange-700 hover:underline text-sm">View details</button>
              </div>
            </div>

            <div className="flex items-center space-x-6 border-t border-zinc-700 pt-4">
              <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                <Image
                  src={order.image}
                  alt={order.item}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-base font-medium">{order.item}</p>
                <p className="text-sm text-orange-700 font-semibold">{order.status}</p>
                <div className="mt-3 flex gap-3">
                  <button className="border border-zinc-500 px-4 py-1.5 rounded-full text-sm hover:bg-zinc-700 transition">Buy it again</button>
                  <button className="border border-zinc-500 px-4 py-1.5 rounded-full text-sm hover:bg-zinc-700 transition">View item</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}