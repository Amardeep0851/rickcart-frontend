import React from "react";

import Logo from "./logo";
import Cart from "./cart";
import Search from "./search";
import Navbar from "./navbar";
import ModeToggle from "./mode-toggle";
import UserSetting from "./user-setting";
export const revalidate = 0
function Header() {
  return (
    <div className="fixed w-full px-5 pb-3.5 pt-3 bg-zinc-100/90 dark:bg-zinc-900/90 blur-in-3xl overflow-hidden shadow-none shadow-zinc-200 dark:shadow-zinc-800 z-50 "> 
      <div className="max-w-7xl flex gap-4 mx-auto z-50  " >
        <Logo />
      <div className="justify-self-center pt-1">
      <Navbar />
     </div>
      <div className="ml-auto flex gap-4 items-center pt-1">
        <Search />
        <Cart />
        <ModeToggle />
        <UserSetting />
      </div>
      </div>
      
    </div>
  );
}

export default Header;
