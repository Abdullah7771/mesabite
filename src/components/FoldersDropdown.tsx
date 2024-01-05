"use client";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  getFolderName
} from "../../services/card-service";

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
  const wholeFolder = Object.entries<string>(folders)[0];
  const [firstFolderId, firstFolderName] = Object.entries<string>(folders)[0];
  const [val, setVal] = useState({ id: firstFolderId, name: firstFolderName });
  const createQueryString = (key: string, value: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set(key, String(value));
    console.log(params);
    return String(params);
  };

  const initialFolder = async () => {
    const name = await getFolderName(val.id);
    console.log(name);
    setVal({ id: val.id, name: name });
  };

  useEffect(() => {
    // initialFolder();
    handleFolderChange("folderid", firstFolderId);
    console.log(folders, firstFolderName, Object.keys(folders).length);
  }, [Object.keys(folders).length]);

  useEffect(() => {
    initialFolder();

    //  handleFolderChange("folderid", firstFolderId);
    console.log(folders, firstFolderName, Object.values(folders), val);
  }, [folders[val.id]]);
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
                      setVal({ id: key, name: value });
                      handleFolderChange("folderid", key);
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
          {val.name}
        </p>
      </div>
    </>
  );
};

export default FoldersDropdown;
