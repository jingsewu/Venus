/* @jsxImportSource @emotion/react */
import React, { lazy } from "react";

import { SmileOutlined } from "@ant-design/icons";

// import Dashboard from "@/views/Dashboard/index.tsx";
import ErrorPage from "@/views/ErrorPage";

const Dashboard = lazy(() => import("@/views/Dashboard/index.tsx"));

export default [
  {
    title: "仪表盘",
    path: "/dashboard",
    icon: <SmileOutlined />,
    // element: <Dashboard />,
    loader: async () => {
      return { data: [] };
    },
    async lazy() {
      return {
        Component: Dashboard,
      }; // import("@/views/Dashboard/index.tsx");
    },
    errorElement: <ErrorPage />,
  },
];
