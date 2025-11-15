import { ProductImageType } from './types';
import React from "react";

export type Category = {
  id:string;
  name:string;
  status:boolean;
  slug:string;
  description?:string;
  isFeatured?:boolean;
  metaTitle?:string;
  metaDescription?:string;
  imageUrl?:string;
  sortOrder:number;
  parentId?:string;
  storeId:string
  billboardId?:string;
  icon:string;
}
export type ProductImageType = {
  id:string;
  productId:string;
  url:string;
  altText?:string;
  sortOrder:number;
}

export type ProductOptionValueType = {
  id:string;
  optionId:string;
  option:string;
  value:string;
}

export type ProductOptionType = {
  id:string;
  name:string;
  storeId:string
}

export type ProductsType = {
  id: string;
  userId: string;
  name: string;
  slug: string;
  description?: string;
  price: number;
  comparePrice?: number;
  costPrice?: number;
  barcode?: string;
  trackQuantity: boolean;
  quantity: number;
  lowStockAlert?: number;
  isActive: boolean;
  isFeatured: boolean;
  metaTitle?: string;
  metaDescription?: string;
  tags: string[];
  weight: number;
  dimensions: Record<string, unknown>; 
  storeId: string;
  categoryId: string;
}

export type CategoryBIllboardProducts = Category & {
  billboard?:BillboardType & {products:ProductsType[]}
}

export type ProductWithImages = ProductsType & {
  images:ProductImageType
}
export type BillboardType = {
  id:string;
  title:string;
  imageUrl:string;
  buttonText:string;
  status:boolean;
  link :string;
  altText:string;
  priority:number;
  storeId:string; 
  categories:Category[];
}

export type MenuType = {
  href:string;
  isActive:boolean;
  name:string;
  Icon:React.ComponentType<{ className?: string }>;
}


export type NavButtonProps = {
  href:string;
  Icon?:React.ComponentType<{ className?: string }>;
  name:string;
  className?:string;
}