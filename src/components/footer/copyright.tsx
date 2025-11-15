import { WEBSITE_NAME } from "@/lib/constants"
import { Copyright } from "lucide-react"
import React from 'react'

function CopyrightPage() {
  return (
    <div className="text-center dark:bg-zinc-900 bg-zinc-50 flex justify-center py-2 ">
      &copy; {new Date().getFullYear() } &nbsp; <span> { WEBSITE_NAME } </span>. All rights reserved.
    </div>
  )
}

export default CopyrightPage