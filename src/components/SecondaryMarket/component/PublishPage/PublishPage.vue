<template>
    <div class="PublishPage box-center second-market">
        <header-section>
            <p> {{ title }}</p>
        </header-section>
        <load-image :loadState="loadState"></load-image>
        <input-box ref="title" type="text" placeholder="标题" @userInput="updateData" dataKey="managerTitle" :value="managerTitle" class="input-box box-center"></input-box>
        <input-box ref="price" type="text" placeholder="价格" @userInput="updateData" dataKey="managerPrice" :value="managerPrice" class="input-box box-center"></input-box>
        <br>
        <text-box ref="message" placeholder="宝贝描述" class="input-box box-center" dataKey="managerMessage" :value="managerMessage" @userInput="updateData"></text-box>
        <div class="file-list input-box box-center">
            <div class="item-container" v-for="(item , index) in fileList">
                <div class="file-item box-center">
                    <div class="add-icon text-center"
                        :data-index="index"
                        @click="deleteImage"
                    >+</div>
                    <img :src="item" alt="图片加载失败">
                    <div class="file-item-footer text-center">{{index===0 ? '主图': '附图'}}</div>
                </div>
            </div>
            <div class="item-container">
                <upload @addFile="addFile" class="upload file-item" v-if="fileList.length <= 5"></upload>
            </div>
        </div>
        <br><br>
        <div class="clear input-box box-center">
            <p style="font-size: 1rem;color: #7F7F7F">分类描述</p>
            <classification ref="classification" :classesList="classesList" dataKey="chooseList" @choose="updateData" :choosed="chooseList.chooseList"></classification>
        </div>
        <br>
        <div class="input-box text-center upload-message box-center" @click="userPublish">
            确认发布
        </div>
    </div>
</template>

<script>
    import HeaderSection from '../../common-component/HeaderSection.vue'
    import InputBox from '../../common-component/InputBox.vue'
    import TextBox from '../../common-component/TextBox.vue'
    import Upload from './Upload.vue'
    import LoadImage from '../../../../common/components/LoadImage.vue'
    import Classification from '../../common-component/Classification.vue'
    import updateData from '../../../../common/mixins/UpdateData'
    import publishGoods from '../../fetch/publishGoods'
    import updateGoods from '../../fetch/updateGoods'
    import loading from '../../../../common/mixins/loading'
    import fetchVq from '../../../../common/mixins/fetchVq'
    import checkExistence from '../../common-component/mixins/checkExistence'
    import {marketFetch, yibanAuth, uploadFile} from '../../config/fetchUtil'
    import getClassification from '../../common-component/mixins/getClassification'

    export default {
        name: 'PublishPage',
        props: ['articleId'],
        mixins: [updateData, loading(marketFetch, this), fetchVq(yibanAuth), checkExistence('publish'), getClassification],
        created () {
            marketFetch.getJsonData('/second/user/exist', {}).then((result) => {
                this.isExist(result)
            })
            if (!this.articleId) {
                this.postMethod = 'publishGoods'
                this.title = '发布'
            } else {
                this.postMethod = 'updateGoods'
                this.title = '编辑'
                this.fetch.getJsonData('/second/user/info').then(
                    (userData) => this.fetch.getJsonData('/secondhand/browse/onearticle', {
                        articleid: this.articleId
                    }).then((item) => {
                        if (item.code === 0) {
                            alert('文章不存在或已删除！')
                            this.$router.push('/second/home-page')
                        } else if (userData.userid !== item.userid) {
                            alert('没有权限编辑！')
                            this.$router.push('/second/home-page')
                        }
                        this.managerId = parseInt(item.id)
                        this.managerTitle = this.$refs.title.inputValue = item.name
                        this.managerPrice = this.$refs.price.inputValue = item.price
                        this.managerMessage = this.$refs.message.inputValue = item.detail
                        this.fileList = JSON.parse(item.imgurl)
                        this.chooseList.chooseValue = JSON.parse(item.kind)
                        this.chooseList.chooseValue.forEach(value => {
                            let index = this.classesList.indexOf(value)
                            this.chooseList.chooseList.push(index)
                        })
                    })
                )
            }
        },
        data () {
            return {
                postMethod: '',
                title: '',
                managerPrice: '',
                managerTitle: '',
                managerMessage: '',
                fileList: [],
                chooseList: {
                    chooseValue: [],
                    chooseList: []
                }
            }
        },
        components: {
            HeaderSection,
            InputBox,
            TextBox,
            Upload,
            Classification,
            LoadImage
        },
        methods: {
            addFile (fileElement) {
                uploadFile.fetchFile(fileElement).then(fileUrl => {
                    console.log(fileUrl)
                    this.fileList.push(fileUrl)
                })
            },
            deleteImage (e) {
                const deleteFileIndex = parseInt(e.target.dataset.index)
                this.fileList = this.fileList.filter((item, index) => {
                    return index !== deleteFileIndex
                })
            },
            userPublish () {
                const price = parseInt(this.managerPrice)
                if (isNaN(price)) {
                    alert('请在价格框中输入数字')
                    return
                } else if (price >= 100000 || price < 0) {
                    alert('别开玩笑啦')
                    return
                }
                this[this.postMethod]().then(json => {
                    this.$router.push({path: '/second/home-page'})
                })
            },
            publishGoods,
            updateGoods
        }
    }
</script>


<style scoped>
    .PublishPage .input-box {
        width: 90%;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    .PublishPage .file-list {
        margin-top: 1.5rem;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
    .PublishPage .item-container {
        width: 33.3%;
    }
    .PublishPage .file-item {
        width: 6rem;
        height: 6rem;
        margin-bottom: 0.75rem;
        position: relative;
    }
    @media (min-width: 520px){
        .PublishPage .file-item {
            width: 6.5rem;
            height: 6.5rem;
            margin-bottom: 1rem;
        }
    }
    @media (min-width: 640px){
        .PublishPage .file-item {
            width: 7rem;
            height: 7rem;
            margin-bottom: 1.25rem;
        }
    }
    .PublishPage .file-item img {
        width: 100%;
        height: 100%;
        min-width: 6rem;
        min-height: 6rem;
    }
    .PublishPage .file-list .upload {
        align-items: flex-start;
    }
    .PublishPage .file-item .add-icon {
        position: absolute;
        left: -0.5rem;
        top: -0.5rem;
        width: 1.4rem;
        height: 1.4rem;
        font-size: 1.2rem;
        border-radius: 50%;
        border: 5px solid white;
        line-height: 1.3rem;
        background-color: #6AC1E7;
        box-shadow: 2px 1px 3px #7f888888;
        transform: rotate(45deg);
        -webkit-user-select: none;
        user-select: none;
    }
    .PublishPage .file-item .file-item-footer {
        position: absolute;
        bottom: 0;
        background-color: #6AC1E7;
        width: 100%;
    }
    .PublishPage .upload-message {
        background: #FF4444;
        color: white;
        padding: 0.4rem 0;
        font-size: 0.8rem;
        height: 40px;
        line-height: 40px;
    }
</style>
