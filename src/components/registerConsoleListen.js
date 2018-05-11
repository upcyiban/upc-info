import ConsoleListen from '../common/util/ConsoleListen'
import OnlineDebug from './OnlineDebug/route/index'
import RegisterConsoleListen from '../common/RegisterConsoleListen'
const consoleListen = new ConsoleListen()

RegisterConsoleListen.addIgnorePageList(
    ...OnlineDebug.map(item => {
        return window.location.host + '/#' + item.path
    })
)
RegisterConsoleListen.addIgnoreMessage('%c vue-devtools %c Detected Vue v2.5.16 %c')
RegisterConsoleListen.addIgnoreMessage('You are running Vue in development mode.\nMake sure to turn on production mode when deploying for production.\nSee more tips at https://vuejs.org/guide/deployment.html')
const eventListen = (nativeConsole, type, ...args) => {
    // 在忽略的页面中就不保存log信息
    const ignorePageList = RegisterConsoleListen.ignorePageList
    if (ignorePageList.includes(window.location.host + '/' + window.location.hash)) {
        return
    }
    // 忽略无须保存的log信息
    const ignoreMessage = RegisterConsoleListen.ignoreMessage
    for (let i = 0; i < args.length; i++) {
        let item = args[i]
        if (ignoreMessage.includes(item)) {
            return
        }
    }

    /** @namespace window.localStorage.logMessage */
    let logMessage = window.localStorage.logMessage
    if (logMessage === undefined) {
        logMessage = '[]'
    }
    try {
        logMessage = JSON.parse(logMessage)
    } catch (e) {
        nativeConsole.log(`window.localStorage.logMessage is not Array`)
        logMessage = '[]'
    }
    logMessage.push({
        page: window.location.href,
        type,
        args,
        date: new Date().toLocaleString(),
        stack: new Error().stack
    })
    window.localStorage.logMessage = JSON.stringify(logMessage)
}
consoleListen.addConsoleListen('before', eventListen)
export default consoleListen
