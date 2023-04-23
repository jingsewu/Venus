/**
 * @description: 诉求工作台
 */
const prefix = "/api";

export default {
  /**
   * 获取列表
   */
  getCounterList: {
    method: "get",
    url: `${prefix}/list`,
  },
};
