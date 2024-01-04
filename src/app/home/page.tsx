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
  getFolderCategories,
} from "../../../services/card-service";
import { CardData, curFolder } from "../../../types";

// const onSearch = async (isSearching=false) => {
//   "use server";
//   let isTrue=true;

//   // if(isTrue){
//   //   isTrue=false
//   // }
//   // else{
//   //   isTrue=true
//   // }
//   console.log('mads')
// };
interface Props {
  searchParams?: { folderid?: string };
}

const Page = async ({ searchParams }: Props) => {
  var folders = await getAllFolders();
  const [firstFolderId, firstFolderName] = Object.entries<string>(folders)[0];

  const folderid = searchParams?.folderid
    ? searchParams?.folderid
    : firstFolderId;
  //   const cat= async function getCurCategories(id:string) {
  //   'use server'
  //   if(!id){
  // const categories = await getFolderCategories(folderid) as CardData[];

  //     return categories as CardData[]
  //   }
  //   else{

  //     const categories = await getFolderCategories(id) as CardData[];
  //     return categories as CardData[]
  //   }

  //   // ...

  // const id='743Ub4LqggljSXaAK3hG'
  // }

  return (
    <>
      <SearchComponent id={folderid} />
      <CreateCatBtn />
      <div className="mx-auto  sm:w-[600px]  w-[350px] lg:w-[800px] mt-5 border-4 rounded-xl border-[#852E2C] p-5">
        <FolderActions folders={folders} />
        <FolderCat id={folderid} />
      </div>
      <Categories />

      <AddnewCategory folder={false} folderid="" />
    </>
  );
};

export default Page;
