
import axios from "axios";
import { cookies } from "next/headers";

export const getCurrentUserServer = async () => {
  const cookieStore = await cookies();
  const token = cookieStore?.get("SessionToken")?.value
  try {
    const user = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL_WITHOUT_STORE}/auth/user`, {withCredentials:true,
      headers:{
        Cookie:`SessionToken=${token}`
      }

    });
    return user.data.user;
  } catch (error) {
    console.log(error);
  }
}