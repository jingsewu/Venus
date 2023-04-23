// import React from 'react'
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import "amis/lib/themes/cxd.css";
import "amis/lib/helper.css";
import "amis/sdk/iconfont.css";
// 或 import 'amis/lib/themes/antd.css';
import "./index.css";

import router from "./router";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <App />
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // 不能用严格模式，amis有兼容问题
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
);
