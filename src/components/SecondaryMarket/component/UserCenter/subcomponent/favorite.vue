<template>
    <div>
        <ul>
            <li class="item" v-for="(item,index) in items" @mousedown="listenStart(index,$event)" @mouseup="listenEnd(index,$event)" @touchstart="listenStart(index,$event)" @touchmove="listenMove($event)" @touchend="listenEnd(index,$event)">
                <img class="descimg" :src="item.img">
                <div class="desc">
                    <p class="title">{{ item.name }}</p>
                    <p class="price">￥{{ item.price }}</p>
                    <p class="date">{{ item.date }}</p>
                </div>
                <div class="buttons" @click.stop='deleteFavorite(index)'>
                    <img class="icon" :src="buttons.delete">
                    <p>删除</p>
                </div>
                <confirmbox v-if="item.beforeDelete" @confirm="confirmDelete(index)" @cancel="item.beforeDelete = false"></confirmbox>
            </li>
        </ul>
    </div>
</template>

<script>
    import {marketFetch} from '@/components/SecondaryMarket/config/fetchUtil'
    import confirmBox from './shared/ConfirmBox.vue'
    import util from './shared/util.js'
    import listen from './shared/listen.js'
    import delete_ from '@/components/SecondaryMarket/media/delete.png'

    const getCollection = '/secondhand/collention/usercollection'
    const deleteCollection = '/secondhand/collention/deletecollection'

    export default {
        name: 'favorite',
        components: {
            'confirmbox': confirmBox
        },
        mixins: [listen((self, index, event, delta, distX, distY) => {
            if (delta > 500 && Math.abs(distY) < 25) {
    
            } else if (event.path[1].className !== 'buttons' && delta > 10 && Math.abs(distY) < 25) {
                self.viewArticle(self.items[index].articleid)
            }
        })],
        mounted () {
            marketFetch.getJsonData(getCollection, {}).then((result) => this.updateFavorite(result))
        },
        data () {
            var dict = new Map([['collectionid', 'id'], ['articleid', 'articleId'], ['img', 'articleUserYBHead'], ['name', 'articleName'], ['price', 'articlePrice']])
            return {
                items: [],
                dict: dict,
                buttons: {
                    delete: delete_
                }
            }
        },
        methods: {
            deleteFavorite (index) {
                this.items[index].beforeDelete = true
            },
            confirmDelete (index) {
                marketFetch.postJsonData(deleteCollection, {collectionid: this.items[index].collectionid}).then((result) => {
                    if (result.code === 1 || result.detail === 'don\'t delete again') this.items.splice(index, 1)
                })
            },
            updateFavorite (items) {
                items.forEach((item, index, items) => {
                    let tmp = {}
                    this.dict.forEach((from, to, set) => {
                        if (item.hasOwnProperty(from)) { tmp[to] = item[from] ? item[from] : '' }
                        tmp.beforeDelete = false
                    })
                    tmp['img'] = util.firstImg(item['articleImg'])
                    tmp['date'] = util.computeDate(item['articleDate'])
                    this.items.push(tmp)
                })
            },
            viewArticle (collectionid) {
                this.$router.push(`/second/details/${collectionid}`)
            }
        },
        props: ['userid']
    }
</script>

<style scoped>
    .item .descimg{
        margin: 1rem 0.5rem 1rem 1.25rem;
        float: left;
    }
    .date{
        color: #99989a;
        font-size: 0.75rem;
    }
</style>