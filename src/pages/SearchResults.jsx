import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import SearchResHeader from "../components/SearchResHeader";
import { useParams } from "react-router-dom";
import { Context } from "../utils/contextApi";
import { dataFromApi } from "../utils/api";
import Footer from "./Footer";
import SearchedItems from "../components/SearchedItems";
import Pagination from "./pagination";
import SearchedImagesItems from "../components/SearchedImagesItems";

function SearchResults() {
  const { query, startindex } = useParams();
  const [result, setResult] = useState();
  const { image } = useContext(Context);

  useEffect(() => {
    fetchSearchRes();
    window.scrollTo(0, 0);
  }, [query, startindex, image]);

  const fetchSearchRes = () => {
    let string = { q: query, start: startindex };
    if (image) {
      string.searchType = "image";
    }

    dataFromApi(string).then((res) => {
      console.log(res);
      setResult(res);
    });
  };
  if (!result) return;
  const { items, queries, searchInformation } = result;

  // query, startindex, setImage;
  return (
    <div>
      <SearchResHeader />
      <main className=" p-3 md:pr-5 md:pl-6 lg:pl-16 xl:pl-20 px-4 ">
        <div className=" text-sm flex  text-[#70757a] mb-3">{`About ${searchInformation.formattedTotalResults} results in (${searchInformation.formattedSearchTime} seconds)`}</div>
        {!image ? (
          items.map((item, index) => <SearchedItems key={index} data={item} />)
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">
            {items.map((item, index) => (
              <SearchedImagesItems key={index} data={item} />
            ))}
          </div>
        )}
      </main>
      <Pagination queries={queries} />
      <Footer />
    </div>
  );
}

export default SearchResults;
