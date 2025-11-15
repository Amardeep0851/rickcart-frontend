import { useEffect, useState } from "react";

import { CategoryBIllboardProducts } from "@/lib/types";


type GetCategoryResult = {
  loading:boolean;
  error:Error|null| string;
  data:CategoryBIllboardProducts | null;
}

export const useGetCategory = (slug:string) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | string | null>(null)
  const [data, setData] = useState<CategoryBIllboardProducts | null>(null);
  useEffect(() => {
    (
      async () => {
        try {
          setLoading(true);
          const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/categories/slug/${slug}`);
          const data = await response.json();
          setData(await data)
        } 
        catch (error:any) {
            setError(error.message || "Somethign went wrong. Please try again.")
        }
        finally{
          setLoading(false)
        }
      }
    )()
  },[])
  
  
  return {
    loading, 
    error,
    data
  }
}