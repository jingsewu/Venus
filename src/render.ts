import { render } from "amis";

import fetcher from "./server/fetcher";

/**
 * 渲染函数 render as renderAmis
 * (schema, props, env) => JSX.Element;
 * @params schema https://aisuda.bce.baidu.com/amis/zh-CN/docs/concepts/schema
 * @params props https://aisuda.bce.baidu.com/amis/zh-CN/docs/start/getting-started#props
 * @params env 主要是配置fetcher https://aisuda.bce.baidu.com/amis/zh-CN/docs/start/getting-started#env
 * @returns JSX.Element
 *
 * ================================================
 * 简化render-fetcher
 * render(schema, props, env) // => JSX.Element;
 * 简化为
 * render(schema, props?, env?) // => JSX.Element;
 *
 * 在props或者env传递fetcher或者不传都可以，env优先级更高
 * ================================================
 */
export default (schema: any = {}, props: any = {}, env: any = {}) => {
  //   console.log(schema, props, env);

  const __fetcher: any = {
    ...(env.fetcher ? env.fetcher : props.fetcher ? props.fetcher : {}),
    ...fetcher,
  };

  const __env: any = {
    ...env,
    ...__fetcher,
  };

  return render(schema, props, __env);
};
