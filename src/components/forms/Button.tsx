import { classes } from "helper";
import {
  ButtonHTMLAttributes,
  FC,
  MouseEventHandler,
  PropsWithChildren,
} from "react";
import { useNavigate } from "react-router-dom";

interface Props extends PropsWithChildren {
  className?: string;
  bg?: "green" | "yellow" | "red";
  attr?: Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "type" | "onClick" | "className"
  >;
  to?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  size?: "md" | "lg";
}

export const Button: FC<Props> = ({
  className,
  attr,
  children,
  bg = "green",
  to,
  onClick,
  type = "button",
  size = "md",
}) => {
  const navigate = useNavigate();
  return (
    <button
      {...attr}
      type={type}
      onClick={(e) => {
        if (to) navigate(to);
        onClick?.(e);
      }}
      className={classes(
        "px-6 py-1 rounded-[1.375rem] text-white ",
        {
          green: "bg-[var(--green)]",
          yellow: "bg-[var(--yellow)]",
          red: "bg-[var(--red)]",
        }[bg],
        { md: "h-[2.5625rem]", lg: "h-[3.125rem]" }[size],
        className
      )}
    >
      {children}
    </button>
  );
};
