import { FC, FormEvent, FormHTMLAttributes, InputHTMLAttributes } from "react";
import search_icon from "assets/search-icon.svg";
import { classes } from "helper";

interface Props {
  onSubmit?: (text: string) => void;
  className?: string;
  attr?: {
    form?: Omit<FormHTMLAttributes<HTMLFormElement>, "onSubmit" | "className">;
    input?: Omit<
      InputHTMLAttributes<HTMLInputElement>,
      "placeholder" | "name" | "type"
    >;
  };
  placeholder?: string;
  iconClassName?: string;
  inputClassName?: string;

}

export const SearchInput: FC<Props> = ({
  onSubmit,
  attr,
  className,
  placeholder = "",
  iconClassName,
}) => {
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.target as HTMLFormElement);
    onSubmit?.((fd.get("search") as string) || "");
  };
  return (
    <form
      className={classes("relative", className)}
      {...attr?.form}
      onSubmit={submitHandler}
    >
      <input
        {...attr?.input}
        placeholder={placeholder}
        name="search"
        type="text"
        className={classes(
          attr?.input?.className,
          "bg-white rounded-[8px] pl-9 py-2 pr-2 max-h-9 border-none"
        )}
      />
      <button
        className={classes(
          "cursor-pointer absolute left-2 top-1/2 -translate-y-1/2",
          iconClassName
        )}
        type="submit"
      >
        <img src={search_icon} alt="search-icon" />
      </button>
    </form>
  );
};
