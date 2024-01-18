import { classes } from "helper";
import { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  error?: string;
  className?: string;
  errorClassName?: string;
}

export const ErrorWrapper: FC<Props> = ({
  error,
  className,
  children,
  errorClassName,
}) => {
  return (
    <div className={classes("flex flex-col gap-0.5", className)}>
      {children}
      <p
        className={classes(
          "text-[#dc4545] font-semibold text-sm",
          errorClassName
        )}
      >
        {error}
      </p>
    </div>
  );
};
