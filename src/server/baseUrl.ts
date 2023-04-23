// 是否生产
const isProd = import.meta.env.VITE_APP_MODE === "production"

const baseURL = ""
const apiPrefix = "/api"

export {
  baseURL, apiPrefix, isProd,
}
