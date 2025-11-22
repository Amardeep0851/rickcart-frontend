import React, { Suspense } from "react";

import Loading from "@/app/loading";
import { getSearch } from "@/actions/getSearch";
import SearchComponent from "./search-component";


async function Search() { 
  const data = await getSearch();
  return (
    <Suspense fallback={<Loading />}>
      <SearchComponent data={data} />
    </Suspense>
  );
}

export default Search;
