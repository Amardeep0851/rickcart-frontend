import { cache } from 'react';

export const getSearch = cache(async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`, {
      // Next.js caching options (optional)
      next: { revalidate: 300 } 
    });

    if (!res.ok) {
      throw new Error(`Backend Error: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data;

  } catch (error) {
    // 2. Log the error so YOU know about it (on the server console)
    console.error("CRITICAL: Failed to fetch products for search:", error);

    // 3. FAIL GRACEFULLY
    // Instead of crashing the app, return an empty array.
    // The search bar will just show "No results found" instead of exploding.
    return []; 
  }
});

