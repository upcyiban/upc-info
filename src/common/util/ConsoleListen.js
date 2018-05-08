class ConsoleListen {
    ingorePageList
    nativeConsole = {
        log: console.log,
        info: console.info,
        warn: console.warn,
        error: console.error
    }
    beforeListen = []
    afterListen = []

    constructor () {
        const key = ['log', 'error', 'info', 'warn']
        key.forEach(type => {
            console[type] = (...args) => {
                this.runBeforeListen(this.nativeConsole, type, ...args)
                this.nativeConsole[type](...args)
                this.runAfterListen(this.nativeConsole, type, ...args)
            }
        })
    }

    runBeforeListen (...arg) {
        this.beforeListen.forEach(item => {
            item(...arg)
        })
    }

    runAfterListen (...arg) {
        this.afterListen.forEach(item => {
            item(...arg)
        })
    }

    addConsoleListen (type, event) {
        if (type.toUpperCase() === 'BEFORE') {
            this.beforeListen.push(event)
        } else {
            this.afterListen.push(event)
        }
    }

    removeConsoleListen (type, event) {
        if (type.toUpperCase() === 'BEFORE') {
            const index = this.beforeListen.indexOf(event)
            if (index !== -1) {
                this.beforeListen.splice(index, 1)
                return true
            } else {
                return false
            }
        } else {
            const index = this.afterListen.indexOf(event)
            if (index !== -1) {
                this.afterListen.splice(index, 1)
                return true
            } else {
                return false
            }
        }
    }
}

export default ConsoleListen
