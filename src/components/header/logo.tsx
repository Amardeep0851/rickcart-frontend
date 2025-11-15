"use client"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from 'react'
import { useMedia } from "react-use"

function Logo() {
  const isMobile = useMedia("(max-width:1024px)");
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  })

  if(!mounted){
    return null
  }

  if(isMobile)
  {
    return null;
  }
  
  return (
    <div className="w-44 pt-2">
      <Link href="/">
      <Image src="/images/site-images/logo.png" width={130} height={36} alt="rickcart logo" />
      </Link>
    </div>
  )
}

export default Logo