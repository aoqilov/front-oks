import { lazy } from "react";

const Home = lazy(() => import("pages/home"));
const Test = lazy(() => import("pages/teest"));

const authRoutes = [];

const privateRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/test",
    element: <Test />,
  },
];

export { authRoutes, privateRoutes };
