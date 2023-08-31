import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/google-logo.png";
import SearchInput from "./SearchInput";
import ProfileIcon from "./ProfileIcon";
import { menu } from "../pages/constants";
import { Context } from "../utils/contextApi";
import { Link } from "react-router-dom";

function SearchResHeader() {
  const [selected, setSelected] = useState("All");

  const { setImage } = useContext(Context);

  useEffect(() => {
    return setImage(false);
  }, []);

  const clickHandler = (menuName) => {
    setSelected(menuName.name);
    const IsImageSelected = menuName.name === "Images";
    setImage(IsImageSelected ? true : false);
  };
  return (
    <div className=" px-4  py-2 border-b border-[#ebebeb] sticky md:pl-6 lg:pl-16 xl:pl-20  md:pt-7 md:pr-5 ">
      <div className=" flex  items-center grow ">
        <Link to="/">
          <img
            src={logo}
            alt="GoogleLogo"
            className=" hidden md:block w-24 mr-10"
          />
        </Link>

        <SearchInput />
        <div className=" hidden md:flex">
          <ProfileIcon />
        </div>
      </div>
      <div className="flex mt-3  gap-5 ">
        {menu.map((menu) => (
          <span
            key={menu.name}
            className={` flex  relative  items-center pt-3 pb-1 text-[#5f6368] ${
              selected === menu.name ? "text-[#1a73e8] " : ""
            } `}
            onClick={() => clickHandler(menu)}
          >
            <span className=" hidden md:block mr-2 cursor-pointer">
              {menu.icon}
            </span>
            <span className=" text-sm cursor-pointer">{menu.name}</span>
            {selected === menu.name && (
              <span className=" h-[3px] w-[calc(100%)] bg-[#1a73e8] -bottom-2  absolute"></span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SearchResHeader;
