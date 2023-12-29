"use client";
import { InputProps } from "../types";
import { Montserrat } from "next/font/google";
import { Dispatch, SetStateAction } from "react";
const inter = Montserrat({ subsets: ["latin"], weight: "600" });

const Input = ({ name, styles, val, type }: InputProps) => {
  return (
    <div>
      <p className={`text-base ml-2 font-semibold ${inter.className}`}>
        {name}
      </p>
      <input
        type={type || "text"}
        className={`w-full   bg-[#FFF6DF] mt-2 outline-none ${styles} `}
        onChange={(e) => val(e.target.value)}
      />
      {/* <p className="text-end text-xs lg:pr-5 mt-[-2%]">0/50</p> */}
    </div>
  );
};

export default Input;
