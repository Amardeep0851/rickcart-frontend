"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  Category,
  ProductImageType,
  ProductOptionType,
  ProductsType,
} from "@/lib/types";

import { SearchIcon } from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useSmartSearch } from "@/actions/lib/useSmartSearch";
import { useRouter } from "next/navigation";

type SearchComponentProps = {
  data: (ProductsType & {
    images: ProductImageType[];
    category: Category;
    options: ProductOptionType;
  })[];
};

function SearchComponent({ data }: SearchComponentProps) {
  const [search, setSearch] = useState(false);
  const { query, setQuery, results } = useSmartSearch(data);
  const route = useRouter();

  const handleOnClick = (slug: string, categoryId: string) => {
    route.push(`/${categoryId}/${slug}`);
    setSearch(false);
  };
  return (
    <div className="relative order-3">
      <SearchIcon
        className="size-5 cursor-pointer text-zinc-700 dark:text-zinc-200"
        onClick={() => setSearch((prev) => !prev)}
      />
      <CommandDialog
        open={search}
        onOpenChange={setSearch}
        className="md:min-w-[700px] w-full "
        commandProps={{ shouldFilter: false }}
      >
        <CommandInput
          placeholder="Type a product name or category..."
          onValueChange={setQuery}
        />
        <CommandList>
          {results.length === 0 && (
            <CommandEmpty>No results found.</CommandEmpty>
          )}
          {!!results && (
            <CommandGroup heading="Products">
              {results.map((item: any) => (
                <CommandItem
                  key={item.id}
                  className="flex flex-col hover:bg-zinc-700 focus:bg-zinc-700 active:bg-zinc-700"
                  onSelect={() => handleOnClick(item.slug, item.category.name)}
                >
                  <div className="flex items-start cursor-pointer gap-x-3 ">
                    <div className="relative h-20 min-w-16 border-2 bg-white rounded-md overflow-hidden ">
                      <Image
                        src={item.images[0].url}
                        fill
                        alt={item.images[0].altText ?? item.name}
                        className=""
                        objectFit="contain "
                      />
                    </div>
                    <div className="text-justify">
                      {item.name}
                      <div className="dark:text-orange-600 text-orange-700 pt-1">
                        {item.category.name}
                      </div>
                    </div>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </div>
  );
}

export default SearchComponent;
