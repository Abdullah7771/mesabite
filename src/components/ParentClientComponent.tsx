"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CardContext } from "../../context/CardContext";
import { CardData } from "../../types";
import AddnewCategory from "./AddnewCategory";
import Categories from "./Categories";
import CreateCatBtn from "./CreateCatBtn";
import FolderActions from "./FolderActions";
import FolderCat from "./FolderCat";
import SearchComponent from "./SearchComponent";
interface ParentCLientProps {
  foldercategories: CardData[];
  categories: CardData[];
  folders: any[] | any;
  folderid: string;
}
const ParentClientComponent = ({
  foldercategories,
  categories,
  folders,
  folderid,
}: ParentCLientProps) => {
  const searchParams = useSearchParams();
  const id = searchParams.get("folderid");
  const [cat, setCat] = useState<CardData[]>(categories);
  const [foldercat, setFolderCat] = useState<CardData[]>(foldercategories);
  const [search, setSearch] = useState("");
  const [allfolders, setAllFolders] = useState<any>(folders);
  let timeout: any = null;
  useEffect(() => {
    setFolderCat(foldercategories);
  }, [id]);
  useEffect(() => {
    setFolderCat(foldercategories);
  }, []);

 
  return (
    <>
      <CardContext.Provider
        value={{
          cat,
          setCat,
          foldercat,
          setFolderCat,
          folderid,
          allfolders,
          setAllFolders,
        }}
      >
        <SearchComponent />
        <CreateCatBtn />
        <div className="mx-auto  sm:w-[600px]  w-[350px] lg:w-[800px] mt-5 border-4 rounded-xl border-[#852E2C] p-5">
          <FolderActions />
          <FolderCat />
          <AddnewCategory folder={true} folderid={folderid} />
        </div>
        <Categories />
        <AddnewCategory folder={false} />
      </CardContext.Provider>
    </>
  );
};

export default ParentClientComponent;
