import React, { useContext } from "react";
import {
  getCategories,
  getFolderCategories,
} from "../../services/card-service";
import { CardData } from "../../types";
import Card from "./Card";
import { CardContext } from "../../context/CardContext";

const Categories = () => {
  const {
    cat
    } = useContext(CardContext);
  return (
    <>
      <div className=" mx-auto sm:w-[600px]  w-[350px] lg:w-[750px] mt-5  rounded-xl  ">
        {cat.map((card, index) => (
          <Card
            title={card.title}
            description={card.description}
            key={index}
            image={card.image}
            id={card.id}
            folder={false}
          />
        ))}
      </div>
    </>
  );
};

export default Categories;
