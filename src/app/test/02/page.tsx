"use client";

import { useCurrentUser } from "@/lib/user-current-user"; // Your hook
import { Search, ShoppingCart, User, Sun, Heart, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

export default function HeaderRightSide() {
  const { user, isLoading } = useCurrentUser();
  // Assume cartCount is fetched separately or stored in Zustand
  const cartCount = 4;

  if (isLoading) {
    // Show skeleton while fetching user status
    return <Skeleton className="h-10 w-40 rounded-full" />;
  }

  return (
    <div className="flex items-center gap-2">
      {/* 1. Static Icons (Search, Theme Toggle) */}
      <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-white/10">
        <Search size={20} />
      </Button>

      <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-white/10">
        <Sun size={20} /> {/* Theme Toggle */}
      </Button>

      {/* 2. Cart Icon (Always visible on E-commerce) */}
      <Link href="/cart">
        <Button variant="ghost" size="icon" className="relative text-gray-300 hover:text-orange-500 hover:bg-white/10">
          <ShoppingCart size={20} />
          {cartCount > 0 && (
            <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center bg-orange-500 text-[10px] z-10">
              {cartCount}
            </Badge>
          )}
        </Button>
      </Link>

      {/* 3. Dynamic Auth Section */}
      {user ? (
        // --- LOGGED IN: Show Avatar/Profile Icon ---
        <Link href="/profile">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full">
            <User size={20} /> 
          </Button>
        </Link>
      ) : (
        // --- LOGGED OUT: Show Separate Login/Signup Icons ---
        <>
          <Link href="/login" title="Login to your account">
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-orange-500 hover:bg-white/10">
              <LogIn size={20} />
            </Button>
          </Link>
          
          <Link href="/signup" title="Create Account">
            {/* The primary call to action (Sign Up) can be a button, 
                but we make it a smaller ICON with a primary style */}
            <Button className="bg-orange-600 hover:bg-orange-700 text-white p-2 h-8 w-8 rounded-full">
               <User size={18} />
            </Button>
          </Link>
        </>
      )}
    </div>
  );
}