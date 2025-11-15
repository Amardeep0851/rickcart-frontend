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
      <div className="bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-950/85 from-zinc-50 to-zinc-200/85 rounded-t-md z-50 px-5 py-12 max-w-7xl mx-auto">

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
