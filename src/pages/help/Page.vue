<template>
  <div id="page" class="page help">
    <h1 class="title">帮助首页</h1>
    <p class="content">这是帮助首页的内容，测试一下</p>

    <!-- 从而把每一个单页组织起来，形成一个多个单页组成的多页应用 -->
    <a class="link" href="//www.test.com/wallet">链接到其它的单页（跳转到本单页之外）</a>

    <nav class="tab-nav">
      <router-link class="tab-nav-item" to="/tab1" tag="li">tab1（当前单页内路由跳转）</router-link>
      <router-link class="tab-nav-item" to="/tab2" tag="li">tab2（当前单页内路由跳转）</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'Page'
  }
</script>

<style lang="less">
  @import '../../styles/common.less';

  .page {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0;
  }
  .title {
    padding: 20px;
    text-align: center;
    font-size: 18px;
  }
  .content {
    padding: 0;
    font-size: 14px;
  }
  .tab-nav{
    display: flex;
    margin-bottom: 20px;
  }
  .tab-nav-item {
    flex: 1;
    padding: 30px;
    list-style: none;
    border: .5px solid #cecece;
    border-radius: 10px;
    margin: 0 10px;
    cursor: pointer;
  }
  .link {
    display: block;
    padding: 40px;
    align-items: center;
    justify-content: center;
  }
  .router-link-active{
    color: red;
  }
</style>
