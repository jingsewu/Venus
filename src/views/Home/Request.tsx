import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Counter from "./Counter";

import { selectCounter } from "@/store/counter";
import request from "@/api";

export default () => {
  const navigate = useNavigate();

  const [state, setState] = useState("发起请求");

  const { count } = useSelector(selectCounter);

  useEffect(() => {
    console.log("本地请求");
  }, []);

  return (
    <>
      <h3>本地请求</h3>
      <button
        type='button'
        onClick={async () => {
          request
            .getCounterList({})
            .then((res) => {
              console.log(res);
              if (!res) {
                setState("请求失败");
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        {state}
      </button>
    </>
  );
};
