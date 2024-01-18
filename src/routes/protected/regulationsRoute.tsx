import { Regulations } from "pages/other";
import { RouteObject } from "react-router-dom";
import { IRouteHandle } from "types";

export const regulationsRoute: RouteObject = {
  path: "regulations",
  element: <Regulations />,
  handle: {
    title: "Règlement",
    size: "md",
  } as IRouteHandle,
};
