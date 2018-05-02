const userInput = {
    mounted() {
        this._props.value && (this.inputValue = this._props.value)
    },
    methods: {
        input(e) {
            this.$emit('userInput' , {
                /**
                 * @namespace this._props.dataKey
                 */
                key: this._props.dataKey,
                value: e.target.value
            })
        }
    }
}
export default userInput
