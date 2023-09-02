import React, { useContext, useState } from "react";
import logo from "../assets/google-logo.png";
import SearchInput from "../components/SearchInput";
import Header from "../components/Header";
import Footer from "./Footer";

function Home() {
  const [buttonClickHandler, setButtonClickHnadler] = useState(false);

  const SearchQueryFromUSerButton = () => {
    setButtonClickHnadler(true);
  };
  return (
    <>
      <div className=" h-[100vh] flex flex-col ">
        <Header />
        <div className="  grow  flex flex-col justify-center items-center ">
          <div className=" flex flex-col justify-center items-center  mb-8">
            <img className=" w-44 md:w-[270px]" src={logo} alt=" logo" />
          </div>
          <SearchInput buttonClickHandler={buttonClickHandler} />
          <div className=" flex text-[#3c4043]  font-medium  mt-8 gap-2">
            <button
              onClick={SearchQueryFromUSerButton}
              className=" px-4 h-9 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] "
            >
              Google Search
            </button>
            <button
              onClick={SearchQueryFromUSerButton}
              className=" px-4 h-9 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] "
            >
              I'm feeling Lucky
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
