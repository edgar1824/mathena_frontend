import { Button } from "components/forms";
import { FC } from "react";
import b2b_img from "assets/b2b_image.png";
import b2c_img from "assets/b2c_image.png";

interface IBoxProps {
  title: string;
  desc: string;
  to: string;
  btnText: string;
  image: string;
}

const items: IBoxProps[] = [
  {
    title: "Commandes BtoB",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin, tortor sit amet feugiat faucibus, diam justo viverra nibh, vel rhoncus felis quam ut ligula. Nulla malesuada turpis eros, ut.",
    btnText: "Générer un bon de commande",
    to: "/orders/b2b",
    image: b2b_img,
  },
  {
    title: "Commandes BtoC",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin, tortor sit amet feugiat faucibus, diam justo viverra nibh, vel rhoncus felis quam ut ligula. Nulla malesuada turpis eros, ut.",
    btnText: "Générer un bon de commande",
    to: "/orders/b2c",
    image: b2c_img,
  },
];

export const Orders: FC = () => {
  return (
    <div className="grid grid-cols-2 gap-[3.125rem]">
      {items.map((el, i) => (
        <Box {...el} key={i} />
      ))}
    </div>
  );
};

const Box: FC<IBoxProps> = ({ btnText, desc, image, title, to }) => {
  return (
    <div className="flex items-center flex-col gap-8 shadow-md rounded-md px-12 py-16">
      <img src={image} alt="" />
      <div className="flex items-center flex-col gap-6">
        <span className="text-[1.75rem] font-medium">{title}</span>
        <p className="text-[0.9rem] leading-7 text-center">{desc}</p>
      </div>
      <Button to={to}>{btnText}</Button>
    </div>
  );
};
