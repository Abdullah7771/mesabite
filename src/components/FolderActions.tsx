import {
  faBars,
  faGear,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import FolderBtn from "./FolderBtn";
import { getAllFolders } from "../../services/card-service";
import FoldersDropdown from "./FoldersDropdown";
const FolderActions = async () => {

  const folders = await getAllFolders();
  console.log(folders);

  return (
    <div className="  flex justify-between ">
      <div className="">
        <FoldersDropdown folders={folders} />
      </div>

      <FolderBtn />
    </div>
  );
};

export default FolderActions;
