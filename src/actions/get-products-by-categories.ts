import axios from "axios";

export const fetchProductByCategory = async (slug:string) => {
  try {
    return await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/slug/${slug}`);
  } catch (error) {
    if(process.env.NODE_ENV === "development"){
      console.log("[ERROR_WHILE_FETCHING_PRODUCT_BY_CATEGORY]", error);
    }
  }
}