import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"


export const LoadingCircle = ({className}:{className?:string}) => {
return (
  <div className="h-screen w-full flex justify-center items-center">
    <Loader2 className="animate-spin text-orange-700 size-8 "/>
  </div>
)
}