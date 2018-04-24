<template>
    <div class="Upload">
        <input type="file" @change="upload">
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
                console.log(e);
                this.$emit('addFile' , e.target.value)
            }
        }
    };
</script>


<style>
    .Upload {
        width: 8rem;
        height: 8rem;
        display: inline-block;
        background-color: #D7D7D7;
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
        font-size: 3.0rem;
        line-height: 2.3rem;
        text-align: center;
    }
    .Upload .add-button p {
        text-align: center;
        font-size: 0.85rem;
    }
</style>
