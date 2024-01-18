import { FC, InputHTMLAttributes, useId } from "react";

interface Props {
  label?: string;
  img?: string;
  input?: InputHTMLAttributes<HTMLInputElement>;
}

export const AuthInput: FC<Props> = ({
  label,
  img,
  input = {
    type: "text",
  },
}) => {
  const id = useId();
  return (
    <div className="flex flex-col gap-5">
      <label className="text-[1.33rem] font-medium" htmlFor={id}>
        {label}
      </label>
      <div className="flex h-[3.125rem] overflow-hidden rounded-[5px] shadow-md">
        <div className="flex items-center justify-center bg-[var(--light-green)] h-full w-[3.375rem]">
          <img
            className="h-[50%] w-[50%] text-white bg-white"
            src={img}
            alt="input-image"
          />
        </div>
        <input
          {...input}
          className="placeholder:text-[#C7C7C7] py-2 px-[1.125rem]"
          id={id}
        />
      </div>
    </div>
  );
};
