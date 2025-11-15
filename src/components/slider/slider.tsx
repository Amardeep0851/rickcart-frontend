// Server Component
import { BillboardType } from "@/lib/types";
import SliderComponent from "./slider-component";
import getBillboards from "@/actions/getBillboards";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

export async function SliderWrapper() {
  const data = await getBillboards(); // cached fetch
  const active = data.filter((b:BillboardType) => b.imageUrl && b.status);
  return <SliderComponent billboards={active} />;
}


export default function Slider(){
  return (
    <Suspense fallback={
      <div className="flex justify-center items-center h-[400px] w-full dark:bg-zinc-900 bg-zinc-100 rounded-lg my-5 ">
        <Loader2 className="animate-spin size-4 " />
      </div>
    } >
      <SliderWrapper />
      </Suspense>
  )
}
