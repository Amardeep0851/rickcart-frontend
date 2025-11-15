import React from "react";

import Link from "next/link";
import { NavButtonProps } from "@/lib/types";
import { cn } from "@/lib/utils";

function NavButton({href, Icon, name, className}:NavButtonProps) {
  return (
    <Link href={href} className=" flex gap-2 items-center text-nowrap">
      <span>{Icon && <Icon className={cn("size-4",className)} /> }</span>
      {name}
    </Link>
  );
}

export default NavButton;
