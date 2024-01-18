import { FC } from "react";
import { Chart } from "./blocks/Chart";
import { ProductsTable } from "./blocks/ProductsTable";
import { Statistics } from "./blocks/Statistics";

const Component: FC = () => {
  return (
    <div className="flex flex-col gap-[5.375rem]">
      <div className="flex gap-[3.125rem]">
        <div className="flex flex-col gap-5 flex-[2] h-full">
          <p className="text-[37.9px] font-semibold">Votre pack</p>
          <Chart />
        </div>
        <Statistics />
      </div>
      <ProductsTable />
    </div>
  );
};

export const Trade = Object.assign(Component, {});
