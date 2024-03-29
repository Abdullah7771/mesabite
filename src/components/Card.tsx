"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faGear, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { delCategories } from "../../services/card-service";
import { CardData, CardProps } from "../../types";
import { inter, montserrat } from "../../fonts";


const Card = ({
  title,
  description,
  image,
  imgName,
  id,
  folder,
  folderid,
}: CardProps) => {
  const cardData: CardData = {
    title,
    description,
    quantity: 0,
    imgName,
    image,
    id,
    folderid,
  };
  const router = useRouter();

  const searchParams = useSearchParams();
  const search = String(searchParams.get("folderid"));

  const query2 = `/edit-category?id=${id}&folderid=${folderid}`;

  const query = `/edit-category?id=${id}`;

  return (
    <>
      <div className="mt-5  ">
        <div
          style={{
            backgroundImage: `url('${image}')`,
            backgroundSize: "100% 100%",
          }}
        >
          <div className="flex  flex-col sm:h-[580px] h-[280px] justify-end border-4 border-[#852E2C]  ">
            <div className="bg-gradient-to-b  from-[transparent] via-[#ad4744]  to-[#86302d] h-[150px] p-2">
              <div className="flex justify-between  ">
                <div className=" ">
                  <p className="bg-[#FFCD00]  text-center mt-1 pt-1 w-[65px] h-[21px] mx-2 md:textbase text-xs rounded-full text-[#852E2C]">
                    5 ITEMS
                  </p>
                </div>

                <div className=" flex flex-row md:gap-5   gap-2 px-2 text-white cursor-pointer ">
                  <FontAwesomeIcon
                    icon={faGear}
                    className="md:h-6 h-3 bg-white  text-[#852E2C] rounded-full p-2"
                    onClick={() => console.log(folder)}
                  />

                  <FontAwesomeIcon
                    icon={faPen}
                    className="md:h-6 h-3 bg-white text-[#852E2C] rounded-full p-2"
                    onClick={() => {
                      folder
                        ? router.push(query2)
                        : router.push(query, {
                            query: "/",
                          });
                      console.log(folder);
                    }}
                  />

                  <FontAwesomeIcon
                    icon={faTrash}
                    className="md:h-6 h-3 bg-white text-[#852E2C] rounded-full p-2"
                    onClick={() => {
                      delCategories(id, folder, folderid);
                  
                    }}
                  />
                </div>
              </div>

              <p
                className={`mt-2 font-bold md:text-lg text-xl px-2 ${inter.className} text-white`}
              >
                {title || ""}
              </p>
              <p
                className={`mt-2 md:text-base text-[10px] px-2 ${inter.className} text-white`}
              >
                {" "}
                {description || ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
