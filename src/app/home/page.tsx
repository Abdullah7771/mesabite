
import AddnewCategory from "@/components/AddnewCategory";
import Categories from "@/components/Categories";
import CreateCatBtn from "@/components/CreateCatBtn";
import FolderActions from "@/components/FolderActions";
import FolderCat from "@/components/FolderCat";
import SearchComponent from "@/components/SearchComponent";
import Link from "next/link";
import React from "react";
import { getAllFolders, getFolderCategories } from "../../../services/card-service";
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


const Page = async () => {
  // const cat= async function getCurCategories(id:string) {
  //   'use server'
  //   if(!id){

  //     const categories = await getFolderCategories('743Ub4LqggljSXaAK3hG') as CardData[];
  //     return categories as CardData[]
  //   }
  //   else{

  //     const categories = await getFolderCategories(id) as CardData[];
  //     return categories as CardData[]
  //   }
     
  //   // ...
  // }
     var folders = await getAllFolders()
  //   console.log(folders)
 
  
  return (
    <>
      <SearchComponent  />
      <CreateCatBtn />
      <div className="mx-auto  sm:w-[600px]  w-[350px] lg:w-[800px] mt-5 border-4 rounded-xl border-[#852E2C] p-5">
        <FolderActions folders={folders}  />
        <FolderCat />
        <AddnewCategory folder={true}  />
      </div>
      <Categories />

      <AddnewCategory folder={false}   />
    </>
  );
};

export default Page;
