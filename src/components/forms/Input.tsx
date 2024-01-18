import { classes } from "helper";
import {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  LegacyRef,
  forwardRef,
} from "react";
import { ErrorWrapper } from ".";

interface Props {
  parentClassName?: string;
  className?: string;
  type?: HTMLInputTypeAttribute;
  attr?: Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "name" | "value">;
  name?: string;
  value?: string | number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  error?: string;
}

export const Input = forwardRef(
  (
    {
      parentClassName,
      className,
      type = "text",
      name,
      attr,
      value,
      onChange,
      onBlur,
      placeholder,
      error,
    }: Props,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    return (
      <ErrorWrapper className={parentClassName} error={error}>
        <input
          {...attr}
          ref={ref}
          type={type}
          name={name}
          className={classes(
            "px-5 py-3 placeholder:text-[#9D9D9D] placeholder:text-[15px] rounded-[20px] h-10",
            className
          )}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
        />
      </ErrorWrapper>
    );
  }
);
