"use client";
import { useCartStore } from "@/hooks/use-cart";
import { ProductWithImagesArray } from "@/lib/types";
import axios from "axios";
import { useEffect, useState } from "react";


export const useGetCartProducts = () => {

  const { cart } = useCartStore();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ProductWithImagesArray[] | []>([]);
  
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL_WITHOUT_STORE}/cart`,
          { cart }
        );
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (error) {
        if (process.env.NODE_ENV === "development") {
          console.log("[]", error);
        }
      } finally {
        setLoading(false);
      }
    })();
  }, [cart]);

  return {
    loading, 
    data
  }
};
