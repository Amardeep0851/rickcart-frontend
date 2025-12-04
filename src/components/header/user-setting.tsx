"use client"
import Link from "next/link";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { 
  Heart,
  LogIn,
  LogOut,
  ShoppingBag,
  User,
  User2,
  UserPlus,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useCurrentUser } from "@/lib/user-current-user";
import { LoadingCircleWithoutPosition } from "@/components/ui/loading";

function UserSetting() {
  const route = useRouter()
  const [menuVisiblity, setMenuVisiblity] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { user} = useCurrentUser();

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL_WITHOUT_STORE}/auth/logout`,{id:user.id}, {withCredentials:true})
      console.log(response);
      if(response.status === 200){
        setMenuVisiblity(false);
        route.push("/sign-in");
      }
    } catch (error) {
      if(process.env.NODE_ENV === "production"){
        console.log("[LOGOUT_ERROR_FRONTEND]",error);
      }
    }
    finally{
        setIsLoading(false)
      }
  }
  return (
    <div className={cn("bg-orange-700 flex items-center justify-center rounded-full p-1 order-6", menuVisiblity ?"dark:bg-orange-600":"bg-orange-700 transition-all duration-100")}>
      <DropdownMenu modal={false} open={menuVisiblity} onOpenChange={setMenuVisiblity} >
        <DropdownMenuTrigger asChild className="  size-6 rounded-full">
          <User className={cn("size-6 cursor-pointer text-white ")} />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className={cn("w-56 text-base mt-1 bg-zinc-100/50 backdrop-blur-md dark:bg-zinc-900/70 transition-all duration-200")}
          align="end"
        >
          {user ? (
            <DropdownMenuGroup>
              {
                [
                  {route:"/profile",name:"Profile", icon:User2, seprate:false},
                  {route:"/orders",name:"Orders", icon:ShoppingBag, seprate:false},
                  {route:"/wishlist",name:"WishList", icon:Heart, seprate:true},
                ].map((item, index) => (
                  <Link href={item.route} key={index}>
                    <DropdownMenuItem key={index} className={cn("group flex justify-between  text-base font-medium transition-all duration-300", menuVisiblity ? "translate-y-0" : "-translate-y-12")} >
                      {item.name}{" "}
                      <item.icon className="size-4 dark:text-zinc-300 text-zinc-700 focus:text-white  group-hover:text-white focus-within:text-white " />
                    </DropdownMenuItem>
              </Link>
                ))
              }
            <DropdownMenuSeparator /> 
              <DropdownMenuItem  disabled={isLoading} className="group flex justify-between  text-base font-medium" onClick={handleLogout}>
                Log Out{" "}
                {isLoading ? <LoadingCircleWithoutPosition className="size-5" /> : <LogOut className="size-4 dark:text-zinc-300 text-zinc-700 focus:text-white  group-hover:text-white focus-within:text-white " />}
              </DropdownMenuItem>
            </DropdownMenuGroup>
          ) : (
            <DropdownMenuGroup>
              {
                [
                  {route:"/sign-in",name:"Sign In ", icon:LogIn, seprate:false},
                  {route:"/sign-up",name:"Create New Account", icon:UserPlus, seprate:false},
                ].map((item, index) => (
                  <Link href={item.route} key={index}>
                    <DropdownMenuItem className={cn("group flex justify-between  text-base font-medium transition-all duration-300", menuVisiblity ? "translate-y-0" : "-translate-y-12")}>
                    {item.name}{" "}
                    <item.icon className="size-4 dark:text-zinc-300 text-zinc-700 focus:text-white  group-hover:text-white focus-within:text-white " />

                </DropdownMenuItem>
                  </Link>
                ))
              }
            </DropdownMenuGroup>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default UserSetting;
