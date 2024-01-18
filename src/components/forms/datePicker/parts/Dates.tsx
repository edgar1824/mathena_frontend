import { FC } from "react";
import { useDatePickerContext } from "./Provider";
import { classes, weekdays } from "./utils";
import { Day } from "./Day";

export const Dates: FC = () => {
  const { classNames, dates, setCurrentDate, setMaxHeight, setCalendarDate } =
    useDatePickerContext();

  return (
    <div
      className="flex flex-col gap-[0.5rem_0]"
      ref={(node) => {
        if (node?.offsetHeight) setMaxHeight(node.offsetHeight);
      }}
    >
      <WeekDays />
      <div
        className={classes(
          classNames?.dates,
          "grid grid-cols-7 gap-[0.5rem_0] justify-items-center"
        )}
      >
        {dates.map(({ date, day, monthState, isToday, ...rest }) => (
          <Day
            key={date.toISOString()}
            onClick={() => {
              setCurrentDate({
                d: new Date(date).getDate(),
                m: new Date(date).getMonth(),
                y: new Date(date).getFullYear(),
              });
              setCalendarDate(
                new Date(
                  new Date(date).getFullYear(),
                  new Date(date).getMonth(),
                  new Date(date).getDate()
                )
              );
            }}
            className={classes(
              "text-sm",
              classNames?.day?.({ date, day, monthState, ...rest })
            )}
            {...{ date, day, monthState, isToday, ...rest }}
          >
            {day}
          </Day>
        ))}
      </div>
    </div>
  );
};

const WeekDays: FC = () => {
  const { local, classNames } = useDatePickerContext();
  return (
    <div
      className={classes(
        classNames?.dates,
        "grid grid-cols-7 justify-items-center"
      )}
    >
      {weekdays("narrow", local!).map((weekday, i) => (
        <Day className="text-black/40 pointer-events-none text-xs" key={i}>
          {weekday}
        </Day>
      ))}
    </div>
  );
};
