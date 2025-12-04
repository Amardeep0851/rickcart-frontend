import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"


export const LoadingCircle = ({className}:{className?:string}) => {
return (
  <div className="h-screen w-full flex justify-center items-center">
    <Loader2 className="animate-spin text-orange-700 size-8 "/>
  </div>
)
}

export const LoadingCircleWithoutPosition = ({className}:{className?:string}) => {
return (
  <div className="">
    <Loader2 className={cn("animate-spin text-orange-700 size-8 ", className)}/>
  </div>
)
}