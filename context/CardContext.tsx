import React, { createContext } from "react";
import { CardData } from "../types";
export interface CardContextProps {
    setCards: React.Dispatch<React.SetStateAction<CardData[]>>;
    cards: CardData[];
    setCategories: React.Dispatch<React.SetStateAction<CardData[]>>;
    categories: CardData[];
  }
const initialContextValue:CardContextProps = {
  setCards: ((value: CardData[]) => {}) as React.Dispatch<
    React.SetStateAction<CardData[]>
  >,
  cards: [] as CardData[],

  setCategories: ((value: CardData[]) => {}) as React.Dispatch<
    React.SetStateAction<CardData[]>
  >,
  categories: [] as CardData[],
};
export const CardContext = createContext(initialContextValue);
