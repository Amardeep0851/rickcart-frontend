import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  LucideRotateCcwSquare,
  RotateCcw,
  Twitter,
} from "lucide-react";

import { WEBSITE_URL } from "@/lib/constants";
import { Category } from "@/lib/types";
import { getRoutes } from "@/actions/useGetCategories";
import { cn } from "@/lib/utils";

function Columns() {
  const { routes, loading, error } = getRoutes();

  return (
    <div
      className={cn(
        " grid col-span-1 sm:grid-cols-2 gap-8 mt-12 ",
        routes.length > 7 ? "lg:grid-cols-4" : "lg:grid-cols-3"
      )}
    >
      <div className="sm:border-r-2 border-zinc-400/50 dark:border-zinc-700/70">
        <h1 className="text-lg font-bold pb-0.5 text-orange-700 ">
          Categories
        </h1>
        <ul className="pl-3 leading-7 dark:text-zinc-200 text-zinc-900 ">
          {routes?.slice(0, 7).map((category) => (
            <li className="" key={category.href}>
              <Link
                href="/aboutus"
                className="hover:text-orange-700 transition duration-200"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {routes.length > 7 && (
        <div className="lg:border-r-2 border-zinc-400/50 dark:border-zinc-700/70">
          <h1 className="text-lg font-bold pb-0.5 text-orange-700">
            Categories
          </h1>
          <ul className="pl-3 leading-7 dark:text-zinc-300 text-zinc-800">
            {routes?.slice(7, 14).map((category) => (
              <li className="" key={category.href}>
                <Link
                  href="/aboutus"
                  className="hover:text-orange-700 transition duration-200"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="sm:border-r-2 border-zinc-400/50 dark:border-zinc-700/70 col-start-1 col-end-3 sm:col-start-auto sm:col-end-auto">
        <h1 className="text-lg font-bold pb-0.5 text-orange-700">Company</h1>
        <ul className="leading-7 pl-3 dark:text-zinc-300 text-zinc-800">
          <li>
            <Link
              href="/aboutus"
              className="hover:text-orange-700 transition duration-200"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              href="/aboutus"
              className="hover:text-orange-700 transition duration-200"
            >
              Return policy
            </Link>
          </li>
          <li>
            <Link
              href="/aboutus"
              className="hover:text-orange-700 transition duration-200"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              href="/aboutus"
              className="hover:text-orange-700 transition duration-200"
            >
              Term and Service
            </Link>
          </li>
        </ul>
      </div>
      <div className="pr-4 col-start-1 col-end-3 lg:col-start-auto lg:col-end-auto">
        <p className="text-justify ">
          <Image
            src="/images/site-images/logo.png"
            width="130"
            height="80"
            alt="Logo"
            className="float-left pr-2 mt-0.5  "
          />
          guarantee that we provide 100% ORIGINAL products at {WEBSITE_URL}
        </p>

        <p className="pt-4">
          <Image
            src="/images/site-images/return-policy.png"
            width="130"
            height="100"
            alt="Return policy image"
            className="float-left pr-2"
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
        </p>

        <div className="flex pt-4 gap-3 justify-end">
          <div>Follow us</div>
          <ul className="flex gap-4">
            <li>
              <Facebook className="size-5 text-orange-800 hover:text-orange-700 dark:text-orange-700 dark:hover:text-orange-800 duration-200 transition cursor-pointer" />
            </li>
            <li>
              <Instagram className="size-5 text-orange-800 hover:text-orange-700 dark:text-orange-700 dark:hover:text-orange-800 duration-200 transition cursor-pointer" />
            </li>
            <li>
              <Twitter className="size-5 text-orange-800 hover:text-orange-700 dark:text-orange-700 dark:hover:text-orange-800 duration-200 transition cursor-pointer" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Columns;
