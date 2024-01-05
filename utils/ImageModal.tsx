"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import { ImageModalProps } from "../types";
import { montserrat } from "../fonts";

const ImageModal: React.FC<ImageModalProps> = ({
  styles,
  sizes,
  textsize,
  icon,
  text,
  optional,
  element,
  show,
}: ImageModalProps) => {
  const [img, setImg] = useState<string | undefined>(undefined);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setImg(imageUrl);
    }
  };

  return (
    <div className="  ">
      <p
        className={`mt-5 ml-2 text-base font-semibold ${montserrat.className}`}
      >
        {optional || "Image (Optional)"}
      </p>

      {img ? (
        <div
          className={`${styles} flex justify-center items-center bg-no-repeat bg-cover`}
          style={{ backgroundImage: `url(${img || "/imgshape2.png"})` }}
        >
          <button className="text-white" onClick={() => setImg("")}>
            Remove image:
          </button>
        </div>
      ) : (
        <div
          className={`${styles} flex justify-center items-center bg-no-repeat bg-cover`}
          style={{ backgroundImage: `url(${img || "/imgshape2.png"})` }}
        >
          <div className="cursor-pointer text-center">
            {element ? (
              element
            ) : (
              <FontAwesomeIcon
                icon={icon}
                size={sizes || "3x"}
                color="#852E2C"
              />
            )}

            <p
              className={
                montserrat.className +
                ` font-semibold mt-4 ${textsize} pr-2 text-[#852E2C]`
              }
            >
              {text || "Click here to upload an image"}
            </p>

            {show && (
              <input
                type="file"
                id="img"
                name="img"
                accept="image/*"
                className="ml-[15%] mt-3 "
                onChange={handleChange}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageModal;
