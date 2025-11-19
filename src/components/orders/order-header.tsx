import React from 'react';
import ProductsHeader from "../product/products-header";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function OrdersHeader() {
  return (
    <div className="w-full mb-8">

      <div className="flex items-center justify-between border-b dark:border-zinc-700 border-zinc-300 pb-4">
        {/* <div className="mt-3 text-sm flex gap-x-4 items-center ">
        70 orders placed in
        <Select>
          <SelectTrigger className="">
            <SelectValue placeholder="Select Year" />
          </SelectTrigger>
          <SelectContent >
            <SelectItem value="2022" defaultValue="2022">2022</SelectItem>
            <SelectItem value="2022" defaultValue="2023">2023</SelectItem>
            <SelectItem value="2022" defaultValue="2024">2024</SelectItem>
          </SelectContent>
        </Select>
      </div> */}
      <ProductsHeader title="Your Oders" />
        <div className="flex items-center space-x-3">
          <Input
            type="text"
            placeholder="Search orders"
            className=""
          />
          <Button className="cursor-pointer" variant="destructive">
            Search
          </Button>
        </div>
      </div>

      
    </div>
  );
}
