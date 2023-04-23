import errorCodes from "./status";

const JS_ERROR = "JS Error";
const REQ_ERROR = "Request Error";
const errorMsg = (msg: any) => console.error(msg);

// 请求异常处理--HTTP[s]状态码
export const reqErrHandler = (error: any = { response: {} }) => {
  console.error(error);
  const { data } = error.response;
  const errItem = errorCodes.find((err) => err.code === error.response.status);
  if (error.response.status) {
    errorMsg(data?.message || errItem?.msg || REQ_ERROR);
  } else {
    errorMsg(error.message || REQ_ERROR);
  }
};

// 响应异常处理
export const resErrHandler = (res: any = { data: {} }) => {
  const { data = {} } = res;

  // 兼容后端不规范返回错误码字段问题：code,status,rescode
  const { code, rescode, msg: __msg, result } = data || {};
  const errItem: any = errorCodes.find(
    (err) =>
      err.code === rescode || err.code === code || err.code === data.status
  );

  if (errItem || (__msg && result === "fail")) {
    console.error(data);
    errorMsg(__msg || errItem.msg);
  }
};

export const globalErrHandler = () => {
  function handler(eve) {
    errorMsg(`JS ${eve.reason || eve.message || JS_ERROR}`);
    eve.preventDefault();
  }

  // Js异常window.onmessageerror
  window.onmessageerror = (eve: any) => {
    console.log("JS报错：", eve);
    handler(eve);
  };
  window.onerror = (eve: any) => {
    console.log("JS报错：", eve);
    handler(eve);
  };

  // window.onerror不能捕获的异常
  window.addEventListener("unhandledrejection", (eve: any) => {
    console.log("Promise报错：", eve);
    handler(eve);
  });
};
