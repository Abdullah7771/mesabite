"use client";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CiCirclePlus } from "react-icons/ci";
import ImageModal from "../../utils/ImageModal";

const AddnewCategory = ({
  folder,
  folderid,
}: {
  folder: boolean;
  folderid?: string;
}) => {
  const searchParams = useSearchParams();


  const search = String(searchParams.get("folderid"));


  const query = search
    ? `/add-new-category?folder=${folder}&folderid=${folderid}`
    : `/add-new-category?folder=${folder}`;

  return (
    <>
      <Link href={query}>
        <div >
          <ImageModal
            element={
              <CiCirclePlus className=" mx-auto text-[100px] text-[#852E2C]" />
            }
            optional=" "
            text={`Add New Category To Your Menu`}
            textsize="text-sm sm:text-lg px-6 pr-8 font-bold"
            icon={faCirclePlus}
            styles="w-full h-[241px] sm:w-[320px] sm:h-[260px] sm:ml-[5%] md:w-[378px] md:h-[308px] lg:w-[435px] lg:h-[353px]"
          />
        </div>
      </Link>
    </>
  );
};

export default AddnewCategory;
