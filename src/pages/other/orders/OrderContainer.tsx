import { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  title: {
    img: string;
    text: string;
  };
}

export const OrderContainer: FC<Props> = ({ children, title }) => {
  return (
    <div className="px-[3.125rem] rounded-md pt-7 pb-[3.5rem] flex flex-col gap-8 bg-[rgba(255,_255,_255,_0.80)]">
      <div className="flex items-center gap-5">
        <img src={title.img} alt={title.text} />
        <span className="text-[1.8rem] font-medium">{title.text}</span>
      </div>
      {children}
    </div>
  );
};
