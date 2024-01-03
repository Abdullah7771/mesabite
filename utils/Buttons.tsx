"use client";

// import { CardContext } from "@/context/CardContext";

import { ButtonProps, CardData } from "../types";

import Link from "next/link";
import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  addFolderCategories,
  updateFolderCategories,
} from "../services/card-service";
import { useRouter } from "next/navigation";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const Buttons = ({ handleSubmit, task, folder, ...props }: ButtonProps) => {
  // const {
  //   setIsOpen,
  //   cards,
  //   setCards,
  //   setFiltered,
  //   currentFolder,
  //   categories,
  //   setCategories,
  // } = useContext(CardContext);
  const router = useRouter();
  console.log(folder);
  const storage = getStorage();
  const cardData: CardData = {
    title: props.title,
    description: props.description,
    quantity: props.quantity,
    image: props.image,
    id: props.id,
    imgName: props.imgName,
  };

  const uniqueArr = (arr1: CardData, arr2: CardData[]) => {
    const result = arr2.some((element) => element.id === arr1.id);
    return result;
  };

  const findInd = (arr1: CardData, arr2: CardData[]) => {
    const result = arr2.findIndex((element) => element.id === arr1.id);
    return result;
  };

  const addCards = async () => {
    if (!cardData.image || !cardData.title) {
      console.log(cardData);
      toast.error("Input all details");
      return false;
    }

    var ab = await addFolderCategories(
      cardData,
      String(props.folderid),
      folder === "true"
    );
    if (ab) {
      handleSubmit(ab);
    }

    console.log(ab);
    setTimeout(() => {
      router.refresh();
    }, 1000);
    router.push("/home");
    // if (ab) cardData.id = ab;
    // console.log(cardData);

    // if (folder == false) {
    //   const a = uniqueArr(cardData, categories);
    //   if (!a) {
    //     setCategories((prev) => [...prev, cardData]);
    //     setFiltered((prev) => [prev[0], [...prev[1], cardData]]);
    //   }
    // } else {
    //   const a = uniqueArr(cardData, cards);

    //   if (!a) {
    //     setCards((prev) => [...prev, cardData]);
    //     setFiltered((prev) => [[...prev[0], cardData], prev[1]]);

    //     // setFiltered((prev) => [...prev, cardData]);
    //   }
    // }
    // console.log(ab);
    // if (ab) handleSubmit(ab);
    // setIsOpen({ page: "home", cardData: cardData });
  };

  const updateCards = async () => {
    if (!cardData.image || !cardData.title) {
      toast.error("Input img");
      return false;
    }
    if (props.folderid)
      await updateFolderCategories(cardData, props.folderid, folder);

    handleSubmit(cardData.id);
    setTimeout(() => {
      router.refresh();
    }, 1000);
    router.push("/home");
  };

  return (
    <>
      <div className="flex justify-center gap-5 mb-2 ">
        <Link href="/home">
          <button
            // onClick={() => ({ page: "home", cardData: cardData })}
            className="bg-[#852E2C] text-white font-bold w-[150px] h-[50px] mt-2   rounded-full"
          >
            Cancel
          </button>
        </Link>
        <button
          onClick={() => {
            task === "add" ? addCards() : updateCards();
          }}
          className="bg-[#FFCD00] text-[#852E2C] font-bold w-[150px] h-[50px] mt-2 rounded-full"
        >
          Save
        </button>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </>
  );
};

export default Buttons;
