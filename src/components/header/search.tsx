"use client";
import React, { useState } from "react";
import { Loader, SearchIcon } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "../ui/command";
import { useGetSearch } from "@/actions/useGetSearch";

function Search() {
  const [search, setSearch] = useState(false);
  const { data, loading, error } = useGetSearch();
  return (
    <div className="relative order-3">
      <SearchIcon
        className="size-5 cursor-pointer text-zinc-700 dark:text-zinc-200"
        onClick={() => setSearch((prev) => !prev)}
      />
      <CommandDialog open={search} onOpenChange={setSearch} className="lg:w-1/2 w-full">
        <CommandInput placeholder="Type a product name..." />
        <CommandList >
          <CommandEmpty>No results found.</CommandEmpty>

          {loading && (
            <CommandGroup heading="Loading">
              <CommandItem>
                <Loader className="size-4" />
              </CommandItem>
            </CommandGroup>
          )}
          {!!data && (
            <CommandGroup heading="Products">
              {data.map((item) => (
                <CommandItem key={item.id}>{item.name}</CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </div>
  );
}

export default Search;
