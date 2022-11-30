import React from "react";
import Search from "./Search";

import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-hooks";

const searchClient = algoliasearch(
  "1X4LEE49CK",
  "4a91782dbfc31207795416e496a72798"
);

const INDEX_NAME = "search_algolia_docs";
const Main = ({ hideSearchHandler }) => {
  return (
    <>
      <InstantSearch
        searchClient={searchClient}
        indexName={INDEX_NAME}
        suppressExperimentalWarning
      >
        <Search hideSearchHandler={hideSearchHandler} />
      </InstantSearch>
    </>
  );
};

export default Main;
