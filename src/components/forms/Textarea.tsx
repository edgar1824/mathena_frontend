import { classes } from "helper";
import {
  ChangeEventHandler,
  LegacyRef,
  TextareaHTMLAttributes,
  forwardRef,
} from "react";
import { ErrorWrapper } from ".";

interface Props {
  className?: string;
  attr?: Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    "type" | "name" | "value"
  >;
  name?: string;
  value?: string | number;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  onBlur?: ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  error?: string;
  height?: number;
}

export const Textarea = forwardRef(
  (
    {
      className,
      name,
      attr,
      value,
      onChange,
      onBlur,
      placeholder,
      error,
      height = 200,
    }: Props,
    ref: LegacyRef<HTMLTextAreaElement>
  ) => {
    return (
      <ErrorWrapper error={error}>
        <textarea
          {...attr}
          ref={ref}
          name={name}
          className={classes(
            "px-5 py-3 min-h-[200px] resize-none placeholder:text-[#9D9D9D] placeholder:text-[15px] rounded-[20px] h-10",
            className
          )}
          style={{
            height: height + "px",
          }}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
        />
      </ErrorWrapper>
    );
  }
);
