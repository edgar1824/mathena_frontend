import { FC } from "react";
import { Packs, RegulationAd, RegulationTable } from "./blocks";

export const Regulations: FC = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-7">
        <RegulationTable />
        <RegulationAd />
      </div>
      <Packs />
    </div>
  );
};
