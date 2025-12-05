"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCartStore } from "@/hooks/use-cart";
import { ProductWithImagesArray } from "@/lib/types";

export const useGetCartProducts = () => {
  const { cart, _hasHydrated, refetchTriggler } = useCartStore();
  const [loading, setLoading] = useState(false);
  const [firstTimeLoading, setFirstTimeLoading] = useState(true);
  const [data, setData] = useState<ProductWithImagesArray[]>([]);

  useEffect(() => {
    // If cart is empty, no need to fetch
     if (!_hasHydrated) return;
    if (!cart.length) {
      setData([]);
      setFirstTimeLoading(false)
      return;
    }

    // Fetch product details ONCE when page loads
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
          console.log(error);
        }
      } finally {
        setLoading(false);
        setFirstTimeLoading(false)
      }
    })();
  }, [_hasHydrated, refetchTriggler]); 

  return { loading, data, firstTimeLoading };
};
