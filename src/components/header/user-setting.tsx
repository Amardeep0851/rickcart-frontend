import { User } from "lucide-react"
import React from 'react'

function UserSetting() {
  return (
    <div className="dark:bg-zinc-600 bg-zinc-400 flex items-center justify-center rounded-full p-1 order-6">
      <User className="size-5 cursor-pointer" />
    </div>
  )
}

export default UserSetting