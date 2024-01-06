"use client";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { getFolderName } from "../../services/card-service";
import { CardContext } from "../../context/CardContext";

const FoldersDropdown = ({
  currentFolder,
  setCurrentFolder,
}: {
  currentFolder: { id: string; name: string };
  setCurrentFolder: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { allfolders, folderid } = useContext(CardContext);
  const folders = allfolders;
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

  const [firstFolderId, firstFolderName] = Object.entries<string>(folders)[0];
  // const [val, setVal] = useState({ id: firstFolderId, name: firstFolderName });
  const createQueryString = (key: string, value: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set(key, String(value));
    console.log(params);
    return String(params);
  };

 

  useEffect(() => {
    //  initialFolder();
    handleFolderChange("folderid", firstFolderId);
    // setVal({id:firstFolderId,name:firstFolderName})
    console.log(
      folders,
      folderid,
      firstFolderName,
      Object.keys(folders).length
    );
  }, [Object.keys(allfolders).length]);

  // useEffect(() => {
  //   initialFolder();

  //   //  handleFolderChange("folderid", firstFolderId);
  //   console.log(folders, firstFolderName, Object.values(folders), val);
  // }, [folders[val.id]]);
  return (
    <>
      <div className="flex ">
        <FontAwesomeIcon
          icon={faBars}
          size="xl"
          color="#852E2C"
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
                      setCurrentFolder({ id: key, name: value });
                      handleFolderChange("folderid", key);
                      e.preventDefault();
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
          {currentFolder.name}
        </p>
      </div>
    </>
  );
};

export default FoldersDropdown;
