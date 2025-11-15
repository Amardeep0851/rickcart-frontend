"use client"
import { useState, useEffect } from "react";
import React from 'react'

export function DashboardLoading() {
  return (
    <div className="p-6">
      {/* Header pulse bar */}
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/4 mb-6" />
      </div>

      {/* Grid of 3 skeleton cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="bg-gray-100 p-6 rounded-lg animate-pulse"
          >
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-4" />
            <div className="h-8 bg-gray-200 rounded w-1/2" />
          </div>
        ))}
      </div>

      {/* Large skeleton section with list items */}
      <div className="bg-gray-100 p-6 rounded-lg animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-1/3 mb-4" />
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-4 bg-gray-200 rounded"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// app/products/[id]/loading.tsx
export  function ProductLoading() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="animate-pulse flex flex-col md:flex-row gap-8">
        {/* Image placeholder */}
        <div className="bg-gray-200 aspect-square rounded-lg flex-1" />

        {/* Product details placeholder */}
        <div className="flex-1 space-y-6">
          {/* Title */}
          <div className="h-8 bg-gray-200 rounded" />

          {/* Subtitle */}
          <div className="h-6 bg-gray-200 rounded w-1/4" />

          {/* Info lines */}
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded" />
            <div className="h-4 bg-gray-200 rounded" />
            <div className="h-4 bg-gray-200 rounded w-3/4" />
          </div>

          {/* Price */}
          <div className="h-12 bg-gray-200 rounded w-1/2" />
        </div>
      </div>
    </div>
  )
}



export function SmartLoading() {
  const [loadingStage, setLoadingStage] = useState(0);

  const stages = [
    "Connecting to server...",
    "Loading user data...",
    "Preparing dashboard...",
    "Almost ready..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingStage(prev => (prev + 1) % stages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="animate-spin h-12 w-12 rounded-full bg-[conic-gradient(from_0deg,_#b91c1c,_#f87171)]">
        <div className="absolute inset-1 rounded-full bg-black"></div>
      </div>

      {/* <div className="animate-spin rounded-full h-12 w-12 border-2 border-blue-600 gradi mb-4"></div> */}
      <p className="text-gray-600">{stages[loadingStage]}</p>
      <div className="w-64 bg-gray-200 rounded-full h-2 mt-4">
        <div
          className="bg-blue-600 h-full rounded-full transition-all duration-1000"
          style={{ width: `${((loadingStage + 1) / stages.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}

export function ProgressingBar() {
  const [loadingState, setLoadingState] = useState<number>(0)

  const stages =[
    "Connecting to server...",
    "Connecting to server...",
    "Loading user data...",
    "Loading user data...",
    "Preparing dashboard...",
    "Almost ready...",
    "Almost ready...",
    "Almost ready...",
    "Almost ready..."
    
  ]

 useEffect(() => {
   const id = setInterval(() => {
    setLoadingState(prev => (prev + 1) % stages.length)
  }, 2000);
  if(loadingState === 8){
    clearInterval(id)
  }
 },[])
 console.log(loadingState);
return(
  <div className="animate-pulse">
    <div>
      {stages[loadingState]}
    </div>
    <div className="w-96 bg-white h-2 m-44 rounded-2xl flex" >
    
    <div className="bg-blue-700 h-full transition-all duration-[3000ms]" style={{width:`${((loadingState +1)/stages.length) * 100}%`}} >
    </div>
  </div>
  </div>
)
}

function page() {
  return (
    <div>
      <DashboardLoading />
      < ProductLoading />
      <SmartLoading />
      <ProgressingBar />
    </div>
  )
}

export default page