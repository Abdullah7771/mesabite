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
import AddnewCategory from "./AddnewCategory";

const FolderCat = async ({ id }: { id: string }) => {
  // const id='743Ub4LqggljSXaAK3hG'
  const categories = (await getFolderCategories(id)) as CardData[];
  console.log(categories);
  return (
    <>
      <div>
        {categories.map((card, index) => (
          <Card
            title={card.title}
            description={card.description}
            key={index}
            image={card.image || ''}
            imgName={card.imgName}
            id={card.id || ''}
            folder={true}
            folderid={id}
          />
        ))}
        <AddnewCategory folder={true} folderid={id} />
      </div>
    </>
  );
};

export default FolderCat;
