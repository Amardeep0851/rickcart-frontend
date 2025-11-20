import React from "react";

import Link from "next/link";
import { cn } from "@/lib/utils";

export type NavButtonProps = {
  href:string;
  Icon?:React.ComponentType<{ className?: string }>;
  name:string;
  className?:string;
}
function NavButton({href, Icon, name, className}:NavButtonProps) {
  return (
    <Link href={href} className=" flex gap-2 lg:gap-0 items-center text-nowrap">
      <span>{Icon && <Icon className={cn("size-4",className)} /> }</span>
      {name}
    </Link>
  );
}

export default NavButton;
