"use client";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";

const DropDown = () => {
  const [dropdpown, setDropdpown] = useState(false);
  const handleClick = () => {
    setDropdpown(!dropdpown);
  };
  return (
    <div className="p-3  border-2 w-fit">
      <div
        className="flex items-center gap-2 cursor-pointer w-fit"
        onClick={handleClick}
      >
        <Image src="/Ellipse 1.png" alt="logo" width={30} height={30} />{" "}
        <FontAwesomeIcon icon={faAngleDown} className="h-6" size="sm" />
      </div>
      <div>
        {dropdpown && (
          <div className=" p-4">
            <ul className="">
              <li className="hover:bg-gray-700 ">Settings</li>
              <li className="hover:bg-gray-700">Profile</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;
