"use client";

// import { CardContext } from "@/context/CardContext";

import { ButtonProps, CardData } from "../types";

import Link from "next/link";
import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { addFolderCategories,updateFolderCategories } from "../services/card-service";

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
    // var ab = await addFolderCategories(cardData, currentFolder.id, folder);
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

  // const updateCards = async () => {
  //   if (!cardData.image || !cardData.title) {
  //     toast.error("Input img");
  //     return false;
  //   }

  //   await updateFolderCategories(cardData, currentFolder.id, folder);
  //   if (folder == false) {
  //     const a = findInd(cardData, categories);
  //     if (a !== -1) {
  //       setCategories((prev) => {
  //         const updatedCards = [...prev];
  //         updatedCards[a] = cardData;
  //         return updatedCards;
  //       });
  //       setFiltered((prev) => [[...prev[0]], [...categories]]);
  //     } else {
  //       setCategories((prev) => [...prev, cardData]);
  //       setFiltered((prev) => [[...prev[0]], [...prev[1]]]);
  //     }
  //   } else {
  //     const a = findInd(cardData, cards);
  //     if (a !== -1) {
  //       setCards((prev) => {
  //         const updatedCards = [...prev];
  //         updatedCards[a] = cardData;
  //         return updatedCards;
  //       });

  //       setFiltered((prev) => [[...cards], [...prev[1]]]);
  //     } else {
  //       setCards((prev) => [...prev, cardData]);
  //       setFiltered((prev) => [[...prev[0]], [...prev[1]]]);
  //     }
  //   }

  //   console.log(cardData);

  //   setIsOpen({ page: "home", cardData: cardData });
  //   handleSubmit(cardData.id);
  // };

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
