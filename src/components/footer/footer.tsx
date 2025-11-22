"use client"
import React from "react";
import Image from "next/image";

import Columns from "./columns";
import CopyrightPage from "./copyright";
import ContactUsButton from "./contact-us-button";
import { useGetCategories } from "@/actions/useGetCategories";


function Footer() {
  const {data} = useGetCategories();
  

  return (
    <div className=" bg-transparent relative mt-2 mx-4">
      <div className="bg-gradient-to-b dark:from-zinc-900/95 dark:to-zinc-950 from-zinc-50 to-zinc-200/95 rounded-t-md z-50 px-8 py-12 pt-1 max-w-7xl mx-auto">

        <ContactUsButton  />
        <Columns  />
      </div>

      <Image
        src="/images/site-images/cart3.png"
        fill
        alt="footer"
        className="-z-10 my-t object-cover rounded-t-md object-top max-w-7xl mx-auto"
      />
      <CopyrightPage />
    </div>
  );
}

export default Footer;
