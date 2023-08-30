import React, { useContext, useState } from "react";
import Header from "../components/Header";
import SearchResHeader from "../components/SearchResHeader";
import { useParams } from "react-router-dom";
import { Context } from "../utils/contextApi";
import { dataFromApi } from "../utils/api";

function SearchResults() {
  const { query, startindex } = useParams();
  const [result, setResult] = useState();
  const { setImage } = useContext(Context);

  const fetchSearchRes = () => {
    let string = { q: query, index: startindex };
    if (imageSearch) {
      string.searchType = "image";
    }
    dataFromApi(string).then((res) => {
      console.log(res), setResult(res);
    });
  };
  return (
    <div>
      <SearchResHeader />
    </div>
  );
}

export default SearchResults;
