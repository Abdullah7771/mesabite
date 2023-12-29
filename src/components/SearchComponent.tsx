"use client";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";

// import { CardContext } from "@/context/CardContext";
import "@fortawesome/fontawesome-svg-core/styles.css";
import localFont from "next/font/local";

const myFont = localFont({ src: "../../public/font/Recoleta-RegularDEMO.otf" });

const SearchComponent = () => {
  const [icon, setIcon] = useState(true);

//   const { cards, categories, setCards, setCategories, filtered } =
//     useContext(CardContext);
  const handleChange = (e: any) => {
    setIcon(false);

    if (e.target.value) {
      const filterCards = cards.filter((card) =>
        card.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      const filterCat = categories.filter((card) =>
        card.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
    //   setCards(filterCards);
    //   setCategories(filterCat);

    } else {
    //   setCards(filtered[0]);
    //   setCategories(filtered[1]);
    }
  };

  return (
    <>
      <div className="text-center mx-auto mt-6">
        <p
          className={` text-[#852E2C] ${myFont.className} text-start ml-[5%] font-extrabold sm:text-center sm:ml-0 sm:text-[45px] text-[28px] `}
        >
          YOUR MENU
        </p>

        <div className=" mt-6 flex justify-center items-center w-full relative">
          {icon && (
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute mr-40"
              size="lg"
              color="#852E2C"
            />
          )}

          <div className="bg-[url('/inputshape.png')] sm:w-[357px]  w-[330px] bg-contain bg-no-repeat p-2  ">
            <input
              type="text"
              name=""
              id=""
              onChange={handleChange}
              className=" w-full  text-center outline-none border-none   placeholder:text-[#852E2C] "
              placeholder="SEARCH MENU"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchComponent;
