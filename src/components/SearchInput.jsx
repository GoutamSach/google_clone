import React from "react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";

function SearchInput() {
  const { query } = useParams();

  const [searchQuery, setSearchQuery] = useState(query || "");
  const navigate = useNavigate();

  const SearchQueryFromUSer = () => {
    if (event.key === "Enter" && searchQuery.length > 0) {
      navigate(`/${searchQuery}/${1}`);
    }
  };

  return (
    <div className="  px-4  gap-3 items-center justify-center flex h-[46px] w-[90%] md:w-[584px] border-[#dfe1e5]  rounded-3xl  hover:bg-white hover:shadow-c hover:border-none focus-within:border-none focus-within:shadow-c border">
      <AiOutlineSearch size={18} color="#9aa0a6" />
      <input
        className=" outline-none grow"
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={SearchQueryFromUSer}
        value={searchQuery}
        autoFocus
      />
      <div className="flex items-center gap-3 ">
        {searchQuery && (
          <IoMdClose
            size={24}
            color="#70757a"
            className=" cursor-pointer"
            onClick={() => setSearchQuery("")}
          />
        )}
        <img className="h-6 w-6 cursor-pointer" src={MicIcon} alt="mic" />
        <img className="h-6 w-6 cursor-pointer" src={ImageIcon} alt="capture" />
      </div>
    </div>
  );
}

export default SearchInput;
