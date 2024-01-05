import AddnewCategory from "@/components/AddnewCategory";
import Categories from "@/components/Categories";
import CreateCatBtn from "@/components/CreateCatBtn";
import FolderActions from "@/components/FolderActions";
import FolderCat from "@/components/FolderCat";
import SearchComponent from "@/components/SearchComponent";
import Link from "next/link";
import React from "react";
import {
  getAllFolders,
  getCategories,
  getFolderCategories,
} from "../../../services/card-service";
import { CardData, curFolder } from "../../../types";
import ParentClientComponent from "@/components/ParentClientComponent";

interface Props {
  searchParams?: { folderid?: string };
}

const Page = async ({ searchParams }: Props) => {
  var folders = await getAllFolders();
  const [firstFolderId, firstFolderName] = Object.entries<string>(folders)[0];
  const initialFolderId = searchParams?.folderid;
  console.log(searchParams?.folderid);
  const folderid = initialFolderId ? initialFolderId : firstFolderId;
  const foldercategories = (await getFolderCategories(folderid)) as CardData[];
  const categories = (await getCategories()) as CardData[];

  return (
    <>
      <ParentClientComponent
        foldercategories={foldercategories}
        folderid={folderid}
        categories={categories}
        folders={folders}
      />
    </>
  );
};

export default Page;
