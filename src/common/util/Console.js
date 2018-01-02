const nativeLog = console.log;
/** @namespace window.localStorage.flag */
const flag = window.localStorage.flag ? window.localStorage.flag === 'yibantest':false;

console.log = function (...arg) {
    if (flag) {
        nativeLog(...arg);
    }
}
String.prototype.reverse = function () {
    return [...this].reverse().join('');
}
