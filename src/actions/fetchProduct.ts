export async function fetchProduct(slug:string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products/${slug}`);
    const data = await response.json();
    return data.data
  } catch (error) {
    if(process.env.NODE_ENV !== "production"){
      console.log("[ERROR_FETCHING_PRODUCT], ",error);
    }
  }
}