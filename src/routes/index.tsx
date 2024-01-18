import { createBrowserRouter } from "react-router-dom";
import { Root } from "../components/layouts";
import { protectedRoute } from "./protected";
import { authRoute } from "./auth";

export const router = createBrowserRouter([
  {
    element: <Root />,
    children: [protectedRoute, authRoute],
  },
]);
