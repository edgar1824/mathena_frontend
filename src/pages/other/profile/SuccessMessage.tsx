import { FC } from "react";

interface Props {
  title?: string;
}

export const SuccessMessage: FC<Props> = ({ title }) => {
  return (
    <div className="w-fit flex items-center gap-4 py-[0.9375rem] px-[1.875rem] rounded-[62px] bg-[var(--green)]">
      <div className="flex items-center justify-center bg-[#B9E6C9] rounded-full w-[52px] h-[52px]">
        <div className="relative top-[-5%] w-[12px] h-[25px] rotate-45 border-white border-b-[3px] border-r-[3px]" />
      </div>
      <p className="text-[1.33rem] text-white font-medium text-center">
        {title}
      </p>
    </div>
  );
};
