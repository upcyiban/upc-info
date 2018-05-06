<template>
    <div class="Classification">
        <br>
        <ul class="clear">
            <li class="float-left"  v-for="(item , index) in classesList"
                :data-index="index" :style="`${includes(index)}`" @click.stop="choose">
                <span :data-index="index">{{item}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    /**
     * @namespace this._props.choosed
     */
    export default {
        name: 'Classification',
        props: {
            classesList: {
                type: Array,
                default: () => []
            },
            dataKey: {
                type: String
            },
            choosed: {
                type: Array,
                default: () => []
            }
        },
        beforeMount() {
            this.chooseList = this._props.choosed
        },
        data () {
            return {
                chooseList: []
            }
        },
        methods: {
            choose(e) {
                const index = parseInt(e.target.dataset.index)
                const chooseIndex = this.chooseList.indexOf(index)
                if (chooseIndex === -1) {
                    this.chooseList.push(index)
                } else {
                    //删除当前的元素
                    this.chooseList.splice(chooseIndex , 1)
                }
                console.log(this.chooseList)
                const chooseList = this.chooseList.sort()
                console.log(chooseList)
                const chooseValue = chooseList.map((item) => {
                    return this._props.classesList[item]
                })
                this.$emit('choose' , {
                    key: this._props.dataKey,
                    value: {
                        chooseValue,
                        chooseList: this.chooseList
                    }
                })
            },
            includes(index) {
                const flag = this.chooseList.indexOf(index) === -1
                return flag ? "" : "border-color:black;color:black"
            }
        }
    };
</script>


<style scoped>
    .Classification {
        font-size: 0.7rem;
        color: #D7D7D7;
    }
    .Classification li {
        margin: 0.6rem 0.8rem 0.6rem 0;
        border: 1px solid #D7D7D7;
        padding: 0.2rem;
        border-radius: 0.3rem;
        font-family: "Arial Narrow";
        cursor: pointer;
    }
</style>
