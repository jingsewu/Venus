// import { toast } from "amis-ui"
// import { AxiosResponse } from "axios";

/**
 * 请求响应通用处理
 * ops.toast
 *      Boolean 是否提示 Toast https://vant-contrib.gitee.io/vant/v2/#/zh-CN/toast
 * ops.toastType
 *      String Toast类型 https://vant-contrib.gitee.io/vant/v2/#/zh-CN/toast
 * ops.toastMsg
 *      String Toast提示内容
 *
 * Example:
    accidentOrder: {
        getList: {
        method: 'post',
        url: `${prefix}/application/pagination`,
        resolve: res=> resolveSuccess(res, { toast: true })
        // 或：resolve:resolveSuccess
        // 或：resolve:true 在src/server/axios.js处理
        },
    }
 */
// interface Res {
//   rescode?: number;
//   msg?: string;
//   data?: any;
// }

export function resolveSuccess(res: any = {}, ops: any = {}) {
  // 响应字段，如果后端不一致上，让后端统一
  const { rescode, msg, data } = res;
  console.log(msg);

  if (rescode === 200) {
    if (ops?.toast) {
      // Toast[ops?.toastType || "success"](ops?.toastMsg || msg)
    }
    if (!data) {
      return data === null ? {} : data;
    }
    if (data.status === 200 && data.data) {
      return data.data;
    }
    return data;
  }
  // Toast.fail(res.msg)
  return res;
}
