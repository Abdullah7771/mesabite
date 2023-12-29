
import AddnewCategory from "@/components/AddnewCategory";
import Categories from "@/components/Categories";
import CreateCatBtn from "@/components/CreateCatBtn";
import FolderActions from "@/components/FolderActions";
import FolderCat from "@/components/FolderCat";
import SearchComponent from "@/components/SearchComponent";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      <SearchComponent />
      <CreateCatBtn />
      <div className="mx-auto  sm:w-[600px]  w-[350px] lg:w-[800px] mt-5 border-4 rounded-xl border-[#852E2C] p-5">
        <FolderActions />
        <FolderCat />
        <AddnewCategory folder={true} />
      </div>
      <Categories />

      <AddnewCategory folder={false} />
    </>
  );
};

export default Page;
