"use clients"
import React from "react";
import { House, LucideIcon, Menu } from "lucide-react";

import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger
  } from "@/components/ui/sheet";
import Image from "next/image";
import { MenuType } from "@/lib/types";
import NavButton from "./nav-button";
import { cn } from "@/lib/utils";



function MobileMenu({routes}:{routes:MenuType[]}) {
  return (
    <Sheet >
      <SheetTrigger className="order-1 lg:order-2 border-[2px] rounded-sm p-1 border-orange-700 m-0 focus-visible:outline-0" asChild>
        <Menu className="cursor-pointer size-8 text-orange-700 " />
      </SheetTrigger >
      <SheetContent side="left" className="w-80">
        <SheetHeader className="border-b-2 border-zinc-200 dark:border-zinc-800 m-0 pt-3 pb-2 pl-1">
          <SheetTitle>
            <Image src="/images/site-images/logo.png" width={130} height={36} alt="rickcart logo" />
          </SheetTitle>
           </SheetHeader>
          <div className="flex flex-col">
            {
              routes.map((route) => (
                <div className={cn("pl-2 py-2 my-1 mx-4 rounded-md  hover:bg-orange-800 hover:text-white dark:hover:bg-orange-800 mt-2 cursor-pointer transition-all duration-200", route.isActive && "bg-amber-700 text-white")}  key={route.name}>
                  <NavButton href={route.href} name={route.name} Icon={route.Icon} />
                </div>
              ))
            }
            
          </div>
       
      </SheetContent>
    </Sheet>
  );
}

export default MobileMenu;
