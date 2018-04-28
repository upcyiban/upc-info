const nativeLog = console.log
const nativeError = console.error
const nativeWarn = console.warn
/** @namespace window.localStorage.logMessage */
const logMessage = window.localStorage.logMessage ? window.localStorage.logMessage === 'yibantest' : false
/** @namespace window.localStorage.logStack */

const logStack = window.localStorage.logStack ? window.localStorage.logStack === 'true' : false
console.log = function (...arg) {
    if (logStack) {
        nativeLog(new Error().stack)
    }
    if (logMessage) {
        nativeLog(...arg)
    }
    if (arg[0].tagName) {
        nativeLog(new Error())
    }
}

console.error = function (...arg) {
    if (logStack) {
        nativeLog(new Error().stack)
    }
    if (logMessage) {
        nativeError(...arg)
    }
}

console.warn = function (...args) {
    if (logStack) {
        nativeLog(new Error().stack)
    }
    if (logMessage) {
        nativeWarn(...args)
    }
}

String.prototype.reverse = function () {
    return [...this].reverse().join('')
}
