import { useEffect, useState } from "react";
import { Category } from "@/lib/types";
import { ICONS } from "@/components/ui/icons";
import { usePathname } from "next/navigation";

export const useGetCategories = () => {
      const [data, setData] = useState<Category[]>([])
      const [error, setError] = useState<string | null>(null)
      const [loading, setLoading] = useState<boolean>(false)

      useEffect(() => {
        (async () => {
          try {
            setLoading(true)
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/categories`
        );
        setData(await response.json());
      } catch (err: any) {
        setError(err.message || "Failed to fetch categories");
      } finally {
        setLoading(false);
      }
        })();
        
      },[])
  return {
    data,
    error,
    loading
  }
}

export const getRoutes = () => {
  const pathname = usePathname();
  const {data, error, loading} = useGetCategories();

  let routes = data?.map((category:Category) => {
    const IconComponent = ICONS[category.icon];
    return {
      href: category.slug
        ? category.slug.toLowerCase()
        : category.name.toLowerCase(),
      name: category.name,
      isActive:
        pathname === `/${category.slug ? category.slug : category.name}`,
      Icon: IconComponent,
    };
  });
  routes = [
    {
      href: "/",
      name: "Home",
      isActive: pathname === "/",
      Icon: ICONS["Home"],
    },
    ...routes
  ];

  return {routes, error, loading}
}