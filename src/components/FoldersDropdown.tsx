"use client";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const FoldersDropdown = ({
  folders,
}: {
  folders: { id: string; name: string };
}) => {
  const [dropdpown, setDropdown] = useState(false);
  const handleClick = () => {
    setDropdown(!dropdpown);
  };
  const [firstFolderId, firstFolderName] = Object.entries<string>(folders)[0];
  const [val, setVal] = useState(firstFolderName);

  return (
    <>
      <div className="flex ">
        <FontAwesomeIcon
          icon={faBars}
          size="xl"
          onClick={() => {
            handleClick();
          }}
        />
        {dropdpown && (
          <div className="relative">
            <div className=" p-2 absolute top-6  bg-white">
              <ul className="">
                {Object.entries<string>(folders).map(([key, value]) => (
                  <li
                    key={key}
                    className="hover:bg-blue-700 p-2 cursor-pointer"
                    onClick={(e) => {
                      setVal(value);
                      setDropdown(false);
                    }}
                  >
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <p
          className={` text-[#852E2C]  mt-[-1px] ml-2 text-xl font-extrabold `}
        >
          {val}
        </p>
      </div>
    </>
  );
};

export default FoldersDropdown;
