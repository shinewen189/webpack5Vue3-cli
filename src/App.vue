<template>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>    <router-view></router-view>
</template>

<script>
    import {Button} from 'vant'

    export default {
        components: {
            vanButton : Button
        },
        name: 'app',
        setup() {
            console.log(23123)
            const testFunction = () => {
                console.log('滚!!!')
            }
            return {
                testFunction
            }

        },
        mounted() {
            this.testFunction()
        }
    }

</script>

<style lang="less" scoped>


    .box {
        width: 100px;
        height: 100px;
        background-color: red;

        span {
            color: aqua;
        }
    }
</style>
