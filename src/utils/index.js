// 获取本地 local 数据
export function localGet(key) {
  const value = window.localStorage.getItem(key);
  try {
    return JSON.parse(window.localStorage.getItem(key));
  } catch (err) {
    return value;
  }
}

// 设置本地 local 数据
export function localSet(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

// 清楚本地 local 数据
export function localRemove(key) {
  window.localStorage.removeItem(key);
}

// 声明路由和对应键值对
export const pathMap = {
  index: "Dashboard",
  login: "登录",
  add: "添加商品",
  swiper: "轮播图配置"
};

// 单张图片上传
export const uploadImgServer = 'http://backend-api-02.newbee.ltd/manage-api/v1/upload/file'