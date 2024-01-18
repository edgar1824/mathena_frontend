import { classes } from "helper";
import { FC, useState } from "react";

interface Props {
  onChange?: (isTrue: boolean) => void;
}

export const Switch: FC<Props> = ({ onChange }) => {
  const [isTrue, setIsTrue] = useState(false);
  return (
    <div
      className="relative w-10 h-5 cursor-pointer"
      onClick={() => {
        setIsTrue((p) => !p);
        onChange?.(!isTrue);
      }}
    >
      <div
        className={classes(
          "z-[1] w-5 h-5 shadow-md rounded-full duration-200 bg-white absolute top-1/2 -translate-y-1/2 left-0",
          isTrue && "left-5"
        )}
      />
      <div
        className={classes(
          "h-3 w-10 rounded-[20px] duration-200 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2",
          isTrue ? "bg-[var(--green)]" : "bg-[#E6ECEC]"
        )}
      />
    </div>
  );
};
