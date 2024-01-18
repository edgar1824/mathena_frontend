import { useTimePickerContext } from "./Provider";
import chevron_icon from "assets/select-chevron.svg";
import { classes } from "./utils";

export const Icon = () => {
  const { classNames } = useTimePickerContext();
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
