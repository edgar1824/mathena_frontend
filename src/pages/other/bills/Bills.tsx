import { Button } from "components/forms";
import { classes } from "helper";
import { FC, useEffect, useState } from "react";

export const Bills: FC = () => {
  return (
    <div className="p-[3.625rem] bg-white shadow-md flex flex-col gap-10">
      <YearPicker />
      <div className="">
        <BillItem title="Janvier" hasBorder />
        <BillItem title="Février" hasBorder />
        <BillItem title="Mars" hasBorder />
        <BillItem title="Avril" />
      </div>
    </div>
  );
};

function genYears() {
  const years = [];
  for (let i = 1900; i < 2100; i++) {
    years.push(i);
  }
  return years;
}
const YearPicker: FC<{ onChange?: (year: number) => void }> = ({
  onChange,
}) => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [show, setShow] = useState(false);
  useEffect(() => onChange?.(year), [year]);
  return (
    <div className="flex relative w-fit">
      <div
        onClick={() => setShow((p) => !p)}
        className="bg-[var(--light-green)] rounded-[5px] px-[0.9375rem] py-2 flex items-center gap-6 cursor-pointer"
      >
        <span className="text-[1.325rem] font-semibold w-[52px]">{year}</span>
        <div className="rotate-45 w-2 h-2 border-r border-b border-black" />
      </div>
      {show && (
        <div className="flex flex-col absolute left-0 top-[calc(100%_+_4px)] max-h-[300px] overflow-auto right-0 custom-scrollbar">
          {genYears().map((y) => (
            <div
              key={y}
              onClick={() => setYear(y)}
              className={classes(
                "text-center py-1.5 px-2 cursor-pointer bg-[var(--light-green)] hover:bg-[var(--green)] hover:text-white",
                year === y && "!bg-[var(--green)] text-white"
              )}
            >
              {y}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const BillItem: FC<{ title: string; hasBorder?: boolean }> = ({
  title,
  hasBorder,
}) => {
  return (
    <div
      className={classes(
        "w-full flex items-center gap-4 justify-between py-[1.7rem]",
        hasBorder && "border-b border-black"
      )}
    >
      <span className="text-[1.33rem]">{title}</span>
      <Button>TÉLÉCHARGER LA FACTURE</Button>
    </div>
  );
};
