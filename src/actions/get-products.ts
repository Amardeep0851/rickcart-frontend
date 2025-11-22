import { cache } from "react";

export const GetProducts = cache(async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/`)
})