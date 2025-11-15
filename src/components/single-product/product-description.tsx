"use client"
import React from 'react';
import DOMPurify from "dompurify";



function ProductDescription({description}:{description:string}) {
  const cleanedDescription =  typeof window !== "undefined"
      ? DOMPurify.sanitize(description) 
      :  description;
  return (
      <div dangerouslySetInnerHTML={{ __html:cleanedDescription}} />
  )
}

export default ProductDescription