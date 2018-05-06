<template>
    <div class="PublishPage box-center second-market">
        <header-section>
            <p>发布</p>
        </header-section>
        <load-image :loadState="loadState"></load-image>
        <input-box type="text" placeholder="标题" @userInput="updateData" dataKey="managerTitle"
                   :value="managerTitle" class="input-box box-center"></input-box>
        <input-box type="text" placeholder="价格" @userInput="updateData" dataKey="managerPrice"
                   :value="managerPrice" class="input-box box-center"></input-box>
        <br>
        <text-box placeholder="宝贝描述" class="input-box box-center" dataKey="managerMessage"
                  :value="managerMessage" @userInput="updateData"></text-box>
        <div class="file-list input-box box-center">
            <div v-for="(item , index) in fileList" class="file-item">
                <div class="add-icon text-center"
                     :data-index="index"
                     @click="deleteImage"
                >+</div>
                <img :src="item" alt="图片加载失败">
                <div class="file-item-footer text-center">{{index===0 ? '主图': '附图'}}</div>
            </div>
            <upload @addFile="addFile" class="upload file-item"></upload>
        </div>
        <br><br>
        <div class="clear input-box box-center">
            <p style="font-size: 1rem;color: #7F7F7F">分类描述</p>
            <classification :classesList="classesList" dataKey="chooseList" @choose="updateData" :choosed="chooseList.chooseList"></classification>
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
    import loading from '../../../../common/mixins/loading'
    import fetchVq from '../../../../common/mixins/fetchVq'
    import {marketFetch, yibanAuth , uploadFile} from '../../config/fetchUtil'
    import getClassification from '../../common-component/mixins/getClassification'

    export default {
        name: 'PublishPage',
        mixins: [updateData , loading(marketFetch , this) , fetchVq(yibanAuth) , getClassification],
        data () {
            return {
                title: '发布',
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
            addFile(fileElement) {
                uploadFile.fetchFile(fileElement).then(fileUrl => {
                    console.log(fileUrl);
                    this.fileList.push(fileUrl)
                })
            },
            deleteImage(e) {
                const deleteFileIndex = parseInt(e.target.dataset.index)
                this.fileList = this.fileList.filter( (item , index) => {
                    return index !== deleteFileIndex
                })
            },
            userPublish() {
                const price = parseInt(this.managerPrice)
                if (isNaN(price)) {
                    alert('请在价格框中输入数字')
                    return
                }
                this.publishGoods().then(json => {
                    this.$router.push({path: '/second/home-page'})
                })
            },
            publishGoods,
        }
    };
</script>


<style scoped>
    .PublishPage {
    }
    .PublishPage .input-box {
        width: 90%;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    .PublishPage .file-list {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .PublishPage .file-item {
        width: 6rem;
        height: 6rem;
        position: relative;
    }
    .PublishPage .file-item img {
        width: 100%;
        height: 100%;
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
        transform: rotate(45deg);
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
