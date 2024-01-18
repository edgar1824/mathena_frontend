import { useTimePickerContext } from "./Provider";
import { classes } from "./utils";

export const Head = () => {
  const { time, setTime, current, hidePeriods, changeTimeState } =
    useTimePickerContext();
  return (
    <div className="flex flex-col px-2 py-3">
      <div className="flex items-center gap-2">
        <div className="text-[3rem] leading-[3.5rem] flex items-center gap-2">
          <span
            className={classes(
              "text-[37px] grid cursor-pointer select-none place-content-center text-white w-[64px] h-[53px] rounded",
              current.state === "hours"
                ? "bg-[var(--green)]"
                : "bg-[rgba(8,_68,_66,_0.30)]"
            )}
            onClick={() => changeTimeState("hours")}
          >
            {time.hours || "HH"}
          </span>
          :
          <span
            className={classes(
              "text-[37px] grid cursor-pointer select-none place-content-center text-white w-[64px] h-[53px] rounded",
              current.state === "minutes"
                ? "bg-[var(--green)]"
                : "bg-[rgba(8,_68,_66,_0.30)]"
            )}
            onClick={() => changeTimeState("minutes")}
          >
            {time.minutes || "MM"}
          </span>
        </div>
        {!hidePeriods && (
          <div className="flex flex-col rounded overflow-hidden border border-[var(--green)]">
            <div
              className={classes(
                "text-xs px-0.5 py-1 cursor-pointer font-rat tracking-tight duration-300 border-b border-[var(--green)] text-center",
                time.format === "am"
                  ? "bg-[rgba(8,_68,_66,_0.30)] text-white"
                  : "bg-white text-black"
              )}
              onClick={() => setTime((p) => ({ ...p, format: "am" }))}
            >
              Matin
            </div>
            <div
              className={classes(
                "text-xs px-0.5 py-1 cursor-pointer font-rat tracking-tight duration-300 text-center",
                time.format === "pm"
                  ? "bg-[rgba(8,_68,_66,_0.30)] text-white"
                  : "bg-white text-black"
              )}
              onClick={() => setTime((p) => ({ ...p, format: "pm" }))}
            >
              Soir
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
