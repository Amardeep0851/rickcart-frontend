import { CheckCircle2 } from "lucide-react";
import React from "react";

function LeftBenefitItem({item}:{item:string}) {
  return (
    <div
      className="flex pb-3 gap-x-2 justify-center md:justify-start"
    >
      <div className="w-6 h-6">
        <CheckCircle2 className="text-orange-600 w-6 h-6 bg-orange-700/15 p-1 rounded-full " />
      </div>{" "}
      <span className="text-nowrap text-base/relaxed text-zinc-200">
        {item}
      </span>
    </div>
  );
}

export default LeftBenefitItem;
