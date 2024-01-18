import { Switch } from "components/forms";
import { FC } from "react";

interface INotificationProp {
  title?: string;
}

const items: INotificationProp[] = [
  { title: "Commande livrée" },
  { title: "Commande livrée" },
  { title: "Commande livrée" },
  { title: "Commande livrée" },
];

export const EditNotifications: FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-[1.775rem]">Notifications</p>
      <div className="flex flex-col gap-5">
        {items.map((item, i) => (
          <Box key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

const Box: FC<INotificationProp> = ({ title }) => {
  return (
    <div className="flex items-center justify-between gap-2 w-[min(100%,_340px)]">
      <span>{title}</span>
      <Switch />
    </div>
  );
};
