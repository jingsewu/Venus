// import HttpRequest from "./request";

// src/api目录下存放模块接口请求文件，具体看demo.js
// const apiFiles: any = import.meta.glob("@/api/*.js", { eager: true });
// const flatApis: any = {};
// for (const key in apiFiles) {
//   Object.assign(flatApis, apiFiles[key].default);
// }
// const moduleKeys = Object.keys(flatApis);

const apiFn: any = {};
// moduleKeys.forEach((moduleName) => {
//   const apiKeys = Object.keys(flatApis[moduleName]);
//   apiFn[moduleName] = {};
//   apiKeys.forEach((apiInfo) => {
//     apiFn[moduleName][apiInfo] = (param) => {
//       return HttpRequest.request(flatApis[moduleName][apiInfo], param);
//     };
//   });
// });

export default apiFn;
