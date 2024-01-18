import {
  EditCredentials,
  EditInfo,
  EditNotifications,
  Profile,
  ProfileEdit,
} from "pages/other";
import { RouteObject } from "react-router-dom";
import { IRouteHandle } from "types";

export const profileRoute: RouteObject = {
  path: "profile",
  children: [
    {
      index: true,
      element: <Profile />,
      handle: {
        title: "Informations du compte",
        size: "md",
      } as IRouteHandle,
    },
    
    {
      path: "edit",
      element: <ProfileEdit />,
      handle: {
        title: "Paramètres du compte",
        size: "md",
      } as IRouteHandle,
      children: [
        {
          index: true,
          element: <EditInfo />,
        },
        {
          path: "credentials",
          element: <EditCredentials />,
        },
        {
          path: "notifications",
          element: <EditNotifications />,
        },
      ],
    },
  ],
};
