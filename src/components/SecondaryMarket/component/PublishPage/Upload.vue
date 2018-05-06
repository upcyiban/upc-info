<template>
    <div class="Upload">
        <input type="file" name="file" @change="upload">
        <div class="add-button absolute-center">
            <div class="add box-center">+</div>
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
            upload(e) {
                alert(e.target.value)
                this.$emit('addFile' , e.target)
            }
        }
    };
</script>


<style scoped>
    .Upload {
        display: inline-block;
        background-color: #e0dfdf;
        position: relative;
    }
    .Upload input {
        opacity: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1000;
    }
    .Upload .add-button {
        width: 50%;
        height: 50%;
        color: #8D8788;
    }
    .Upload .add-button .add {
        width: 70%;
        height: 70%;
        border-radius: 50%;
        border: 6px solid #8D8788;
        font-size: 2.5rem;
        line-height: 1.7rem;
        text-align: center;
    }
    .Upload .add-button p {
        text-align: center;
        font-size: 0.85rem;
    }
</style>
