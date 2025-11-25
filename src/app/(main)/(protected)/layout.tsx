import { getCurrentUserServer } from "@/lib/get-current-user-server"
import React from 'react'

async function layout({children}:{children:React.ReactNode}) {
  const user = await getCurrentUserServer();
  // if(!user){
  //   return;
  // }
  return (
    <>
      {children}
    </>
  )
}

export default layout