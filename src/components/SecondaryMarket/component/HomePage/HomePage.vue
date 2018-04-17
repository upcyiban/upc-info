<template>
    <div class="HomePage">
        <div class="header">
            <p>中国石油大学二手市场物品交易社区</p>
        </div>
        <div class="search box-center">
            <label>
                <input type="text"/>
            </label>
            <div class="placeholder absolute-center">
                <p>搜索宝贝</p>
            </div>
        </div>

        <hr>
        <manager-section/>

    </div>
</template>

<script>
    import ManagerSection from './ManagerSection/index.vue'
    export default {
        name: 'HomePage',
        data () {
            return {}
        },
        components: {
            ManagerSection
        }
    };
</script>


<style>
    .HomePage {
        font-size: 1rem;
    }
    .HomePage .header {
        background-color: #189FD9;
        text-align: center;
        height: 40px;
        line-height: 40px;
        color: #FFFFFF;
    }
    .HomePage .search {
        height: 40px;
        width: 95%;
        color: #999898;
        position: relative;
        margin-bottom: 5px;
        margin-top: 5px;
        font-size: 0.75rem;
    }
    .HomePage .search input {
        height: 100%;
        width: 100%;
        background-color: #E3E3E3;
        border: none;
        outline-style: none;
    }
</style>
