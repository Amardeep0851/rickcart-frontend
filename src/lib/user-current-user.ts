"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export const useCurrentUser = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState<null | any>(null)
  
 
  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true)
        const user = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL_WITHOUT_STORE}/auth/user`,
          { withCredentials: true }
        );
        setUser(user.data.user)
      } catch (error) {
        if (process.env.NODE_ENV === "development") {
          console.log("[USER_FETCED_ERROR]",error);
        }
      }finally{
        setIsLoading(false)
      }
    })();
  }, []);

  return {user, isLoading}
};

