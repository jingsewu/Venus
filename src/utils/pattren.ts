export const isEmail = (s) => {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s);
};

export const isURL = (s) => {
  return /^http[s]?:\/\/.*/.test(s);
};

export const isMobile = (s) => {
  return /^1[0-9]{10}$/.test(s);
};

export const isPhone = (s) => {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s);
};

export const isString = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'String';
};

export const isNumber = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Number';
};

export const isBoolean = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean';
};

export const isFunction = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Function';
};

export const isNull = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Null';
};

export const isUndefined = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined';
};

export const isObj = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Object';
};

export const isObject = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Object';
};

export const isArray = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Array';
};

export const isDate = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Date';
};

export const isRegExp = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'RegExp';
};

export const isError = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Error';
};

export const isSymbol = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Symbol';
};

export const isPromise = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Promise';
};

export const isSet = (o) => {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Set';
};

export const checkPwd = (str) => {
  let Lv = 0;
  if (str.length < 6) {
    return Lv;
  }
  if (/[0-9]/.test(str)) {
    Lv++;
  }
  if (/[a-z]/.test(str)) {
    Lv++;
  }
  if (/[A-Z]/.test(str)) {
    Lv++;
  }
  if (/[.|-|_]/.test(str)) {
    Lv++;
  }
  return Lv;
};

export const isCardID = (sId) => {
  if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
    console.log('你输入的身份证长度或格式错误');
    return false;
  }
  // 身份证城市
  let aCity = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    91: '国外'
  };
  if (!aCity[parseInt(sId.substr(0, 2), 8)]) {
    console.log('你的身份证地区非法');
    return false;
  }

  // 出生日期验证
  let sBirthday = (sId.substr(6, 4) + '-' + Number(sId.substr(10, 2)) + '-' + Number(sId.substr(12, 2))).replace(
    /-/g,
    '/'
  );
  let d = new Date(sBirthday);
  if (sBirthday !== d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate()) {
    console.log('身份证上的出生日期非法');
    return false;
  }

  // 身份证号码校验
  let sum = 0;
  let weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
  let codes = '10X98765432';
  for (let i = 0; i < sId.length - 1; i++) {
    sum += sId[i] * weights[i];
  }
  let last = codes[sum % 11]; // 计算出来的最后一位身份证号码
  if (sId[sId.length - 1] !== last) {
    console.log('你输入的身份证号非法');
    return false;
  }

  return true;
};

// 非特殊字符
export const specialTextPattern = /^[\u4E00-\u9FA5A-Za-z0-9]+$/;
export const isSpecialText = (str) => !specialTextPattern.test(str);

// 年龄
export const agePattern = /^([1-9]|[0-9]{2}|100)$/;
export const isAge = (str) => !/^([1-9]|[0-9]{2}|100)$/.test(str);

// 数字/英文
export const numEnTextPattern = /^[0-9a-zA-Z]+$/;
export const isNumEnText = (str) => !/^[0-9a-zA-Z]+$/.test(str);

// 数字+小数点
export const numPotTextPattern = /^(\d|\.)+(\.\d+)?$/;
export const isNumPotText = (str) => !/^(\d|\.)+(\.\d+)?$/.test(str);

// 数字+2 位小数点
export const pot2NumPattern = /^(\d+)(.\d{0,2})?$/;
export const isPot2Num = (str) => !/^(\d+)(.\d{0,2})?$/.test(str);

// 数字+2 位小数点
export const pot3NumPattern = /^(\d+)(.\d{0,3})?$/;
export const isPot3Num = (str) => !/^(\d+)(.\d{0,3})?$/.test(str);

// 非 0 数字
export const numPattern = /^\d{1,}$/;

// 非负整数
export const natureNumPattern = /^\d+$/;

// 正整数
export const PositiveIntPattern = /^[1-9]\d*$/

// 英文
export const enPattern = /^[a-zA-Z]+$/;
export const isEnglish = (str) => !/^[a-zA-Z]+$/.test(str);

// Email
export const emailPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// 网址
export const websitePattern = /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/;

// 手机号码
export const mobilePattern = /^1[0-9]{10}$/;

// 手机号码+座机号码
export const mobileLandlinePattern = /^(((\d{3,4}-)?[0-9]{7,8})|(1(3|4|5|6|7|8|9)\d{9}))$/;

// 只能输入由数字和26个英文字母或者下划线组成的字符串：^/w+$
export const enNumPattern = /^\w+$/
