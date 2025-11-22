import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  LucideRotateCcwSquare,
  RefreshCw,
  RotateCcw,
  ShieldCheck,
  Twitter,
} from "lucide-react";

import { WEBSITE_URL } from "@/lib/constants";
import { getRoutes } from "@/actions/useGetCategories";
import { cn } from "@/lib/utils";

function Columns() {
  const { routes, loading, error } = getRoutes();

  return (
    <div
      className={cn(
        " grid col-span-1 sm:grid-cols-2 mt-12 ",
        routes.length > 5 ? "lg:grid-cols-4 gap-12" : "lg:grid-cols-3 gap-16"
      )}
    >
      
      
      <div className=" border-zinc-400/50 dark:border-zinc-700/70 col-start-1 col-end-3 sm:col-start-auto sm:col-end-auto">
        <h1 className="text-xl font-bold pb-2 text-orange-700">Support</h1>
        <ul className="leading-8 pl-0 dark:text-zinc-300 text-zinc-700">
          {
            [ 
              {routeName:"Orders", route:"/orders"},
              {routeName:"About Us", route:"/about-us"},
              {routeName:"Return policy", route:"/return-policy"},
              {routeName:"Contact Us", route:"/contact-us"},
              {routeName:"Term and Condition", route:"/term-and-condition"},
            ].map((item, index) => (
            <li  key={index}>
              <Link
                href={item.route}
               
                className="hover:text-orange-700 transition-all duration-200 hover:pl-1"
              >
                {item.routeName}
              </Link>
            </li>
            ))
          }
        </ul>
      </div>
      <div className=" border-zinc-400/50 dark:border-zinc-700/70">
        <h1 className="text-xl font-bold pb-2 text-orange-700 ">
          Shop
        </h1>
        <ul className="pl-0 leading-8 dark:text-zinc-300 text-zinc-800 ">
          {routes?.slice(0, 5).map((category) => (
            <li className="" key={category.href}>
              <Link
                href={category.href}
                  className={cn("hover:text-orange-700  transition-all duration-200 hover:pl-1", category.isActive && "text-orange-700")}
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {routes.length > 5 && (
        <div className=" border-zinc-400/50 dark:border-zinc-700/70">
          <h1 className="text-lg font-bold pb-2 text-orange-700">
            More
          </h1>
          <ul className="pl-0 leading-8 dark:text-zinc-300 text-zinc-800">
            {routes?.slice(5, 14).map((category) => (
              <li className="" key={category.href}>
                <Link
                  href={category.href}
                  className={cn("hover:text-orange-700  transition-all duration-200 hover:pl-1", category.isActive && "bg-orange-700")}
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="pr-0 col-start-1 col-end-3 lg:col-start-auto lg:col-end-auto ">
        {/* <p className="text-justify dark:text-zinc-400 text-zinc-700">
          <Image
            src="/images/site-images/logo.png"
            width="78"
            height="48"
            alt="Logo"
            className="float-left pr-2 mt-2  "
          />
          guarantee that we provide 100% ORIGINAL products at {WEBSITE_URL}
        </p>

        <p className="pt-4 dark:text-zinc-400 text-zinc-700 text-justify">
          <Image
            src="/images/site-images/return-policy2.png"
            width="104"
            height="62"
            alt="Return policy image"
            className="float-left pr-2 pt-1"
          />{" "}
          <span>
            Return can be made within 10 days of receiving your order.{" "}
            <Link
              href="/return-policy"
              className="dark:text-orange-600 dark:hover:text-orange-800  text-orange-800 hover:text-orange-700  font-semibold"
            >
              Read More ...
            </Link>
          </span>
        </p> */}

          
  {/* Guarantee Block */}
  <div className="flex gap-2 text-justify">
    <ShieldCheck className="w-5 h-5 dark:text-orange-700 text-orange-600 shrink-0" />
    <div>
      <h5 className="font-bold dark:text-zinc-50 text-zinc-900 text-sm">100% Original</h5>
      <p className="text-sm/normal dark:text-zinc-400 text-zinc-800  mt-1.5">
        RickCart guarantees authentic products sourced directly from brands.
      </p>
    </div>
  </div>

  {/* Return Policy Block */}
  <div className="flex gap-2 text-justify mt-2">
    <RefreshCw className="w-5 h-5 dark:text-orange-700 text-orange-600 shrink-0" />
    <div>
      <h5 className="font-bold dark:text-zinc-50 text-zinc-900  text-sm">10 Day Returns</h5>
      <p className="text-sm/normal dark:text-zinc-400 text-zinc-800  mt-2 ">
        Change of mind? Return easily within 10 days. 
        <span className="dark:text-orange-700 text-orange-700 cursor-pointer hover:underline ml-1">Read more...</span>
      </p>
    </div>
  </div>
        <div className="flex pt-4 gap-3 items-center justify-end dark:text-zinc-400 text-zinc-700">
          <ul className="flex gap-4">
            {
              [
                {Icon:Facebook},
                {Icon:Instagram},
                {Icon:Twitter}
              ].map((item, index) => (
                <li className="size-10  transition-all dark:bg-zinc-800/70 bg-zinc-300 p-1.5 pl-2 rounded-full" key={index}>
                  <item.Icon className="size-7 py-1 pr-1 hover:pl-1 text-orange-600 hover:text-orange-700 dark:text-orange-700 dark:hover:text-orange-800 duration-200 transition-all cursor-pointer" /> 
              </li>
              ))
            }
           
          </ul>
        </div>
      </div>
      
    </div>
  );
}

export default Columns;
