import React from "react";
import { TbGridDots } from "react-icons/tb";

import Profile from "../assets/next.png";
import ProfileRing from "../assets/profile-ring.svg";

function ProfileIcon() {
  return (
    <div className="flex items-center justify-center gap-2 pl-2 ">
      <div className=" h-10 w-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-black/[0.1]  transition duration-200 ">
        <TbGridDots size={20} color="#5f6368" />
      </div>
      <div className=" active:scale-95">
        <div className=" -z-10 relative h-10 w-10 flex justify-center  items-center">
          <img src={ProfileRing} alt="" />
          <div className=" z-10  absolute h-7 w-6 flex justify-center  items-center">
            <img src={Profile} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileIcon;
