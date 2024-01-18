import { Bills } from "pages/other";
import { RouteObject } from "react-router-dom";
import { IRouteHandle } from "types";

export const billRoute: RouteObject = {
  path: "bills",
  element: <Bills />,
  handle: {
    title: "Factures",
    size: "md",
  } as IRouteHandle,
};
