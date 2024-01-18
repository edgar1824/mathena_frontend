import { FC } from "react";
import { useDatePickerContext } from "./Provider";
import { classes } from "./utils";
import { Stymbol } from "./Symbol";

export const Head: FC = () => {
  const { classNames, showYears } = useDatePickerContext();
  return (
    <div
      className={classes(
        classNames?.head,
        "flex justify-between py-1 px-2 gap-1 w-full text-xl"
      )}
    >
      <Year />
      {!showYears && <Month />}
    </div>
  );
};

const Year: FC = () => {
  const { currentDate, setShowYears, showYears, calendarDate } =
    useDatePickerContext();
  return (
    <div
      onClick={() => {
        setShowYears((p) => !p);
      }}
      className="flex gap-1 items-center"
    >
      <span className="text-center text-sm font-medium">
        {/* {new Date(new Date().setMonth(currentDate.m)).toLocaleDateString("us", { */}
        {calendarDate.toLocaleDateString("fr", {
          month: "long",
        }) || "MM"}
      </span>
      <span className="cursor-pointer text-sm font-medium">
        {currentDate.y === null ? "YYYY" : currentDate.y}
      </span>

      <Stymbol
        style={{ transform: "rotateX(60deg)" }}
        className={classes(
          showYears && "rotate-180",
          "text-base rounded w-5 h-5 leading-none"
        )}
      >
        &#9660;
      </Stymbol>
    </div>
  );
};

const Month: FC = () => {
  const { prevMonth, nextMonth } = useDatePickerContext();
  return (
    <div className="flex gap-3 items-center justify-between">
      <Stymbol className="text-sm" handler={prevMonth}>
        {"<"}
      </Stymbol>
      <Stymbol className="text-sm" handler={nextMonth}>
        {">"}
      </Stymbol>
    </div>
  );
};
