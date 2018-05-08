import ConsoleListen from '../common/util/ConsoleListen'
const consoleListen = new ConsoleListen()

const eventListen = (nativeConsole, type, ...args) => {
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
