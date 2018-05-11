class RegisterConsoleListen {
    static ignorePageList = []

    static ignoreMessage = []

    static addIgnorePageList (...page) {
        RegisterConsoleListen.ignorePageList.push(...page)
    }

    static addIgnoreMessage (...message) {
        RegisterConsoleListen.ignoreMessage.push(...message)
    }
}

export default RegisterConsoleListen
