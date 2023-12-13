import { createBrowserRouter } from "react-router-dom";
import * as Pages from "~pages";

export const routes = createBrowserRouter([
  {
    path: "/checkout/payment",
    element: <Pages.Payment />,
  },
  {
    path: "/checkout/summary",
    element: <Pages.Summary />,
  },
]);
