<template>
  <div class="hello">
    <h1 v-text="title"></h1>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
    <div v-text="'count计算结果：' + count"></div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    data () {
      return {
        title: '标题'
      }
    },
    computed: mapState({
      count () {
        return this.$store.state.count;
      }
    }),
    methods: {
      mounted () {
         console.log(lib); // eslint-disable-line
      },
      increment () {
        this.fechData();
        this.$store.commit('increment');
      },
      decrement () {
        this.$store.commit('decrement');
      },
      fechData () {
        this.axios.get('//www.douban.com/j/app/radio/channels').then((response) => {
          console.log(response.data);
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
