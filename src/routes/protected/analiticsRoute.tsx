import { Analitics } from "pages/other";
import { RouteObject } from "react-router-dom";
import { IRouteHandle } from "types";

export const analiticsRoute: RouteObject = {
  path: "analitics",
  element: <Analitics />,
  handle: {
    title: "Analyse des livraisons",
    size: "md",
  } as IRouteHandle,
};
