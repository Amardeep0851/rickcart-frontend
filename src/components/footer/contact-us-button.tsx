"use client"
import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

function ContactUsButton() {

  const pathname =usePathname()
  if(pathname.startsWith("/contact-us")){
    return 
  }
  return (
    <div className="w-full mx-auto text-left grid sm:grid-cols-4 sm:grid-flow-col border-b-2 border-zinc-300/80 dark:border-zinc-700/70 pb-12 pt-12 gap-4 ">
      <div className="sm:col-span-3 ">
        <h2 className="text-2xl font-semibold mb-3">
          Facing an issue with your order?
        </h2>
        <p className="text-base text-zinc-600 dark:text-zinc-400 mb-2 ">
          If you experience any problem related to orders, payments, or the
          website itself — we’re here to help.

          {/* Our support team is available 24/7 to assist with returns or questions. */}
        </p>
      </div>

      <Link
        href="/contact-us"
        className=" bg-orange-700 text-white hover:bg-orange-800 transition-all duration-200 cursor-pointer my-auto w-full block   rounded-md text-center p-2 justify-self-end"
      >
        Contact Us
      </Link>
    </div>
  );
}

export default ContactUsButton;
