"use client";
import {
  faBars,
  faGear,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { deleteFolder, getAllFolders } from "../../services/card-service";
import FoldersDropdown from "./FoldersDropdown";
import { curFolder } from "../../types";
import { useRouter, useSearchParams } from "next/navigation";
import EditFolderModal from "./EditFolderModal";
import { CardContext } from "../../context/CardContext";

const FolderActions = () => {
  const { allfolders,setAllFolders,folderid } = useContext(CardContext);
  const folders = allfolders;
  // const folders = await getAllFolders();
  // console.log(folders);
  const router = useRouter();
  const [open, setOpen] = useState(false);
  

  const [firstFolderId, firstFolderName] = Object.entries<any>(allfolders)[0];
  const [val, setVal] = useState({ id: firstFolderId, name: firstFolderName });
  const searchParams = useSearchParams();
  const search = searchParams.get("folderid");
  // const folderid = search ? String(search) : firstFolderId;

  const delFolder = async () => {
     const del = await deleteFolder(folderid);
    console.log(allfolders)

    const filteredFolders = Object.fromEntries(
      Object.entries(allfolders).filter(([key]) => key !== folderid)
    );
    setAllFolders(filteredFolders)
    setVal({ id: firstFolderId, name: firstFolderName })
    console.log(filteredFolders,folderid)
  };

  return (
    <>
      <div className="  flex justify-between ">
        <div className="">
          <FoldersDropdown currentFolder={val} setCurrentFolder={setVal} />
        </div>

        <div className=" flex  gap-2    px-2 cursor-pointer">
          <FontAwesomeIcon
            icon={faGear}
            className="md:h-6 h-3 bg-[#852E2C]  text-white rounded-full p-2"
          />
          <FontAwesomeIcon
            icon={faPen}
            className="md:h-6 h-3 bg-[#852E2C] text-white rounded-full p-2"
            onClick={() => {
              setOpen(!open);
              // console.log(folderid);
            }}
          />
          <FontAwesomeIcon
            icon={faTrash}
            className="md:h-6 h-3 bg-[#852E2C] text-white rounded-full p-2"
            onClick={() => delFolder()}
          />
        </div>
      </div>
      {open && <EditFolderModal setOpen={setOpen} folderid={folderid} setCurrentFolder={setVal} />}
    </>
  );
};

export default FolderActions;
