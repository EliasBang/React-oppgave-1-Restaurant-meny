import type { JSX } from "react/jsx-runtime";
import { Dish } from "./Dish";

export const Menu = ({ menydata }) => {
  return (
    <div id="food-grid">
      {menydata.map(
        (
          matrett: JSX.IntrinsicAttributes & {
            id: number;
            tittel: string;
            pris: string;
            ingredienser: string;
            kategori: string;
          },
        ) => {
          return <Dish key={matrett.id} {...matrett} />;
        },
      )}
    </div>
  );
};
