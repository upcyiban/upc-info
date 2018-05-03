const commonUrl = 'http://yb.upc.edu.cn:8084/'
/**
 * @namespace window.sessionStorage.vq
 */
const yibanIdKey = 'yb_uid'
const vqKey = 'verify_request'
/**
 * stateKey是获取vq时候的第三个可选参数，本项目中依靠该参数实现准确的项目重定向
 * 易班在返回vq的时候只能返回特定的页面，这不符合我们的需求
 * @type {string}
 */
const stateKey = 'state'



export {commonUrl , yibanIdKey , vqKey , stateKey}
