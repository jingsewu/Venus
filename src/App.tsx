import { NavLink } from "react-router-dom";

import { css } from "@emotion/react";

import { Spin } from "antd";
// import ErrorPage from "./views/ErrorPage";
import Home from "./views/Home/index";
// import Test from "./views/Test";

import "./App.css";
import { Suspense } from "react";

const Loading = () => (
  <div
    css={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
    className={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Spin />
  </div>
);

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Home />
    </Suspense>
  );
}

export default App;
