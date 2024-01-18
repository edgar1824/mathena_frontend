import { useDatePickerContext } from "./Provider";
import { DateKey, IDateFormat } from "./types";
import { classes, fmtDoubleNum } from "./utils";

const fmtTOValue = (v: IDateFormat) =>
  `${(v.d !== null && v.d >= 0 && fmtDoubleNum(v.d)) || "DD"} ${
    v.m !== null
      ? new Date(2000, v.m, 1).toLocaleDateString("fr", {
          month: "long",
        })
      : "MM"
  } ${!!v.y ? fmtDoubleNum(v.y) : "YYYY"}`;

export const Input = () => {
  const {
    inputProps,
    invalid,
    classNames,
    setFocus,
    currentDate,
    separator,
    format,
    setState,
    inputRef,
  } = useDatePickerContext();

  return (
    <div
      className={classes("min-w-[200px] w-full", invalid && "border-red-700")}
    >
      {!!inputProps?.placeholder &&
        Object.values(currentDate).every((e) => e === null) && (
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
        hidden={Object.values(currentDate).every((e) => e === null)}
        {...inputProps}
        ref={inputRef}
        value={fmtTOValue(currentDate)}
        spellCheck={false}
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
        // onKeyDown={keydownHanlder}
        onClick={() => {
          setState(
            (format?.split(separator || /[- /.]/)?.[0][0] as DateKey) || "d"
          );
        }}
      />
    </div>
  );
};
