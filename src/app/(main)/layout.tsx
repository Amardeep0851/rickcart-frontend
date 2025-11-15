import React from 'react'
import Image from "next/image"
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"

function layout({children}:{children:React.ReactNode}) {
  return (
    
    <div className="flex flex-col" >
    <Header />
    <div className="w-full flex-1 bg-background pt-14 max-w-7xl mx-auto min-h-screen pb-2">
      {children}
    </div>
    <Footer />
    </div>
  )
}

export default layout