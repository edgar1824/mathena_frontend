import { DeliveryList, EditDelivery } from "pages/other";
import { RouteObject } from "react-router-dom";
import { IRouteHandle } from "types";

export const deliveryRoute: RouteObject = {
  path: "deliveries",
  children: [
    {
      index: true,
      element: <DeliveryList />,
      handle: {
        title: "Liste des livraisons",
        size: "md",
      } as IRouteHandle,
    },
    {
      path: ":id",
      element: <EditDelivery />,
      handle: {
        title: "Livraison",
        size: "md",
      } as IRouteHandle,
    },
  ],
};
