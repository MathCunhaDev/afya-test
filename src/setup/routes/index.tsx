import { createBrowserRouter } from "react-router-dom";
import * as Pages from "~pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Pages.Payment />,
  },
  {
    path: "/summary",
    element: <Pages.Summary />,
  },
]);
