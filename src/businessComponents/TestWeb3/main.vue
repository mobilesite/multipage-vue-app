<template>
  <div>test web3</div>
</template>

<script>
  import Web3 from 'web3';

  export default {
    data () {
      return {
        title: 'test web3'
      }
    },
    created () {
      if (typeof window.web3 !== 'undefined') {
        window.web3 = new Web3(web3.currentProvider);
      } else {
//        // 采用http的方式，在1.0中已经不推荐
//        window.web3 = new Web3();
//        const ethNodeUrl = 'http://121.40.175.176:8545'; // TODO: remote URL
//        window.web3.setProvider(new web3.providers.HttpProvider(ethNodeUrl));

//        // 采用ws的方式
        const ethNodeUrl = 'ws://localhost:8545'; // TODO: remote URL
        window.web3 = new Web3(ethNodeUrl);
        console.log(window.web3);
      }

      let maxBlocks = 50;

      web3.eth.getBlockNumber().then(function (resolve, reject) {
        console.log(resolve);
      })

      web3.eth.getAccounts().then(function (resolve, reject) {
        console.log(resolve);
      })

      web3.eth.getBlockNumber().then(console.log);
    },
    methods: {
      initHeader () {

      }
    }
  }
</script>

<style lang="less" scoped>

</style>
