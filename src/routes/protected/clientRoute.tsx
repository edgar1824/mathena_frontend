import { ClientList, EditClient, SingleClient } from "pages/other";
import { RouteObject } from "react-router-dom";
import { IRouteHandle } from "types";

export const clientRoute: RouteObject = {
  path: "clients",

  children: [
    {
      index: true,
      element: <ClientList />,
      handle: {
        title: "Répertoire clients",
        size: "md",
      } as IRouteHandle,
    },
    {
      path: ":id",
      children: [
        {
          index: true,
          element: <SingleClient />,
          handle: {
            title: "Client",
            size: "md",
          } as IRouteHandle,
        },
        {
          path: "edit",
          element: <EditClient />,
          handle: {
            title: "Modifier les informations client",
            size: "md",
          } as IRouteHandle,
        },
      ],
    },
  ],
};
