import type { Config } from "tailwindcss";
import { Roboto } from "next/font/google";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      backgroundColor: {
        maroon: "#852E2C",
        yellowish: "#ffcd00",
      },
      colors: {
        maroon: "#852E2C",
        yellowish: "#ffcd00",
      },
      // fontFamily: {
      //   fontPrimary: ["var(--font-Inter)"],
      // },
    },
    plugins: [],
  },
};
export default config;
