import { FC } from "react";
import { IPack } from "types";
import { PackBox } from "./PackBox";

const fakePackItems1: IPack[] = [
  {
    isRecommended: true,
    color: "light-green",
    currency: "€",
    price: 50,
    type: "sm",
    actives: [
      "10€ de livraison offert",
      "Accès à la plateforme",
      "Adapté aux petits colis",
    ],
  },
  {
    color: "green",
    currency: "€",
    price: 150,
    type: "md",
    actives: [
      "15€ de livraison offert",
      "Accès standard 5j/7",
      "Adapté aux colis moyens",
    ],
  },
  {
    color: "yellow",
    currency: "€",
    price: 300,
    type: "lg",
    actives: [
      "20€ de livraison offert",
      "Accès standard 5j/7",
      "Adapté aux gros colis",
    ],
  },
];
const fakePackItems2: IPack[] = [
  {
    color: "light-green",
    currency: "€",
    price: 500,
    type: "sm",
    actives: [
      "25€ de livraison offert",
      "Accès standard 5j/7",
      "Adapté aux gros colis",
    ],
  },
  {
    color: "green",
    currency: "€",
    price: 1000,
    type: "md",
    actives: [
      "50€ de livraison offert",
      "Accès standard 5j/7",
      "Adapté aux gros colis",
    ],
  },
  {
    color: "yellow",
    currency: "€",
    price: 1500,
    type: "lg",
    actives: [
      "75€ de livraison offert",
      "Accès standard 5j/7",
      "Adapté aux gros colis",
    ],
  },
];

export const Packs: FC = () => {
  return (
    <div className="flex flex-col gap-[6.25rem]">
      <div className="flex flex-col gap-14">
        <span className="text-[1.9rem]">Acheter un pack (TPE)</span>
        <div className="grid grid-cols-3 gap-[3.375rem]">
          {fakePackItems1.map((item, i) => (
            <PackBox key={i} {...item} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-14">
        <span className="text-[1.9rem]">Acheter un pack (PME)</span>
        <div className="grid grid-cols-3 gap-[3.375rem]">
          {fakePackItems2.map((item, i) => (
            <PackBox key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
