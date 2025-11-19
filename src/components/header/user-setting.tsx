import React from 'react';
import { Heart, List, ListOrderedIcon, LogOut, Package, ShoppingBag, Truck, User, User2 } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function UserSetting() {
  return (
    <div className="dark:bg-zinc-600 bg-zinc-400 flex items-center justify-center rounded-full p-1 order-6">
      <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild >
          <User className="size-5 cursor-pointer " />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 text-base mt-1 bg-zinc-100 dark:bg-zinc-900" align="end">
        <DropdownMenuGroup>
          <DropdownMenuItem className="group flex justify-between  text-base font-medium">
            Profile <User2 className="size-4 dark:text-zinc-300 text-zinc-700 focus:text-white  group-hover:text-white focus-within:text-white " />

          </DropdownMenuItem>
          <DropdownMenuItem className="group flex justify-between text-base font-medium">
            Orders <ShoppingBag className="group-hover:text-white size-4 dark:text-zinc-300 text-zinc-700 "  />
            
          </DropdownMenuItem>
          <DropdownMenuItem className="group flex justify-between text-base font-medium">
            WishList <Heart className="group-hover:text-white size-4 dark:text-zinc-300 text-zinc-700 "  />
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuSeparator />
        <DropdownMenuItem className="group flex justify-between text-base font-medium">
          Log out
          <LogOut className="size-4 dark:text-zinc-300 text-zinc-700 group-hover:text-white"  />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  )
}

export default UserSetting