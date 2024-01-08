"use client";
import Input from "../../../utils/Input";

import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faArrowUpFromBracket,
  faRectangleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

// import { CardContext } from "@/context/CardContext";

import { addFolder } from "../../../services/card-service";
import ImageModal from "../../../utils/ImageModal";

import { useRouter } from "next/navigation";
import { inter, myFont } from "../../../fonts";

const NewFolder = () => {
  const [val, setVal] = useState("");
  const router = useRouter();

  const addCategory = async (cat: string) => {
    const folid = await addFolder(cat);
    setTimeout(() => {
      router.push("/home");
    }, 500);
  };

  return (
    <div className="flex flex-col justify-between  text-center bg-[#FFF6DF] w-fit mx-auto h-screen  ">
      <div className="mx-auto p-5 sm:w-[380px] md:w-[450px] lg:w-[500px] w-[350px]  text-[#852E2C]">
        <div className="flex justify-between">
          <p className={`font-extrabold text-xl ${myFont.className} `}>
            Create New Category Folder
          </p>

          <FontAwesomeIcon
            icon={faRectangleXmark}
            className=" cursor-pointer"
            size="xl"
            onClick={() => router.push("/home")}
          />
        </div>
        <p
          className={`mt-8 mx-auto text-center font-normal h-3 text-[#BF5627] ${inter.className}`}
        >
          Here you can create Category Folder that
          <span className="">
            {" "}
            <b>includes other folders under it </b>{" "}
          </span>
        </p>
        <br /> <br /> <br />
        <Input
          val={setVal}
          name="Name"
          styles="bg-[url('/inputshape.png')] lg:w-[415px] lg:h-[70px] lg:ml-[8%] md:w-[368px] md:h-[52px] lg:pb-7  sm:w-[320px] sm:ml-[6%]   w-full  bg-contain bg-no-repeat p-2 "
        />
        <br /> <br />
        <div>
          <p className={`mt-5 ml-2 text-base font-semibold ${inter.className}`}>
            Image (Optional)
          </p>
          <div
            className={`h-[253px] mx-auto  sm:w-[320px] sm:h-[260px]  md:w-[378px] md:h-[308px] lg:w-[361px] lg:h-[295px]  w-full flex justify-center items-center bg-no-repeat bg-cover`}
            style={{
              backgroundImage: `url("/imgshape2.png")`,
            }}
          >
            <div className="cursor-pointer text-center">
              <FontAwesomeIcon
                icon={faArrowUpFromBracket}
                size={"4x"}
                color="#852E2C"
              />

              <p
                className={
                  inter.className +
                  ` font-semiboldtext-lg mt-8 pr-2 text-[#852E2C]`
                }
              >
                {"Click here to upload an image"}
              </p>

              <input
                type="file"
                id="img"
                name="img"
                accept="image/*"
                className="ml-[15%] mt-3"
                hidden={true}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FFF6DF]   ">
        <hr className="mt-4 " />
        <div className="">
          <div className="flex justify-center  mb-2 ">
            <button
              onClick={() => router.push("/home")}
              className="bg-[#852E2C] text-white font-bold w-[150px] h-[50px] mt-2 mr-5   rounded-full"
            >
              Cancel
            </button>

            <button
              onClick={() => {
                addCategory(val);
              }}
              className="bg-[#FFCD00] text-[#852E2C] font-bold w-[150px] h-[50px] mt-2 rounded-full"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewFolder;
