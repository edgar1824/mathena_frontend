import { classes } from "helper";
import React, { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  color?: "green" | "yellow" | "red";
  className?: string;
}

export const Badge: FC<Props> = ({ children, className, color = "green" }) => {
  return (
    <div
      className={classes(
        "px-3 py-2 rounded-[1.375rem] text-white font-rat",
        {
          green: "bg-[var(--light-green)]",
          yellow: "bg-[var(--yellow)]",
          red: "bg-[var(--red)]",
        }[color],
        className
      )}
    >
      {children}
    </div>
  );
};
