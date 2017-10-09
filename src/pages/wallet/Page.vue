<template>
  <div id="page" class="page">
    <!--<img src="./assets/logo.png">-->
    <router-link to="/detail">1111111</router-link>
    <a>1111111</a>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'Page'
  }
</script>

<style lang="less" scoped>
  .page {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
