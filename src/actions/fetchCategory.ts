
const fetchCategory = async (slug:string) => {
  return await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/categories/slug/${slug}`);
}