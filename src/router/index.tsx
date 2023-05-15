import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import ErrorPage from "@/views/ErrorPage";
import Home from "@/views/Home";
import Test from "@/views/Test";

import dashboard from "./dashboard.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [...dashboard],
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/test",
    element: <Test />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
