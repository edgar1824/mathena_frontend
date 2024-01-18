import { classes } from "helper";
import { ChangeEventHandler, FC } from "react";

interface Props {
  name?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  options?: { label: string; value: string }[];
  defaultValue?: string;
  classNames?: {
    select?: string;
    parent?: string;
    icon?: string;
  };
}

export const ChartSelect: FC<Props> = ({
  name,
  onChange,
  options,
  defaultValue,
  classNames,
}) => {
  return (
    <div className={classes("relative min-w-[85px]", classNames?.parent)}>
      <select
        className={classes(
          "h-5 border-none outline-none select-no-icon",
          classNames?.select
        )}
        defaultValue={defaultValue}
        onChange={onChange}
        name={name}
      >
        {options?.map(({ label, value }, i) => (
          <option key={i} value={value}>
            {label}
          </option>
        ))}
      </select>
      <div
        style={{ transform: "rotateX(45deg) rotateZ(45deg)" }}
        className={classes(
          "w-4 h-4 border-b-2 border-r-2 border-black cursor-pointer absolute top-[5%] right-2",
          classNames?.icon
        )}
      />
    </div>
  );
};
