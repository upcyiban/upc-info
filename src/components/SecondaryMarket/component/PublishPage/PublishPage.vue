<template>
    <div class="PublishPage box-center">
        <header-section title="发布" :yibanAuth="yibanAuth">
            <p>发布</p>
        </header-section>
        <input-box type="text" placeholder="标题"
                   v-model="managerTitle" class="input-box box-center"></input-box>
        <input-box type="text" placeholder="宝贝"
                   v-model="managerName" class="input-box box-center"></input-box>
        <text-box placeholder="宝贝描述" class="input-box box-center" v-model="managerMessage"></text-box>
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
        <div class="choose clear input-box box-center">
            <span>女装</span>
            <span>男装</span>
            <span>美食</span>
            <span>女装</span>
            <span>男装</span>
            <span>美食</span>
            <span>女装</span>
            <span>男装</span>
            <span>美食</span>
        </div>
    </div>
</template>

<script>
    import HeaderSection from '../../../common/HeaderSection.vue'
    import InputBox from '../../common-component/InputBox.vue'
    import TextBox from '../../common-component/TextBox.vue'
    import Upload from './Upload.vue'
    import {uploadFile} from "../../model/marketFetch"
    import yibanAuth from "../../model/getYibanVq"

    export default {
        name: 'PublishPage',
        data () {
            return {
                managerName: '',
                managerTitle: '',
                managerMessage: '',
                fileList: [],
                yibanAuth: yibanAuth
            }
        },
        components: {
            HeaderSection,
            InputBox,
            TextBox,
            Upload
        },
        methods: {
            addFile(fileElement) {
                uploadFile.fetchFile(fileElement).then(fileUrl => {
                    console.log(fileUrl);
                    this.fileList.push(fileUrl)
                })
            },
            deleteImage(e) {
                console.log(e.target.dataset.index)
                const deleteFileIndex = parseInt(e.target.dataset.index)
                this.fileList = this.fileList.filter( (item , index) => {
                    return index !== deleteFileIndex
                })
            }
        }
    };
</script>


<style>
    .PublishPage {
        max-width: 800px;
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
        margin: 0 0.3rem 0.5rem;
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
    .PublishPage .choose {
    }
    .PublishPage .choose span {
        margin: 0 0.2rem;
    }
</style>
