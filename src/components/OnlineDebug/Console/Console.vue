<template>
    <div class="Console">
        <div class="text-center">
            <button @click="clearLogMessage">clear</button>
            <button data-key="Log" @click="changeStatus" :class="`open-${showLog}`">log</button>
            <button data-key="Error" @click="changeStatus" :class="`open-${showError}`">error</button>
            <button data-key="Info" @click="changeStatus" :class="`open-${showInfo}`">info</button>
            <button data-key="Warn" @click="changeStatus" :class="`open-${showWarn}`">warn</button>
        </div>
        <table>
            <tr>
                <th>Type</th>
                <th>Message</th>
                <th>Stack</th>
            </tr>
            <tr :class="item.type" v-if="shouldShow(item)" v-for="(item, key) in showMessageList">
                <td  :data-index="key" @click="deleteMessage">×{{item.type}}</td>
                <td>
                    <p v-if="isConsoleStyle(item.args[0])" :style="computeStyle(item.args)">{{item.args[0]}}</p>
                    <message v-if="!isConsoleStyle(item.args[0])" :key="key" :message="arg" v-for="(arg, key) in item.args"></message>
                </td>
                <td>Stack</td>
            </tr>
        </table>
        <button @click="showMore" class="show-more">我还要打十个</button>

    </div>
</template>

<script>
    import Message from './Message.vue'
    import consoleListen from '../../registerConsoleListen'
    export default {
        name: 'Console',
        data () {
            return {
                consoleListen: consoleListen,
                logMessage: [],
                showMessageList: [],
                showWarn: false,
                showLog: true,
                showError: false,
                showInfo: false
            }
        },
        created () {
            this.logMessage = JSON.parse(window.localStorage.logMessage)
            this.showMessageList = []
            let length = 0
            for (let i = 0; i < this.logMessage.length; i++) {
                let item = this.logMessage[i]
                if (length < 10 && this.shouldShow(item)) {
                    this.showMessageList.push(item)
                    length++
                }
            }
        },
        methods: {
            isUrl (message) {
                return /http|https:\/\/\s*/.test(message)
            },
            shouldShow (message) {
                return this[`show${message.type.substring(0, 1).toUpperCase() + message.type.substring(1)}`]
            },
            isConsoleStyle (message) {
                return /%c\s|\w*%c/.test(message)
            },
            computeStyle (styles) {
                const style = JSON.parse(JSON.stringify(styles))
                return style.splice(1, style.length - 1).join('')
            },
            changeStatus (e) {
                const key = e.target.dataset.key
                this[`show${key}`] = !this[`show${key}`]
            },
            clearLogMessage () {
                window.localStorage.logMessage = '[]'
                this.showMessageList = []
                this.logMessage = []
            },
            showMore () {
                let length = 0
                const index = this.logMessage.indexOf(this.showMessageList[this.showMessageList.length - 1])
                console.log(index, this.showMessageList[this.showMessageList.length - 1])
                for (let i = index + 1; i < this.logMessage.length; i++) {
                    let item = this.logMessage[i]
                    if (length < 10 && this.shouldShow(item)) {
                        this.showMessageList.push(item)
                        length++
                    }
                }
            },
            deleteMessage (e) {
                const flag = confirm('确定要从localStorage里删除')
                if (!flag) {
                    return
                }
                const index = e.target.dataset.index
                const item = this.showMessageList[index]
                console.log(item)
                window.a = this.showMessageList
                window.b = this.logMessage
                window.c = item
                this.logMessage.splice(this.logMessage.indexOf(item), 1)
                this.showMessageList.splice(index, 1)
            }
        },
        components: {
            Message
        }
    }
</script>


<style scoped>
    .Console{
        font-size: 0.5rem;
        line-height: 0.6rem;
        max-width: 800px;
    }
    table {
        width: 100%;
        table-layout: fixed;
        border-collapse: separate;
    }
    table th,td {
        padding: 0.5rem 0.2rem;
        border-bottom: 1px solid #e8e8e8;
        color: rgba(0,0,0,.85);
    }
    table tr td:first-child {
        color: #0084ff;
    }
    table th {
        text-align: left;
    }
    table td {
        word-break: break-all;
    }
    table tr:hover {
        background-color: #E5F6FE;
    }
    table tr th:first-child {
        width: 2rem;
    }
    table tr:first-child {
        background: #fafafa;
    }
    .error {
        color: #FF6341;
    }

    .info {
        color: #645307;
    }

    .log {
        color: black;
    }

    .warn {
        color: #E4C58B;
    }
    button {
        /*border: 1px solid #595959;*/
        border: 1px solid #0084ff;
        height: 1.2rem;
        line-height: 1.2rem;
        font-size: 1rem;
        color: #0084ff;
        background-color: white;
        border-radius: 0.1rem;
        margin: 0.5rem 0.2rem;
        box-sizing: inherit;
    }
    .open-true {
        color: white;
        background: #0084ff;
    }
    .open-true:before {
        content: '✓';
        font-size: 0.8rem;
        color: red;
    }
    .open-false:before {
        content: '×';
        font-size: 0.8rem;
        color: red;
    }

    .show-more {
        margin: 0.5rem auto;
        display: block;
    }
</style>
