import React from "react";

function SearchedItems({ data }) {
  function createMarkup(html) {
    return { __html: html };
  }
  return (
    <div className=" flex flex-col py-3 max-w-3xl">
      <div className=" cursor-pointer " onClick={() => window.open(data.link)}>
        <div className=" text-xs pt-2 text-[#202124] truncate">
          {data.formattedUrl}
        </div>
        <div className="  group text-sm  md:text-lg text-[#1a0dab] truncate">
          {data.title}
        </div>
        <div
          className=" text-sm pt-1  text-[#4d5156]"
          dangerouslySetInnerHTML={createMarkup(data.htmlSnippet)}
        ></div>
      </div>
    </div>
  );
}

export default SearchedItems;
