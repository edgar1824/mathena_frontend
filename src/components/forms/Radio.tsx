import { classes } from "helper";
import { InputHTMLAttributes, LegacyRef, forwardRef } from "react";
import { ErrorWrapper } from ".";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  textClassName?: string;
  title?: string;
}

export const Radio = forwardRef(
  (
    { error, className, textClassName, title, ...props }: Props,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    return (
      <ErrorWrapper error={error}>
        <div className="flex gap-2.5">
          <input
            {...props}
            ref={ref}
            className={classes("accent-[#111] w-4 h-4 mt-0.5", className)}
            type="radio"
          />
          {!!title && (
            <p className={classes("text-[15px] text-[#111]", textClassName)}>
              {title}
            </p>
          )}
        </div>
      </ErrorWrapper>
    );
  }
);
