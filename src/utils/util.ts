export const isFunction = (val: any) => typeof val === 'function';
export const isArray = Array.isArray;
export const isString = (val: any) => typeof val === 'string';
export const isSymbol = (val: any) => typeof val === 'symbol';
export const isObject = (val: null) => val !== null && typeof val === 'object';
// 随机生成一个guid
export const guid = () => {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`;
};
// 解析地址栏的参数
export const getUrlParam = (name,url) => {
    const u = url ? String(url) : decodeURIComponent(window.location.href);
    const reg = `[\\?&]${String(target)}=([^&#]*)`;
    const params = new RegExp(reg).exec(u);
    const target = params[1] || '';
    
    return target;
}
