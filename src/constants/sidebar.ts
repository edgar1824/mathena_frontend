import nav_items_icon from "assets/nav_items.svg";
import nav_delivery_icon from "assets/nav_delivery.svg";
import nav_back_icon from "assets/nav_back.svg";
import nav_profile_icon from "assets/nav_profile.svg";
import nav_orders_icon from "assets/nav_orders.svg";
import nav_analitics_icon from "assets/nav_analitics.svg";
import nav_payment_icon from "assets/nav_payment.svg";
import nav_factures_icon from "assets/nav_factures.svg";
import nav_profile_mine_icon from "assets/nav_profile_mine.svg";
import nav_shield_icon from "assets/nav_shield.svg";
import nav_notification_icon from "assets/nav_notification.svg";

interface INavItems {
  title: string;
  img: string;
  to: string;
  className?: string;
  children?: { title: string; img: string; to: string; className?: string }[];
}

export const navigationItems: {
  protected: INavItems[];
  auth: INavItems[];
} = {
  protected: [
    {
      title: "Tableau de bord",
      img: nav_items_icon,
      to: "/",
      className: "",
      children: [
        {
          title: "Livraisons",
          img: nav_delivery_icon,
          to: "/deliveries",
          className: "!w-5 !h-5",
        },
        { title: "Retours", img: nav_back_icon, to: "/returns" },
        { title: "Clients", img: nav_profile_icon, to: "/clients" },
      ],
    },
    { title: "Bons de commande", img: nav_orders_icon, to: "/orders" },
    { title: "Analyse", img: nav_analitics_icon, to: "/analitics" },
    { title: "Règlement", img: nav_payment_icon, to: "/regulations" },
    { title: "Factures", img: nav_factures_icon, to: "/bills" },
    {
      title: "Mon compte",
      img: nav_profile_icon,
      to: "",

      children: [
        {
          title: "Profil",
          img: nav_profile_mine_icon,
          to: "/profile",
          className: "w-5 h-5 translate-x-[1px]",
        },
        {
          title: "Sécurité",
          img: nav_shield_icon,
          to: "/profile/edit/credentials",
        },
        {
          title: "Notifications",
          img: nav_notification_icon,
          to: "/profile/edit/notifications",
        },
      ],
    },
  ],
  auth: [
    {
      img: nav_profile_icon,
      title: "Se connecter",
      to: "/auth/login",
    },
  ],
};
