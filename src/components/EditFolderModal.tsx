"use client";

import React, { useContext, useEffect, useState } from "react";
import { editFolder, getFolderName } from "../../services/card-service";
import { cardData } from "../../mock";
import { useRouter } from "next/navigation";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  folderid: string;
}
const EditFolderModal = ({ setOpen, folderid }: Props) => {
  const router = useRouter();
  const [val, setVal] = useState("");
  const handleChange = (e: any) => {
    setVal(e.target.value);
  };
  const getVal = async () => {
    const data = await getFolderName(folderid);
    setVal(data);
  };
  useEffect(() => {
    getVal();
  }, []);
  return (
    <div className=" bg-transparent flex justify-center items-center">
      <div className="flex flex-col  p-10 fixed  text-center bg-[#FFF6DF] w-fit  h-fit ">
        <p className="text-[#852E2C]  text-start  font-extrabold sm:text-center sm:ml-0 sm:text-[25px] mb-2 text-[14px]">
          Edit Folder Name{" "}
        </p>
        <input
          type="text"
          className="p-4 border-2 border-gray-400"
          value={val}
          onChange={handleChange}
        />

        <div className="flex gap-2">
          <button
            className="bg-[#852E2C] text-white font-bold w-[150px] h-[50px] mt-2   rounded-full"
            onClick={() => setOpen(false)}
          >
            Cancel
          </button>

          <button
            onClick={() => {
              editFolder(folderid, val);
            
              setOpen(false)
            }}
            className="bg-[#FFCD00] text-[#852E2C] font-bold w-[150px] h-[50px] mt-2 rounded-full"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditFolderModal;
