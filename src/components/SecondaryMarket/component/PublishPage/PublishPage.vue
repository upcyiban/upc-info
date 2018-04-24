<template>
    <div class="PublishPage">
        <header-section title="发布">
            <p>发布</p>
        </header-section>
        <input-box type="text" placeholder="标题"
                   v-model="managerTitle" class="input-box box-center"></input-box>
        <input-box type="text" placeholder="宝贝"
                   v-model="managerName" class="input-box box-center"></input-box>
        <text-box placeholder="宝贝描述" class="input-box box-center" v-model="managerMessage"></text-box>
        <div class="file-list input-box box-center">
            <div v-for="item in fileList">
                <img :src="item" alt="图片加载失败">
            </div>
            <upload @addFile="addFile"></upload>
        </div>
    </div>
</template>

<script>
    import HeaderSection from '../../common-component/HeaderSection.vue'
    import InputBox from '../../common-component/InputBox.vue'
    import TextBox from '../../common-component/TextBox.vue'
    import Upload from './Upload.vue'
    import {uploadFile} from "../../model/marketFetch"

    export default {
        name: 'PublishPage',
        data () {
            return {
                managerName: '',
                managerTitle: '',
                managerMessage: '',
                fileList: []
            }
        },
        components: {
            HeaderSection,
            InputBox,
            TextBox,
            Upload
        },
        methods: {
            addFile(file) {
                uploadFile.fetchFile(file).then(json => {
                    console.log(json);
                })
            }
        }
    };
</script>


<style>
    .PublishPage {
    }
    .PublishPage .input-box {
        width: 90%;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    .PublishPage .file-item {
        width: 8rem;
        height: 8rem;
    }
</style>
