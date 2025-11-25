
import axios from "axios";
import { cookies } from "next/headers";

export const getCurrentUserServer = async () => {
  const cookieStore = await cookies();
  const token = cookieStore?.get("SessionToken")?.value
  try {
    const user = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/user`, {withCredentials:true,
      headers:{
        Cookie:`SessionToken=${token}`
      }

    });
    console.log(user.data.user);
    return user;
  } catch (error) {
    console.log(error);
  }
}