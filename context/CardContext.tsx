import React, { createContext } from "react";
import { CardData } from "../types";
export interface CardContextProps {
  setFolderCat: React.Dispatch<React.SetStateAction<CardData[]>>;
  foldercat: CardData[];
  setCat: React.Dispatch<React.SetStateAction<CardData[]>>;
  cat: CardData[];
  folderid: string;

  setAllFolders: React.Dispatch<React.SetStateAction<any>>;
  allfolders: [];
}
const initialContextValue = {
  setFolderCat: ((value: CardData[]) => {}) as React.Dispatch<
    React.SetStateAction<CardData[]>
  >,
  foldercat: [] as CardData[],

  setCat: ((value: CardData[]) => {}) as React.Dispatch<
    React.SetStateAction<CardData[]>
  >,
  cat: [] as CardData[],
  folderid: "",
  allfolders: [],
  setAllFolders: ((value: []) => {}) as React.Dispatch<
  React.SetStateAction<any>
>,
};
export const CardContext = createContext(initialContextValue);
