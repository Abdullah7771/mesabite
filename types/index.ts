import { SizeProp, IconProp } from "@fortawesome/fontawesome-svg-core";
import { StorageReference } from "firebase/storage";
import { ReactNode, Dispatch, SetStateAction } from "react";

export type {
  CardData,
  CardProps,
  curFolder,
  openPage,
  ImageModalProps,
  ButtonProps,
  InputProps,
};

interface CardProps {
  title: string;
  description: string;
  image?: string | StorageReference;
  imgName: string;
  id: string;
  folder?: boolean;
}
interface CardData {
  title: string;
  description: string;
  image?: string | StorageReference;
  quantity: number;
  imgName: string;
  id: string;
  category?: string;
}

interface curFolder {
  id: string;
  name: string | any;
}

interface openPage {
  page: string;
  cardData: CardData;
  folder?: boolean;
}

interface ImageModalProps {
  styles: string;
  sizes?: SizeProp;
  textsize?: string;
  icon: IconProp;
  text?: string;
  optional?: string;
  element?: ReactNode;
  show?: boolean;
}

interface ButtonProps {
  handleSubmit: (docid: string) => void;

  title: string;
  description: string;
  quantity: number;
  image: string;
  id: string;
  imgName: string;
  task: string;
  folder?: boolean;
  folderid?: string;
}

interface InputProps {
  name: string;
  styles?: string;
  val: Dispatch<SetStateAction<string>>;
  type?: string;
}
