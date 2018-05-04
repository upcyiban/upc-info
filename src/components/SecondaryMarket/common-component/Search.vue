<template>
    <div class="Search box-center" @click.stop="focus">
        <div class="label">
            <input type="text" v-model="value" placeholder="搜索宝贝"/>
            <span v-if="isFocus" @click.stop="search">搜索</span>
        </div>
        <div class="classification" v-if="isFocus">
            <classification :classesList="classesList" dataKey="chooseList" @choose="updateData"
                            :choosed="chooseList.chooseList"></classification>
        </div>
    </div>
</template>

<script>
    import Classification from '../common-component/Classification.vue'
    import updateData from '../../../common/mixins/UpdateData'
    import getClassification from './mixins/getClassification'
    import {marketFetch} from '../config/fetchUtil'
    import loading from '../../../common/mixins/loading'

    export default {
        name: 'Search',
        props: [],
        mixins: [updateData, getClassification, loading(marketFetch)],
        data () {
            return {
                value: '',
                chooseList: {
                    chooseValue: [],
                    chooseList: []
                },
                isFocus: false
            }
        },
        watch: {
            chooseList () {
                this.value = ''
                this.isFocus = true
            }
        },
        methods: {
            focus () {
                this.isFocus = true
            },
            search () {
                this.isFocus = false
                this.$emit('fetchSearch', {
                    name: this.value,
                    choose: this.chooseList.chooseValue
                })
            }
        },
        components: {
            Classification
        }
    }
</script>


<style scoped>
    .Search {
        width: 95%;
        color: #999898;
        position: relative;
        margin-bottom: 20px;
        margin-top: 20px;
        font-size: 0.75rem;
    }

    .Search input {
        font-size: 0.75rem;
    }

    .Search input {
        height: 100%;
        width: 100%;
        background-color: #E3E3E3;
        border: none;
        border-radius: 10px;
        outline-style: none;
    }

    .Search .label {
        height: 40px;
        line-height: 40px;
        display: flex;
        flex-wrap: nowrap;
    }

    .Search .label span {
        width: 10%;
        text-align: right;
    }

    .Search input::-webkit-input-placeholder { /* WebKit, Blink, Edge */
        text-align: center;
    }

    .Search input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        text-align: center;
    }

    .Search input::-moz-placeholder { /* Mozilla Firefox 19+ */
        text-align: center;
    }

    .Search input:-ms-input-placeholder { /* Internet Explorer 10-11 */
        text-align: center;
    }

    .Search .classification {
        z-index: 1000;
        background: white;
    }
</style>
