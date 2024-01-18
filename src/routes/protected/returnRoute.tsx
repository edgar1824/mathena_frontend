import { ReturnList } from "pages/other";
import { RouteObject } from "react-router-dom";
import { IRouteHandle } from "types";

export const returnRoute: RouteObject = {
  path: "returns",
  element: <ReturnList />,
  handle: {
    title: "Liste des retours",
    size: "md",
  } as IRouteHandle,
};
