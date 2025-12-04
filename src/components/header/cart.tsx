"use client"
import { useCartStore } from "@/hooks/use-cart"
import { ShoppingBag, ShoppingBasket, ShoppingCart } from "lucide-react"
import Link from "next/link"
import React from 'react'

function Cart() {
  const {cart}  = useCartStore()
  return (
    <Link href="/cart" className="relative w-3.5 h-8 cursor-pointer order-4 ">
      <div className=" bg-orange-700 text-white rounded-md text-center text-sm absolute w-4 h-4 left-1 -top-1 align-top flex justify-center items-center">{cart.length}

      </div>
      <ShoppingCart className="size-5 absolute top-1.5" />
    </Link>
  )
}

export default Cart