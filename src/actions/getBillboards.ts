const useGetBillboards = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/billboard`);
    const data = await response.json()
    return data.data
  } catch (error) {
    if(process.env.NODE_ENV !== "production"){
      console.log("[ERROR_FETCHING_PRODUCT], ",error);
    }
  }
}

export default useGetBillboards