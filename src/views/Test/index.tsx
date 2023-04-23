import { useNavigate } from "react-router-dom";

import renderAmis from "@/render.ts";

import basic from "./basic.json";
import ajax from "./ajax.json";
import form from "./form.json";
import table from "./table.json";
import charts from "./charts.json";

const options = [
  {
    label: "基础使用",
    value: "basic",
  },
  {
    label: "数据请求",
    value: "ajax",
  },
  {
    label: "基础表单",
    value: "form",
  },
  {
    label: "表格",
    value: "table",
  },
  {
    label: "图表",
    value: "charts",
  },
  {
    label: "更多...",
    value: "more",
  },
];

const Test = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        type='button'
        onClick={() => {
          navigate(-1);
        }}
      >
        返回上一页
      </button>
      <br />
      {renderAmis({
        type: "page",

        body: [
          {
            name: "radios",
            type: "radios",
            selectFirst: true,
            onEvent: {
              change: {
                // 监听点击事件
                actions: [
                  // 执行的动作列表
                  {
                    actionType: "change", // 执行toast提示动作
                    // args: {
                    //   // 动作参数
                    //   msgType: "info",
                    //   msg: "派发点击事件",
                    // },
                  },
                ],
              },
            },
            options,
          },
          // {
          //   title: "当前展示 ${radios}",
          // },
          basic,
          form,
          table,
          charts,
          ajax,

          {
            type: "link",
            visibleOn: "${radios == 'more'}",
            href: "https://baidu.github.io/amis/examples/index",
            body: "点击查看更多",
            className: "v-middle",
          },
        ],
      })}
    </>
  );
};

export default Test;
