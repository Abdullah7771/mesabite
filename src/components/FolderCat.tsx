import { useContext } from "react";
import { CardContext } from "../../context/CardContext";
import Card from "./Card";

const FolderCat = () => {
  const {
    foldercat
    } = useContext(CardContext);
  return (
    <>
      <div>
        {foldercat.map((card, index) => (
          <Card
            title={card.title}
            description={card.description}
            key={index}
            image={card.image || ""}
            id={card.id || ""}
            folder={true}
            folderid={card.folderid}
          />
        ))}
      </div>
    </>
  );
};

export default FolderCat;
