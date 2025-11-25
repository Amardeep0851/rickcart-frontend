"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import LeftBenefitItem from "./left-benefit-item";

const inter = Inter({ weight: "400", subsets: ["latin"] });

function ShoppingImage() {
  const pathname = usePathname();

  return (
    <div className="col-span-3 lg:pr-10 ">
      <motion.h1
        className={cn(
          "text-5xl/tight pt-20 font-medium text-white text-center lg:text-left ",
          inter.className
        )}
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Create Your Account and Start Shopping
      </motion.h1>

      <div className="md:grid md:grid-cols-6 w-full ">
        <div className="md:col-span-3">
          <motion.div
            className={cn(" py-6 text-justify md:pr-10 ", inter.className)}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {pathname.startsWith("/sign-up")
              ? [
                  "Shop daily essentials & trending gadgets.",
                  "Enjoy quality products at unbeatable prices",
                  "Track orders effortlessly from day one.",
                ].map((item, index) => (
                  <LeftBenefitItem item={item} key={index} />
                ))
              : [
                  "Pick up exactly where you left off.",
                  "Access your wishlist and order history.",
                  "Unlock exclusive deals waiting for you.",
                ].map((item, index) => (
                  <LeftBenefitItem item={item} key={index} />
                ))}
          </motion.div>
        </div>

        <motion.div
          className="md:col-span-3 md:ml-auto md:pt-2"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="w-full  md:max-h-[400px] ">
            <div className="  aspect-[4/4] sm:h-[400px] h-[300px]  relative sm:mx-auto ml-auto ">
              <div className="w-4 h-4 bg-orange-700 rounded-full absolute sm:right-[101px] sm:top-[33px] right-[85px] top-[25px]  z-50 animate-ping blur-sm  " />

              <div className="w-1.5 h-1.5 bg-orange-700 rounded-full absolute sm:right-[101px] sm:top-[33px] right-[85px] top-[25px] z-50 " />
              <motion.div
                className="w-2 h-2 bg-orange-700 rounded-full absolute right-[70px] top-[103px] opacity-70"
                animate={{ x: [0, 70, 0], y: [0, -70, 0] }}
                transition={{ repeat: Infinity, duration: 12 }}
              />
              <motion.div
                className="w-2 h-2 bg-orange-700 rounded-full absolute left-[70px] top-[15px] opacity-70"
                animate={{
                  x: [0, -70, 0, 70, 0, 140, 0, -140, 0],
                  y: [0, 70, 0, 140, 0, -70, 0, -140, 0],
                }}
                transition={{ repeat: Infinity, duration: 60 }}
              />
              <motion.div
                className="w-1 h-1 bg-orange-700 rounded-full absolute right-[90px] top-[153px] opacity-70"
                animate={{ x: [0, 70, 0], y: [0, -70, 0] }}
                transition={{ repeat: Infinity, duration: 12 }}
              />
              <motion.div
                className="w-1 h-1 bg-orange-700 rounded-full absolute right-[70px] top-[103px] opacity-70"
                animate={{ x: [0, 450, 100, 0], y: [0, 20, -170, 0] }}
                transition={{ repeat: Infinity, duration: 30 }}
              />
              <motion.div
                className="w-2 h-2 bg-orange-700 rounded-full absolute right-[140px] bottom-[60px] opacity-70"
                animate={{ x: [0, 500, 0], y: [0, -150, 0] }}
                transition={{ repeat: Infinity, duration: 25, delay: 8 }}
              />
              <motion.div
                className="w-1 h-1 bg-orange-700 rounded-full absolute right-[170px] top-[173px] opacity-70"
                animate={{ x: [0, 350, 0], y: [0, -170, 0] }}
                transition={{ repeat: Infinity, duration: 30, delay: 5 }}
              />
              <motion.div
                className="w-1 h-1 bg-orange-700 rounded-full absolute right-[50px] bottom-[35px] opacity-70"
                animate={{ x: [0, 70, 0], y: [0, -70, 0] }}
                transition={{ repeat: Infinity, duration: 10 }}
              />
              <motion.div
                className="w-2 h-2 bg-orange-700 rounded-full absolute left-[70px] bottom-[43px] opacity-70"
                animate={{ x: [0, 70, 0], y: [0, -70, 0] }}
                transition={{ repeat: Infinity, duration: 12 }}
              />
              <motion.div
                className="size-48 bg-orange-700 rounded-full absolute right-[90px] top-[43px] opacity-30 blur-2xl"
                animate={{
                  x: [60, 70, 60],
                  y: [60, -70, 60],
                  scale: [1.4, 1.5, 1.4],
                }}
                transition={{ repeat: Infinity, duration: 20 }}
              />

              <motion.img
                src="/images/site-images/ch2start.png"
                className=" opacity-100 absolute sm:top-[10px] sm:left-[60px] top-[15px] left-[15px] z-50"
                width="85"
                height="40"
                alt="Shopping image"
                animate={{ x: [0, 4, 8, 0, 0], y: [0, 0, 8, 3, 0] }}
                transition={{ repeat: Infinity, duration: 6 }}
              />
              <motion.img
                src="/images/site-images/ch2message.png"
                className=" opacity-100  absolute sm:top-[100px] sm:left-[10px] top-[100px] -left-[5px] z-50"
                width="40"
                height="40"
                alt="Shopping image"
                animate={{ x: [0, 0, 7, 4, 0], y: [0, 7, 3, 5, 0] }}
                transition={{ repeat: Infinity, duration: 6 }}
              />
              <motion.img
                src="/images/site-images/ch2doller.png"
                className=" opacity-100 sm:top-[110px] sm:right-[20px] top-[90px] right-[05px] absolute  z-50"
                width="32"
                height="32"
                alt="Shopping image"
                animate={{ x: [0, 7, 5, 0, 0], y: [0, 0, 5, 12, 0] }}
                transition={{ repeat: Infinity, duration: 8 }}
              />
              <motion.img
                src="/images/site-images/ch2addtocart.png"
                className=" opacity-100  absolute sm:bottom-[62px] sm:right-[135px] bottom-[45px] right-[93px] z-50"
                width="90"
                height="21"
                alt="Shopping image"
                animate={{ x: [0, 3, 2, 0, 0], y: [0, 0, 2, 3, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
              />
              <motion.img
                src="/images/site-images/ch2sale.png"
                className=" opacity-100  absolute sm:top-[102px] sm:left-[167px] top-[76px] left-[125px] z-50"
                width="50"
                height="30"
                alt="Shopping image"
                animate={{ x: [0, 3, 2, 0, 0], y: [0, 0, 2, 3, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
              />
              <motion.img
                src="/images/site-images/ch3-box.png"
                className=" opacity-100 absolute bottom-[3px] -left-[105px] mix-blend-color-dodge "
                width="90"
                height="90"
                alt="Shopping image"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <Image
                src="/images/site-images/ch3.png"
                className=" opacity-100 z-0 "
                fill
                alt="Shopping image"
              />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="border-t-4 rounded-full w-full border-orange-700 -mt-1 z-50" />
    </div>
  );
}

export default ShoppingImage;
