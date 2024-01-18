import { useState } from "react";
import { useTimePickerContext } from "./Provider";
import { classes, fmtDoubleNum } from "./utils";

export const Input = () => {
  const {
    inputRef,
    invalid,
    inputProps,
    time,
    classNames,
    format,
    changeTimeState,
    timeString,
    focus,
    setFocus,
    hidePeriods,
  } = useTimePickerContext();

  return (
    <div
      className={classes("min-w-[200px] w-full", invalid && "border-red-700")}
    >
      {!!inputProps?.placeholder &&
        Object.values(time).every((e) => e === null) && (
          <span
            onClick={() => setFocus(true)}
            className={classes(
              "z-[2] text-[var(--gray)] cursor-text bg-inherit min-w-[120px]"
            )}
          >
            {inputProps?.placeholder}
          </span>
        )}
      <input
        hidden={Object.values(time).every((e) => e === null)}
        {...inputProps}
        spellCheck={false}
        ref={inputRef}
        value={[
          timeString,
          !hidePeriods &&
            (time.format !== null
              ? time.format === "am"
                ? "Matin"
                : "Soir"
              : ""),
        ]
          .filter(Boolean)
          .join(" ")}
        className={classes(
          "outline-none caret-transparent h-[1.5rem]",
          invalid && "border-red-700 text-red-700",
          classNames?.input
        )}
        onFocus={(e) => {
          // setFocus(true);
          inputProps?.onFocus?.(e);
        }}
        onBlur={(e) => {
          // setFocus(false);
          inputProps?.onBlur?.(e);
        }}
        onChange={() => {}}
        onClick={(e) => {
          changeTimeState(format === "mm:ss" ? "minutes" : "hours");
          inputProps?.onClick?.(e);
        }}
        // onKeyDown={keyDownHandler}
      />
    </div>
  );
};
