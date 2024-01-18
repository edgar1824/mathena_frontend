import { Login } from "pages/auth";
import { RouteObject } from "react-router-dom";
import { IRouteHandle } from "types";

export const authRoute: RouteObject = {
  path: "auth",
  children: [
    {
      path: "login",
      element: <Login />,
      handle: {
        title: "Se connecter",
        size: "md",
      } as IRouteHandle,
    },
  ],
};
