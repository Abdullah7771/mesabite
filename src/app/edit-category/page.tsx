"use client";

// import { CardContext } from "@/context/CardContext";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faArrowUpFromBracket,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
const inter = Montserrat({ subsets: ["latin"], weight: "600" });

import { CardData } from "../../../types";

import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from "firebase/storage";
import Buttons from "../../../utils/Buttons";
import { getSpecificCategory } from "../../../services/card-service";
import { useSearchParams } from "next/navigation";
const myFont = localFont({
  src: "../../../public/font/Recoleta-RegularDEMO.otf",
});

const EditCategory = () => {
  const searchParams = useSearchParams();

  const id = String(searchParams.get("id"));
  const folderid =String(searchParams.get("folderid"))

  console.log(id, folderid);

  useEffect(() => {
    getdata(id, folderid);
  }, []);
  // Get a reference to the storage service, which is used to create references in your storage bucket
  const storage = getStorage();

  // Create a storage reference from our storage service
  const [name, setName] = useState<any>();
  const [val, setVal] = useState();
  const [desc, setDesc] = useState();
  const [lastImg, setLastImg] = useState<File | null | any>("");

  const [img, setImg] = useState<File | null | any>("");
  const getdata = async (id: string, folderid: string) => {
    const data: CardData[] = (await getSpecificCategory(
      id,
      folderid
    )) as CardData[];
    console.log(data);
    setVal(data[0].title);
    setDesc(data[0].description);
    setImg(data[0].image);
    setLastImg(data[0].image);
    setName(data[0].imgName);
    // if (data) setVal(data.title);
    // setDesc(data.description);
    // setImg(data.image);
    // setName(data.imgName);
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageUrl = e.target.files[0];
      // const storageRef = ref(storage, `images/${imageUrl?.name}`);
      console.log(imageUrl);
      setName(imageUrl.name);
      setImg(imageUrl);

      // try {
      //   if (imageUrl) {
      //     const storageRef =  ref(storage, `images/${img?.name}`);
      //     const res = await uploadBytes(storageRef, imageUrl);
      //     const downloadUrl = await getDownloadURL(storageRef);
      //     console.log(downloadUrl);
      //   }
      // } catch (error) {
      //   console.log(error);
      // }
    }
  };

  const imgRef = useRef<any>();

  const handleSubmit = async () => {
    console.log(img, lastImg);
    if (img !== lastImg) {
      try {
        if (img) {
          console.log(img);

          if (folderid === undefined) {
            const existingFilePath = `categories/${id}`;

            // Create a reference to the existing file
            const existingFileRef = ref(storage, existingFilePath);

            // Delete the existing file
            await deleteObject(existingFileRef);
            const newFilePath = `categories/${id}`; // Specify the path for the new file
            const newFileRef = ref(storage, newFilePath);

            // Upload the new file
            const result = await uploadBytes(newFileRef, img);

            // Get the download URL for the new file
            const newDownloadUrl = await getDownloadURL(newFileRef);
          } else {
            const existingFilePath = `images/${folderid}/${id}`;

            const existingFileRef = ref(storage, existingFilePath);

            await deleteObject(existingFileRef);

            const newFilePath = `images/${folderid}/${id}`; // Specify the path for the new file
            const newFileRef = ref(storage, newFilePath);

            const result = await uploadBytes(newFileRef, img);

            const newDownloadUrl = await getDownloadURL(newFileRef);

            console.log(newDownloadUrl);
          }
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setImg(img);
      setName(name);
    }
  };

  const focusInput = () => {
    imgRef.current.click();
  };

  return (
    <>
      <div className="flex flex-col justify-between  text-center bg-[#FFF6DF] w-fit mx-auto h-screen    ">
        <div className=" mx-auto text-center p-5 lg:p-0 sm:w-[380px] md:w-[450px] lg:w-[500px] w-[350px]  text-[#852E2C]">
          <div className="flex justify-between p-4">
            <p className={`font-extrabold text-xl ${myFont.className} `}>
              Edit Category
            </p>
            <Link href="/home">
              <FontAwesomeIcon
                icon={faXmark}
                className="cursor-pointer "
                size="xl"
                onClick={(e) => {}}
              />
            </Link>
          </div>
          <div className="">
            <p
              className={`mt-5 ml-2 text-base font-semibold ${inter.className}`}
            >
              Image (Optional)
            </p>

            {img ? (
              <div
                className={`bg-no-repeat bg-contain mt-2 h-[253px]  mx-auto sm:w-full sm:h-[253px] md:w-[378px] md:h-[308px] lg:w-[361px] lg:h-[295px]  w-full  `}
                style={{
                  backgroundImage: `url(${
                    img.name ? img.name : img ? img : "/imgshape2.png"
                  })`,
                }}
              >
                <FontAwesomeIcon
                  icon={faXmark}
                  className="cursor-pointer float-right bg-gray-800 "
                  size="xl"
                  color="white"
                  onClick={() => setImg(null)}
                />
              </div>
            ) : (
              <div
                className={`h-[253px] mx-auto  sm:w-[320px] sm:h-[260px]  md:w-[378px] md:h-[308px] lg:w-[361px] lg:h-[295px]  w-full flex justify-center items-center bg-no-repeat bg-cover`}
                style={{
                  backgroundImage: `url(${img ? img : "/imgshape2.png"})`,
                }}
              >
                <div
                  className="cursor-pointer text-center"
                  onClick={focusInput}
                >
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
                    onChange={handleChange}
                    hidden={true}
                    ref={imgRef}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 ">
            <div>
              <p className={`text-base ml-2 font-semibold ${inter.className}`}>
                Name
              </p>
              <input
                type={"text"}
                value={val}
                className={`w-full   bg-[#FFF6DF] mt-2 outline-none bg-[url('/inputshape2.png')]  lg:w-[350px] lg:h-[40px]  md:w-[368px] md:h-[52px]    sm:w-[320px] ] bg-contain bg-no-repeat p-2`}
                onChange={(e) => setVal(e.target.value)}
              />
              <p className="text-end text-xs lg:pr-5 mt-[-2%]">0/50</p>
            </div>

            <p className={`mt-5 ml-2 ${inter.className}`}>
              {" "}
              Description(Optional)
            </p>
            <div className="bg-[url('/desshp.png')] mt-2 pt-5 bg-no-repeat bg-contain w-full  md:w-[375px] md:h-[220px] sm:w-[330px] lg:w-[374px] lg:h-[230px] mx-auto  h-[220px] sm:h-[250px] flex">
              <textarea
                className=" outline-none bg-[#FFF6DF] bg-transparent  h-[150px] sm:h-[175px] sm:w-[360px] py-4 px-4"
                name="dsec"
                id=""
                cols={30}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>

        <div className="bg-[#FFF6DF]   ">
          <hr className="mt-4 " />
          <div className="lg:pl-[5%]">
            <Buttons
              imgName={name}
              id={id}
              title={val ? val : ""}
              description={desc ? desc : ""}
              quantity={0}
              image={img === lastImg ? img : name}
              handleSubmit={handleSubmit}
              task="edit"
              folder={folderid == "undefined" ? false : true}
              folderid={folderid}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditCategory;
