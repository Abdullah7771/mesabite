
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import ImageModal from "../../utils/ImageModal";
import { useRouter } from "next/navigation";
import Link from "next/link";

const AddnewCategory = ({
  
  folder,
}: {
  
  folder: boolean;
}) => {
  return (
    <Link href={{pathname:'/add-new-category',}}>
      <div className="">
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
  );
};

export default AddnewCategory;
