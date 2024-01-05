"use client";

// import { CardContext } from "@/context/CardContext";

import { ButtonProps, CardData } from "../types";

import { getStorage } from "firebase/storage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import {
  addFolderCategories,
  updateFolderCategories,
} from "../services/card-service";

const Buttons = ({ handleSubmit, task, folder, ...props }: ButtonProps) => {
  const router = useRouter();
  console.log(folder);
  const storage = getStorage();
  const cardData: CardData = {
    title: props.title,
    description: props.description,
    quantity: props.quantity,
    image: props.image,
    id: props.id,
  };

  const addCards = async () => {
    console.log(cardData);
    if (!cardData.image || !cardData.title) {
      console.log(cardData);
      toast.error("Input all details");
      return false;
    }

    var ab = await addFolderCategories(
      cardData,
      String(props.folderid),
      folder
    );
    if (ab) {
      const url = await handleSubmit(ab, props.folderid);

      router.push("/home");
    }

    console.log(ab);
  };

  const updateCards = async () => {
    if (!cardData.image || !cardData.title) {
      toast.error("Input img");
      return false;
    }

    await updateFolderCategories(cardData, props.folderid, folder);

    await handleSubmit(cardData.id);
    setTimeout(()=>{
      
      router.push("/home");
    },200)

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
