"use client";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import ImageModal from "../../utils/ImageModal";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { curFolder } from "../../types";

const AddnewCategory = ({
  folder,
  folderid,
}: // foldername
{
  folder: boolean;
  folderid: string;
  // foldername:(foldername: curFolder) => Promise<curFolder>
}) => {
  const searchParams = useSearchParams();

  const createQueryString = (key: string, value: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set(key, String(value));
    console.log(params);
    return String(params);
  };
  const search = String(searchParams.get("folderid"));
  const query = search
    ? "/add-new-category" + "?" + createQueryString("folder", String(folder))
    : "/add-new-category" +
      "?" +
      createQueryString("folder", String(folder)) +
      "&" +
      createQueryString("folderid", String(folderid));
  return (
    <>
      <Link href={query}>
        <div className="ml-[20%]">
          <ImageModal
            element={
              <CiCirclePlus className=" mx-auto text-[100px] text-[#852E2C]" />
            }
            optional=" "
            text={`Add New Category To Your Menu`}
            textsize="text-sm sm:text-lg px-6 pr-8 font-bold"
            icon={faCirclePlus}
            styles="h-[240px]  sm:w-[320px] sm:h-[260px] sm:ml-[5%] md:w-[378px] md:h-[308px] lg:w-[435px] lg:h-[355px]  w-full"
          />
        </div>
      </Link>
    </>
  );
};

export default AddnewCategory;
