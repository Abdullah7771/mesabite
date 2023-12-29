"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { CiCirclePlus } from "react-icons/ci";
const CreateCatBtn = () => {
  const router = useRouter();
  return (
    <>
      <div
        className="flex gap-2 cursor-pointer mt-4 w-fit mx-auto"
        onClick={() => router.push("/add-new-folder")}
      >
        <CiCirclePlus className="text-4xl text-[#852E2C]" />
        <p
          className={`text-lg sm:text-md    md:text-xl  mt-1 text-[#852E2C] font-bold`}
        >
          Create Category Folder
        </p>
      </div>
    </>
  );
};

export default CreateCatBtn;
