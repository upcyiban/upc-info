<template>
    <div class="Upload">
        <input type="file" name="file" @change="upload" accept="image/gif, image/png, image/jpg, image/jpeg">
        <div class="add-button absolute-center">
            <div class="add box-center"><p class="absolute-center">+</p></div>
            <p>添加</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Upload',
        data () {
            return {}
        },
        methods: {
            upload (e) {
                this.$emit('addFile', e.target)
            }
        }
    }
</script>


<style scoped>
    .Upload {
        display: inline-block;
        background-color: #e0dfdf;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }
    .Upload input {
        opacity: 0;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        position: absolute;
        z-index: 1000;
    }
    .Upload .add-button {
        width: 50%;
        height: 50%;
        color: #8D8788;
    }
    .Upload .add-button .add {
        border-radius: 50%;
        border: 6px solid #8D8788;
        width: 70%;
        height: 70%;
        position: relative;
    }
    .Upload .add-button .add p {
        vertical-align: middle;
        font: 2.4rem/2.4rem arial;
    }
    .Upload .add-button > p {
        margin-top: 0.25rem;
        text-align: center;
        font-size: 0.85rem;
    }
</style>
