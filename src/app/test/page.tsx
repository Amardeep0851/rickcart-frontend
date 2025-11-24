// import React from "react";
// import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, CreditCard } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Separator } from "@/components/ui/separator";
//       import { ShieldCheck, RefreshCw } from "lucide-react";


// export default function Footer() {
//   return (
//     <footer className="bg-[#0f0f0f] text-white pt-16 pb-8 border-t border-gray-800">
//       <div className="container mx-auto px-4 md:px-8">
        
//         {/* 1. Top Section: The "Help" Banner (Refined) */}
//         <div className="flex flex-col md:flex-row justify-between items-center bg-[#1a1a1a] p-8 rounded-2xl mb-16 border border-gray-800">
//           <div className="mb-6 md:mb-0">
//             <h3 className="text-2xl font-bold mb-2">Need help with your order?</h3>
//             <p className="text-gray-400">
//               Our support team is available 24/7 to assist with returns or questions.
//             </p>
//           </div>
//           <Button 
//             className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-full transition-all"
//           >
//             Contact Support
//           </Button>
//         </div>

//         {/* 2. Middle Section: Links & Newsletter */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
//           {/* Branding & Newsletter */}
//           <div className="space-y-6">
//             <h2 className="text-3xl font-bold text-orange-500 tracking-tighter">RICKCART</h2>
//             <p className="text-gray-400 text-sm leading-relaxed">
//               Your one-stop shop for everything. We guarantee 100% original products and a seamless shopping experience.
//             </p>
            
//             {/* Newsletter Input */}
//             <div className="space-y-2">
//               <span className="text-sm font-medium">Subscribe to our newsletter</span>
//               <div className="flex gap-2">
//                 <Input 
//                   placeholder="Enter your email" 
//                   className="bg-[#1a1a1a] border-gray-700 text-white focus-visible:ring-orange-500" 
//                 />
//                 <Button variant="secondary" className="bg-white text-black hover:bg-gray-200">
//                   Join
//                 </Button>
//               </div>
//             </div>
//           </div>

//           {/* Column 1: Shop */}
//           <div>
//             <h4 className="font-bold text-lg mb-6 text-white">Shop</h4>
//             <ul className="space-y-4 text-sm text-gray-400">
//               <li className="hover:text-orange-500 cursor-pointer transition-colors">Electronics</li>
//               <li className="hover:text-orange-500 cursor-pointer transition-colors">Fashion</li>
//               <li className="hover:text-orange-500 cursor-pointer transition-colors">Home & Furniture</li>
//               <li className="hover:text-orange-500 cursor-pointer transition-colors">Mobile & Tablets</li>
//               <li className="hover:text-orange-500 cursor-pointer transition-colors">Today's Deals</li>
//             </ul>
//           </div>

//           {/* Column 2: Support */}
//           <div>
//             <h4 className="font-bold text-lg mb-6 text-white">Support</h4>
//             <ul className="space-y-4 text-sm text-gray-400">
//               <li className="hover:text-orange-500 cursor-pointer transition-colors">Order Status</li>
//               <li className="hover:text-orange-500 cursor-pointer transition-colors">Delivery Information</li>
//               <li className="hover:text-orange-500 cursor-pointer transition-colors">Return Policy</li>
//               <li className="hover:text-orange-500 cursor-pointer transition-colors">Privacy Policy</li>
//               <li className="hover:text-orange-500 cursor-pointer transition-colors">Terms & Conditions</li>
//             </ul>
//           </div>

//           {/* Column 3: Contact Info */}
//           <div>
//             <h4 className="font-bold text-lg mb-6 text-white">Contact Us</h4>
//             <ul className="space-y-4 text-sm text-gray-400">
//               <li className="flex items-start gap-3">
//                 <MapPin className="w-5 h-5 text-orange-500 shrink-0" />
//                 <span>123 Rick Street, New Delhi, India 110001</span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Phone className="w-5 h-5 text-orange-500 shrink-0" />
//                 <span>+91 98765 43210</span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Mail className="w-5 h-5 text-orange-500 shrink-0" />
//                 <span>support@rickcart.com</span>
//               </li>
//             </ul>
            
//             {/* Social Icons */}
//             <div className="flex gap-4 mt-6">
//               <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors cursor-pointer text-gray-400">
//                 <Facebook size={18} />
//               </div>
//               <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors cursor-pointer text-gray-400">
//                 <Instagram size={18} />
//               </div>
//               <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors cursor-pointer text-gray-400">
//                 <Twitter size={18} />
//               </div>
//             </div>
//           </div>
//         </div>

//         <Separator className="bg-gray-800 mb-8" />

//         {/* 3. Bottom Section: Copyright & Payments */}
//         <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-gray-500 text-sm">
//             © 2025 RickCart. All rights reserved.
//           </p>

//           {/* Payment Method Mockups (Using Text/Icons for now) */}
//           <div className="flex gap-4 items-center">
//              {/* You usually use SVGs or Images here for Visa/Mastercard/UPI */}
//              <span className="text-xs text-gray-500">Secure Payments:</span>
//              <div className="flex gap-2">
//                 <div className="w-10 h-6 bg-white rounded flex items-center justify-center text-black text-[10px] font-bold">VISA</div>
//                 <div className="w-10 h-6 bg-white rounded flex items-center justify-center text-black text-[10px] font-bold">UPI</div>
//                 <div className="w-10 h-6 bg-white rounded flex items-center justify-center text-black text-[10px] font-bold">Paypal</div>
//              </div>
//           </div>
//         </div>
//       </div>

// {/* ... inside your right column ... */}
// <div className="lg:col-span-1 space-y-8">
  

//   {/* Socials (Aligned nicely below) */}
//   <div className="flex gap-4 mt-6 pt-4 border-t border-gray-800">
//     <Facebook className="w-5 h-5 text-gray-500 hover:text-orange-500 cursor-pointer" />
//     <Instagram className="w-5 h-5 text-gray-500 hover:text-orange-500 cursor-pointer" />
//     <Twitter className="w-5 h-5 text-gray-500 hover:text-orange-500 cursor-pointer" />
//   </div>

// </div>
//     </footer>
//   );
// }




// Mock Data for the example


// export default function ProductCard() {
//   return (
   
//   );
// }







// Product
// "use client"

// import React, { useState } from "react";
// import { Star, Heart, ShoppingCart, Truck, ShieldCheck, RefreshCcw, Check, CreditCard } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";

// // Mock Data
// const product = {
//   id: "1",
//   brand: "iQOO",
//   title: "Z10R 5G Smartphone",
//   variant: "Aquamarine",
//   specs: ["8GB RAM", "128GB Storage", "Dimensity 7400"],
//   price: 4000, // Current Price
//   mrp: 6000,   // Original Price
//   rating: 4.5,
//   reviews: 128,
//   stock: true,
//   description: [
//     "Powerful Dimensity 7400 5G Processor with 750K+ AnTuTu Score.",
//     "India's Slimmest Quad-Curved Display (0.739 cm thin).",
//     "Sony IMX882 4K OIS Rear Camera for ultra-steady video.",
//     "80W FlashCharge with 5000mAh Battery."
//   ],
//   images: [
//     "/img1.jpg", // Replace with your real image URLs
//     "/img2.jpg",
//     "/img3.jpg"
//   ]
// };

// export default function ProductDetailsPage() {
//   // State for Image Gallery
//   const [mainImage, setMainImage] = useState(0);
//   const [quantity, setQuantity] = useState(1);

//   // Calculate Discount Percentage
//   const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

//   return (
//     <div className="container mx-auto px-4 py-12">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
//         {/* LEFT COLUMN: Image Gallery */}
//         <div className="space-y-4">
//           {/* Main Image */}
//           <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 flex items-center justify-center">
//              {/* In real code, use Next/Image */}
//              <img 
//                src={product.images[mainImage]} 
//                alt={product.title} 
//                className="object-contain w-full h-full mix-blend-multiply hover:scale-105 transition-transform duration-500"
//              />
//              <div className="absolute top-4 left-4">
//                <Badge className="bg-orange-500 hover:bg-orange-600">New Arrival</Badge>
//              </div>
//           </div>

//           {/* Thumbnails */}
//           <div className="flex gap-4 overflow-x-auto pb-2">
//             {product.images.map((img, index) => (
//               <button 
//                 key={index}
//                 onClick={() => setMainImage(index)}
//                 className={`relative w-20 h-20 rounded-lg border-2 overflow-hidden flex-shrink-0 ${
//                   mainImage === index ? "border-orange-500 ring-2 ring-orange-500/20" : "border-transparent hover:border-gray-300"
//                 }`}
//               >
//                 <img src={img} alt="thumb" className="object-cover w-full h-full" />
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT COLUMN: Product Details */}
//         <div className="flex flex-col h-full">
          
//           {/* 1. Header Section */}
//           <div className="mb-6">
//             <h2 className="text-orange-500 font-bold text-sm tracking-wide uppercase mb-2">
//               {product.brand}
//             </h2>
//             <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
//               {product.title} <span className="text-gray-500 font-normal text-2xl">({product.variant})</span>
//             </h1>
            
//             {/* Ratings */}
//             <div className="flex items-center gap-2 text-sm mb-4">
//               <div className="flex text-yellow-400">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
//                 ))}
//               </div>
//               <span className="text-gray-400">({product.reviews} reviews)</span>
//             </div>

//             {/* Specs Pills */}
//             <div className="flex flex-wrap gap-2">
//               {product.specs.map((spec) => (
//                 <span key={spec} className="px-3 py-1 bg-[#1a1a1a] border border-gray-800 rounded-full text-xs text-gray-300">
//                   {spec}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <Separator className="bg-gray-800 mb-6" />

//           {/* 2. Price Section (Fixed Math) */}
//           <div className="mb-8">
//             <div className="flex items-end gap-3">
//               <span className="text-4xl font-bold text-white">₹{product.price.toLocaleString()}</span>
//               <span className="text-xl text-gray-500 line-through decoration-gray-500">
//                 ₹{product.mrp.toLocaleString()}
//               </span>
//               <span className="text-lg text-green-500 font-bold mb-1">
//                 {discount}% OFF
//               </span>
//             </div>
//             <p className="text-gray-400 text-xs mt-1">Inclusive of all taxes</p>
//           </div>

//           {/* 3. Action Buttons (The Buy Box) */}
//           <div className="grid grid-cols-[1fr_auto] gap-4 mb-8">
//             <div className="flex gap-3">
//                {/* Quantity Selector could go here */}
//                <Button className="flex-1 bg-white text-black hover:bg-gray-200 h-12 text-lg font-semibold">
//                  Add to Cart
//                </Button>
//                <Button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white h-12 text-lg font-semibold">
//                  Buy Now
//                </Button>
//             </div>
            
//             {/* Wishlist Button (Subtle) */}
//             <Button variant="outline" className="h-12 w-12 border-gray-700 bg-[#1a1a1a] hover:bg-[#252525] hover:text-red-500">
//                <Heart size={20} />
//             </Button>
//           </div>

//           {/* 4. Trust Signals (Better Layout) */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
//              <TrustBadge icon={Truck} title="Free Delivery" sub="On orders > ₹500" />
//              <TrustBadge icon={RefreshCcw} title="Returns" sub="7 Days Policy" />
//              <TrustBadge icon={ShieldCheck} title="Warranty" sub="1 Year Brand" />
//              <TrustBadge icon={CreditCard} title="Secure Pay" sub="100% Encrypted" />
//           </div>

//           {/* 5. Description (Readable List) */}
//           <div className="bg-[#1a1a1a] rounded-xl p-6 border border-gray-800">
//             <h3 className="font-bold text-white mb-4">Product Highlights</h3>
//             <ul className="space-y-3">
//               {product.description.map((item, index) => (
//                 <li key={index} className="flex gap-3 items-start text-gray-300 text-sm">
//                   <Check className="text-green-500 w-5 h-5 shrink-0" />
//                   <span className="leading-relaxed">{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// // Helper Component for Trust Badges
// function TrustBadge({ icon: Icon, title, sub }: any) {
//   return (
//     <div className="flex flex-col items-center text-center p-3 bg-[#1a1a1a] rounded-lg border border-gray-800">
//        <Icon className="text-orange-500 mb-2 h-6 w-6" />
//        <span className="text-xs font-bold text-white">{title}</span>
//        <span className="text-[10px] text-gray-500">{sub}</span>
//     </div>
//   );
// }
// "use client"

// import React, { useState } from "react";
// import Link from "next/link";
// import { Search, ShoppingCart, User, MoreHorizontal, Menu, Sun, Moon } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// // Mock Data: Imagine this comes from your DB
// const allCategories = [
//   "Electronics", "Fashion", "Home", "Beauty", "Toys", 
//   "Sports", "Automotive", "Grocery", "Books", "Music"
// ];

// export default function Header() {
//   // Logic: Show first 5, hide the rest
//   const visibleCategories = allCategories.slice(0, 5);
//   const hiddenCategories = allCategories.slice(5);

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-[#0f0f0f]">
//       <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
//         {/* 1. LEFT: Logo (and Mobile Menu Trigger) */}
//         <div className="flex items-center gap-4">
          
//           {/* MOBILE MENU (Hamburger) - Only visible on small screens */}
//           <Sheet>
//             <SheetTrigger asChild>
//               <Button variant="ghost" size="icon" className="lg:hidden text-gray-300">
//                 <Menu size={24} />
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="left" className="bg-[#1a1a1a] border-gray-800 text-white">
//               <div className="flex flex-col gap-4 mt-8">
//                 <h3 className="font-bold text-orange-500">Categories</h3>
//                 {allCategories.map(cat => (
//                   <Link key={cat} href={`/category/${cat}`} className="text-lg hover:text-orange-500">
//                     {cat}
//                   </Link>
//                 ))}
//                 <div className="h-px bg-gray-800 my-2" />
//                 <div className="flex items-center gap-3 text-gray-300">
//                    <Sun size={18} /> Theme Toggle
//                 </div>
//               </div>
//             </SheetContent>
//           </Sheet>

//           {/* LOGO */}
//           <Link href="/" className="text-2xl font-bold tracking-tighter text-orange-500">
//             RICK<span className="text-white">CART</span>
//           </Link>
//         </div>

//         {/* 2. CENTER: Desktop Navigation (The logic you asked for) */}
//         <nav className="hidden lg:flex items-center gap-1 bg-[#1a1a1a] px-2 py-1 rounded-full border border-gray-800">
//           {/* Render first 5 categories */}
//           {visibleCategories.map((cat) => (
//             <Link key={cat} href={`/category/${cat}`}>
//               <Button variant="ghost" className="text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full h-8 px-4">
//                 {cat}
//               </Button>
//             </Link>
//           ))}

//           {/* Render "More" dropdown IF there are extra categories */}
//           {hiddenCategories.length > 0 && (
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-gray-400 hover:text-white">
//                   <MoreHorizontal size={16} />
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end" className="bg-[#1a1a1a] border-gray-800 text-white w-48">
//                 {hiddenCategories.map((cat) => (
//                   <DropdownMenuItem key={cat} className="cursor-pointer hover:bg-white/10 focus:bg-white/10 focus:text-white">
//                     {cat}
//                   </DropdownMenuItem>
//                 ))}
//               </DropdownMenuContent>
//             </DropdownMenu>
//           )}
//         </nav>

//         {/* 3. RIGHT: Actions (Search, Cart, User) */}
//         <div className="flex items-center gap-2">
          
//           {/* SEARCH TRIGGER */}
//           {/* Desktop: "Search..." Text Button | Mobile: Icon Only */}
//           <Button 
//              variant="ghost" 
//              className="text-gray-300 hover:text-white hover:bg-white/10 gap-2"
//              // onClick={openSearchDialog}
//           >
//             <Search size={20} />
//             <span className="hidden md:inline text-gray-500 font-normal">Search...</span>
//             <kbd className="hidden md:inline-flex pointer-events-none h-5 select-none items-center gap-1 rounded border border-gray-700 bg-muted px-1.5 font-mono text-[10px] font-medium text-gray-400 ml-2">
//               ⌘K
//             </kbd>
//           </Button>

//           {/* THEME TOGGLE (Visible on Desktop, moved to Hamburger on Mobile to save space) */}
//           <Button variant="ghost" size="icon" className="hidden md:flex text-gray-300 hover:text-white hover:bg-white/10">
//              <Sun size={20} />
//           </Button>

//           {/* CART */}
//           <Button variant="ghost" size="icon" className="relative text-gray-300 hover:text-orange-500 hover:bg-white/10">
//             <ShoppingCart size={20} />
//             <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center bg-orange-500 text-[10px]">
//               4
//             </Badge>
//           </Button>

//           {/* USER PROFILE */}
//           <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-white/10 rounded-full">
//             <User size={20} />
//           </Button>

//         </div>

//       </div>
//     </header>
//   );
// }



// ----------------sign Up page


"use client"

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Facebook, Mail, Lock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function SignupPage() {
  return (
    <div className="min-h-screen w-full bg-[#0f0f0f] flex items-center justify-center p-4 lg:p-8 overflow-hidden relative">
      
      {/* Background Ambient Glow (Orange) */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center z-10">
        
        {/* LEFT SIDE: Branding & Value Prop */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden lg:block space-y-8"
        >
          <Link href="/" className="text-3xl font-bold tracking-tighter text-orange-500">
            RICK<span className="text-white">CART</span>
          </Link>
          
          <h1 className="text-5xl font-bold text-white leading-tight">
            Join the <span className="text-orange-500">Revolution</span> in Shopping.
          </h1>

          {/* Replace the long paragraph with punchy bullets */}
          <div className="space-y-4">
             <BenefitItem text="Get exclusive early access to flash sales" />
             <BenefitItem text="Track your orders in real-time" />
             <BenefitItem text="Earn 5% cashback on every purchase" />
          </div>

          {/* Your Illustration (Keep your existing image here) */}
          <motion.img 
            src="/your-illustration.png" // Replace with your actual image path
            alt="Shopping"
            className="w-full max-w-md mt-8 drop-shadow-2xl"
            animate={{ y: [0, -15, 0] }} // Floating animation
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
        </motion.div>


        {/* RIGHT SIDE: The Form Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#1a1a1a]/80 backdrop-blur-xl border border-gray-800 p-8 rounded-2xl shadow-2xl relative"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white">Create an account</h2>
            <p className="text-gray-400 text-sm mt-2">Enter your details below to create your account</p>
          </div>

          {/* Social Login - FIXED COLORS */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <Button variant="outline" className="bg-white text-black hover:bg-gray-200 border-none h-11 font-medium">
              {/* Google SVG Icon */}
              <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
              Google
            </Button>
            <Button className="bg-[#1877F2] hover:bg-[#1864c9] text-white h-11 font-medium">
              <Facebook className="mr-2 h-4 w-4" />
              Facebook
            </Button>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center"><Separator className="bg-gray-800" /></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-[#1a1a1a] px-2 text-gray-500">Or continue with</span></div>
          </div>

          {/* Form Inputs with Stagger Animation */}
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-gray-300">First name</Label>
                <Input className="bg-[#0f0f0f] border-gray-700 text-white focus-visible:ring-orange-500" placeholder="Rick" />
              </div>
              <div className="space-y-2">
                <Label className="text-gray-300">Last name</Label>
                <Input className="bg-[#0f0f0f] border-gray-700 text-white focus-visible:ring-orange-500" placeholder="Sanchez" />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-gray-300">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                <Input className="bg-[#0f0f0f] border-gray-700 text-white pl-10 focus-visible:ring-orange-500" placeholder="m@example.com" type="email" />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-gray-300">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                <Input className="bg-[#0f0f0f] border-gray-700 text-white pl-10 focus-visible:ring-orange-500" placeholder="Create a password" type="password" />
              </div>
            </div>

            <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white h-11 text-md font-bold mt-2">
              Create Account
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link href="/login" className="text-orange-500 hover:underline font-medium">
              Log in
            </Link>
          </div>

        </motion.div>
      </div>
    </div>
  );
}

// Helper for the bullet points
function BenefitItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-6 w-6 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0">
        <CheckCircle2 size={14} className="text-orange-500" />
      </div>
      <span className="text-gray-300 font-medium">{text}</span>
    </div>
  );
}