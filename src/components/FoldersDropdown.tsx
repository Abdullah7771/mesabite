"use client";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getFolderCategories } from "../../services/card-service";
import { revalidatePath } from "next/cache";

const FoldersDropdown = ({
  folders,
}: {
  folders: { id: string; name: string };
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [dropdpown, setDropdown] = useState(false);
  const handleClick = () => {
    setDropdown(!dropdpown);
  };

  const handleFolderChange = async (key: string, value: string) => {
    try {
      
      console.log(key);

      router.push("/home" + "?" + createQueryString(key, value));
      setTimeout(() => {
        router.refresh();
      }, 1000);
      // await getFolderCategories(key);
      setDropdown(false);
    } catch (error) {
      console.error("Error updating folder and fetching categories:", error);
      // Handle error appropriately
    }
  };

  // useEffect(()=>{
  //   router.refresh()
  // },[])
  const [firstFolderId, firstFolderName] = Object.entries<string>(folders)[0];
  const [val, setVal] = useState(firstFolderName);
  const createQueryString = (key: string, value: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set(key, String(value));
    console.log(params);
    return String(params);
  };

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
                    onClick={() => {
                      setVal(value)
                      handleFolderChange("folderid", key)}}
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
