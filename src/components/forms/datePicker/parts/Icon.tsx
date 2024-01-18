import { useDatePickerContext } from "./Provider";
import { classes } from "./utils";
import chevron_icon from "assets/select-chevron.svg";

export const Icon = () => {
  const { classNames } = useDatePickerContext();
  return (
    <img
      src={chevron_icon}
      className={classes(
        "select-none w-3 h-5 grid place-content-center cursor-pointer",
        classNames?.icon
      )}
    />
  );
};
