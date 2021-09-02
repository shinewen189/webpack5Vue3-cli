<template>

    <van-cell-group>
        <van-cell title="单元格" value="内容" />
        <van-cell title="单元格" value="内容" />
    </van-cell-group>

</template>

<script>
    import { vanCell , vanCellGrop } from 'vant';
    export default {
        name: 'home',

    }
</script>

<style lang="scss" scoped>
    .box{
        width: 200px;
        height: 200px;
        background: #000;
        color: #fff;
        span{
            width: 100px;
            height: 100px;
            display: inline-block;
        }
    }
</style>
