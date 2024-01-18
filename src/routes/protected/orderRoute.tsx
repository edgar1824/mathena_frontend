import { B2b, B2c, Orders } from "pages/other";
import { RouteObject } from "react-router-dom";
import { IRouteHandle } from "types";

export const orderRoute: RouteObject = {
  path: "orders",
  children: [
    {
      index: true,
      element: <Orders />,
      handle: {
        title: "Générer un bon de commande",
        size: "md",
      } as IRouteHandle,
    },
    {
      path: "b2b",
      element: <B2b />,
      handle: {
        title: "Générer un bon de commande BtoB",
        size: "md",
      } as IRouteHandle,
    },
    {
      path: "b2c",
      element: <B2c />,
      handle: {
        title: "Générer un bon de commande BtoC",
        size: "md",
      } as IRouteHandle,
    },
  ],
};
