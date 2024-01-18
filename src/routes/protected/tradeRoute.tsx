import { RouteObject } from "react-router-dom";
import { Trade } from "pages/other";
import { IRouteHandle } from "types";

export const tradeRoute: RouteObject = {
  index: true,
  element: <Trade />,
  handle: {
    title: "Titre du commerce",
    size: "lg",
  } as IRouteHandle,
};
