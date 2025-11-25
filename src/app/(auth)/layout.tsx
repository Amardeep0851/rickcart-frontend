import React, { Suspense } from "react";

import Logo from "@/components/header/logo";
import ShoppingImage from "@/components/auth/shopping-image";
import BgGradiant from "@/components/auth/bg-gradiant";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    
    <div className="dark bg-zinc-950">
      <div className="bg-linear-to-b from-zinc-950 to-orange-800/15 min-h-screen px-4 pt-3 pb-10 relative overflow-hidden ">
        <div className="max-w-[1400px] mx-auto  ">
          {/* header */}
          <header>
            <nav className="flex justify-start ">
              <Logo />
            </nav>
          </header>
          {/* header */}

          <div className="lg:grid lg:grid-cols-5 ">
            {/* left side */}
            <ShoppingImage />

            {/* right side login or sign up */}
            <div className="col-span-2 lg:ml-16 xl:ml-0 z-50 lg:mt-4 mt-8 flex justify-center lg:justify-end items-center">
              {children}
            </div>
            {/* right side login or sign up */}
          </div>
        </div>

        {/* right bottom side ornage circle */}
        <BgGradiant />
      </div>
    </div>
  );
}

export default AuthLayout;
