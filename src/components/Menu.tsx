import { Dish } from "./Dish";
import type { Matrett } from "../data/menydata";

interface MenuProps {
  menydata: Matrett[];
}

export const Menu = ({ menydata }: MenuProps) => {
  return (
    <div id="food-grid">
      {menydata.map((matrett: Matrett) => {
        return <Dish key={matrett.id} {...matrett} />;
      })}
    </div>
  );
};
