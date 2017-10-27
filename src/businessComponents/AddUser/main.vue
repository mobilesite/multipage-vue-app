<template>
    <div class="add-user">
        add user
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        data () {
            return {
                title: '添加用户'
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
    .add-user{
        background-color: #3CC51F;
        height: 500px;
    }
</style>
