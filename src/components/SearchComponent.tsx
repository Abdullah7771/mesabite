"use client";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";

import "@fortawesome/fontawesome-svg-core/styles.css";
import localFont from "next/font/local";
import {
  filterCategories,
  filterFolderCategories,
} from "../../services/card-service";

const myFont = localFont({ src: "../../public/font/Recoleta-RegularDEMO.otf" });

const SearchComponent = ({ id }: { id: string }) => {
  let timeout: any = null;
  const [icon, setIcon] = useState(true);
  const [val, setVal] = useState("");

  const handleChange = (e: any) => {
    setIcon(false);

    if (e.target.value) {
      setVal(e.target.value);
    } else {
    }
  };

  const getFilterCat = (e: any) => {
    clearTimeout(timeout);

    // Make a new timeout set to go off in 1000ms (1 second)
    timeout = setTimeout(function () {
      console.log("Input Value:", e.target.value);
    }, 1500);
    console.log("Search form submitted");
    const filterFod = filterFolderCategories(id, e.target.value);
    const filterCat = filterCategories(e.target.value);
  };

  return (
    <>
      <div className="text-center mx-auto mt-6">
        <p
          className={` text-[#852E2C] ${myFont.className} text-start ml-[5%] font-extrabold sm:text-center sm:ml-0 sm:text-[45px] text-[28px] `}
        >
          YOUR MENU
        </p>

        <div className=" mt-6 flex justify-center items-center w-full relative">
          {icon && (
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute mr-40"
              size="lg"
              color="#852E2C"
            />
          )}

          <div className="bg-[url('/inputshape.png')] sm:w-[357px]  w-[330px] bg-contain bg-no-repeat p-2  ">
            <input
              type="text"
              name=""
              id=""
              onKeyUp={getFilterCat}
              onChange={handleChange}
              className=" w-full  text-center outline-none border-none   placeholder:text-[#852E2C] "
              placeholder="SEARCH MENU"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchComponent;
