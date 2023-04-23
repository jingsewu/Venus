import axios from "axios";
import qs from "qs";
// import { toast } from "amis-ui"

import { isFunction, isBoolean } from "../utils/pattren.ts";
import { baseURL, apiPrefix } from "./baseUrl.ts";

// 异常处理
import { reqErrHandler, resErrHandler } from "./errorHandler.ts";
import { resolveSuccess } from "./successHandler.ts";

const setController: any = (er: any) => {
  return er;
};

const HttpRequest: any = {
  // 上一个请求url
  url: "",
  // 请求状态
  signal: false,
  // 请求控制器
  controller: setController(new AbortController()),
  ...axios,
  /**
   * 接口请求基础配置
   * @param params
   * @return {{baseURL: (string|*), data, withCredentials: boolean, params, timeout: number}}
   */
  getInsideConfig(params: any) {
    return {
      baseURL: baseURL + apiPrefix,
      timeout: 50000,
      retry: 3, // 设置全局重试请求次数（最多重试几次请求）
      withCredentials: true,
      data: params,
      params,
      signal: this.controller ? this.controller.signal : null,
    };
  },

  /**
   * 判断当前的请求是否在缓存中
   * 如果是同一个请求就直接返回
   * @param instance
   */
  interceptors(instance: any) {
    /**
     * 每次请求，先置空上一次的控制器。
     * 只有把控制器设置为动态，才可以abort之后继续发起非同名请求。
     */
    if (this.controller) {
      this.controller = null;
    }

    // 请求拦截器
    instance.interceptors.request.use(
      (config: any) => {
        if (config.method === "post") {
          config.params = {};
        }
        // form 请求
        if (
          config.formData ||
          config.headers["Content-Type"] === "application/x-www-form-urlencoded"
        ) {
          config.data = qs.stringify(config.data);
        }
        if (config.loading) {
          // toast.loading({
          //   message: "加载中...",
          //   duration: 0, // 持续展示 toast
          //   forbidClick: true
          // })
        }

        config.headers = {
          ...config.headers,
        };

        // 上次的url与本次url一致，并且已经报错了，取消本次请求
        this.abortSameErrRequest(config);
        return config;
      },
      (error: any) => {
        console.error(error);
        // 手动清除 toast
        // toast.clear()
        Promise.reject(error);
      }
    );
    // 响应拦截器
    instance.interceptors.response.use(
      (res: any) => {
        const { config, data } = res;
        // 错误处理：不阻断res向下流通
        resErrHandler(res);

        // 手动清除 toast
        // toast.clear()
        // 前置处理：resolve => res.data
        if (isFunction(config.resolve) || isBoolean(config.resolve)) {
          if (config.resolve === true) {
            return resolveSuccess(data);
          }
          return config.resolve(data);
        }
        // 接口数据缓存
        return data;
      },
      (error: any) => {
        // 请求失败，把signal置为true
        this.signal = true;

        // 手动清除 toast
        // toast.clear()
        reqErrHandler(error);
        Promise.reject(error);
      }
    );
  },

  // 发起请求
  request(options: any, params: any) {
    const instance = axios.create();
    options = Object.assign(this.getInsideConfig(params), options);
    this.interceptors(instance);
    return instance(options);
  },

  // 取消请求
  abort() {
    this.controller.abort();
  },

  /**
   * 请求失败时，阻断同个请求继续发送，否则重置请求状态及控制器
   * 场景：①多次点击触发请求；②滚动加载；
   */
  abortSameErrRequest(config) {
    // 上次的url与本次url一致，并且已经报错了，取消本次[同名]请求
    if (this.signal && this.url === config.url) {
      this.abort();
    } else {
      // 更新url
      this.url = config.url;
      if (this.signal) {
        // 重置状态
        this.signal = false;
      }
      if (!this.controller) {
        // 重置controller
        this.controller = new AbortController();
      }
    }
  },
};


/**
 * 使用:
 *  HttpRequest.request({
 *    method:"get/post/..",
 *    url:"/api/..",
 *    headers:{...}
 *  },
 *  {
 *    params1:'',
 *    params2:'',
 *    ...
 *  })
 */
export default HttpRequest;
