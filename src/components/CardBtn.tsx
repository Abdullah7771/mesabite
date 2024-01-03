import { faGear, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const CardBtn = () => {
  return (
    <>
      <div className=" flex flex-row md:gap-5   gap-2 px-2 text-white cursor-pointer ">
        <FontAwesomeIcon
          icon={faGear}
          className="md:h-6 h-3 bg-white  text-[#852E2C] rounded-full p-2"
        />
        <Link href='/edit-category'>
        <FontAwesomeIcon
          icon={faPen}
          className="md:h-6 h-3 bg-white text-[#852E2C] rounded-full p-2"
        />
        </Link>
        <FontAwesomeIcon
          icon={faTrash}
          className="md:h-6 h-3 bg-white text-[#852E2C] rounded-full p-2"
        />
      </div>
    </>
  );
};

export default CardBtn;
