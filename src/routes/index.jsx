import { lazy } from "react";

const Home = lazy(() => import("pages/home"));

const authRoutes = [];

const privateRoutes = [
  {
    path: "/",
    element: <Home />,
  },
];

export { authRoutes, privateRoutes };
