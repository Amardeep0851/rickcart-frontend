"use client";
import React, { useEffect, useState } from "react";
import { useMedia } from "react-use";

import { Skeleton } from "../ui/skeleton";
import { cn } from "@/lib/utils";
import { getRoutes} from "@/actions/useGetCategories";
import MobileMenu from "./mobile-menu";
import NavButton from "./nav-button";

function Navbar() {
  const [mounted, setMounted] = useState(false);
  const isMobile = useMedia("(max-width:1024px)");
  const { loading, error, routes } = getRoutes() ;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (error) {
    throw new Error("Somethign went wrong. Please try again.");
  }

  if (!mounted) {
    return null;
  }

  if (isMobile) {
    return <MobileMenu routes={routes} />;
  }

  if (loading) {
    return (
      <div className="flex gap-4">
        {[1, 2, 3, 4].map((item) => (
          <Skeleton
            key={item}
            className="rounded-md px-4 py-1 flex capitalize hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-all duration-300 w-24 h-8 bg-zinc-200 dark:bg-zinc-700/50 border-b-[1px] border-zinc-500"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="flex gap-4 items-center mt-1">
      
      {routes.map((route) => (
        <div
          className={cn(
            "rounded-md px-4 py-1 flex capitalize hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-all duration-300 text-sm",
            route.isActive
              ? "bg-zinc-300 dark:bg-zinc-700/90 border-b-[1px] border-orange-300"
              : "bg-zinc-200 dark:bg-zinc-700/50 border-b-[1px] border-orange-700"
          )}
          key={route.href}
        >
          <NavButton href={route.href} name={route.name}  />
        </div>
      ))}
    </div>
  );
}

export default Navbar;
