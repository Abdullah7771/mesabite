"use client";
import {
  faBars,
  faGear,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { deleteFolder, getAllFolders } from "../../services/card-service";
import FoldersDropdown from "./FoldersDropdown";
import { curFolder } from "../../types";
import { useRouter, useSearchParams } from "next/navigation";
import EditFolderModal from "./EditFolderModal";

interface Folderprops {
  folders: curFolder;
}
const FolderActions = ({ folders }: Folderprops) => {
  // const folders = await getAllFolders();
  // console.log(folders);
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const [firstFolderId, firstFolderName] = Object.entries<any>(folders)[0];
  const searchParams = useSearchParams();
  const search = searchParams.get("folderid");
  const folderid = search ? String(search) : firstFolderId;

  const delFolder = async (folderid: string) => {
    const del = await deleteFolder(folderid);
    setTimeout(() => {
      router.refresh();
    }, 1000);
  };

  return (
    <>
      <div className="  flex justify-between ">
        <div className="">
          <FoldersDropdown folders={folders} />
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
            onClick={() => delFolder(folderid)}
          />
        </div>
      </div>
      {open && <EditFolderModal setOpen={setOpen} folderid={folderid} />}
    </>
  );
};

export default FolderActions;
