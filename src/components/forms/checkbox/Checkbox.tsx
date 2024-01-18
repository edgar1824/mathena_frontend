import { InputHTMLAttributes, LegacyRef, forwardRef } from "react";
import { ErrorWrapper } from "..";
import { classes } from "../datePicker/parts/utils";
import styles from "./checkbox.module.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  text?: string;
  className?: string;
  error?: string;
}

export const Checkbox = forwardRef(
  (
    { text, className, error, ...props }: Props,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    return (
      <ErrorWrapper error={error}>
        <label className={classes(styles.container, className)}>
          <div className="relative shrink-0 h-[22px] w-[22px]">
            <input ref={ref} {...props} type="checkbox" />
            <span className={styles.checkmark}></span>
          </div>
          <span>{text}</span>
        </label>
      </ErrorWrapper>
    );
  }
);
