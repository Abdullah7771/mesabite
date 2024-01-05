"use client";
import { montserrat } from "../fonts";
import { InputProps } from "../types";

const Input = ({ name, styles, val, type }: InputProps) => {
  return (
    <div>
      <p className={`text-base ml-2 font-semibold ${montserrat.className}`}>
        {name}
      </p>
      <input
        type={type || "text"}
        className={`w-full   bg-[#FFF6DF] mt-2 outline-none ${styles} `}
        onChange={(e) => val(e.target.value)}
      />
 
    </div>
  );
};

export default Input;
