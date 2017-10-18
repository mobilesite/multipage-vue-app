<template>
  <div id="page" class="page help">
    <TestWeb3></TestWeb3>
  </div>
</template>

<script>
  import TestWeb3 from '@/businessComponents/TestWeb3/main.vue';

  export default {
    name: 'Page',
    components: {
      TestWeb3
    }
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
  .link {
    display: block;
    padding: 5px;
    align-items: center;
    justify-content: center;
  }
</style>
