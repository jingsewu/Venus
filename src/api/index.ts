import HttpRequest from "@/server/request";
/**
 * 通过执行require.context函数获取一个特定的上下文,主要用来实现自动化导入模块
 */
const context: any = import.meta.glob("@/api/*.ts", { eager: true });

// 统一合并读取所有api 文件然后打成一个对象
const commonSet = {};
Object.keys(context).forEach((ctx) => {
  Object.assign(commonSet, context[ctx].default);
});

// commonSet 接口文件集合 生成需要执行的接口方法
export default new Proxy(commonSet, {
  /**
   * 获取具体命名空间下是具体api
   * @param allApis 所有 的命名空间api
   * @param namespace 名称
   * @return {(function(...[*]): AxiosPromise<any>)|*}
   */
  get(target, key) {
    return (...args) => {
      // 返回的promise
      return HttpRequest.request(target[key], args[0]);
    };
  },
});
