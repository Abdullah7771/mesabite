import { Inter, Montserrat } from "next/font/google";
import localFont from "next/font/local";

export const montserrat = Montserrat({ subsets: ["latin"], weight: "500" });
export const inter = Inter({ subsets: ['latin'] })
export const myFont = localFont({
    src: "/public/font/Recoleta-RegularDEMO.otf",
  });