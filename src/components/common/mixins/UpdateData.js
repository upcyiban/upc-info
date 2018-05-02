/**
 * 这个混入模式太简单不写文档
 * @type {{methods: {updateData: (function(*))}}}
 */

const updateData = {
    methods: {
        updateData(e) {
            this[e.key] = e.value
        }
    }
}
export default updateData
