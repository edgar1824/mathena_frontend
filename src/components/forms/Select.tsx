import { classes } from "helper";
import { FC } from "react";
import ReactSelect, { Options } from "react-select";
import { ErrorWrapper } from ".";

interface IOption {
  value: string | number;
  label: string;
}

interface Props {
  containerClassName?: string;
  className?: string;
  parentClassName?: string;
  options?: Options<IOption>;
  placeholder?: string;
  onChange?: (e: IOption) => void;
  error?: string;
}

export const Select: FC<Props> = ({
  className,
  containerClassName,
  options,
  placeholder,
  onChange,
  error,
  parentClassName,
}) => {
  return (
    <ErrorWrapper className={parentClassName} error={error}>
      <ReactSelect
        onChange={(v) => onChange?.(v as IOption)}
        classNames={{
          container: () => containerClassName + "",
          control: () =>
            classes(
              "flex itms-center pl-5 pr-1 font-work placeholder:text-[15px] !shadow-none !border-none !rounded-[20px] h-10",
              className
            ),
          valueContainer: () => "!px-0",
          placeholder: () => "!text-[#9D9D9D]",
          singleValue: () => "!text-[#9D9D9D]",
          indicatorSeparator: () => "hidden",
          dropdownIndicator: () => "!text-[#9D9D9D] hover:!text-[#9D9D9D]",
        }}
        placeholder={placeholder}
        options={options}
      />
    </ErrorWrapper>
  );
};
