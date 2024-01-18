import { RouteObject } from "react-router-dom";
import { tradeRoute } from "./tradeRoute";
import { orderRoute } from "./orderRoute";
import { analiticsRoute } from "./analiticsRoute";
import { profileRoute } from "./profileRoute";
import { returnRoute } from "./returnRoute";
import { deliveryRoute } from "./deliveryRoute";
import { clientRoute } from "./clientRoute";
import { regulationsRoute } from "./regulationsRoute";
import { billRoute } from "./billRoute";
import { Protected } from "components/layouts";

export const protectedRoute: RouteObject = {
  path: "/",
  element: <Protected />,
  children: [
    tradeRoute,
    orderRoute,
    analiticsRoute,
    profileRoute,
    returnRoute,
    deliveryRoute,
    clientRoute,
    regulationsRoute,
    billRoute,
  ],
};
