import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Counter from "./Counter";
import Request from "./Request";

import { selectCounter } from "@/store/counter";
import request from "@/api";

export default () => {
  const navigate = useNavigate();

  const [state, setState] = useState("请求");

  const { count } = useSelector(selectCounter);

  useEffect(() => {
    console.log("本地请求");
  }, []);

  return (
    <div>
      这里是首页
      <button
        type='button'
        onClick={() => {
          navigate(-1);
        }}
      >
        返回上一页
      </button>
      <br />
      <Request />
      <Counter />
      <h2>跨组件显示Counter {count}</h2>
    </div>
  );
};
