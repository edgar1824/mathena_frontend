import { FC } from "react";

interface IBoxProps {
  title: string;
  subtitle: string;
  quantity: number;
}

const items: IBoxProps[] = [
  {
    title: "Ce mois-ci",
    quantity: 10,
    subtitle: "livraisons",
  },
  {
    title: "Livraisons totales",
    quantity: 300,
    subtitle: "livraisons",
  },
];

export const Statistics: FC = () => {
  return (
    <div className="flex flex-col gap-5 flex-[3] h-full">
      <p className="text-[37.9px] font-semibold">Statistiques</p>
      <div className="flex gap-8 w-full flex-[1]">
        {items.map((item, i) => (
          <Box key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

const Box: FC<IBoxProps> = ({ quantity, subtitle, title }) => {
  return (
    <div className="shadow-md rounded-md flex items-center flex-col h-full flex-[1] justify-between py-8 px-7">
      <span className="text-[21.3px]">{title}</span>
      <div className="flex items-center flex-col flex-[1] justify-center">
        <span className="text-[64px] font-semibold text-[var(--green)]">
          {quantity}
        </span>
        <span className="text-[var(--green)] text-[21.3px]">{subtitle}</span>
      </div>
    </div>
  );
};
