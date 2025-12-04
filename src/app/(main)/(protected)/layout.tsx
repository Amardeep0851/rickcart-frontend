import { getCurrentUserServer } from "@/lib/get-current-user-server"
import { redirect } from "next/navigation";
import React from 'react'

async function layout({children}:{children:React.ReactNode}) {
  const user = await getCurrentUserServer();
  if(!user){
    redirect("/sign-in")
  }
  return (
    <>
      {children}
    </>
  )
}

export default layout