<template>
  <div class="box">
    <div class="nav">
      <ul>
        <li v-for="item in 8" :key="item">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  mounted() {}
}
</script>

<style lang="scss" scoped>
.box {
  width: 200px;
  height: 200px;
  border: 1px solid #eee;
  background: red;
  color: #ffffff;
  box-sizing: border-box;

  span {
    width: 100px;
    height: 100px;
    display: inline-block;

    &:hover {
      background: #ffffff;
    }
  }

  b {
    width: 100px;
    height: 100px;
    background-color: #fff;
  }
}
</style>
