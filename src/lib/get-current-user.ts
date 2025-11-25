"use client"
import axios from "axios";

export const getCurrentUser = async () => {
  try {
    const user = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/user`, {withCredentials:true});
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}