import React from "react";
import {
  getAllFolders,
  getFolderCategories,
  getCategories,
} from "../../services/card-service";
import { CardData } from "../../types";
import Card from "./Card";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { CiCirclePlus } from "react-icons/ci";
import ImageModal from "../../utils/ImageModal";

const FolderCat = async () => {
   const categories = await getFolderCategories("743Ub4LqggljSXaAK3hG") as CardData[];
console.log(categories)
  return (
    <>
    <div>
    {categories.map((card, index) => (
        <Card
          title={card.title}
          description={card.description}
          key={index}
          image={card.image}
          imgName={card.imgName}
          id={card.id}
          folder={true}
        />
      ))}
          

    </div>
  
    </>
  );
};

export default FolderCat;
