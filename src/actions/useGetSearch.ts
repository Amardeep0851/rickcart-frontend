import { useEffect, useState } from "react";

export const useGetSearch = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<null | string>(null);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/products`
        );
        setData(await response.json());
      } catch (error: any) {
        setError(
          error.message || "Failed to fetch Products. Please try again."
        );
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return {
    loading,
    data,
    error,
  };
};
