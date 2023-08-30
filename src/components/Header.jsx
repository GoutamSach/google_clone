import React from "react";
import ProfileIcon from "./ProfileIcon";

function Header() {
  return (
    <header className=" h-16  flex  justify-end items-center px-5">
      <div className=" flex gap-4 ">
        <span className=" font-medium text-black/80 text-[13px]  hover:underline cursor-pointer ">
          Gmail
        </span>

        <span className=" font-medium text-black/80 text-[13px]  hover:underline cursor-pointer ">
          Images
        </span>
      </div>
      <div className="">
        <ProfileIcon />
      </div>
    </header>
  );
}

export default Header;
