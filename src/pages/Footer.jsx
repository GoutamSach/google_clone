import React from "react";

function Footer() {
  return (
    <div className=" bg-[#f2f2f2]  text-sm">
      <div className=" text-[#70767a] px-4 py-4 border-b border-[#dadce0]">
        <div className=" cursor-pointer hover:underline leading-none">
          India
        </div>
      </div>
      <div className="text-[#70767a] flex flex-col md:flex-row justify-center items-center py-3 px-4  md:justify-between ">
        <div className="  flex  gap-4">
          <p className="cursor-pointer hover:underline ">About</p>
          <p className="cursor-pointer hover:underline ">Advertising</p>
          <p className="cursor-pointer hover:underline ">Business</p>
          <p className="cursor-pointer hover:underline ">How Search works</p>
        </div>
        <div className=" flex gap-4 py-3 md:py-0">
          <p className="cursor-pointer hover:underline ">Privacy</p>
          <p className="cursor-pointer hover:underline ">Terms</p>
          <p className="cursor-pointer hover:underline ">Settings</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
