
import { Category, ProductImageType, ProductOptionType, ProductsType } from "@/lib/types";
import Fuse from 'fuse.js';
import { useState, useMemo } from 'react';

// Configuration for "Smart" searching
const fuseOptions = {
  includeScore: true,
  // 0.0 = perfect match, 1.0 = match anything. 0.3 is the sweet spot.
  threshold: 0.3, 
  keys: [
    { name: 'name', weight: 1 },      // Name is most important
    { name: 'category.name', weight: 0.7 }, // Category is second
    // { name: 'sku', weight: 0.5 }       // SKU is third
  ]
};

type SmartSearch =  (ProductsType & {
    images:ProductImageType[] 
    category:Category, 
    options:ProductOptionType
  })[]

export function useSmartSearch(data:SmartSearch) {
  const [query, setQuery] = useState("");
  
  // Memoize the Fuse instance so we don't rebuild the index on every render
  const fuse = useMemo(() => new Fuse(data, fuseOptions), [data]);

  const results = useMemo(() => {
    if (!query) return data; // Return all products if search is empty
    return fuse.search(query).map(result => result.item);
  }, [query, fuse, data]);

  return { query, setQuery, results };
}