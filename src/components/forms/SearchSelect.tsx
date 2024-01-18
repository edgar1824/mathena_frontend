import search_icon from "assets/search-icon.svg";
import { classes } from "helper";
import { FC, useEffect, useState } from "react";
import ReactSelect, { Options } from "react-select";

interface IOption {
  value: string | number;
  label: string;
}

interface SearchSelectProps {
  containerClassName?: string;
  className?: string;
  options?: Options<IOption>;
  placeholder?: string;
  onChange?: (e: IOption) => void;
  onSubmit?: (value: string) => void;
  iconClassName?: string;
  value?: string;
}

export const SearchSelect: FC<SearchSelectProps> = ({
  className,
  containerClassName,
  options,
  placeholder,
  onSubmit,
  iconClassName,
  value: v,
}) => {
  const [value, setValue] = useState<string>(v || null!);

  useEffect(() => {
    setValue(v!);
  }, [v]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.(value);
      }}
      className={classes("flex relative rounded-[20px] w-[340px]", className)}
    >
      <ReactSelect
        onInputChange={(val) => {
          setValue(val);
        }}
        classNames={{
          container: () => classes(containerClassName, "w-full flex pr-1"),
          control: () =>
            "flex itms-center !w-full font-work placeholder:text-[15px] !shadow-none !rounded-[20px] !border-none h-10",
          valueContainer: () => "!px-0",
          placeholder: () => "!text-[#9D9D9D] pl-10",
          singleValue: () => "!text-[#9D9D9D]",
          indicatorSeparator: () => "hidden",
          dropdownIndicator: () => "!text-[#9D9D9D] hover:!text-[#9D9D9D]",
          input: () => "max-w-[280px] pl-10",
        }}
        placeholder={placeholder}
        options={options}
      />
      <button
        className={classes(
          "cursor-pointer absolute top-1/2 -translate-y-1/2 left-4",
          iconClassName
        )}
        type="submit"
      >
        <img src={search_icon} alt="search-icon" />
      </button>
    </form>
  );
};
