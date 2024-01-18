import { FC } from "react";
import { Bar } from "./blocks/Bar";
import { Pie } from "./blocks/Pie";
import { Area } from "./blocks/Area";
import { HalfPie } from "./blocks/HalfPie";

export const Analitics: FC = () => {
  return (
    <div className="grid grid-cols-2 gap-10 analitics">
      <Bar className="row-start-1 col-start-1 col-span-2 row-span-1" />
      <Pie className="row-start-2 col-start-1 col-span-1 row-span-1" />
      <Area className="row-start-2 col-start-2 col-span-1 row-span-2" />
      <HalfPie className="row-start-3 col-start-1 col-span-1 row-span-1 h-full" />
    </div>
  );
};
