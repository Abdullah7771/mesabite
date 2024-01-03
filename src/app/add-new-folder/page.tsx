"use client";
import Buttons from "../../../utils/Buttons";
import Input from "../../../utils/Input";

import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faArrowUpFromBracket,
  faRectangleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useContext, useState, useTransition } from "react";

// import { CardContext } from "@/context/CardContext";

import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { addFolder } from "../../../services/card-service";
import { cardData } from "../../../mock";
import ImageModal from "../../../utils/ImageModal";

const inter = Montserrat({ subsets: ["latin"] });
import { useRouter } from "next/navigation";

const myFont = localFont({
  src: "../../../public/font/Recoleta-RegularDEMO.otf",
});

const NewFolder = () => {
  const [val, setVal] = useState("");
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  if (isPending) {
    return (
      <div>Loading...</div>
    )
  }
  // const { setIsOpen, folders, setFolders } = useContext(CardContext);
  const addCategory = async (cat: string) => {
    const folid = await addFolder(cat);
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
             
               onClick={()=>router.push('/home')}
                //   setIsOpen({ page: "home", cardData: cardData });
           
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
        <ImageModal
          icon={faArrowUpFromBracket}
          textsize="text-md sm:text-lg font-bold px-2 mt-8"
          sizes="5x"
          styles="  mt-2 pt-5 bg-no-repeat bg-contain w-full md:w-[375px] md:h-[307px]  lg:w-[435px] lg:h-[355px] mx-auto sm:ml-[5%] h-[253px] sm:h-[277px] flex  "
        />
      </div>

      <div className="bg-[#FFF6DF]   ">
        <hr className="mt-4 " />
        <div className="">
          <div className="flex justify-center  mb-2 ">
              <button
                onClick={() =>router.push('/home')}
              
                className="bg-[#852E2C] text-white font-bold w-[150px] h-[50px] mt-2 mr-5   rounded-full"
              >
                Cancel
              </button>

              <button
                onClick={(e) => {
                  //  console.log(val)
                   addCategory(val);
                  // setIsOpen({ page: "home", cardData: cardData });
                  e.preventDefault();
                  router.push('/home');
                  setTimeout(()=>{

                    router.refresh()
                  },1000)
                
                
                  
                  // setCategory(val);
                  // handleSubmit(); // Call the handleSubmit function
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